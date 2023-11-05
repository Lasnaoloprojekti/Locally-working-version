require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userDatabaseModel = require('./models/userDatabase');
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt');
//const cookieParser = require('cookie-parser');
const fetch = require('node-fetch');



const app = express();

app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true
}));


mongoose.connect('mongodb://localhost:27017/userDatabase');


app.post('/register', async (req, res) => {
    res.send('Register request received');
});

app.post('/login', async (req, res) => {
    console.log('Login request received');
    const { username, password } = req.body;

    try {
        // Make a request to the external API with the received username and password
        const apiResponse = await fetch('https://streams.metropolia.fi/2.0/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const apiData = await apiResponse.json();
        console.log(apiData, ' vastaus koulun apista');
        if (apiData.message === 'invalid username or password') {
            return res.status(401).json({ error: 'invalid username or password' });
        } else {
            let existingUser = await userDatabaseModel.findOne({ user: apiData.user });

            if (!existingUser) {
                // User does not exist, create a new user
                const newUser = new userDatabaseModel({
                    staff: apiData.staff,
                    user: apiData.user,
                    firstname: apiData.firstname,
                    lastname: apiData.lastname,
                    Email: apiData.email
                });
                await newUser.save();
                console.log('New user created:', newUser);
            }

            const accessToken = jwt.sign(apiData.user, process.env.ACCESS_TOKEN_SECRET)
            res.cookie("Token", accessToken);

            console.log(apiData.message, 'onnistui');
            // Send a response to the client based on the API response
            res.status(apiResponse.status).json({ apiData });
        }

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'An error occurred during login' });
    }
});


app.listen(3001, () => {
    console.log('Server is running...');
});
