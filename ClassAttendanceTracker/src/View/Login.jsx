import "../login.css";
import LoginForm from "../components/LoginForm"; // Importing the LoginForm component
import { useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userInfo } = useContext(userContext);
  const navigate = useNavigate();
 




  useEffect(() => {

    if (userInfo.firstname !== "" && userInfo.lastname !== "") {
      navigate("/teacherhome");
    }

  }, [userInfo]);

  return (
    <>
      <div className="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src="autumnleafs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <LoginForm></LoginForm>

    </>
  );
};

// Author: Matian Naakka
// Date: November 4, 2023
export default Login;
