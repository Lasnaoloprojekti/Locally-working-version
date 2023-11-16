import React, { useContext, useEffect, useState } from "react";
import QRCode from "react-qr-code";
import logo from "../assets/metropolia_s_orange.png";
import { useNavigate, useParams, Link } from "react-router-dom";
import { userContext } from "../context/userContext";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

export const WaitingPage = () => {
  const navigate = useNavigate();
  const { sessionId, courseName, topic } = useParams();
  const { userInfo, setUserInfo } = useContext(userContext);
  const [attendingStudents, setAttendingStudnets] = useState([]);
  const [serverMessage, setServerMessage] = useState("");
  const [sessionClosed, setSessionClosed] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      console.log(`Connected to server with ID: ${socket.id}`);
    });

    socket.on("studentAdded", (newStudent) => {
      console.log("Students from the server:", newStudent);
      setAttendingStudnets((prev) => [...prev, newStudent]); // Update state with received data
    });

    return () => {
      socket.off("studentAdded"); // Clean up
    };
  }, []);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserInfo({
      staff: false,
      firstname: "",
      lastname: "",
    });
    navigate("/login");
  };

  return (
    <>
      {" "}
      <nav className="flex justify-between items-center">
        <Link to="/teacherhome">
          <img className="h-[18mm] m-4" src={logo} alt="Logo" />
        </Link>{" "}
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
      <section className=" flex-row h-[80vh] mt-8 flex ">
        <div className=" w-1/2 flex items-center flex-col">
          <h1 className=" font-roboto-slab text-3xl mb-5 font-bold tracking-wide">
            {decodeURIComponent(courseName)}
          </h1>
          <h1 className=" font-roboto-slab text-xl mb-4 font-semibold tracking-wider">
            {decodeURIComponent(topic)}
          </h1>
          <QRCode className="" value="http://localhost:5173/registation" />
          <Link
            className=" mt-4 text-red-800 hover:text-blue-600 font-open-sans"
            to="/registration"
            value>
            Link to student registration form
          </Link>
          <button
            className=" py-2 px-6 bg-orange-600 rounded-md text-white font-roboto-slab mt-5 hover:bg-red-800 "
            onClick={handleCloseSession}>
            Deactive collecting attendances
          </button>
          <p className=" text-base mt-4 text-green-500">{serverMessage}</p>
        </div>
        <div className=" w-1/2 h-[80vh]  flex flex-col">
          <div className="flex gap-4 justify-center text-2xl font-bold ">
            <h2 className="mb-10 font-roboto-slab tracking-wide">
              Students attending:
            </h2>
            <span className=" font-roboto-slab">
              {attendingStudents.length}
            </span>
          </div>
          <li className="flex justify-center font-open-sans">
            <ul className="flex flex-col gap-1 my-2">
              {attendingStudents.map((student, index) => (
                <p className=" " key={index}>
                  {student.firstName} {student.lastName}
                </p>
              ))}
              {sessionClosed && (
                <Link
                  to="/teacherhome"
                  className=" text-blue-500 text-lg underline hover:text-green-800">
                  Create new attendance registration
                </Link>
              )}
            </ul>
          </li>
        </div>
      </section>
    </>
  );
};
