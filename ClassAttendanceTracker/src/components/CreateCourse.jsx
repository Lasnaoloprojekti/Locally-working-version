import React, { useState } from "react";
import createCourse from "../Hooks/createApiHooks";

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    groupName: "",
    topics: "",
    startDate: "",
    endDate: "",
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
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setCourseData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="w-96">
      <form
        className="flex flex-col text-sm font-semibold mb-2"
        onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Course name
          </label>
          <input
            className="w-full p-2 text-black border rounded"
            type="text"
            placeholder="Enter course name"
            name="courseName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Group name
          </label>
          <input
            className="w-full p-2 text-black border rounded"
            type="text"
            placeholder="Enter Group name"
            name="groupName"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Topics
          </label>
          <input
            className="w-full p-2 text-black border rounded"
            type="text"
            placeholder="Add course topics"
            name="topics"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            Start date
          </label>
          <input
            className="w-full p-2 text-black border rounded"
            type="date"
            name="startDate"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm font-semibold mb-2">
            End date
          </label>
          <input
            className="w-full p-2 text-black border rounded"
            type="date"
            placeholder="Add course topics"
            name="endDate"
            onChange={handleChange}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-lg py-3 px-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateCourse;
