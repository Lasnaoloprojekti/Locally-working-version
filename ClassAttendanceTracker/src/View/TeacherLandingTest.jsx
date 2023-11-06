import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Importing the useAuth hook from the AuthContext
import logo from "../assets/logo.png";
import CourseForm from "../components/CourseForm"; // Importing the CourseForm component

export const TeacherLandingTest = () => {
  const { user, logout } = useAuth(); // Destructuring the user and logout function from the useAuth hook

  const navigate = useNavigate(); // Initializing the navigate function from the useNavigate hook

  useEffect(() => {
    // Redirecting to the login page if the user is not logged in
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div>
      <nav className="flex justify-between items-center">
        <img className="h-[7rem] w-auto ml-3" src={logo} alt="Logo" />
        <ul className="flex items-center">
          {/* Displaying user's full name */}
          <li className="text-2xl ml-2">{`Welcome, ${user.firstname} ${user.lastname}`}</li>
          <button
            className="text-white bg-orange-600 rounded-lg p-4 mx-8"
            onClick={logout} // Adding the logout function to the onClick event of the button
          >
            Logout
          </button>
        </ul>
      </nav>
      <CourseForm></CourseForm>
    </div>
  );
};

// Author: JJ
// Date: November 6, 2023
export default TeacherLandingTest;
