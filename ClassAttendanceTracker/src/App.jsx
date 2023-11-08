import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./View/Login";
import StudentLandingPage from "./View/Student";
import TeacherHome from "./View/Teacher";
import PrivateRoutes from "./Utils/privateRoute";
import AttendancePortal from "./View/AttendancePortal";
import { UserContextProvider } from "./context/userContext";

import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/teacherhome" element={<TeacherHome />} />
            <Route path="/studentlanding" element={<StudentLandingPage />} />
            <Route path="/attendanceportal" element={<AttendancePortal />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
