import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import CreateCourse from "../components/CreateCourse";
import SelectCourse from "../components/SelectCourse";

export const TeacherHome = () => {
  const navigate = useNavigate();
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
        <img className=" h-24 p-3" src={logo} alt="Logo" />
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
      <div className="flex flex-col items-center">
        <CreateCourse />
        <SelectCourse />
      </div>
    </>
  );
};

export default TeacherHome;
