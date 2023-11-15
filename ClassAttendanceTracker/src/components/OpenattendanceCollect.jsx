import { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { selectCourse } from "../Hooks/ApiHooks";
import { useNavigate } from 'react-router-dom';
import { createSession } from '../Hooks/ApiHooks';

const OpenattendanceCollect = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeOfDay, setTimeOfDay] = useState('');
    const navigate = useNavigate();

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
            date: selectedDate,
            timeOfDay
        };

        try {
            const response = await createSession(sessionData);
            console.log("Session created:", response);

            // Extracting session ID from the response
            const sessionId = response.sessionId;

            // Get the selected course name
            const selectedCourseName = courses.find(course => course._id === selectedCourse)?.name;

            // Navigate to the waiting page with session ID, course name, and topic
            navigate(`/wait/${sessionId}/${encodeURIComponent(selectedCourseName)}/${encodeURIComponent(selectedTopic)}`);
        } catch (error) {
            console.error("Error creating session:", error);
            // Handle error here
        }
    };

    return (
        <div className="w-96 mt-1">
            <form onSubmit={handleSubmit} className="flex flex-col text-sm font-semibold mb-2 font-open-sans">
                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Select Course</label>
                <Select className="mb-4" value={selectedCourse} onChange={handleCourseChange} displayEmpty>
                    <MenuItem value="" disabled>Course</MenuItem>
                    {courses.map(course => (
                        <MenuItem key={course._id} value={course._id}>
                            {course.name}
                        </MenuItem>
                    ))}
                </Select>

                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Select Topic</label>
                <Select className="mb-4 font-open-sans" value={selectedTopic} onChange={handleTopicChange} displayEmpty disabled={!selectedCourse}>
                    <MenuItem className="font-open-sans" value="" disabled>Topic</MenuItem>
                    {topics.map((topic, index) => (
                        <MenuItem className="font-open-sans" key={index} value={topic}>
                            {topic}
                        </MenuItem>
                    ))}
                </Select>

                <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Select Day</label>
                <input
                    required
                    className="w-full mb-4 h-14 p-3 text-black border rounded"
                    type="date"
                    onChange={handleDateChange}
                />

                <FormControl className="font-open-sans" component="fieldset" >
                    <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">Select Time of Day</label>
                    <RadioGroup row name="timeOfDay" className=" mb-3" value={timeOfDay} onChange={handleTimeOfDayChange}>
                        <FormControlLabel className="font-open-sans" value="Morning" control={<Radio />} label="Morning" />
                        <FormControlLabel className="font-open-sans" value="Afternoon" control={<Radio />} label="Afternoon" />
                    </RadioGroup>
                </FormControl>

                <button
                    className="w-full bg-orange-600 text-white p-2 rounded-lg py-3 px-4 shadow-lg hover:bg-orange-400 focus:outline-none focus:ring focus:border-orange-700 font-roboto-slab"
                    type="submit">
                    Collect Attendances
                </button>
            </form>
        </div>
    );
};

export default OpenattendanceCollect;
