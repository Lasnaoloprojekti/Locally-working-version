import React, { useContext, useEffect } from "react";
import QRCode from 'react-qr-code'
import logo from "../assets/metropolia_s_orange.png";
import { useNavigate, useParams, Link } from "react-router-dom";
import { userContext } from "../context/userContext";

export const WaitingPage = () => {
    const navigate = useNavigate();
    const { courseName, topicName } = useParams();
    const { userInfo, setUserInfo } = useContext(userContext);


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
        <>        <nav className="flex justify-between items-center">
            <img className="h-[18mm] m-4" src={logo} alt="Logo" />
            <ul className="flex items-center">
                <li className="text-2xl ml-2 font-roboto-slab">
                    {userInfo.firstname} {userInfo.lastname}
                </li>
                <button
                    onClick={handleLogout}
                    className="text-white bg-orange-600 rounded-lg p-4 mx-8 font-open-sans">
                    Logout
                </button>
            </ul>
        </nav>
            <section className=" flex-row h-[80vh] mt-8 flex ">
                <div className=" w-1/2 flex items-center flex-col">
                    <h1 className=" font-roboto-slab text-3xl mb-5 font-bold tracking-wide">{decodeURIComponent(courseName)}</h1>
                    <h1 className=" font-roboto-slab text-xl mb-4 font-semibold tracking-wider">{decodeURIComponent(topicName)}</h1>
                    <QRCode className="" value="http://localhost:5173/registation" />
                    <Link className=" mt-4 text-red-800 hover:text-blue-600 font-open-sans" to="/registration" value >Link to student registration form</Link>
                    <button className=" py-2 px-6 bg-orange-600 rounded-md text-white font-roboto-slab mt-12 hover:bg-red-800 ">Deactive collecting attendances</button>
                </div>
                <div className=" w-1/2 h-[80vh]  flex flex-col">
                    <div className="flex gap-4 justify-center text-2xl font-bold ">
                        <h2 className="mb-10 font-roboto-slab tracking-wide">Students attending:</h2>
                        <span className=" font-roboto-slab">2</span>
                    </div>
                    <li className="flex justify-center font-open-sans">
                        <ul className="flex flex-col gap-1 my-2">
                            <p>Matti Meikäläinen</p>
                            <p>Maija Meikäläinen</p>
                        </ul>
                    </li>
                </div>
            </section>
        </>
    )
}
