require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { UserDatabaseModel, CourseDatabaseModel, StudentDatabaseModel } = require("./models/CollectionSchemas");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const fetch = require("node-fetch");

const app = express();

app.use(express.json());
app.use(cookieParser());
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

app.post("/login", async (req, res) => {
  console.log("Login request received");
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

    console.log("vastaus ilkan apista:", apiData);


    if (apiData.message === "invalid username or password") {
      return res.status(401).json({ error: "invalid username or password" });
    } else {

      let existingUser = await UserDatabaseModel.findOne({
        user: apiData.user,
      });

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

      console.log(apiData.message, "onnistui");
      // Send a response to the client based on the API response
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

  const { courseName, groupName, topics, startDate, endDate } = req.body;

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
      teachers: [], // Assuming you want to initialize with an empty array
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
    const selectCourse = await CourseDatabaseModel.find(); // Fetch all courses from the database
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


app.listen(3001, () => {
  console.log("Server is running...");
});
