import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentModification = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState('');
    const [topics, setTopics] = useState([]);
    const [participation, setParticipation] = useState({});

    useEffect(() => {
        // Fetch courses
        // Replace with your API endpoint
        axios.get('/api/courses').then(response => setCourses(response.data));
    }, []);

    const handleCourseChange = async (e) => {
        const courseId = e.target.value;
        setSelectedCourse(courseId);

        // Fetch students and topics based on selected course
        // Replace with your API endpoints
        const studentsResponse = await axios.get(`/api/coursestudents/${courseId}`);
        setStudents(studentsResponse.data.students);

        const topicsResponse = await axios.get(`/api/coursetopics/${courseId}`);
        setTopics(topicsResponse.data.topics);
    };

    const handleStudentChange = (e) => {
        setSelectedStudent(e.target.value);
        // Initialize participation for each topic as false (not participating)
        const initialParticipation = topics.reduce((acc, topic) => ({ ...acc, [topic]: false }), {});
        setParticipation(initialParticipation);
    };

    const handleTopicParticipationChange = (topic, isParticipating) => {
        setParticipation({ ...participation, [topic]: isParticipating });
    };

    const handleSubmit = () => {
        // Submit the updated participation data
        // Replace with your API endpoint
        axios.post('/api/updateparticipation', {
            studentId: selectedStudent,
            courseId: selectedCourse,
            participation
        }).then(response => {
            // Handle response
        }).catch(error => {
            // Handle error
        });
    };

    return (
        <div>
            <h2>Student Modification</h2>
            <select value={selectedCourse} onChange={handleCourseChange}>
                <option value="">Select Course</option>
                {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.name}</option>
                ))}
            </select>

            <select value={selectedStudent} onChange={handleStudentChange}>
                <option value="">Select Student</option>
                {students.map(student => (
                    <option key={student.id} value={student.id}>{student.name}</option>
                ))}
            </select>

            <div>
                {topics.map(topic => (
                    <div key={topic}>
                        <label>
                            {topic}
                            <input
                                type="checkbox"
                                checked={participation[topic]}
                                onChange={(e) => handleTopicParticipationChange(topic, e.target.checked)}
                            />
                        </label>
                    </div>
                ))}
            </div>

            <button onClick={handleSubmit}>Update Participation</button>
        </div>
    );
};

export default StudentModification;
