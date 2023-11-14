import React, { useState, useEffect } from 'react';
import logo from "../assets/metropolia_s_orange.png";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export const Registration = () => {
    // State variables
    const [currentDay, setCurrentDay] = useState(new Date().toLocaleString('en-En', { weekday: 'long' }));
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('fi-FI'));
    const [currentMonth, setCurrentMonth] = useState(new Date().toLocaleString('en-En', { month: 'long' }));

    useEffect(() => {
        // Update the time every second
        const interval = setInterval(() => {
            setCurrentDay(new Date().toLocaleString('en-En', { weekday: 'long' }));
            setCurrentTime(new Date().toLocaleTimeString('fi-FI'));
            setCurrentMonth(new Date().toLocaleString('en-En', { month: 'long' }));
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (<>
        <nav className="flex justify-between items-center">

            <ul className="flex items-center">
                <img className=" h-[18mm] m-4" src={logo} alt="Logo" />
            </ul>
            <div className='mr-3 text-2xl flex font-thin flex-row gap-5 font-roboto-slab border-b border-gray-950 pb-2'>
                <AccessTimeIcon></AccessTimeIcon>
                <p>Today is: {currentDay}</p>
                <p>it is : {currentTime}</p>
                <p>Month: {currentMonth}</p>
                <hr />
            </div>
        </nav>


        <form className='flex flex-row h-[100vh] justify-center ' action="handleSubmit">
            <div className=' w-100 h-min mt-32 text-black p-2   '>
                <label className="block text-black text-sm  font-semibold mb-2 font-roboto-slab">Class registration</label>
                <input className='text-center p-5 rounded-md border-stone-900 w-full border text-orange-600 font-open-sans'
                    type="text"
                    placeholder="Enter your Student number here"
                    onChange={(e) => setStudenNumber(e.target.value)}
                />
                <label className="block text-black text-sm mt-3 mb-2 font-open-sans">if registration doesnt work ask your teacher to add you in class</label>
            </div>
        </form>
    </>
    );
}



