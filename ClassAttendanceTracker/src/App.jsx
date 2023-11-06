import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./View/Login";
import StudentLandingPage from "./View/StudentLandingPage";
import TeacherLandingPage from "./View/teacherLandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/teacherlanding" element={<TeacherLandingPage />} />
        <Route path="/studentlanding" element={<StudentLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
