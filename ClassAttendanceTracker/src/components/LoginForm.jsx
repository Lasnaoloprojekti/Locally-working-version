/**
 * LoginForm Component
 * 
 * This component represents the login form of the application. It allows users to enter their
 * email and password, validates the input using Yup schema, and sends a POST request to the 
 * server for authentication. Upon successful login, it redirects the user to the TeacherLanding page.
 * 
 * @module LoginForm
 * @createdBy Matias on 2/11/2023
 * 
 * @requires React
 * @requires useState
 * @requires useNavigate
 * @requires Link
 * @requires Yup
 * @requires loginSchema
 * @requires logo
 */

import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { loginSchema } from "../Validations/LoginValidation";
import logo from '../assets/logo.png';

/**
 * LoginForm functional component
 * 
 * @function
 * @returns {JSX.Element} LoginForm component template
 */
const LoginForm = () => {
    // State variables to manage form inputs and login error messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    /**
     * Handles form submission and performs input validation and authentication.
     * 
     * @async
     * @function
     * @param {Event} e - Form submission event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Validates email and password using loginSchema
            await loginSchema.validate({ email, password }, { abortEarly: false });

            // Sends a POST request to the server for authentication
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            // Parses response JSON data
            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data.message);
                // Save the token to localStorage or cookies for future requests
                // Redirect the user to the TeacherLanding page
                navigate('/teacherlanding');
            } else {
                console.log('Login failed:', data.message);
                setLoginError(data.message);
                // Handle failed login (show error message, etc.)
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
                setLoginError("Validation error. Please check your input.");
            } else {
                console.error('Error during login:', error);
                // Handle other errors (network errors, etc.)
                setLoginError("Login failed. Please try again later.");
            }
        }
    };

    // LoginForm JSX template
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="bg-white p-8 rounded shadow-lg">
                <img className="h-[8rem] w-auto" src={logo} alt="Logo" />
                <h2 className="text-center text-black">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Email</label>
                        <input
                            className="w-full text-black p-2 border rounded"
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
                    <h3 className="text-red-600">{loginError}</h3>
                    <Link className="text-black hover:text-slate-500 text-center mb-3" to='/register'>Don't have an account yet?</Link>
                    <button
                        className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
                        type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

// Exports the LoginForm component as the default export
export default LoginForm;
