
import logo from "../assets/metropolia_s_orange.png";
import { userContext } from "../context/userContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import StudentsOwnParticipations from "../components/StudentsOwnParticipations";

export const StudentHome = () => {
  const { userInfo, setUserInfo } = useContext(userContext);
  const [studentNumber, setStudentNumber] = useState(""); // State for student number
  const [registerMessage, setRegisterMessage] = useState(""); // State for registration message

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
		   setUserInfo({ staff: false, firstname: "", lastname: "" });
    navigate("/login");
  };


  const handleMainButtonClick = (mainButton) => {
    if (activeMainButton === mainButton) {
      // Toggle off if the same button is clicked
      setActiveMainButton("");
      setActiveView("");
    } else {
      setActiveMainButton(mainButton);
      setActiveView("");
    }
  };

  const renderComponent = () => {
    switch (activeView) {
      case "createCourse":
        return <CreateCourse />;
      default:
        return null;
    }
  };

  return (
    <>
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
        <StudentsOwnParticipations />

    </>
  );
};

export default StudentHome;
