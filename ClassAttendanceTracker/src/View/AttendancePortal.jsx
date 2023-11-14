import React from 'react'
import logo from "../assets/metropolia_s_orange.png";
import { CreateQrCode } from '../components/CreateQrCode'
import { useNavigate } from 'react-router-dom';


const AttendancePortal = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate("/login");
    }
    return (
        <>
            <nav className='flex justify-between items-center'>
                <img className="h-[7rem] w-auto ml-3" src={logo} alt="Logo" />
                <ul className='flex items-center'>
                    <li className='text-2xl ml-2'>Matias Naakka</li>
                    <button onClick={logout} className='text-white bg-orange-600 rounded-lg p-4 mx-8'>Logout</button>
                </ul>
            </nav>

            <CreateQrCode />
        </>
    )
}
export default AttendancePortal;