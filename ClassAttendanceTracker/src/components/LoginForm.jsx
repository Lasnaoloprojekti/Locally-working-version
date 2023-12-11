import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/metropolia_s_orange.png";
import axios from "axios";
import { userContext } from "../context/userContext";
import { Box } from "@mui/material";

const LoginForm = () => {
  const { setUserInfo } = useContext(userContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit triggered with", { username, password }); // Log the input values

    try {
      console.log("Sending login request...");
      const response = await axios.post(
        "https://teacher.northeurope.cloudapp.azure.com/login",
        {
          username,
          password,
        }
      );

      console.log("Login response received:", response);

      const responseData = response.data; // Note: Verify if apiData is the correct key

      console.log("Response data:", responseData);

      if (
        !responseData.message ||
        responseData.message !== "invalid username or password"
      ) {
        console.log("Setting user info...");
        setUserInfo({
          staff: responseData.staff,
          firstname: responseData.firstname,
          lastname: responseData.lastname,
          userId: responseData.userId,
        });

        localStorage.setItem("userid", responseData.userId);
        localStorage.setItem("token", responseData.accessToken);

        console.log(
          "Items set to localStorage:",
          responseData.userId,
          responseData.accessToken
        );
        navigate(responseData.redirectUrl);
      } else {
        console.log("Invalid username or password error");
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setLoginError("Error logging in. Check your credentials and connection.");
    }
  };

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <img className="mx-auto h-[18mm] mb-6" src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">
              Username
            </label>
            <input
              className="w-full text-black p-2 border rounded font-open-sans"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2 font-roboto-slab">
              Password
            </label>
            <input
              className="w-full p-2 text-black border rounded font-open-sans"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <h3 className="text-red-600">{loginError}</h3>
          <button
            className="w-full bg-orange-600 p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700 font-open-sans text-black font-bold"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </Box>
  );
};

export default LoginForm;
