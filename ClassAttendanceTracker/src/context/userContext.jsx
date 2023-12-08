import { createContext, useState, useEffect } from "react";
import axios from "axios";

const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    staff: false,
    firstname: "",
    lastname: "",
    userId: "",
  });

  const accessToken = localStorage.getItem("token");

  const verify = async () => {
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      try {
        const response = await axios.get("http://localhost:3001/verify");
        const userData = response.data.user; // Get the nested 'user' object
        console.log("Verification data received:", userData);
  
        if (userData) {
          setUserInfo({
            staff: userData.staff,
            firstname: userData.firstName, // Use 'firstName' from userData
            lastname: userData.lastName, // Use 'lastName' from userData
          });
        }
      } catch (error) {
        console.error("Verification failed:", error);
      }
    }
  };
  

  useEffect(() => {
    verify();
  }, [accessToken]);

  console.log(userInfo.firstname !== "" && userInfo.lastname !== "");

  console.log(userInfo, "user info");

  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserContextProvider };
