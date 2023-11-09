import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import selectCourse from '../Hooks/selectApiHooks'; // Ensure this is the correct path to your API hook

const AddStudents = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [studentData, setStudentData] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', isError: false });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await selectCourse(); // Using selectCourse API call
        setCourses(response);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setAlert({ show: true, message: 'Failed to fetch courses', isError: true });
      }
    };

    fetchCourses();
  }, []);

  const handleInputChange = (event) => {
    setStudentData(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedCourse) {
      setAlert({ show: true, message: 'Please select a course.', isError: true });
    } else {
      // Here you would handle the submission of the student data to the selected course
      console.log('Submitted data:', studentData);
      console.log('Selected course:', selectedCourse);
      // Resetting the state after submission for demonstration purposes
      setStudentData('');
      setAlert({
        show: true,
        message: 'Students added successfully!',
        isError: false
      });
    }
  };

  const handleBack = () => {
    navigate('/teacherhome');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center font-medium text-xl mb-4">Add Students Manually</div>
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="courseSelector" className="block mb-2 text-sm font-medium text-gray-600">
                Select a course:
              </label>
              <select
                id="courseSelector"
                value={selectedCourse}
                onChange={handleCourseChange}
                className="border border-gray-300 p-3 rounded-lg block w-full mb-4"
              >
                <option value="" disabled>Select Course</option>
                {courses.map((course) => (
                  <option key={course._id} value={course._id}>{course.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="studentData" className="block mb-2 text-sm font-medium text-gray-600">
                Enter student data (LastName;FirstName;StudentNumber; format):
              </label>
              <textarea
                id="studentData"
                rows="6"
                className="border border-gray-300 p-3 rounded-lg block w-full"
                value={studentData}
                onChange={handleInputChange}
                placeholder="Ahmethanov;Adam;123456;"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Add Students
              </button>
            </div>
          </form>
          {alert.show && (
            <div
              className={`mt-4 p-4 rounded-md transition-all ${alert.isError ? 'bg-red-100 border border-red-400 text-red-800' : 'bg-green-100 border border-green-400 text-green-800'}`}
            >
              <p>{alert.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Author: Adam Ahmethanov
// Date: November 7, 2023

export default AddStudents;
