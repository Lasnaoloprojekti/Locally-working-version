import "../login.css";
import LoginForm from "../components/LoginForm";
import { useContext, useEffect } from "react";
import { userContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userInfo } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.firstname !== "" && userInfo.lastname !== "") {
      navigate(userInfo.staff ? "/teacherhome" : "/teacherhome");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <div className="fullscreen-bg"></div>
      <LoginForm />
    </>
  );
};

export default Login;
