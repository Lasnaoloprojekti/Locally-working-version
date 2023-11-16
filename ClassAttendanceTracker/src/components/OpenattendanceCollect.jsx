import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createSession, selectCourse } from "../Hooks/ApiHooks";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

const OpenattendanceCollect = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [topics, setTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [setSelectedDate] = useState(null);
  const [timeOfDay, setTimeOfDay] = useState("");
  const navigate = useNavigate();
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setDate(formattedDate);

    const hour = today.getHours();
    const minute = today.getMinutes();
    if (hour > 12 || (hour === 12 && minute > 30)) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Morning");
    }
  }, []);

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
      const selectedCourseData = courses.find(
        (course) => course._id === selectedCourse
      );
      setTopics(selectedCourseData ? selectedCourseData.topics : []);
    } else {
      setTopics([]);
    }
  }, [selectedCourse, courses]);

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeOfDayChange = (event) => {
    setTimeOfDay(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const sessionData = {
      courseId: selectedCourse,
      topic: selectedTopic,
      date: date, // Use the date state here
      timeOfDay,
    };

    try {
      const response = await createSession(sessionData);
      console.log("Session created:", response);

      // Extracting session ID from the response
      const sessionId = response.sessionId;

      // Get the selected course name
      const selectedCourseName = courses.find(
        (course) => course._id === selectedCourse
      )?.name;

      // Navigate to the waiting page with session ID, course name, and topic
      navigate(
        `/wait/${sessionId}/${encodeURIComponent(
          selectedCourseName
        )}/${encodeURIComponent(selectedTopic)}`
      );
    } catch (error) {
      console.error("Error creating session:", error);
      // Handle error here
    }
  };

  return (
    <div className="max-w-4xl w-full">
      <div className="text-center font-medium text-xl mb-4 font-roboto-slab">
        Collect Attendances
      </div>
      <form
        className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg"
        onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
            Select Course
          </label>
          <input
            required
            className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
            type="text"
            placeholder="Enter course ID"
            value={selectedCourse}
            onChange={handleCourseChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
            Select Topic
          </label>
          <input
            required
            className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
            type="text"
            placeholder="Enter topic"
            value={selectedTopic}
            onChange={handleTopicChange}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
            Select Day
          </label>
          <input
            required
            className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <RadioGroup
          row
          name="timeOfDay"
          value={timeOfDay}
          onChange={(e) => setTimeOfDay(e.target.value)}>
          <FormControlLabel
            value="Morning"
            control={<Radio />}
            label="Morning"
          />
          <FormControlLabel
            value="Afternoon"
            control={<Radio />}
            label="Afternoon"
          />
        </RadioGroup>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-4 w-full p-3 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
            Collect Attendances
          </button>
        </div>
      </form>
    </div>
  );
};

export default OpenattendanceCollect;
