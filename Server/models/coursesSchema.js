const mongoose = require('mongoose');



const courseSchema = new mongoose.Schema({
    name: String,
    groupName: String,
    start_date: Date,
    end_date: Date,
    active: Boolean,
    topics: [String],
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }]
});

const Course = mongoose.model('course', courseSchema);
module.exports = Course;
