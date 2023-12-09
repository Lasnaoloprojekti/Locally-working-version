import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceDataModification = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [students, setStudents] = useState([]);
    const userId = localStorage.getItem('userid');
    const [selectedStudent, setSelectedStudent] = useState('');
    const [attendances, setAttendances] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAttendanceStatusUpdate = async (attendanceId, newStatus) => {
        setSuccessMessage('');
        setErrorMessage('');

        try {
            const response = await axios.post(`http://localhost:3001/api/updateattendancestatus`, {
                attendanceId: attendanceId,
                newStatus: newStatus
            });

            if (response.status === 200) {
                setSuccessMessage('Attendance status updated successfully.');
                // Re-fetch the attendances to reflect the changes
                handleStudentChange({ target: { value: selectedStudent } });
            }
        } catch (error) {
            console.error('Error updating attendance status:', error);
            setErrorMessage('Failed to update attendance status. Please try again.');
        }
    };

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:3001/selectactivecourse', { headers: { userid: userId } });
                console.log('Courses fetcheeeeeeeeeeed vittu:', response);
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    const handleCourseChange = async (e) => {
        const courseId = e.target.value;
        setSelectedCourse(courseId);
        console.log('Selected course inside handleCourseChange function:', courseId);

        try {
            const response = await axios.get(`http://localhost:3001/api/coursestudents/${courseId}`);
            console.log('Students fetched inside function:', response);
            setStudents(response.data.students); // Assuming the response has a students field
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleStudentChange = async (e) => {
        const studentId = e.target.value;
        setSelectedStudent(studentId);

        try {
            const response = await axios.get(`http://localhost:3001/api/studentattendance/${studentId}`);
            console.log('students Attendances fetched:', response);
            setAttendances(response.data.attendances); // Assuming the response has an attendances field
        } catch (error) {
            console.error('Error fetching attendances:', error);
        }
    };



    const handleMarkAbsent = async (attendanceId) => {
        setSuccessMessage('');
        setErrorMessage('');
        try {
            const response = await axios.post(`http://localhost:3001/api/markabsent/${attendanceId}`);
            if (response.status === 200) {
                setSuccessMessage('Attendance marked as absent successfully.');
            }
        } catch (error) {
            console.error('Error marking attendance as absent:', error);
            setErrorMessage('Failed to mark attendance as absent. Please try again.');
        }
    };


    return (
        <div className="min-h-screen w-full items-center flex flex-col px-6">
            <div className="max-w-4xl w-full">
                <div className="text-center font-medium text-xl mb-4 font-roboto-slab">
                    Modify Attendance Data
                </div>
                <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                            Select Course
                        </label>
                        <select
                            className="border border-gray-300 p-3 h-14 block w-full font-open-sans rounded-lg"
                            value={selectedCourse}
                            onChange={handleCourseChange}
                        >
                            <option value="">Select Course</option>
                            {courses.map(course => (
                                <option key={course._id} value={course._id}>{course.name}</option>
                            ))}
                        </select>

                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                            Select Student
                        </label>
                        <select
                            className="border border-gray-300 p-3 h-14 block w-full font-open-sans rounded-lg"
                            value={selectedStudent}
                            onChange={handleStudentChange}
                        >
                            <option value="">Select Student</option>
                            {students.map(student => (
                                <option key={student._id} value={student._id}>
                                    {student.firstName + ' ' + student.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h2 className="text-lg font-roboto-slab my-4">Attendances:</h2>
                        <ul>
                            {attendances.map(attendance => (
                                <li key={attendance._id} className="mb-2">
                                    Date: {attendance.date} - Topic: {attendance.topic} - Status: {attendance.status}
                                    <select
                                        onChange={(e) => handleAttendanceStatusUpdate(attendance._id, e.target.value)}
                                        defaultValue={attendance.status}
                                        className="ml-4 border border-gray-300 p-2 rounded">
                                        <option value="Present">Present</option>
                                        <option value="Absent">Absent</option>
                                        <option value="Accept absence">Accept absence</option>
                                    </select>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {successMessage && (
                        <div className="text-green-600 mt-4">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="text-red-600 mt-4">{errorMessage}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AttendanceDataModification;
