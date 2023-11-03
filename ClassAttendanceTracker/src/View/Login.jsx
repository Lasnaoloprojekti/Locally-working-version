/**
 * Login Page Component
 * 
 * This component represents the login page of the application. It displays a background video
 * and includes the LoginForm component, allowing users to log in to their accounts.
 * 
 * @module Login
 * @createdBy Matias on 2/11/2023
 * 
 * @requires React
 * @requires LoginForm
 * @requires '../login.css'
 */

import React from 'react';
import '../login.css';
import LoginForm from '../components/LoginForm';

/**
 * Login functional component
 * 
 * @function
 * @returns {JSX.Element} Login page template
 */
const Login = () => {
    return (
        <>
            {/* Background video element */}
            <div className="fullscreen-bg">
                <video loop muted autoPlay className="fullscreen-bg__video">
                    <source src='autumnleafs.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* LoginForm component for user login */}
            <LoginForm></LoginForm>
        </>
    );
};

// Exports the Login component as the default export
export default Login;
