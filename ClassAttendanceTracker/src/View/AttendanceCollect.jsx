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
        <>

            <nav className="flex justify-between items-center">
                <img className="h-24 p-3" src={logo} alt="Logo" />
                <ul className="flex items-center">
                    <li className="text-2xl ml-2">
                        {userInfo.firstname} {userInfo.lastname}
                    </li>
                    <button
                        onClick={handleLogout}
                        className="text-white bg-orange-600 rounded-lg p-4 mx-8">
                        Logout
                    </button>
                </ul>
            </nav>
            <section className=" flex-row h-[80vh] mt-8 flex ">
                <div className=" w-1/2 flex items-center flex-col">
                    <h1 className="font-sans text-3xl mb-5 font-bold">{decodeURIComponent(courseName)}</h1>
                    <h1 className="font-sans text-3xl mb-4 font-semibold">{decodeURIComponent(topicName)}</h1>
                    <QRCode className="" value="http://localhost:5173/registation" />
                    <Link className=" mt-2 text-red-600 hover:text-blue-600" to="/registration" value >Link to student registration form</Link>
                    <button className=" py-2 px-9 bg-orange-600 rounded-md text-white font-sans mt-12 hover:bg-orange-900">Deactive collecting attendances</button>
                </div>
                <div className=" w-1/2 h-[80vh]  flex flex-col">
                    <div className="flex gap-4 justify-center text-2xl font-bold ">
                        <h2 className="mb-10">Students attending:</h2>
                        <span>2</span>
                    </div>


                    <li className="flex justify-center">
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
