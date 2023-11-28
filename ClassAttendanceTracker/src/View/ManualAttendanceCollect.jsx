import React, { useContext, useState, useEffect } from "react";
import logo from "../assets/metropolia_s_orange.png";
import { useNavigate, useParams, Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteSession } from "../Hooks/ApiHooks";

export const ManualAttendanceCollect = () => {
    const { sessionId, courseName, topic } = useParams();
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useContext(userContext);
    const [sessionClosed, setSessionClosed] = useState(false);
    const [serverMessage, setServerMessage] = useState("");
    const [attendingStudents, setAttendingStudents] = useState([]);
    const [nonAttendingStudents, setNonAttendingStudents] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("UserId");
        setUserInfo({
            staff: false,
            firstname: "",
            lastname: "",
        });
        navigate("/login");
    };

    useEffect(() => {
        // Fetch all students from the server when the component mounts
        const fetchStudents = async () => {
            const response = await fetch(`http://localhost:3001/getcoursestudents/${sessionId}`); // Replace with your actual API endpoint
            if (response.ok) {

                const { students } = await response.json();
                console.log("Students fetched successfully", students);
                setNonAttendingStudents(students);
            }
        };

        fetchStudents();
    }, [sessionId]);


    const handleDeleteSession = async () => {
        try {
            await deleteSession(sessionId, (message) => {
                console.log(message);
                setServerMessage(message);
                setSessionClosed(true);
                // Close the modal or perform any other necessary actions
            }, (errorMessage) => {
                console.error(errorMessage);
                setServerMessage(errorMessage);
                // Handle the error or display an error message in your UI
            });
        } catch (error) {
            console.error("Error deleting session:", error);
            setServerMessage("Error deleting session");
            // Handle the error or display an error message in your UI
        }
        setTimeout(() => {
            navigate("/teacherhome");
        }, 1000);
    };

    const handleStudentClick = async (student) => {
        try {
            const response = await fetch("http://localhost:3001/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ studentNumber: student.studentNumber }),
            });

            if (response.ok) {
                // Student registered successfully, now move them to the attending list
                setNonAttendingStudents(nonAttendingStudents.filter(s => s.studentNumber !== student.studentNumber));
                setAttendingStudents([...attendingStudents, student]);
            } else {
                // Handle case where registration wasn't successful
                console.error("Failed to register student attendance");
            }
        } catch (error) {
            console.error("Error registering student attendance:", error);
        }
    };

    const handleCloseSession = async () => {
        try {
            const response = await fetch("http://localhost:3001/closesession", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sessionId: sessionId }),
            });

            if (response.ok) {
                console.log("Session closed successfully");
                // Handle successful session closure
                setServerMessage("Session closed successfully");
                setSessionClosed(true);
            } else {
                console.error("Failed to close session");
                // Handle error
                setServerMessage("Failed to close session");
            }
        } catch (error) {
            console.error("Error closing session:", error);
            setServerMessage("Error closing session");
        }
    };


    return (
        <>
            <nav className="flex justify-between items-center">
                <Link to="/teacherhome">
                    <img className="h-12 m-4" src={logo} alt="Logo" />
                </Link>
                <div className="flex flex-row m-4 items-baseline">
                    <h3 className="font-roboto-slab mr-3">Did you accidentally open this session?</h3>
                    <button
                        className="text-white text-sm flex items-center bg-blue-800 rounded-lg py-2 px-2 font-roboto-slab  hover:bg-red-800" onClick={handleDeleteSession}>
                        Delete this session
                        <DeleteIcon></DeleteIcon>

                    </button>
                </div>
                <ul className="flex items-center">
                    <li className="text-2xl ml-2 font-roboto-slab">
                        Welcome! {userInfo.firstname} {userInfo.lastname}
                    </li>
                    <button
                        onClick={handleLogout}
                        className="text-white bg-orange-600 rounded-lg p-4 mx-8 font-roboto-slab">
                        Logout
                    </button>
                </ul>
            </nav>
            <section className="flex flex-col items-center mt-5">
                <h1 className=" font-roboto-slab text-3xl mb-5 font-bold tracking-wide">
                    {decodeURIComponent(courseName)}
                </h1>
                <h1 className=" font-roboto-slab text-xl mb-1 font-semibold tracking-wider">
                    {decodeURIComponent(topic)}
                </h1>
                {sessionClosed && (
                    <Link
                        to="/teacherhome"
                        className=" text-blue-500 text-lg underline hover:text-green-800">
                        Create new attendance registration
                    </Link>
                )}
            </section>
            <section className="flex flex-col flex-grow mt-4">
                <div className=" flex-grow">
                    <h3 className="m-4">Students Not Attending:</h3>
                    <ul className="flex flex-wrap">
                        {nonAttendingStudents.map((student) => (
                            <li
                                key={student.studentNumber}
                                onClick={() => handleStudentClick(student)}
                                className="bg-orange-500 text-white p-2 m-2 rounded cursor-pointer hover:bg-orange-600 transition-colors"
                            >
                                {student.firstName} {student.lastName}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className=" flex-grow">
                    <h3 className="m-4">Students Attending:</h3>
                    <ul className="flex flex-wrap">
                        {attendingStudents.map((student) => (
                            <li
                                key={student.studentNumber}
                                className="bg-blue-500 text-white p-2 m-2 rounded"
                            >
                                {student.firstName} {student.lastName}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="w-full flex flex-col justify-center items-center ">
                <p className=" text-base mt-4 text-green-500">{serverMessage}</p>
                <button onClick={handleCloseSession} className="text-white flex items-center bg-blue-800 rounded-lg py-2 px-2 font-roboto-slab hover:bg-red-800">
                    Stop collecting attendances
                </button>
            </section>
        </>
    );
};
