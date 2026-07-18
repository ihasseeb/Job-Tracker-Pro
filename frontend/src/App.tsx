import { useEffect } from "react";
import "./App.css";
import AppRoute from "./route/AppRoute";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  const loading = useAuthStore((state) => state.isLoading);

  useEffect(() => {
    // App load hote hi check karega ke localStorage mein valid token hai ya nahi
    const authStore = useAuthStore.getState() as any;
    authStore.checkAuth?.();
  }, []);

  // Jab tak authentication check ho rahi ho, tab tak loading indicator show karein
  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-ink text-paper font-mono text-sm">
        <div className="animate-pulse">Loading Job Tracker Pro...</div>
      </div>
    );
  }

  return <AppRoute />;
}

export default App;
