import React, { useContext, useEffect } from "react";
import QRCode from 'react-qr-code'
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

export const WaitingPage = () => {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useContext(userContext);


    useEffect(() => {

        if (userInfo.firstname !== "" && userInfo.lastname !== "") {
            navigate("/wait");
        }

    }, [userInfo]);


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
                        Welcome, {userInfo.firstname} {userInfo.lastname}
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
                    <h1 className=" font-sans text-3xl mb-10 font-bold">Topic name</h1>
                    <QRCode className="" value="http://localhost:5173/registation" />
                    <button className=" py-2 px-9 bg-orange-600 rounded-md text-white font-sans mt-12 hover:bg-orange-900">Stop collecting attendances</button>
                </div>
                <div className=" w-1/2 h-[80vh]  flex flex-col">
                    <div className="flex gap-4 justify-center text-2xl font-bold ">
                        <h2 className="mb-10">Students attending:</h2>
                        <span>0</span>
                    </div>


                    <li className="flex justify-center">
                        <ul className="flex flex-col gap-1 my-2">
                            <p>Pekka sauriainen</p>
                            <p>Heli mustajärvi</p>
                        </ul>
                    </li>
                </div>
            </section>


        </>
    )
}
