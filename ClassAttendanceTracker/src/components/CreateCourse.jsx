import React, { useState, useEffect } from "react";
import { createCourse, getTopics } from "../Hooks/ApiHooks";

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    courseName: "",
    groupName: "",
    topics: [],
    startDate: "",
    endDate: "",
  });
  const [availableTopics, setAvailableTopics] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    isError: false,
  });

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const topics = await getTopics();
        setAvailableTopics(topics);
      } catch (error) {
        console.error("Error fetching topics:", error);
      }
    };

    fetchTopics();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (window.confirm("Are you sure you want to create this course?")) {
      try {
        const requestData = {
          courseName: courseData.courseName,
          groupName: courseData.groupName,
          topics: courseData.topics,
          startDate: courseData.startDate,
          endDate: courseData.endDate,
          userId: localStorage.getItem("userid"),
        };

        await createCourse(requestData);
        setAlert({
          show: true,
          message: "Course created successfully!",
          isError: false,
        });
        setTimeout(
          () => setAlert({ show: false, message: "", isError: false }),
          5000
        );

        setCourseData({
          courseName: "",
          groupName: "",
          topics: [],
          startDate: "",
          endDate: "",
        });
      } catch (error) {
        console.error("Error creating course:", error);
        setAlert({
          show: true,
          message: "Failed to create course. Please try again.",
          isError: true,
        });
        setTimeout(
          () => setAlert({ show: false, message: "", isError: false }),
          5000
        );
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData((prevData) => ({
      ...prevData,
      [name]:
        name === "topics"
          ? value.split(",").map((topic) => topic.trim())
          : value,
    }));
  };

  return (
    <div className="min-h-screen w-full items-center flex flex-col px-6">
      <div className="max-w-4xl w-full">
        {" "}
        <form
          className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg"
          onSubmit={handleSubmit}>
          {/* Course Name Input */}
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Course Name
            </label>
            <input
              required
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Enter course name"
              name="courseName"
              value={courseData.courseName}
              onChange={handleChange}
            />
          </div>

          {/* Group Name Input */}
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Group Name
            </label>
            <input
              required
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Enter group name"
              name="groupName"
              value={courseData.groupName}
              onChange={handleChange}
            />
          </div>

          {/* Topics Input with Suggestions */}
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Topics
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              placeholder="Add course topics e.g. Mathematics, Physics"
              name="topics"
              value={courseData.topics.join(", ")}
              onChange={handleChange}
              list="topic-list"
            />
            <datalist id="topic-list">
              {availableTopics.map((topic, index) => (
                <option key={index} value={topic.name} />
              ))}
            </datalist>
          </div>

          {/* Start Date Input */}
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Start Date
            </label>
            <input
              className="w-full p-2 border rounded"
              type="date"
              name="startDate"
              value={courseData.startDate}
              onChange={handleChange}
            />
          </div>

          {/* End Date Input */}
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              End Date
            </label>
            <input
              className="w-full p-2 border rounded"
              type="date"
              name="endDate"
              value={courseData.endDate}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            className="px-4 w-full p-3 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            type="submit">
            {" "}
            Create Course
          </button>
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
  );
};

export default CreateCourse;