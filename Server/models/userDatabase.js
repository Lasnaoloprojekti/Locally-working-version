const mongoose = require('mongoose');

const userDatabaseSchema = new mongoose.Schema({
    staff: Boolean,
    user: String,
    firstname: String,
    lastname: String,
    Email: String
});
const userDatabaseModel = mongoose.model('users', userDatabaseSchema);
module.exports = userDatabaseModel;
