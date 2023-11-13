import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./View/Login";
import StudentLandingPage from "./View/Student";
import CourseModification from "./View/CourseModification";
import TeacherHome from "./View/Teacher";
import PrivateRoutes from "./Utils/privateRoute";
import { UserContextProvider } from "./context/userContext";
import { WaitingPage } from "./View/AttendanceCollect";

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
            <Route path="/coursemodify" element={<CourseModification />} />
            <Route path="/wait" element={<WaitingPage />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
