const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    course_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    date: Date,
    attendance_data: [{
        student_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        topic_attendance: [{
            topic_name: String,
            status: String // 'Present', 'Absent', 'NA'
        }]
    }]
});

const Attendance = mongoose.model('attendance', attendanceSchema);

module.exports = Attendance;
