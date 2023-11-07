import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import { userContext } from '../context/userContext';


const LoginForm = () => {
    const { auth, setIsAuthenticated } = useContext(userContext);
    const { user, setUserInfo } = useContext(userContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

  axios.defaults.withCredentials = true;


    axios.defaults.withCredentials = true;

    try {
      // Sending a POST request to the server with the provided username and password
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      console.log(response, "vastaus serveriltä");
      const responseData = response.data.apiData;
      console.log(responseData, "vastaus serveriltä");

      // Checking server response and handling login success or failure
      if (
        !responseData.message ||
        responseData.message !== "invalid username or password"
      ) {
        console.log("Login was successful:", response);

        login(
          (responseData.staff = true),
          responseData.firstname,
          responseData.lastname
        );
        // Logging in user and redirecting to appropriate landing page based on user type (staff or student)
        navigate(responseData.staff ? "/teacherlanding" : "/studentlanding");
      } else {
        console.error("Login failed:", response);
        setLoginError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setLoginError("Hei noobi tsekkaa sun salasana ja nettiyhteys!");
    }
  };

  return (
    <Box className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <img className="mx-auto h-32 mb-6" src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Username
            </label>
            <input
              className="w-full text-black p-2 border rounded"
              type="text"
              placeholder="Enter your email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-black text-sm font-semibold mb-2">
              Password
            </label>
            <input
              className="w-full p-2 text-black border rounded"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <h3 className="text-red-600">{loginError}</h3>
          <button
            className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
            type="submit">
            Login
          </button>
        </form>
      </div>
    </Box>
  );
                setUserInfo({
                    staff: responseData.staff,
                    firstname: responseData.firstname,
                    lastname: responseData.lastname,
                });

                setIsAuthenticated({ isAuthenticated: true });

                // Logging in user and redirecting to appropriate landing page based on user type (staff or student)
                // navigate(responseData.staff ? '/teacherlanding' : '/studentlanding');
                navigate('/teacherhome');
            } else {
                console.error('Login failed:', response);
                setLoginError('Invalid username or password');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setLoginError('Hei noobi tsekkaa sun salasana ja nettiyhteys!');
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <div className="bg-white p-8 rounded shadow-lg">
                <img className="h-[8rem] w-auto" src={logo} alt="Logo" />
                <h2 className="text-center text-black">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Username</label>
                        <input
                            className="w-full text-black p-2 border rounded"
                            type="text"
                            placeholder="Enter your email"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black text-sm font-semibold mb-2">Password</label>
                        <input
                            className="w-full p-2 text-black border rounded"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <h3 className="text-red-600">{loginError}</h3>
                    <button
                        className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-700"
                        type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
