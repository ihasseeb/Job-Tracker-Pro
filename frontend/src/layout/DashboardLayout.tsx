import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  PlusCircle,
  FileText,
  Settings,
  LogOut,
  Mail,
  Mic,
} from "lucide-react";

const navItems = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/dashboard/applications", label: "Applications", icon: Briefcase },
  { to: "/dashboard/add", label: "Add Application", icon: PlusCircle },
  { to: "/dashboard/resume", label: "Resume Analyzer", icon: FileText },
  { to: "/dashboard/cover-letter", label: "Cover Letter", icon: Mail },
  { to: "/dashboard/interview-prep", label: "Interview Prep", icon: Mic },
];

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // backend banne ke baad yahan logout logic aayega
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-ink font-body flex">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-surface border-r border-white/5 flex flex-col justify-between">
        <div>
          <div className="px-6 py-6 border-b border-white/5">
            <span className="font-display font-semibold text-lg text-paper">
              Job Tracker <span className="text-signal">Pro</span>
            </span>
          </div>

          <nav className="px-3 py-6 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? "bg-signal/10 text-signal"
                        : "text-muted hover:bg-white/5 hover:text-paper"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="px-3 py-6 border-t border-white/5 space-y-1">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                isActive
                  ? "bg-signal/10 text-signal"
                  : "text-muted hover:bg-white/5 hover:text-paper"
              }`
            }
          >
            <Settings className="w-4 h-4" />
            Settings
          </NavLink>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-stop hover:bg-stop/10 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
