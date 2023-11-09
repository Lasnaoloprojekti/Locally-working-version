const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//***Student Schema***

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    studentNumber: String,
    gdprConsent: Boolean,
    courses: [{
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        },
        attendance: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Attendance'
        }],
        topicsAttending: [{
            type: String
        }]
    }]
    // Other fields related to attendance...
});

//***Attendance Schema***

const AttendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    topic: String,
    date: Date,
    timeOfDay: String, // "Morning" or "Afternoon"
    status: String, // "Present", "Absent", "Excused"
    gdprConsent: Boolean
});

//***User Schema***

const UserSchema = new mongoose.Schema({
    user: String,
    firstName: String,
    lastName: String,
    email: String,
    staff: Boolean, 
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }],
});


//***course Schema***

const CourseSchema = new mongoose.Schema({
    courseName: String,
    groupName: String,
    startDate: Date,
    endDate: Date,
    topics: [{
        name: String,
        type: String // e.g., "Theory", "Laboratory"
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    isActive: Boolean
});


//Setting the Schemas to models

const CourseDatabaseModel = mongoose.model('Course', CourseSchema);
const UserDatabaseModel = mongoose.model('User', UserSchema);
const AttendanceDatabaseModel = mongoose.model('Attendance', AttendanceSchema);
const StudentDatabaseModel = mongoose.model('Student', StudentSchema);

module.exports = { UserDatabaseModel, CourseDatabaseModel, StudentDatabaseModel, AttendanceDatabaseModel };
