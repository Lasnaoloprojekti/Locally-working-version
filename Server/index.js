require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const {
  UserDatabaseModel,
  CourseDatabaseModel,
  StudentDatabaseModel,
  AttendanceSessionDatabaseModel,
  AttendanceDatabaseModel,
  TopicDatabaseModel,
} = require("./models/collectionSchemas");
const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");
const fetch = require("node-fetch");
const multer = require("multer");
const xlsx = require("xlsx");
const upload = multer({ dest: "uploads/" });
const PDFDocument = require("pdfkit");
const Excel = require("exceljs");
const app = express();
const server = require("http").createServer(app);

const corsOptions = {
  origin: [
    "https://student.northeurope.cloudapp.azure.com",
    "https://teacher.northeurope.cloudapp.azure.com",
  ],
  credentials: true, // if you need to handle cookies
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOptions));

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI);

const io = new Server(server, { cors: corsOptions });

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.emit("students");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

app.get("/getstudents/:courseId", async (req, res) => {
  const { courseId } = req.params;
  try {
    const course = await CourseDatabaseModel.findById(courseId).populate(
      "students"
    );
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    const studentCount = course.students.length;
    res.status(200).json({ studentCount });
  } catch (error) {
    console.error("Error fetching student count:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching student count" });
  }
});

app.post("/uploadstudents", upload.single("studentfile"), async (req, res) => {
  console.log("Upload students request received", req.file);
  const courseId = req.body.courseId;

  try {
    const workbook = xlsx.readFile(req.file.path);
    const sheetNames = workbook.SheetNames;
    const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNames[0]], {
      header: 1,
    });

    const students = sheetData.slice(1).filter((row) => row && row.length > 0);
    let newStudentsAdded = 0;
    let existingStudents = 0;

    const studentPromises = students.map(async (row, index) => {
      const [lastName, firstName, , email, studentNumber] = row;

      if (
        lastName === "Sukunimi" ||
        firstName === "Etunimi" ||
        email === "Email" ||
        studentNumber === "Op.num" ||
        !lastName ||
        !firstName ||
        !email ||
        !studentNumber
      ) {
        console.log(`Skipping row ${index + 1}: Header or empty row detected.`);
        return null;
      }

      let existingStudent = await StudentDatabaseModel.findOne({
        studentNumber,
      });
      if (!existingStudent) {
        existingStudent = new StudentDatabaseModel({
          lastName,
          firstName,
          email,
          studentNumber,
          gdprConsent: false,
          courses: [{ course: courseId }],
        });
        newStudentsAdded++;
        await existingStudent.save();
      } else {
        if (
          !existingStudent.courses.find((c) => c.course.toString() === courseId)
        ) {
          existingStudent.courses.push({ course: courseId });
          existingStudents++;
          await existingStudent.save();
        }
      }

      const course = await CourseDatabaseModel.findById(courseId);
      if (course && !course.students.includes(existingStudent._id)) {
        course.students.push(existingStudent._id);
        await course.save();
      }

      console.log(`Processed student #${index + 1}: ${firstName} ${lastName}`);
    });

    await Promise.allSettled(studentPromises.filter(Boolean));
    const message =
      newStudentsAdded > 0
        ? `${newStudentsAdded} new students added.`
        : "No new students added.";

    // Check if newStudentsAdded is 0, and send a 404 response if true
    if (newStudentsAdded === 0) {
      res.status(404).json({ message: message });
    } else {
      if (existingStudents > 0) {
        message += ` ${existingStudents} students were already enrolled in the course.`;
      }

      res
        .status(200)
        .json({ message: message, newStudentsAdded: newStudentsAdded > 0 });
    }
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).send("Error processing file");
  }
});

// DEPLOYMENT ONLY

/*
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const apiResponse = await fetch("https://streams.metropolia.fi/2.0/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const apiData = await apiResponse.json();

    if (apiData.message === "invalid username or password") {
      return res.status(401).json({ error: "invalid username or password" });
    }

    if (!apiData.staff) {
      return res
        .status(403)
        .json({ error: "Access denied. Only staff can login." });
    }

    let existingUser = await UserDatabaseModel.findOne({ user: apiData.user });

    if (!existingUser) {
      existingUser = new UserDatabaseModel({
        user: apiData.user,
        firstName: apiData.firstname,
        lastName: apiData.lastname,
        email: apiData.email,
        staff: apiData.staff,
        courses: [],
      });
      await existingUser.save();
    }

    const accessToken = jwt.sign(
      { userId: existingUser._id, staff: apiData.staff },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      accessToken,
      userId: existingUser._id.toString(),
      staff: apiData.staff,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});
*/
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const apiResponse = await fetch("https://streams.metropolia.fi/2.0/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const apiData = await apiResponse.json();

    if (apiData.message === "invalid username or password") {
      return res.status(401).json({ error: "invalid username or password" });
    }

    // Temporarily bypass the staff check for testing
    // if (!apiData.staff) {
    //   return res.status(403).json({ error: "Access denied. Only staff can login." });
    // }

    let existingUser = await UserDatabaseModel.findOne({ user: apiData.user });

    if (!existingUser) {
      existingUser = new UserDatabaseModel({
        user: apiData.user,
        firstName: apiData.firstname,
        lastName: apiData.lastname,
        email: apiData.email,
        staff: apiData.staff,
        courses: [],
      });
      await existingUser.save();
    }

    apiData.userId = existingUser._id.toString();

    const accessToken = jwt.sign(
      { userId: existingUser._id, staff: apiData.staff },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      accessToken,
      userId: existingUser._id.toString(),
      staff: apiData.staff,
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

app.get("/verify", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    try {
      // Fetch user details using the userId from the decoded token
      let existingUser = await UserDatabaseModel.findById(decoded.userId);

      const responseData = {
        user: existingUser ? existingUser.toObject() : null,
        staff: decoded.staff,
      };

      res.status(200).json(responseData);
    } catch (error) {
      console.error("Error in /verify:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});

//DEPLOYMENT ONLY
/*
app.get("/verify", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token" });
    }
    try {
      let existingUser = await UserDatabaseModel.findById(decoded.userId);
      if (!existingUser) {
        return res.status(404).json({ error: "User not found" });
      }

      if (!decoded.staff) {
        return res
          .status(403)
          .json({ error: "Access denied. Only staff can access." });
      }

      const responseData = {
        user: existingUser.toObject(),
        staff: decoded.staff,
      };

      res.status(200).json(responseData);
    } catch (error) {
      console.error("Error in /verify:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
});
*/
app.post("/createcourse", async (req, res) => {
  console.log("Create course request received", req.body);

  const { courseName, groupName, topics, startDate, endDate, userId } =
    req.body;

  try {
    const existingCourse = await CourseDatabaseModel.findOne({
      name: courseName,
    });

    if (existingCourse) {
      return res.status(409).json({ error: "Course already exists" });
    }

    const newCourse = new CourseDatabaseModel({
      name: courseName,
      groupName: groupName,
      startDate: startDate,
      endDate: endDate,
      isActive: true,
      topics: topics, // Assuming default type for all topics
      teachers: [userId], // Assuming you want to initialize with an empty array
      students: [], // Assuming you want to initialize with an empty array
    });

    await newCourse.save();
    console.log("New course created:", newCourse);
    res.status(200).json({ message: "Course created successfully" });
  } catch (error) {
    console.error("Error creating course:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the course" });
  }
});

app.post("/students/updategdpr", async (req, res) => {
  const { studentNumber, gdprConsent } = req.body;

  try {
    const updatedStudent = await StudentDatabaseModel.findOneAndUpdate(
      { studentNumber }, // Find by a unique identifier
      { gdprConsent }, // Update the gdprConsent field
      { new: true } // Return the updated document
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "GDPR consent updated successfully" });
  } catch (error) {
    console.error("Error updating GDPR consent:", error);
    res.status(500).json({ message: "Error updating GDPR consent" });
  }
});

app.post("/addstudents", async (req, res) => {
  const { studentsToAdd, courseId } = req.body;

  console.log("Add students request received", studentsToAdd);

  // Start a session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const course = await CourseDatabaseModel.findById(courseId).session(
      session
    );
    if (!course) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).send(`Course not found with ID: ${courseId}`);
    }

    let addedStudents = [];

    for (const studentData of studentsToAdd) {
      const { firstName, lastName, studentNumber } = studentData;

      console.log("Processing student:", firstName, lastName, studentNumber);

      // Check if the student already exists in the database
      let existingStudent = await StudentDatabaseModel.findOne({
        studentNumber,
      }).session(session);

      if (!existingStudent) {
        existingStudent = new StudentDatabaseModel({
          firstName,
          lastName,
          studentNumber,
          gdprConsent: false,
          courses: [{ course: courseId }],
        });

        await existingStudent.save({ session });
        addedStudents.push(existingStudent);
      } else {
        // If the student exists, just add them to the course if not already added
        if (
          !existingStudent.courses.find((c) => c.course.toString() === courseId)
        ) {
          existingStudent.courses.push({ course: courseId });
          await existingStudent.save({ session });
          addedStudents.push(existingStudent);
        }
      }

      // Add the student to the course's students list if not already added
      if (!course.students.includes(existingStudent._id)) {
        course.students.push(existingStudent._id);
      }
    }

    await course.save({ session });
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      message: `${addedStudents.length} student(s) added/updated successfully.`,
      addedStudents,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("An error occurred while adding students:", error);
    res.status(500).send("An error occurred: " + error.message);
  }
});

app.get("/selectactivecourse", async (req, res) => {
  try {
    const userId = req.headers.userid;
    const selectCourse = await CourseDatabaseModel.find({
      teachers: userId,
      isActive: true, // Add this condition to fetch only active courses
    });
    res.status(200).json(selectCourse);
  } catch (error) {
    console.error("Error fetching active courses:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching active courses" });
  }
});

app.get("/allcourses", async (req, res) => {
  try {
    const userId = req.headers.userid;
    const activeCourses = await CourseDatabaseModel.find({
      teachers: userId,
      isActive: true, // Fetch only active courses
    });

    const inactiveCourses = await CourseDatabaseModel.find({
      teachers: userId,
      isActive: false, // Fetch only inactive courses
    });

    const coursesData = {
      active: activeCourses,
      inactive: inactiveCourses,
    };

    res.status(200).json(coursesData);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "An error occurred while fetching courses" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserDatabaseModel.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});

//course delete/students
app.delete("/courses/:id", async (req, res) => {
  const courseId = req.params.id;

  // Start a session for the transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Delete all students associated with the course
    await StudentDatabaseModel.deleteMany({
      "courses.course": courseId,
    }).session(session);

    // Now delete the course itself
    const course = await CourseDatabaseModel.findByIdAndDelete(courseId, {
      session: session,
    });
    if (!course) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).send({ message: "Course not found" });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    res.send({
      message: "Course and associated students deleted successfully",
    });
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();

    console.error("Error deleting course and associated students:", error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.toString() });
  }
});

app.post("/createsession", async (req, res) => {
  const { courseId, topic, date, timeOfDay } = req.body;

  try {
    // Correctly using new to create an instance of ObjectId
    const courseObjectId = new mongoose.Types.ObjectId(courseId);

    const newSession = new AttendanceSessionDatabaseModel({
      course: courseObjectId,
      topic: topic,
      date: date,
      timeOfDay: timeOfDay,
      isOpen: true,
      studentsPresent: [],
    });

    await newSession.save();
    res.status(201).json({ sessionId: newSession._id.toString() });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/unregister", async (req, res) => {
  const { studentNumber, sessionId } = req.body;
  console.log("Unregister request received", req.body);

  try {
    // Find the student's ID based on their student number
    const existingStudent = await StudentDatabaseModel.findOne({
      studentNumber,
    });
    if (!existingStudent) {
      return res.status(404).send("Student not found");
    }

    // Find and delete the specific attendance record
    const result = await AttendanceDatabaseModel.deleteOne({
      student: existingStudent._id,
      session: sessionId,
    });

    if (result.deletedCount === 0) {
      return res.status(404).send("Attendance record not found");
    }

    // Optionally, update the session's studentsPresent array
    const session = await AttendanceSessionDatabaseModel.findById(sessionId);
    if (session) {
      session.studentsPresent = session.studentsPresent.filter(
        (s) => !s.equals(existingStudent._id)
      );
      await session.save();
    }

    // Optionally emit an event for real-time updates
    io.emit("studentRemoved", {
      firstName: existingStudent.firstName,
      lastName: existingStudent.lastName,
      sessionId: sessionId,
    });

    res.status(200).send("Student unregistered successfully");
  } catch (error) {
    console.error("Error during unregistration:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.delete("/deletesession", async (req, res) => {
  const { sessionId } = req.body;

  try {
    // Find the session by its ID and delete it
    const deletedSession =
      await AttendanceSessionDatabaseModel.findByIdAndDelete(sessionId);

    if (!deletedSession) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Emit an event to notify clients that the session has been deleted
    io.emit("sessionDeleted", { sessionId: deletedSession._id });

    res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    console.error("Error deleting session:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the session" });
  }
});

app.post("/registration", async (req, res) => {
  const { studentNumber } = req.body;

  try {
    // Find student based on student number
    const existingStudent = await StudentDatabaseModel.findOne({
      studentNumber,
    });
    if (!existingStudent) {
      return res.status(404).send("Student not found");
    }

    // Iterate through student's courses to find open sessions
    for (let courseEnrollment of existingStudent.courses) {
      const openSessions = await AttendanceSessionDatabaseModel.find({
        course: courseEnrollment.course,
        isOpen: true,
      }).populate("studentsPresent");

      for (let session of openSessions) {
        // Check if student is already registered in the session
        if (
          session.studentsPresent.some((s) => s._id.equals(existingStudent._id))
        ) {
          return res
            .status(400)
            .send("Student already registered in this session");
        }
      }

      // If student is not registered in any open session, register them in the first one
      if (openSessions.length > 0) {
        const sessionToUpdate = openSessions[0]; // Assuming we take the first open session
        sessionToUpdate.studentsPresent.push(existingStudent._id);
        await sessionToUpdate.save();

        io.emit("studentAdded", {
          firstName: existingStudent.firstName,
          lastName: existingStudent.lastName,
        });

        const newAttendance = new AttendanceDatabaseModel({
          session: sessionToUpdate._id,
          student: existingStudent._id,
          course: courseEnrollment.course,
          topic: sessionToUpdate.topic,
          date: sessionToUpdate.date,
          timeOfDay: sessionToUpdate.timeOfDay,
          status: "Present",
          gdprConsent: existingStudent.gdprConsent,
        });

        console.log("newAttendance", newAttendance);

        await newAttendance.save();

        return res.status(200).json({
          message: "Student registered for session",
          sessionId: sessionToUpdate._id,
        });
      }
    }

    // If no open sessions found for any of the student's courses
    return res.status(404).send("No open sessions available for your courses");
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/closesession", async (req, res) => {
  const { sessionId } = req.body;

  try {
    const session = await AttendanceSessionDatabaseModel.findById(sessionId);

    if (!session) {
      return res.status(404).send("Session not found");
    }

    session.isOpen = false;
    await session.save();

    io.emit("sessionClosed", { sessionId: session._id });

    res.status(200).send("Session closed successfully");
  } catch (error) {
    console.error("Error closing session:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/participations/:id", async (req, res) => {
  console.log("Participation request received");

  const courseId = req.params.id;

  try {
    const course = await CourseDatabaseModel.findById(courseId)
      .populate({
        path: "students",
      })
      .exec();

    if (!course) {
      return res.status(404).send("Course not found");
    }

    let participationData = [];

    for (const existingStudent of course.students) {
      let studentParticipation = {
        lastName: existingStudent.lastName,
        firstName: existingStudent.firstName,
        participation: {},
      };

      for (const topic of course.topics) {
        // Count the total number of sessions conducted for this topic
        const totalSessions =
          await AttendanceSessionDatabaseModel.countDocuments({
            course: courseId,
            topic: topic,
          });

        // Count how many sessions this student attended for this topic
        const attendedSessions = await AttendanceDatabaseModel.countDocuments({
          student: existingStudent._id,
          course: courseId,
          topic: topic,
          status: "Present",
        });

        // Calculate participation percentage
        studentParticipation.participation[topic] =
          totalSessions > 0
            ? ((attendedSessions / totalSessions) * 100).toFixed(2) + "%"
            : "na";
      }

      participationData.push(studentParticipation);
    }

    res.json(participationData);
  } catch (error) {
    console.error("Error retrieving participation data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/participations/:studentNumber", async (req, res) => {
  const studentNumber = req.params.studentNumber;

  try {
    const existingStudent = await StudentDatabaseModel.findOne({
      studentNumber,
    }).exec();
    if (!existingStudent) {
      return res.status(404).send("Student not found");
    }

    const courses = existingStudent.courses.map((c) => c.course);

    let participationData = [];

    for (const courseId of courses) {
      const course = await CourseDatabaseModel.findById(courseId)
        .populate("topics")
        .exec();

      if (!course) {
        continue; // Skip if course not found
      }

      let studentParticipation = {
        courseName: course.name,
        participation: {},
      };

      for (const topic of course.topics) {
        const totalSessions =
          await AttendanceSessionDatabaseModel.countDocuments({
            course: courseId,
            topic: topic,
          });

        const attendedSessions = await AttendanceDatabaseModel.countDocuments({
          student: existingStudent._id,
          course: courseId,
          topic: topic,
          status: "Present",
        });

        studentParticipation.participation[topic] =
          totalSessions > 0
            ? ((attendedSessions / totalSessions) * 100).toFixed(2) + "%"
            : "N/A";
      }

      participationData.push(studentParticipation);
    }

    res.json(participationData);
  } catch (error) {
    console.error("Error retrieving participation data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/addtopic", async (req, res) => {
  try {
    const { name } = req.body;

    // Check if topic already exists
    const existingTopic = await TopicDatabaseModel.findOne({ name });
    if (existingTopic) {
      return res.status(409).json({ error: "Topic already exists" });
    }

    // Create new topic
    const newTopic = new TopicDatabaseModel({ name });
    await newTopic.save();

    res
      .status(201)
      .json({ message: "Topic created successfully", topicId: newTopic._id });
  } catch (error) {
    console.error("Error adding topic:", error);
    res.status(500).json({ error: "An error occurred while adding the topic" });
  }
});

app.get("/topics", async (req, res) => {
  try {
    const topics = await TopicDatabaseModel.find(); // Fetch all topics from the database
    res.status(200).json(topics); // Send the topics back in the response
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).json({ error: "An error occurred while fetching topics" });
  }
});

app.delete("/topics/:id", async (req, res) => {
  try {
    const topicId = req.params.id;
    const topic = await TopicDatabaseModel.findByIdAndDelete(topicId);
    if (!topic) {
      return res.status(404).json({ message: "Topic not found" });
    }
    res.status(200).json({ message: "Topic deleted successfully" });
  } catch (error) {
    console.error("Error deleting topic:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the topic" });
  }
});

app.post("/addTeacherToCourse", async (req, res) => {
  const { courseId, userId } = req.body;

  try {
    const course = await CourseDatabaseModel.findById(courseId);
    if (!course) {
      return res.status(404).send("Course not found");
    }

    if (!course.teachers.includes(userId)) {
      course.teachers.push(userId);
      await course.save();
    }

    res
      .status(200)
      .json({ message: "Teacher added successfully to the course" });
  } catch (error) {
    console.error("Error adding teacher to course:", error);
    res.status(500).json({
      error: "An error occurred while adding the teacher to the course",
    });
  }
});

app.get("/coursestudentscount/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  try {
    // Find the session document by its ID
    const session = await AttendanceSessionDatabaseModel.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Retrieve the course ID from the session document
    const courseId = session.course;

    // Find the course document by its ID
    const course = await CourseDatabaseModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Get the number of students in the course
    const studentCount = course.students.length;

    res.status(200).json({ studentCount });
  } catch (error) {
    console.error("Error fetching student count:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching student count" });
  }
});

app.post("/courses/:courseId/topics", async (req, res) => {
  const courseId = req.params.courseId;
  const { topicName } = req.body;

  try {
    const course = await CourseDatabaseModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    if (!course.topics.includes(topicName)) {
      course.topics.push(topicName);
      await course.save();
      res
        .status(200)
        .json({ message: "Topic added successfully to the course" });
    } else {
      res.status(409).json({ message: "Topic already exists in this course" });
    }
  } catch (error) {
    console.error("Error adding topic to course:", error);
    res.status(500).json({
      error: "An error occurred while adding the topic to the course",
    });
  }
});

app.get("/enrolledstudents/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  try {
    // Find all attendance records with the matching session ID
    const attendanceRecords = await AttendanceDatabaseModel.find({
      session: sessionId,
    });

    // Extract the unique student IDs from the attendance records
    const studentIds = [
      ...new Set(attendanceRecords.map((record) => record.existingStudent)),
    ];

    // Fetch the student details based on the extracted student IDs
    const enrolledStudents = await StudentDatabaseModel.find({
      _id: { $in: studentIds },
    });

    res.status(200).json({ enrolledStudents });
  } catch (error) {
    console.error("Error fetching enrolled students:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching enrolled students" });
  }
});

app.delete("/courses/:courseId/topics", async (req, res) => {
  const courseId = req.params.courseId;
  const { topicName } = req.body;

  try {
    const course = await CourseDatabaseModel.findById(courseId);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const topicIndex = course.topics.indexOf(topicName);
    if (topicIndex > -1) {
      course.topics.splice(topicIndex, 1);
      await course.save();
      res
        .status(200)
        .json({ message: "Topic removed successfully from the course" });
    } else {
      res.status(404).json({ message: "Topic not found in this course" });
    }
  } catch (error) {
    console.error("Error removing topic from course:", error);
    res.status(500).json({
      error: "An error occurred while removing the topic from the course",
    });
  }
});

app.get("/download/attendance/pdf/:courseId", async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await CourseDatabaseModel.findById(courseId)
      .populate({ path: "students" })
      .exec();

    if (!course) {
      return res.status(404).send("Course not found");
    }

    let participationData = [];

    for (const existingStudent of course.students) {
      let studentParticipation = {
        lastName: existingStudent.lastName,
        firstName: existingStudent.firstName,
        studentNumber: existingStudent.studentNumber, // Assuming you have studentNumber on student object
        participation: {},
      };

      for (const topic of course.topics) {
        const totalSessions =
          await AttendanceSessionDatabaseModel.countDocuments({
            course: courseId,
            topic: topic,
          });
        const attendedSessions = await AttendanceDatabaseModel.countDocuments({
          student: existingStudent._id,
          course: courseId,
          topic: topic,
          status: "Present",
        });

        studentParticipation.participation[topic] =
          totalSessions > 0
            ? ((attendedSessions / totalSessions) * 100).toFixed(2) + "%"
            : "N/A";
      }

      participationData.push(studentParticipation);
    }

    const doc = new PDFDocument();
    res.setHeader(
      "Content-disposition",
      'attachment; filename="attendance.pdf"'
    );
    res.setHeader("Content-type", "application/pdf");

    doc.fontSize(16).text(`Attendance Report for Course: ${course.name}`, {
      align: "center",
    });
    doc.moveDown(2);

    const tableColumns = [
      "Lastname",
      "Firstname",
      "Studentnumber",
      ...course.topics,
    ];
    const columnWidths = 100; // Modify this if you need wider columns
    const startX = 50;
    let startY = doc.y;

    // Headers
    tableColumns.forEach((header, i) => {
      doc.fontSize(12).text(header, startX + i * columnWidths, startY, {
        width: columnWidths,
        align: "center",
      });
    });

    startY += 20; // Space for header

    // Rows
    participationData.forEach((existingStudent) => {
      let xPosition = startX;
      doc.fontSize(10).text(existingStudent.lastName, xPosition, startY, {
        width: columnWidths,
        align: "center",
      });
      xPosition += columnWidths;
      doc.text(existingStudent.firstName, xPosition, startY, {
        width: columnWidths,
        align: "center",
      });
      xPosition += columnWidths;
      doc.text(existingStudent.studentNumber, xPosition, startY, {
        width: columnWidths,
        align: "center",
      });

      course.topics.forEach((topic) => {
        xPosition += columnWidths;
        doc.text(existingStudent.participation[topic], xPosition, startY, {
          width: columnWidths,
          align: "center",
        });
      });

      startY += 20; // Move down for next student row

      if (startY >= 700) {
        // Check for page end and add new page
        doc.addPage();
        startY = 50; // Reset startY for new page
      }
    });

    doc.pipe(res);
    doc.end();
  } catch (error) {
    console.error("Error generating attendance report:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/download/attendance/excel/:courseId", async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await CourseDatabaseModel.findById(courseId)
      .populate({ path: "students" })
      .exec();

    if (!course) {
      return res.status(404).send("Course not found");
    }

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Attendance Report");

    // Add headers to the Excel sheet
    const titleRow = worksheet.addRow([
      `Attendance Report for Course: ${course.name}`,
    ]);
    // Adjust the range according to the number of columns (topics + 3 for Lastname, Firstname, and Studentnumber)
    worksheet.mergeCells(1, 1, 1, course.topics.length + 3);
    titleRow.font = { size: 10, bold: true };
    titleRow.alignment = { horizontal: "center" };

    // Add headers to the Excel sheet
    const headers = [
      "Lastname",
      "Firstname",
      "Studentnumber",
      ...course.topics,
    ];
    worksheet.addRow(headers);

    for (const existingStudent of course.students) {
      let studentData = [
        existingStudent.lastName,
        existingStudent.firstName,
        existingStudent.studentNumber,
      ];

      for (const topic of course.topics) {
        const totalSessions =
          await AttendanceSessionDatabaseModel.countDocuments({
            course: courseId,
            topic: topic,
          });
        const attendedSessions = await AttendanceDatabaseModel.countDocuments({
          student: existingStudent._id,
          course: courseId,
          topic: topic,
          status: "Present",
        });

        const participation =
          totalSessions > 0
            ? ((attendedSessions / totalSessions) * 100).toFixed(2) + "%"
            : "N/A";
        studentData.push(participation);
      }

      // Add student data to the Excel sheet
      worksheet.addRow(studentData);
    }

    // Set content type and disposition for the response
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="attendance.xlsx"`
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );

    // Send the Excel workbook as a response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error generating attendance report:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/deactivatecourse", async (req, res) => {
  console.log("Deactivate course request received", req.body);
  try {
    const courseId = req.body.courseId;
    const updatedCourse = await CourseDatabaseModel.findByIdAndUpdate(
      courseId,
      { isActive: false },
      { new: true } // This option returns the updated document
    );

    if (!updatedCourse) {
      // If the course with the given ID is not found, return an error
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(updatedCourse);
  } catch (error) {
    console.error("Error deactivating course:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deactivating the course" });
  }
});

app.get("/getcoursestudents/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  try {
    // Find the session document by its ID
    const session = await AttendanceSessionDatabaseModel.findById(
      sessionId
    ).populate("course");

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    // Assuming session.course now contains the full course document after population
    const courseId = session.course._id;

    // Find students enrolled in the course
    const students = await StudentDatabaseModel.find({
      courses: { $elemMatch: { course: courseId } },
    });

    // Map through the students to return only the required fields
    const studentData = students.map((existingStudent) => ({
      firstName: existingStudent.firstName,
      lastName: existingStudent.lastName,
      studentNumber: existingStudent.studentNumber,
    }));

    res.status(200).json({ students: studentData });
  } catch (error) {
    console.error("Error fetching students:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching students" });
  }
});

server.listen(3001, () => {
  console.log("Server is running in port 3001");
});
