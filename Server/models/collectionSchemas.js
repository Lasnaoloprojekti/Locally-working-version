const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Student Schema
const StudentSchema = new Schema({
  firstName: String,
  lastName: String,
  studentNumber: String,
  gdprConsent: Boolean,
  email: String,
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  courses: [
    {
      course: {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
      attendance: [
        {
          type: Schema.Types.ObjectId,
          ref: "Attendance",
        },
      ],
      topicsAttending: [
        {
          type: String,
        },
      ],
    },
  ],
});

// Attendance Schema
const AttendanceSchema = new Schema({
  session: {
    type: Schema.Types.ObjectId,
    ref: "AttendanceSession",
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  topic: String,
  date: Date,
  timeOfDay: String, // "Morning" or "Afternoon"
  status: String, // "Present", "Absent", "Excused"
  gdprConsent: Boolean,
});

// Attendance Session Schema
const AttendanceSessionSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  timeOfDay: {
    type: String,
    enum: ["Morning", "Afternoon"],
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  studentsPresent: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
});

// User Schema
const UserSchema = new Schema({
  username: String, // Renamed from 'user'
  firstName: String,
  lastName: String,
  email: String,
  staff: Boolean,
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

// Course Schema
const CourseSchema = new Schema({
  name: String,
  groupName: String,
  startDate: Date,
  endDate: Date,
  topics: [String],
  teachers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  isActive: Boolean,
});

// Topics Schema
const TopicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

// Setting the Schemas to models
const CourseDatabaseModel = mongoose.model("Course", CourseSchema);
const UserDatabaseModel = mongoose.model("User", UserSchema);
const AttendanceDatabaseModel = mongoose.model("Attendance", AttendanceSchema);
const AttendanceSessionDatabaseModel = mongoose.model(
  "AttendanceSession",
  AttendanceSessionSchema
);
const StudentDatabaseModel = mongoose.model("Student", StudentSchema);
const TopicDatabaseModel = mongoose.model("Topic", TopicSchema);

module.exports = {
  UserDatabaseModel,
  CourseDatabaseModel,
  StudentDatabaseModel,
  AttendanceDatabaseModel,
  AttendanceSessionDatabaseModel,
  TopicDatabaseModel,
};
