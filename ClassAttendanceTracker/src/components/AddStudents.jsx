import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudents = () => {
  const [studentData, setStudentData] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '', isError: false });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setStudentData(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const validateStudentDataFormat = (data) => {
    const validFormatRegex = /^\s*([A-Za-z]+);([A-Za-z]+);(\d+);\s*$/;
    const lines = data.trim().split('\n');
    for (let line of lines) {
      if (!validFormatRegex.test(line)) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlert({ show: false, message: '', isError: false });

    if (!selectedCourse) {
      setAlert({ show: true, message: 'Please select a course.', isError: true });
    } else if (!studentData.trim()) {
      setAlert({ show: true, message: 'No student data entered.', isError: true });
    } else if (!validateStudentDataFormat(studentData)) {
      setAlert({ show: true, message: 'Some student data is in the incorrect format.', isError: true });
    } else {
      setAlert({
        show: true,
        message: `Students have been added to ${selectedCourse} successfully!`,
        isError: false
      });

      console.log('Submitted data:', studentData);
      console.log('Selected course:', selectedCourse);
      setStudentData('');
    }

    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 5000);
  };

  const handleBack = () => {
    navigate('/teacherhome');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center px-6">
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
                <option value=""></option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor="studentData" className="block mb-2 text-sm font-medium text-gray-600">
                LastName;FirstName;StudentNumber; format):
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

export default AddStudents;
