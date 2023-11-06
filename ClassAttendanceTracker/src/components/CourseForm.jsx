import { useState, useEffect } from "react";
import axios from "axios";
import { Select, MenuItem } from "@mui/material";

const CourseForm = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");

  // haetaa kurssit componentin mountissa
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/courses");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // haetaa topicit kun kurssi valitaan
  useEffect(() => {
    const fetchTopics = async () => {
      if (selectedCourse) {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/courses/${selectedCourse}/topics`
          );
          setTopics(response.data);
        } catch (error) {
          console.error("Error fetching topics:", error);
        }
      } else {
        setTopics([]); // klaarataan topicit jos kurssia ei valita
      }
    };

    fetchTopics();
  }, [selectedCourse]);

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
    <form
      className="justify-center flex flex-col max-w-sm mx-auto mt-1"
      onSubmit={handleSubmit}>
      <Select
        className="mt-6 text-center  text-white rounded-full "
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
        className={`text-center mt-6 ${selectedCourse} rounded-full `}
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
        className="mt-6 bg-blue-500 text-white rounded-lg py-3 px-4 shadow-lg hover:bg-blue-600"
        type="submit">
        Submit
      </button>
    </form>
  );
};

export default CourseForm;
