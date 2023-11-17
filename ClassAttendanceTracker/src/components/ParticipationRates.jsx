// ParticipationRates.jsx
import React, { useState, useEffect } from "react";
import { fetchParticipationRates, selectCourse } from "../Hooks/ApiHooks";

export const ParticipationRates = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [participationData, setParticipationData] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await selectCourse();
                setCourses(response.data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
        setParticipationData([]); // Clear previous participation data
    };

    const getParticipationRates = async () => {
        if (!selectedCourse) {
            alert("Please select a course");
            return;
        }

        try {
            const response = await fetchParticipationRates(selectedCourse);
            setParticipationData(response.data);
        } catch (error) {
            console.error("Error fetching participation rates:", error);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center px-6">
            <div className="max-w-4xl w-full">
                <div className="text-center text-xl mb-4 font-roboto-slab">
                    Select a Course
                </div>
                <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                            Select a course:
                        </label>
                        <select
                            value={selectedCourse}
                            onChange={handleCourseChange}
                            className="border border-gray-300 p-3 rounded-lg block w-full mb-4 font-open-sans"
                        >
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
                    <div className="flex justify-end">
                        <button
                            onClick={getParticipationRates}
                            className="px-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg  transition-colors font-roboto-slab"
                        >
                            Get Participation Rates
                        </button>
                    </div>
                </div>
            </div>

            {participationData.length > 0 && (
                <div className="max-w-4xl w-full mt-6">
                    <table className="w-full text-sm text-left text-gray-500 font-roboto-slab">
                        <thead className="text-xs text-white uppercase bg-blue-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 ">
                                    Lastname
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Firstname
                                </th>
                                {/* Dynamically add headers for topics */}
                                {Object.keys(participationData[0].participation).map((topic) => (
                                    <th key={topic} scope="col" className="px-6 py-3">
                                        {topic}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {participationData.map((student, index) => (
                                <tr key={index} className="bg-white border-b font-open-sans">
                                    <td className="px-6 py-4">{student.lastName}</td>
                                    <td className="px-6 py-4">{student.firstName}</td>
                                    {Object.entries(student.participation).map(([topic, rate]) => (
                                        <td key={topic} className="px-6 py-4">{rate}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ParticipationRates;
