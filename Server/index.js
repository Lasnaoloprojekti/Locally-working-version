require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userDatabaseModel = require("./models/usersSchema");
const coursesDatabaseModel = require("./models/coursesSchema");
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
    // Make a request to the external API with the received username and password
    const apiResponse = await fetch("https://streams.metropolia.fi/2.0/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const apiData = await apiResponse.json();
    // console.log(apiData, ' vastaus koulun apista');

    if (apiData.message === "invalid username or password") {
      return res.status(401).json({ error: "invalid username or password" });
    } else {
      let existingUser = await userDatabaseModel.findOne({
        user: apiData.user,
      });

      if (!existingUser) {
        // User does not exist, create a new user
        const newUser = new userDatabaseModel({
          staff: apiData.staff,
          user: apiData.user,
          firstname: apiData.firstname,
          lastname: apiData.lastname,
          email: apiData.email,
          courses: null,
          gdprAcceptance: true,
        });
        await newUser.save();

        console.log("New user created:", newUser);
      }

      const accessToken = jwt.sign(
        apiData.user,
        process.env.ACCESS_TOKEN_SECRET
      );
      res.cookie("Token", accessToken, {
        // httpOnly: true,
        secure: true,
        sameSite: "none",
      });

      console.log(apiData.message, "onnistui");
      // Send a response to the client based on the API response
      res.status(apiResponse.status).json({ apiData });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

app.post("/createcourse", async (req, res) => {
  console.log("Create course request received", req.body);

  const { courseName, groupName, topics, startDate, endDate } = req.body;

  try {
    const existingCourse = await coursesDatabaseModel.findOne({
      name: courseName,
    });

    if (existingCourse) {
      return res.status(409).json({ error: "Course already exists" });
    }

    const newCourse = new coursesDatabaseModel({
      name: courseName,
      groupName: groupName,
      start_date: startDate,
      end_date: endDate,
      active: true,
      topics: [{ name: topics, attendance: [] }],
      teachers: null,
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

app.get("/selectcourse", async (req, res) => {
  try {
    const selectCourse = await coursesDatabaseModel.find(); // Fetch all courses from the database
    res.status(200).json(selectCourse); // Send the courses back in the response
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "An error occurred while fetching courses" });
  }
});

app.listen(3001, () => {
  console.log("Server is running...");
});
