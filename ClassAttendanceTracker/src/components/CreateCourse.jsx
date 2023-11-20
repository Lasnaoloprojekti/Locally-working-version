import React, { useState } from "react";
import { createCourse } from "../Hooks/ApiHooks";

const CreateCourse = () => {
  const [respondMessage, setRespondMessage] = useState("");
  const [courseData, setCourseData] = useState({
    courseName: "",
    groupName: "",
    topics: [],
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

      console.log(response.message, "vastausssssss serverilttttttttttttt");

      if (response.message === "Course created successfully") {
        setRespondMessage("new course created successfully :)");
      } else {
        setRespondMessage(
          "Some unexpected bullshit occurred while creating new course :("
        );
      }
    } catch (error) {
      console.error("Error creating course:", error);
      setRespondMessage(
        "Some unexpected bullshit occurred while creating new course :("
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);

    if (name === "topics") {
      // Split the input value by commas and create an array of trimmed topics
      const topicsArray = value.split(",").map((topic) => topic.trim());
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
    <div className="min-h-screen w-full items-center flex flex-col px-6">
      <div className="max-w-4xl w-full">
        {" "}
        <div className="text-center font-medium text-xl mb-4 font-roboto-slab">
          Create a course
        </div>
        <form
          className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg"
          onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
              Course name
            </label>
            <input
              required
              className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
              type="text"
              placeholder="Enter course name"
              name="courseName"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
              Group name
            </label>
            <input
              required
              className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
              type="text"
              placeholder="Enter group name"
              name="groupName"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
              Topics
            </label>
            <input
              required
              className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
              type="text"
              placeholder="Add course topics e.g. Mathematics, Physics, Chemistry"
              name="topics"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
              Start date
            </label>
            <input
              className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
              type="date"
              name="startDate"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
              End date
            </label>
            <input
              className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
              type="date"
              name="endDate"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="px-4 w-full p-3 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
              Create
            </button>
          </div>
          <p
            className={`mt-4 ${
              respondMessage.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}>
            {respondMessage}
          </p>
        </form>
      </div>
    </div>
  );
};

export default CreateCourse;
