import React, { useState, useContext } from "react";
import logo from "../assets/metropolia_s_orange.png";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";
import AddStudents from "../components/AddStudents";
import CreateCourse from "../components/CreateCourse";
import SelectCourse from "../components/SelectCourse";
import CourseDelete from "../components/CourseDelete"; // Import CourseDelete component
import OpenattendanceCollect from "../components/OpenattendanceCollect";
// Import CourseDelete component

const TeacherHome = () => {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(userContext);
  const [activeComponent, setActiveComponent] = useState("createCourse"); // Initial active component

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserInfo({
      staff: false,
      firstname: "",
      lastname: "",
    });
    navigate("/login");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "createCourse":
        return <CreateCourse />;
      case "addStudents":
        return <AddStudents />;
      case "selectCourse":
        return <SelectCourse />;
      case "deleteCourse": // New case for CourseDelete
        return <CourseDelete />;
      case "openAttendanceCollect":
        return <OpenattendanceCollect />
      default:
        return null;
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center">
        <img className="h-[18mm] m-4" src={logo} alt="Logo" />
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
      <div className="flex flex-col items-center">
        <div className="flex mb-7">
          <button
            onClick={() => setActiveComponent("createCourse")}
            className={`${activeComponent === "createCourse"
              ? "bg-orange-600 text-white"
              : "bg-gray-300"
              } px-4 py-2 rounded mr-2 font-roboto-slab`}>
            Create Course
          </button>
          <button
            onClick={() => setActiveComponent("addStudents")}
            className={`${activeComponent === "addStudents"
              ? "bg-orange-600 text-white"
              : "bg-gray-300"
              } px-4 py-2 rounded mr-2 font-roboto-slab`}>
            Add Students
          </button>
          <button
            onClick={() => setActiveComponent("selectCourse")}
            className={`${activeComponent === "selectCourse"
              ? "bg-orange-600 text-white"
              : "bg-gray-300"
              } px-4 py-2 rounded mr-2 font-roboto-slab`}>
            Select Course
          </button>
          <button
            onClick={() => setActiveComponent("deleteCourse")}
            className={`${activeComponent === "deleteCourse"
              ? "bg-orange-600 text-white"
              : "bg-gray-300"
              } px-4 py-2 rounded font-roboto-slab`}>
            Delete Course
          </button>
          <button
            onClick={() => setActiveComponent("openAttendanceCollect")}
            className={`${activeComponent === "openAttendanceCollect"
              ? "bg-orange-600 text-white"
              : "bg-gray-300"
              } px-4 py-2 rounded ml-2 font-roboto-slab`}>
            Attendance Collect
          </button>
        </div>
        {renderComponent()}
      </div>
    </>
  );
};

export default TeacherHome;