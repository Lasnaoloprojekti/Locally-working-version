import { createContext, useState, useEffect } from "react";
import axios from 'axios';


const userContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        staff: false,
        firstname: "",
        lastname: "",
    });

    const [auth, setIsAuthenticated] = useState({ isAuthenticated: false });

    axios.defaults.withCredentials = true;


    useEffect(() => {
        // Get the current route from window.location.pathname
        const currentRoute = window.location.pathname;

        // Check if the current route is not '/login'
        if (currentRoute !== '/login') {
            // Make your API call and update state here
            async function verifyUser() {
                try {
                    const response = await axios.get("http://localhost:3001/verify", { withCredentials: true });

                    if (response.status === 200) {
                        // Token verification successful, update user state
                        const userData = response.data;
                        setIsAuthenticated({ isAuthenticated: true });
                    } else {
                        // Token verification failed or user not authenticated, update user state accordingly
                        setIsAuthenticated({ isAuthenticated: false });
                    }
                } catch (error) {
                    console.error("Error verifying user:", error);
                    // If an error occurs during token verification, update user state to indicate unauthenticated state
                    setIsAuthenticated({ isAuthenticated: false });
                }
            }

            // Call the function to verify user only if the route is not '/login'
            verifyUser();
        }
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount in class components

    return (
        <userContext.Provider value={{ userInfo, auth, setIsAuthenticated, setUserInfo }}>
            {children}
        </userContext.Provider>
    );
};

export { userContext, UserContextProvider };
