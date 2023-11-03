/**
 * Express Server Configuration
 * 
 * This file sets up an Express server to handle user registration and login functionalities.
 * It includes endpoints for user registration ('/register') and user login ('/login'). The server
 * connects to a MongoDB database using Mongoose and utilizes bcrypt for password hashing and jwt for
 * authentication. CORS is enabled to allow requests from specified origins. Cookies are used for
 * managing authentication tokens.
 * 
 * @module Server
 * @createdBy Matias on 2/11/2023
 * 
 * @requires express
 * @requires mongoose
 * @requires cors
 * @requires userDatabaseModel
 * @requires jwt
 * @requires bcrypt
 * @requires cookieParser
 */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userDatabaseModel = require('./models/userDatabase');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

// Creates an Express application
const app = express();

// Middleware for parsing JSON data in requests
app.use(express.json());

// Enables CORS for specified origins and methods
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// Connects to the MongoDB database named 'userDatabase'
mongoose.connect('mongodb://localhost:27017/userDatabase');

// Endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if a user with the same email already exists
        const existingUser = await userDatabaseModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists!' });
        }

        // If no existing user found, proceed with registration
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await userDatabaseModel.create({ name, email, password: hashedPassword });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

// Endpoint for user login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userDatabaseModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id, role: 'admin' }, 'jwt-secret-key', { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
});

// Starts the server and listens on port 3001
app.listen(3001, () => {
    console.log('Server is running...');
});
