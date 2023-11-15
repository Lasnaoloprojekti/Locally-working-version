import React, { useState } from "react";
import { createCourse } from "../Hooks/ApiHooks";

const CreateCourse = () => {
    const [respondMessage, setRespondMessage] = useState('');
    const [courseData, setCourseData] = useState({
        courseName: '',
        groupName: '',
        topics: [],
        startDate: '',
        endDate: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestData = {
                courseName: courseData.courseName,
                groupName: courseData.groupName,
                topics: courseData.topics,
                startDate: courseData.startDate,
                endDate: courseData.endDate,
            };

            const response = await createCourse(requestData);

            console.log(response.message, "vastausssssss serverilttttttttttttt");

            if (response.message === "Course created successfully") {
                setRespondMessage("new course created successfully :)");
            } else {
                setRespondMessage("Some unexpected bullshit occurred while creating new course :(");
            }

        } catch (error) {
            console.error("Error creating course:", error);
            setRespondMessage("Some unexpected bullshit occurred while creating new course :(");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name} with value: ${value}`);

        if (name === 'topics') {
            // Split the input value by commas and create an array of trimmed topics
            const topicsArray = value.split(',').map(topic => topic.trim());
            setCourseData((prevData) => ({
                ...prevData,
                [name]: topicsArray,
            }));
        } else {
            // For other fields, update the state normally
            setCourseData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    return (
        <form className="w-96" onSubmit={handleSubmit}>

            <div className="mb-4">
                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Course name</label>
                <input
                    required
                    className="w-full p-2 text-black border rounded font-open-sans"
                    type="text"
                    placeholder="Enter course name"
                    name='courseName'
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Group name</label>
                <input
                    required
                    className="w-full p-2 text-black border rounded font-open-sans"
                    type="text"
                    placeholder="Enter Group name"
                    name='groupName'
                    onChange={handleChange}
                />
            </div>

            <div className="mb-4">
                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Topics</label>
                <input
                    required className="w-full p-2 text-black border rounded font-open-sans"
                    type="text"
                    placeholder="Add course topics e.g. Mathematics, Physics, Chemistry"
                    name='topics'
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Start date</label>
                <input
                    className="w-full p-2 text-black border rounded font-open-sans"
                    type="date"
                    name='startDate'
                    onChange={handleChange}
                />
            </div>
            <div className="mb-4">
                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">End date</label>
                <input
                    className="w-full p-2 text-black border rounded "
                    type="date"
                    placeholder="Add course topics"
                    name='endDate'
                    onChange={handleChange}
                />
            </div>
            <button
                className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700 font-roboto-slab"
                type="submit">
                Create
            </button>
            <p className={`self-center w-2/3 mt-6 underline ${respondMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                {respondMessage}
            </p>
        </form>
    )
}

export default CreateCourse;
