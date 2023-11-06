import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importing the useAuth hook from the AuthContext
import logo from "../assets/logo.png";
import CourseForm from "../components/CourseForm"; // Importing the CourseForm component

export const TeacherLandingPage = () => {
  const { user, logout } = useAuth(); // Destructuring user object and logout function from useAuth hook
  const navigate = useNavigate(); // Getting the navigate function from react-router-dom

  // Effect hook to check user authentication status and redirect to login if not authenticated
  useEffect(() => {
    if (!user.isAuthenticated) {
      navigate("/login"); // Redirect to login page if user is not authenticated
    }
  }, [user.isAuthenticated, navigate]);

  // Handler function for user logout, calling the logout function from the useAuth hook
  const handleLogout = () => {
    logout(); // Call the logout function from the useAuth hook
    navigate("/login"); // Redirect to login page after logout
  };
  return (
    <div>
      <nav className="flex justify-between items-center">
        <img className="h-[7rem] w-auto ml-3" src={logo} alt="Logo" />
        <ul className="flex items-center">
          {/* Displaying user's full name */}
          <li className="text-2xl ml-2">{`Welcome, ${user.firstname} ${user.lastname}`}</li>
          <button
            className="text-white bg-orange-600 rounded-lg p-4 mx-8"
            onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </nav>
      <CourseForm></CourseForm>
    </div>
  );
};

// Exporting the TeacherLandingPage component as the default export of this module
// Author: JJ
// Date: November 4, 2023
export default TeacherLandingPage;
