import { useState, useEffect } from "react";
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
      const selectedCourseData = courses.find(
        (course) => course._id === selectedCourse
      );
      setTopics(selectedCourseData ? selectedCourseData.topics : []);
    } else {
      setTopics([]);
    }
  }, [selectedCourse, courses]);

  // Ensure that the initial selected values match the available options
  useEffect(() => {
    if (
      courses.length > 0 &&
      !courses.some((course) => course._id === selectedCourse)
    ) {
      setSelectedCourse(""); // Reset to a valid value
    }
    if (topics.length > 0 && !topics.includes(selectedTopic)) {
      setSelectedTopic(""); // Reset to a valid value
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
    <div className="min-h-screen w-full items-center flex flex-col px-6">
      <div className="max-w-4xl w-full">
        <div className="text-center font-medium text-xl mb-4 font-roboto-slab">
          Select a Course and Topic
        </div>
        <div className="bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-600 font-roboto-slab">
                Select a course:
              </label>
              <select
                value={selectedCourse}
                onChange={handleCourseChange}
                className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full mb-4">
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
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium  text-gray-600 font-roboto-slab">
                Select a topic:
              </label>
              <select
                value={selectedTopic}
                onChange={handleTopicChange}
                disabled={!selectedCourse}
                className="border font-open-sans border-gray-300 p-3 rounded-lg block w-full mb-4">
                <option value="" disabled>
                  Select Topic
                </option>
                {topics.map((topic, index) => (
                  <option key={index} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-900 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors">
                View
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SelectCourse;
