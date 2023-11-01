import React from 'react';
import '../login.css'
import LoginForm from '../components/LoginForm';

const Login = () => {
    return (
        <>

            <div className="fullscreen-bg">
                <video loop muted autoPlay className="fullscreen-bg__video">
                    <source src='autumnleafs.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <LoginForm></LoginForm>
        </>
    );
};

export default Login;
