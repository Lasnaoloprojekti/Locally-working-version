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
            navigate('/wait');
        } catch (error) {
            console.error("Error creating session:", error);
            // Handle error here
        }
    };

    return (
        <div className="w-96 mt-1">
            <form onSubmit={handleSubmit} className="flex flex-col text-sm font-semibold mb-2">
                <label className="block text-black text-sm font-semibold mb-2">Select Course</label>
                <Select className="mb-4" value={selectedCourse} onChange={handleCourseChange} displayEmpty>
                    <MenuItem value="" disabled>Course</MenuItem>
                    {courses.map(course => (
                        <MenuItem key={course._id} value={course._id}>
                            {course.name}
                        </MenuItem>
                    ))}
                </Select>

                <label className="block text-black text-sm font-semibold mb-2">Select Topic</label>
                <Select className="mb-4" value={selectedTopic} onChange={handleTopicChange} displayEmpty disabled={!selectedCourse}>
                    <MenuItem value="" disabled>Topic</MenuItem>
                    {topics.map((topic, index) => (
                        <MenuItem key={index} value={topic}>
                            {topic}
                        </MenuItem>
                    ))}
                </Select>

                <label className="block text-black text-sm font-semibold mb-2">Select Day</label>
                <input
                    required
                    className="w-full mb-4 h-14 p-3 text-black border rounded"
                    type="date"
                    onChange={handleDateChange}
                />

                <FormControl component="fieldset" className="mb-4">
                    <label className="block text-black text-sm font-semibold mb-2">Select Time of Day</label>
                    <RadioGroup row name="timeOfDay" value={timeOfDay} onChange={handleTimeOfDayChange}>
                        <FormControlLabel value="Morning" control={<Radio />} label="Morning" />
                        <FormControlLabel value="Afternoon" control={<Radio />} label="Afternoon" />
                    </RadioGroup>
                </FormControl>

                <button
                    className="w-full bg-orange-600 text-white p-2 rounded-lg py-3 px-4 shadow-lg hover:bg-orange-400 focus:outline-none focus:ring focus:border-orange-700"
                    type="submit">
                    Collect Attendances
                </button>
            </form>
        </div>
    );
};

export default OpenattendanceCollect;
