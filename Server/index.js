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
    methods: ["GET", "POST"],
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
      courseName: courseName,
      groupName: groupName,
      startDate: startDate,
      endDate: endDate,
      isActive: true,
      topics: topics,
      teachers: null,
      students: null,
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
  const studentsToAdd = req.body.students; // Array of student objects

  console.log("Add students request received", studentsToAdd);

  try {
    let addedStudents = [];

    for (const studentData of studentsToAdd) {
      const { firstName, lastName, studentNumber, courseId } = studentData;

      console.log("Adding student:", firstName, lastName, studentNumber, courseId);

      // Check if the course exists
      const course = await CourseDatabaseModel.findById(courseId);
      if (!course) {
        return res.status(404).send(`Course not found with ID: ${courseId}`);
      }

      // Create a new student record
      const newStudent = new StudentDatabaseModel({
        firstName,
        lastName,
        studentNumber,
        gdprConsent: false, // Default to false or adjust as needed
        courses: [{ course: courseId }]
      });

      // Save the new student
      const savedStudent = await newStudent.save();
      addedStudents.push(savedStudent);

      // Optionally, add the student to the course's student list
      course.students.push(savedStudent);
      await course.save();
    }

    res.status(200).json({
      message: 'Students added successfully',
      students: addedStudents
    });
  } catch (error) {
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

app.listen(3001, () => {
  console.log("Server is running...");
});
