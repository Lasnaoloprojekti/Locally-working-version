const mongoose = require('mongoose');

const userDatabaseSchema = new mongoose.Schema({
    staff: Boolean,
    user: String,
    firstname: String,
    lastname: String,
    email: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    gdprAcceptance: Boolean
});
const userDatabaseModel = mongoose.model('users', userDatabaseSchema);
module.exports = userDatabaseModel;
