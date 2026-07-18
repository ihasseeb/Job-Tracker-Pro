import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export const ProtectedRoute = () => {
  // Determine authentication from available auth state fields.
  // Some stores may not have `isAuthenticated` property; fall back to other common fields.
  const isAuthenticated = useAuthStore((state: any) =>
    state.isAuthenticated ?? state.isLoggedIn ?? Boolean(state.user) ?? Boolean(state.token)
  );

  // Agar user logged in nahi hai, toh seedha /login par redirect karein
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Agar logged in hai, toh child routes (jaise Dashboard) render karein
  return <Outlet />;
};
