/**
 * Main Application Component
 * 
 * This component serves as the entry point of the application. It sets up the routing for different views,
 * including the Register, Login, and TeacherLanding pages, using React Router. The component also imports
 * the main styling file 'App.css'.
 * 
 * @module App
 * @createdBy Matias on 2/11/2023
 * 
 * @requires './App.css'
 * @requires BrowserRouter
 * @requires Routes
 * @requires Route
 * @requires Register
 * @requires Login
 * @requires TeacherLanding
 */

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './View/Register';
import Login from './View/Login';
import TeacherLanding from './View/TeacherLanding';

/**
 * App functional component
 * 
 * @function
 * @returns {JSX.Element} Main application template with routing configuration
 */
const App = () => {
  return (
    <BrowserRouter>
      {/* Routes configuration for different views */}
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/teacherLanding' element={<TeacherLanding />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

// Exports the App component as the default export
export default App;
