require("dotenv").config();

const express = require("express");
const { createServer } = require('node:http');
const mongoose = require("mongoose");
const cors = require("cors");
const { UserDatabaseModel, CourseDatabaseModel, StudentDatabaseModel, AttendanceSessionDatabaseModel, AttendanceDatabaseModel, TopicDatabaseModel } = require("./models/CollectionSchemas");
const jwt = require("jsonwebtoken");
const { Server } = require("socket.io");
const fetch = require("node-fetch");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE"],
    credentials: true,
  })
);

mongoose.connect(
  "mongodb+srv://luovalauma:oGkSjaFCvC1Vgjzv@attendance.hhbm8a0.mongodb.net/Attendance"
);

io.on("connection", (socket) => {
  console.log('a user connected', socket.id);
  socket.emit('students',);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

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
    } else {

      let existingUser = await UserDatabaseModel.findOne({ user: apiData.user, });

      if (!existingUser) {
        // User does not exist, create a new user
        const newUser = new UserDatabaseModel({
          user: apiData.user,
          firstName: apiData.firstname,
          lastName: apiData.lastname,
          email: apiData.email,
          staff: apiData.staff,
          courses: null,
        });

        await newUser.save();
        console.log("New user created:", newUser);
      }

      const accessToken = jwt.sign(
        apiData.user,
        process.env.ACCESS_TOKEN_SECRET
      );


      apiData.accessToken = accessToken;
      apiData.UserId = existingUser._id.toString();
      res.status(apiResponse.status).json({ apiData });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

app.get("/verify", (req, res) => {

  const token = req.headers.authorization.split(" ")[1];
  console.log("Token:", token);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {

    if (err) {
      console.error("Error during token verification:", err);
      return res.status(403).json({ error: "Invalid token" });
    }

    let existingUser = await UserDatabaseModel.findOne({
      user,
    });

    res.status(200).json(existingUser);
  });
});

app.post("/createcourse", async (req, res) => {
  console.log("Create course request received", req.body);

  const { courseName, groupName, topics, startDate, endDate, userId } = req.body;

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

app.post("/addstudents", async (req, res) => {
  const { studentsToAdd, courseId } = req.body;

  console.log("Add students request received", studentsToAdd);

  // Start a session for transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const course = await CourseDatabaseModel.findById(courseId).session(session);
    if (!course) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).send(`Course not found with ID: ${courseId}`);
    }

    let addedStudents = [];

    for (const studentData of studentsToAdd) {
      const { firstName, lastName, studentNumber } = studentData;

      console.log("Adding student:", firstName, lastName, studentNumber);

      // Check if the student already exists in the database
      let student = await StudentDatabaseModel.findOne({ studentNumber }).session(session);

      if (!student) {
        // Create a new student record if not exists
        student = new StudentDatabaseModel({
          firstName,
          lastName,
          studentNumber,
          gdprConsent: false, // Default to false or adjust as needed
          courses: [{ course: courseId }]
        });
        await student.save({ session });
      } else {
        // If the student exists, just update the courses array
        if (!student.courses.some(courseEnrollment => courseEnrollment.course.equals(courseId))) {
          student.courses.push({ course: courseId });
          await student.save({ session });
        }
      }

      // Add the student to the course's students list if not already added
      if (!course.students.includes(student._id)) {
        course.students.push(student);
      }

      addedStudents.push(student);
    }

    await course.save({ session });
    await session.commitTransaction();
    session.endSession();

    res.status(200).json({
      message: 'Students added successfully',
      students: addedStudents
    });
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();
    console.error('An error occurred while adding students:', error);
    res.status(500).send('An error occurred: ' + error.message);
  }
});

app.get("/selectcourse", async (req, res) => {

  try {
    const userId = req.headers.userid;
    const selectCourse = await CourseDatabaseModel.find({ teachers: userId }); // Fetch all courses from the database
    res.status(200).json(selectCourse); // Send the courses back in the response
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "An error occurred while fetching courses" });
  }

});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await CourseDatabaseModel.find({}); // Find all courses
    res.json(courses);
  } catch (error) {
    console.error("Error retrieving courses:", error);
    res.status(500).json({ error: "An error occurred while retrieving the courses" });
  }
});

//course delete/students
app.delete('/api/courses/:id', async (req, res) => {
  const courseId = req.params.id;

  // Start a session for the transaction
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Delete all students associated with the course
    await StudentDatabaseModel.deleteMany({ 'courses.course': courseId }).session(session);

    // Now delete the course itself
    const course = await CourseDatabaseModel.findByIdAndDelete(courseId, { session: session });
    if (!course) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).send({ message: 'Course not found' });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    res.send({ message: 'Course and associated students deleted successfully' });
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();

    console.error("Error deleting course and associated students:", error);
    res.status(500).send({ message: 'Internal Server Error', error: error.toString() });
  }
});

app.post('/createsession', async (req, res) => {
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
      studentsPresent: []
    });

    await newSession.save();
    res.status(201).json({ sessionId: newSession._id.toString() });
  } catch (error) {
    console.error("Error creating session:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/registration', async (req, res) => {
  const { studentNumber } = req.body;

  try {
    // Find student based on student number
    const student = await StudentDatabaseModel.findOne({ studentNumber });
    if (!student) {
      return res.status(404).send('Student not found');
    }

    // Iterate through student's courses to find open sessions
    for (let courseEnrollment of student.courses) {
      const openSessions = await AttendanceSessionDatabaseModel.find({
        course: courseEnrollment.course,
        isOpen: true
      }).populate('studentsPresent');

      for (let session of openSessions) {
        // Check if student is already registered in the session
        if (session.studentsPresent.some(s => s._id.equals(student._id))) {
          return res.status(400).send('Student already registered in this session');
        }
      }

      // If student is not registered in any open session, register them in the first one
      if (openSessions.length > 0) {
        const sessionToUpdate = openSessions[0]; // Assuming we take the first open session
        sessionToUpdate.studentsPresent.push(student._id);
        await sessionToUpdate.save();

        io.emit('studentAdded', {
          firstName: student.firstName,
          lastName: student.lastName,
        });

        const newAttendance = new AttendanceDatabaseModel({
          session: sessionToUpdate._id,
          student: student._id,
          course: courseEnrollment.course,
          topic: sessionToUpdate.topic,
          date: sessionToUpdate.date,
          timeOfDay: sessionToUpdate.timeOfDay,
          status: "Present",
          gdprConsent: student.gdprConsent
        });

        console.log("newAttendance", newAttendance);

        await newAttendance.save();

        return res.status(200).json({ message: "Student registered for session", sessionId: sessionToUpdate._id });
      }
    }

    // If no open sessions found for any of the student's courses
    return res.status(404).send('No open sessions available for your courses');

  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/closesession', async (req, res) => {
  const { sessionId } = req.body;

  try {
    const session = await AttendanceSessionDatabaseModel.findById(sessionId);

    if (!session) {
      return res.status(404).send('Session not found');
    }

    session.isOpen = false;
    await session.save();

    io.emit('sessionClosed', { sessionId: session._id });

    res.status(200).send('Session closed successfully');
  } catch (error) {
    console.error("Error closing session:", error);
    res.status(500).send('Internal Server Error');
  }
})

app.get('/participations/:id', async (req, res) => {
  console.log("Participation request received");

  const courseId = req.params.id;

  try {
    const course = await CourseDatabaseModel.findById(courseId)
      .populate({
        path: 'students',
      })
      .exec();

    if (!course) {
      return res.status(404).send('Course not found');
    }

    let participationData = [];

    for (const student of course.students) {
      let studentParticipation = {
        lastName: student.lastName,
        firstName: student.firstName,
        participation: {}
      };

      for (const topic of course.topics) {
        // Count the total number of sessions conducted for this topic
        const totalSessions = await AttendanceSessionDatabaseModel.countDocuments({ course: courseId, topic: topic });

        // Count how many sessions this student attended for this topic
        const attendedSessions = await AttendanceDatabaseModel.countDocuments({ student: student._id, course: courseId, topic: topic, status: 'Present' });

        // Calculate participation percentage
        studentParticipation.participation[topic] = totalSessions > 0 ? ((attendedSessions / totalSessions) * 100).toFixed(2) + '%' : 'na';
      }

      participationData.push(studentParticipation);
    }

    res.json(participationData);
  } catch (error) {
    console.error("Error retrieving participation data:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/participation/:studentNumber', async (req, res) => {
  const studentNumber = req.params.studentNumber;

  try {
    const student = await StudentDatabaseModel.findOne({ studentNumber }).exec();
    if (!student) {
      return res.status(404).send('Student not found');
    }

    const courses = student.courses.map(c => c.course);

    let participationData = [];

    for (const courseId of courses) {
      const course = await CourseDatabaseModel.findById(courseId)
        .populate('topics')
        .exec();

      if (!course) {
        continue; // Skip if course not found
      }

      let studentParticipation = {
        courseName: course.name,
        participation: {}
      };

      for (const topic of course.topics) {
        const totalSessions = await AttendanceSessionDatabaseModel.countDocuments({ course: courseId, topic: topic });

        const attendedSessions = await AttendanceDatabaseModel.countDocuments({
          student: student._id,
          course: courseId,
          topic: topic,
          status: 'Present'
        });

        studentParticipation.participation[topic] = totalSessions > 0 ? ((attendedSessions / totalSessions) * 100).toFixed(2) + '%' : 'N/A';
      }

      participationData.push(studentParticipation);
    }

    res.json(participationData);
  } catch (error) {
    console.error("Error retrieving participation data:", error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/addtopic', async (req, res) => {
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

    res.status(201).json({ message: "Topic created successfully", topicId: newTopic._id });
  } catch (error) {
    console.error("Error adding topic:", error);
    res.status(500).json({ error: "An error occurred while adding the topic" });
  }
});

app.get("/api/topics", async (req, res) => {
  try {
    const topics = await TopicDatabaseModel.find(); // Fetch all topics from the database
    res.status(200).json(topics); // Send the topics back in the response
  } catch (error) {
    console.error("Error fetching topics:", error);
    res.status(500).json({ error: "An error occurred while fetching topics" });
  }
});


app.delete('/api/topics/:id', async (req, res) => {
  try {
    const topicId = req.params.id;
    const topic = await TopicDatabaseModel.findByIdAndDelete(topicId);
    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }
    res.status(200).json({ message: 'Topic deleted successfully' });
  } catch (error) {
    console.error("Error deleting topic:", error);
    res.status(500).json({ error: "An error occurred while deleting the topic" });
  }
});

server.listen(3001, () => {
  console.log("Server is running in port 3001");
});
