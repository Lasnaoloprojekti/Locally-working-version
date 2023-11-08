import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import selectCourse from "../Hooks/selectApiHooks";

const SelectCourse = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await selectCourse();
        console.log("Courses fetched:", response); // Add this line to debug
        setCourses(response);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Fetch topics when a course is selected
  useEffect(() => {
    const fetchTopics = async () => {
      if (selectedCourse) {
        try {
          // Assuming the API returns the topics array within the course object
          // Find the selected course in the courses state
          const selectedCourseData = courses.find(
            (course) => course._id === selectedCourse
          );
          setTopics(selectedCourseData ? selectedCourseData.topics : []);
        } catch (error) {
          console.error("Error fetching topics:", error);
        }
      } else {
        setTopics([]); // Clear topics if no course is selected
      }
    };

    fetchTopics();
  }, [selectedCourse, courses]); // Include courses in the dependency array so it updates when courses state updates

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  // handleformi valitulle kurssille ja topicille
  const handleSubmit = (event) => {
    event.preventDefault();
    // tungetaan dataa bäkkärille
    console.log(
      `Selected course ID: ${selectedCourse}, Selected topic ID: ${selectedTopic}`
    );
  };

  return (
    <div className="w-96">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-sm font-semibold mb-2">
        <Select
          className="block text-black text-sm font-semibold mb-2"
          value={selectedCourse}
          onChange={handleCourseChange}
          displayEmpty>
          <MenuItem value="" disabled>
            Select Course
          </MenuItem>
          {courses.map((course) => (
            <MenuItem key={course._id} value={course._id}>
              {course.name}
            </MenuItem>
          ))}
        </Select>

        <Select
          className="block text-black text-sm font-semibold mb-2"
          value={selectedTopic}
          onChange={handleTopicChange}
          displayEmpty
          disabled={!selectedCourse}>
          <MenuItem value="" disabled>
            Select Topic
          </MenuItem>
          {topics.map((topic) => (
            <MenuItem key={topic._id} value={topic._id}>
              {topic.name}
            </MenuItem>
          ))}
        </Select>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded-lg py-3 px-4 shadow-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
          type="submit">
          View
        </button>
      </form>
    </div>
  );
};

// Author: JJ
// Date: November 4, 2023

export default SelectCourse;
