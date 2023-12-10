import "../login.css";
import StudentLoginForm from "../Components/StudentLoginForm";
import { useContext, useEffect } from "react";
import { studentContext } from "../Context/studentContext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { studentInfo } = useContext(studentContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      studentInfo &&
      studentInfo.firstname !== "" &&
      studentInfo.lastname !== ""
    ) {
      navigate(studentInfo.staff ? "/teacherhome" : "/studenthome");
      // navigate("/teacherhome");
    }
  }, [studentInfo, navigate]);

  return (
    <>
      <div className="fullscreen-bg"></div>
      <StudentLoginForm />
    </>
  );
};

export default Login;
