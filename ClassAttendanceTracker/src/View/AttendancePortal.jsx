import React from 'react'

export const AttendancePortal = () => {
    return (
        <nav className='flex justify-between items-center'>
            <img className="h-[7rem] w-auto ml-3" src={logo} alt="Logo" />
            <ul className='flex items-center'>
                <li className='text-2xl ml-2'>Matias Naakka</li>
                <button onClick={changePage} className='text-white bg-orange-600 rounded-lg p-4 mx-8'>Logout</button>
            </ul>
        </nav>
    )
}
