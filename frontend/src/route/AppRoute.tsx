import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import Overview from "../pages/Overview";
import Applications from "../pages/dashboard/Applications";
import AddApplication from "../pages/dashboard/AddApplication";
import ResumeAnalyzer from "../pages/dashboard/ResumeAnalyzer";
import CoverLetterGenerator from "../pages/dashboard/CoverLetterGenerator";
import InterviewPrep from "../pages/dashboard/InterviewPrep";
import { ProtectedRoute } from "../route/ProtectedRoute"; // 👈 Wrapper Import Kiya

const AppRoute = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Dashboard Matrix */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="applications" element={<Applications />} />
          <Route path="add" element={<AddApplication />} />
          <Route path="resume" element={<ResumeAnalyzer />} />
          <Route path="cover-letter" element={<CoverLetterGenerator />} />
          <Route path="interview-prep" element={<InterviewPrep />} />
        </Route>
      </Route>

      {/* Fallback Route: Agar koi galat URL likhe to automatically safe route par redirect ho */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoute;
