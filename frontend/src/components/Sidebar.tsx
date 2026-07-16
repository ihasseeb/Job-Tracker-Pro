import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/dashboard/applications", label: "Applications", icon: "📋" },
    { path: "/dashboard/add", label: "Add Application", icon: "➕" },
    { path: "/dashboard/resume", label: "Resume Analyzer", icon: "📄" },
    { path: "/dashboard/cover-letter", label: "Cover Letter", icon: "✉️" },
    { path: "/dashboard/interview-prep", label: "Interview Prep", icon: "🎤" },
  ];
  return (
    <aside className="w-64 bg-surface border-r border-ink/10 h-screen p-6 flex flex-col gap-2">
      <h1 className="font-display text-xl font-bold text-signal mb-8">
        Job Tracker Pro
      </h1>

      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-lg font-mono text-sm transition ${isActive
              ? "bg-signal/10 text-signal"
              : "text-ink/60 hover:bg-ink/5"
            }`
          }
        >
          <span>{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
};

export default Sidebar;
