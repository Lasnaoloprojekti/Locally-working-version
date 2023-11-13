import { useState, useEffect } from "react";
import { Select, MenuItem } from "@mui/material";
import { selectCourse } from "../Hooks/ApiHooks";

const SelectCourse = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await selectCourse();
        console.log("Courses fetched:", response);
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      const selectedCourseData = courses.find(course => course._id === selectedCourse);
      setTopics(selectedCourseData ? selectedCourseData.topics : []);
    } else {
      setTopics([]);
    }
  }, [selectedCourse, courses]);

  // Ensure that the initial selected values match the available options
  useEffect(() => {
    if (courses.length > 0 && !courses.some(course => course._id === selectedCourse)) {
      setSelectedCourse(''); // Reset to a valid value
    }
    if (topics.length > 0 && !topics.includes(selectedTopic)) {
      setSelectedTopic(''); // Reset to a valid value
    }
  }, [courses, topics, selectedCourse, selectedTopic]);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Selected course ID: ${selectedCourse}, Selected topic: ${selectedTopic}`
    );
    // Add logic to submit these values to your backend or another handler
  };

  return (
    <div className="w-96">
      <form onSubmit={handleSubmit} className="flex flex-col text-sm font-semibold mb-2">
        <Select value={selectedCourse} onChange={handleCourseChange} displayEmpty>
          <MenuItem value="" disabled>Select Course</MenuItem>
          {courses.map(course => (
            <MenuItem key={course._id} value={course._id}>
              {course.name}
            </MenuItem>
          ))}
        </Select>

        <Select value={selectedTopic} onChange={handleTopicChange} displayEmpty disabled={!selectedCourse}>
          <MenuItem value="" disabled>Select Topic</MenuItem>
          {topics.map((topic, index) => (
            <MenuItem key={index} value={topic}>
              {topic}
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

export default SelectCourse;