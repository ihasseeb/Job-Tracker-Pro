import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/Overview";
import Applications from "../pages/Applications";
import AddApplication from "../pages/AddApplication";
import ResumeAnalyzer from "../pages/ResumeAnalyzer";
import CoverLetterGenerator from "../pages/CoverLetterGenerator";
import InterviewPrep from "../pages/InterviewPrep";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Overview />} />
        <Route path="/dashboard/applications" element={<Applications />} />
        <Route path="/dashboard/add" element={<AddApplication />} />
        <Route path="/dashboard/resume" element={<ResumeAnalyzer />} />
        <Route
          path="/dashboard/cover-letter"
          element={<CoverLetterGenerator />}
        />
        <Route path="/dashboard/interview-prep" element={<InterviewPrep />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
