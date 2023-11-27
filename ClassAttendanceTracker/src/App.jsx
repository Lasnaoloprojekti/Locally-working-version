import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./View/Login";
import StudentHome from "./View/Student";
import CourseModification from "./View/CourseModification";
import TeacherHome from "./View/Teacher";
import PrivateRoutes from "./Utils/privateRoute";
import { UserContextProvider } from "./context/userContext";
import { WaitingPage } from "./View/AttendanceCollect";
import GDPRConsentForm from "./View/GDPRConsentForm";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/teacherhome" element={<TeacherHome />} />
            <Route path="/studenthome" element={<StudentHome />} />
            <Route path="/coursemodify" element={<CourseModification />} />
            <Route path="/gdprconsentform" element={<GDPRConsentForm />} />
          </Route>
          <Route
            path="/wait/:sessionId/:courseName/:topic"
            element={<WaitingPage />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
