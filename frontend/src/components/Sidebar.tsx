import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore"; // Auth store import kiya

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout); // Logout action fetch kiya

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/dashboard/applications", label: "Applications", icon: "📋" },
    { path: "/dashboard/add", label: "Add Application", icon: "➕" },
    { path: "/dashboard/resume", label: "Resume Analyzer", icon: "📄" },
    { path: "/dashboard/cover-letter", label: "Cover Letter", icon: "✉️" },
    { path: "/dashboard/interview-prep", label: "Interview Prep", icon: "🎤" },
  ];

  const handleLogout = () => {
    logout(); // Token clear karega aur state reset karega
    navigate("/login"); // Wapas login screen par redirect
  };

  return (
    <aside className="w-64 bg-surface border-r border-ink/10 h-screen p-6 flex flex-col justify-between">
      {/* Top Section — Brand and Navigation */}
      <div className="flex flex-col gap-2 w-full">
        <h1 className="font-display text-xl font-bold text-signal mb-8">
          Job Tracker Pro
        </h1>

        <nav className="flex flex-col gap-2 w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/dashboard"} // Strict exact matching taake dashboard sub-pages par parent trigger na ho
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition ${
                  isActive
                    ? "bg-signal/10 text-signal font-medium"
                    : "text-ink/60 hover:bg-ink/5"
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section — Interactive Logout Button */}
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm text-stop hover:bg-stop/5 transition mt-auto border border-transparent hover:border-stop/10"
      >
        <span>🚪</span>
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
