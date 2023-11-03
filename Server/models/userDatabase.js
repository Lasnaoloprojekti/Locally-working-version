/**
 * User Database Model
 * 
 * This Mongoose model defines the schema for the 'users' collection in the MongoDB database. 
 * It includes fields for 'name', 'email', and 'password'. The model is exported to be used 
 * in other parts of the application.
 * 
 * @module UserDatabaseModel
 * @createdBy Matias on 2/11/2023
 * 
 * @requires mongoose
 */

const mongoose = require('mongoose');

// Defines the schema for the 'users' collection
const userDatabaseSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});
const userDatabaseModel = mongoose.model('users', userDatabaseSchema);
module.exports = userDatabaseModel;
