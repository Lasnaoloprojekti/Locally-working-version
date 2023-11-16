import React, { useState, useContext, useEffect } from "react";
import logo from "../assets/metropolia_s_orange.png";
import { useNavigate, Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import AddStudents from "../components/AddStudents";
import CreateCourse from "../components/CreateCourse";
import SelectCourse from "../components/SelectCourse";
import CourseDelete from "../components/CourseDelete";
import OpenattendanceCollect from "../components/OpenattendanceCollect";

const TeacherHome = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(userContext);
  const [activeMainButton, setActiveMainButton] = useState("");
  const [activeView, setActiveView] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserInfo({ staff: false, firstname: "", lastname: "" });
    navigate("/login");
  };

  const handleMainButtonClick = (mainButton) => {
    if (activeMainButton === mainButton) {
      // Toggle off if the same button is clicked
      setActiveMainButton("");
      setActiveView("");
    } else {
      setActiveMainButton(mainButton);
      setActiveView("");
    }
  };

  const renderComponent = () => {
    switch (activeView) {
      case "createCourse":
        return <CreateCourse />;
      case "addStudents":
        return <AddStudents />;
      case "selectCourse":
        return <SelectCourse />;
      case "deleteCourse":
        return <CourseDelete />;
      case "openAttendanceCollect":
        return <OpenattendanceCollect />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <Link to="/teacherhome">
          <img className="h-[18mm] m-4" src={logo} alt="Logo" />
        </Link>{" "}
        <ul className="flex items-center">
          <li className="text-2xl ml-2 font-roboto-slab">
            Welcome! {userInfo.firstname} {userInfo.lastname}
          </li>
          <button
            onClick={handleLogout}
            className="text-white bg-orange-600 rounded-lg p-4 mx-8 font-roboto-slab">
            Logout
          </button>
        </ul>
      </nav>

      <div className="flex flex-col justify-center items-center">
        <div className="flex mb-7">
          <button
            onClick={() => handleMainButtonClick("selectCourse")}
            className={`${
              activeMainButton === "selectCourse"
                ? "bg-orange-600 text-white"
                : "bg-gray-300"
            } px-4 py-2 rounded mr-2 font-roboto-slab`}>
            {" "}
            View Courses
          </button>
          <button
            onClick={() => handleMainButtonClick("modifyCourse")}
            className={`${
              activeMainButton === "modifyCourse"
                ? "bg-orange-600 text-white"
                : "bg-gray-300"
            } px-4 py-2 rounded mr-2 font-roboto-slab`}>
            {" "}
            Modify Courses
          </button>
        </div>

        {/* Render Child Buttons Based on Active Main Button */}
        {activeMainButton === "selectCourse" && (
          <div className="flex flex-col mb-7">
            <button
              onClick={() => setActiveView("openAttendanceCollect")}
              className={`${
                activeView === "openAttendanceCollect"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded  mr-2 mt-2 font-roboto-slab`}>
              {" "}
              View Attendance
            </button>
          </div>
        )}
        {activeMainButton === "modifyCourse" && (
          <div className="flex flex-col mb-7">
            <button
              onClick={() => setActiveView("createCourse")}
              className={`${
                activeView === "createCourse"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded mr-2 font-roboto-slab`}>
              {" "}
              Create a new course
            </button>
            <button
              onClick={() => setActiveView("addStudents")}
              className={`${
                activeView === "addStudents"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded  mr-2 mt-2 font-roboto-slab`}>
              {" "}
              Add students to a course
            </button>
            <button
              onClick={() => setActiveView("deleteCourse")}
              className={`${
                activeView === "deleteCourse"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-300"
              } px-4 py-2 rounded  mr-2 mt-2 font-roboto-slab`}>
              {" "}
              Delete Course
            </button>
          </div>
        )}

        {/* Render Component Based on Selected View */}
        {renderComponent()}
      </div>
    </>
  );
};

export default TeacherHome;
