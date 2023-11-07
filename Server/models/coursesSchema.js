const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: String,
    groupName: String,
    start_date: Date,
    end_date: Date,
    active: Boolean,
    topics: [{
        name: String,
        attendance: [{
            student_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            status: String // "present", "absent", "na", "accepted_absence", etc.
        }]
    }],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});

const Course = mongoose.model('course', courseSchema);
module.exports = Course;
