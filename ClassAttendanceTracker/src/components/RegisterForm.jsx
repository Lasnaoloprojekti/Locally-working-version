/**
 * RegisterForm Component
 * 
 * This component represents the registration form of the application. It allows users to enter 
 * their username, email, and password, validates the input using Yup schema, and sends a POST 
 * request to the server for user registration. Upon successful registration, it redirects the 
 * user to the login page.
 * 
 * @module RegisterForm
 * @createdBy Matias on 2/11/2023
 * 
 * @requires React
 * @requires useState
 * @requires useNavigate
 * @requires Link
 * @requires Yup
 * @requires registerSchema
 * @requires logo
 */

import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { registerSchema } from "../Validations/RegisterValidation";
import logo from '../assets/logo.png';

/**
 * RegisterForm functional component
 * 
 * @function
 * @returns {JSX.Element} RegisterForm component template
 */
const RegisterForm = () => {
    // State variables to manage form inputs and registration error messages
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerError, setRegisterError] = useState("");
    const navigate = useNavigate();

    /**
     * Handles form submission and performs input validation and user registration.
     * 
     * @async
     * @function
     * @param {Event} e - Form submission event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validates username, email, and password using registerSchema
            await registerSchema.validate({ username: name, email, password }, { abortEarly: false });

            // Sends a POST request to the server for user registration
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });

            // Parses response JSON data
            const data = await response.json();

            if (response.ok) {
                console.log('Registration successful:', data.message);
                navigate('/login');
            } else if (data.message === 'User with this email already exists!') {
                console.log('Registration failed:', data.message);
                setRegisterError(data.message);
            }

        } catch (error) {
            // Handles validation errors, network errors, and other exceptions
            if (error instanceof Yup.ValidationError) {
                const validationErrors = {};
                error.inner.forEach((e) => {
                    validationErrors[e.path] = e.message;
                });
                console.log('Validation errors:', validationErrors);
                // Handle validation errors (store in state and display error messages)
                setRegisterError("Validation error. Please check your input.");
            } else {
                console.error('Error during registration:', error);
                // Handle other errors (network errors, etc.)
                setRegisterError("Registration failed. Please try again later.");
            }
        }
    };

    // RegisterForm JSX template
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="bg-white p-8 rounded shadow-lg">
                <img className="h-[8rem] w-auto" src={logo} alt="Logo" />
                <h2 className="text-center text-black">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Username</label>
                        <input
                            className="w-full text-black p-2 border rounded"
                            type="text"
                            placeholder="Enter your username"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Email</label>
                        <input
                            className="w-full p-2 text-black border rounded"
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Password</label>
                        <input
                            className="w-full p-2 text-black border rounded"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <h3 className="text-red-600">{registerError}</h3>
                    <Link className="text-black hover:text-slate-500 text-center mb-3" to='/login'>Already have an account?</Link>
                    <button
                        className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
                        type="submit">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

// Exports the RegisterForm component as the default export
export default RegisterForm;
