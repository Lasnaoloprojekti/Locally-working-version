/**
 * Register Page Component
 * 
 * This component represents the registration page of the application. It displays a background video
 * and includes the RegisterForm component, allowing users to register for an account.
 * 
 * @module Register
 * @createdBy Matias on 2/11/2023
 * 
 * @requires React
 * @requires RegisterForm
 * @requires '../login.css'
 */

import React from 'react';
import '../login.css';
import RegisterForm from '../components/RegisterForm';

/**
 * Register functional component
 * 
 * @function
 * @returns {JSX.Element} Register page template
 */
const Register = () => {
    return (
        <>
            {/* Background video element */}
            <div className="fullscreen-bg">
                <video loop muted autoPlay className="fullscreen-bg__video">
                    <source src='autumnleafs.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* RegisterForm component for user registration */}
            <RegisterForm></RegisterForm>
        </>
    );
};

// Exports the Register component as the default export
export default Register;
