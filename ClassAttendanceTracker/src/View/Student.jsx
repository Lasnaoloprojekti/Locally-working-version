import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export const StudentLandingPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <nav className='flex justify-between items-center'>
            <img className="h-[7rem] w-auto ml-3" src={logo} alt="Logo" />
            <ul className='flex items-center'>
                <li className='text-2xl ml-2'>Kimmo Sauren</li>
                <button className='text-white bg-orange-600 rounded-lg p-4 mx-8' onClick={handleLogout}>Logout</button>
            </ul>
        </nav>
    );
};


// Author: Matian Naakka
// Date: November 4, 2023
export default StudentLandingPage;
