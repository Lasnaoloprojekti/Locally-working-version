import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { selectCourse, addStudentsToCourse } from "../Hooks/ApiHooks"; // Ensure this is the correct path to your API hook
import useAddStudentsToCourse from "../Hooks/useAddStudentsToCourse";

const AddStudents = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [studentData, setStudentData] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    isError: false,
  });

  const addStudents = useAddStudentsToCourse();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await selectCourse();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setAlert({
          show: true,
          message: "Failed to fetch courses",
          isError: true,
        });
      }
    };

    fetchCourses();
  }, []);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleInputChange = (event) => {
    setStudentData(event.target.value);
  };

  const validateStudentData = (data) => {
    const validFormatRegex = /^[A-Za-z]+;[A-Za-z]+;\d+;$/;
    return data.split("\n").every((line) => validFormatRegex.test(line));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedCourse) {
      setAlert({
        show: true,
        message: "Please select a course.",
        isError: true,
      });
      return;
    }

    if (!validateStudentData(studentData)) {
      setAlert({
        show: true,
        message: "Invalid student data format.",
        isError: true,
      });
      return;
    }

    if (!window.confirm("Are you sure you want to add these students?")) return;

    try {
      const studentArray = studentData.split("\n").map((line) => {
        const [lastName, firstName, studentNumber] = line
          .split(";")
          .map((s) => s.trim());
        return { lastName, firstName, studentNumber };
      });

      await addStudents(selectedCourse, studentArray);
      setStudentData("");
      setAlert({
        show: true,
        message: "Students added successfully!",
        isError: false,
      });
    } catch (error) {
      console.error("Error adding students:", error);
      setAlert({
        show: true,
        message: "Failed to add students. Please try again.",
        isError: true,
      });
    }
  };

  return (
    <div className="min-h-screen w-full items-center flex flex-col px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center font-medium text-xl mb-4 font-roboto-slab">
          Add Students Manually
        </div>
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="courseSelector"
                className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                Select a course:
              </label>
              <select
                id="courseSelector"
                value={selectedCourse}
                onChange={handleCourseChange}
                className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full mb-4">
                <option value="" disabled>
                  Select Course
                </option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label
                htmlFor="studentData"
                className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                Enter student data (LastName;FirstName;StudentNumber; format):
              </label>
              <textarea
                id="studentData"
                rows="6"
                className="border border-gray-300 p-3 rounded-lg block w-full font-open-sans"
                value={studentData}
                onChange={handleInputChange}
                placeholder="Doe;John;123456;"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                Add Students
              </button>
            </div>
          </form>
          {alert.show && (
            <div
              className={`mt-4 p-4 rounded-md transition-all ${
                alert.isError
                  ? "bg-red-100 border border-red-400 text-red-800"
                  : "bg-green-100 border border-green-400 text-green-800"
              }`}>
              <p>{alert.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddStudents;

// Author: Adam Ahmethanov
// Date: November 7, 2023
