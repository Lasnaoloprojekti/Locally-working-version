import React, { useState, useEffect } from 'react';
import { Select, MenuItem, Button } from '@mui/material';
import { selectCourse } from '../Hooks/ApiHooks';
import { useDeleteCourse } from '../Hooks/ApiHooks';

const CourseDelete = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [alert, setAlert] = useState({ show: false, message: '', isError: false });
  const deleteCourse = useDeleteCourse();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await selectCourse();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setAlert({ show: true, message: 'Failed to fetch courses', isError: true });
      }
    };

    fetchCourses();
  }, []);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this course?')) return;

    try {
      const response = await deleteCourse(selectedCourse);
      if (response.status === 200) {
        setCourses(courses.filter(course => course._id !== selectedCourse));
        setSelectedCourse("");
        setAlert({ show: true, message: 'Course deleted successfully.', isError: false });
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      setAlert({ show: true, message: 'Failed to delete the course. Please try again.', isError: true });
    }
  };

  return (
    <div className="flex flex-col justify-center px-6">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center font-medium text-xl mb-4">Delete Course</div>
        <div className="p-8 border border-gray-300 rounded-lg shadow-lg">
          <Select
            className="block text-black text-sm font-semibold mb-2"
            value={selectedCourse}
            onChange={handleCourseChange}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select Course
            </MenuItem>
            {courses.map((course) => (
              <MenuItem key={course._id} value={course._id}>
                {course.name}
              </MenuItem>
            ))}
          </Select>

          <Button
            className="w-full bg-red-500 text-white p-2 rounded-lg py-3 px-4 shadow-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
            onClick={handleDelete}
            disabled={!selectedCourse}
          >
            Delete Course
          </Button>
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
// Date: November 9, 2023

export default CourseDelete;
