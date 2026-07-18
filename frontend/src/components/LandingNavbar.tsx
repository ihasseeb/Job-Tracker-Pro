import { Link } from "react-router-dom";

const LandingNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 py-6 max-w-7xl mx-auto">
      <Link
        to="/"
        className="font-display font-bold text-lg text-paper tracking-tight"
      >
        Job Tracker <span className="text-signal">Pro</span>
      </Link>
      <div className="flex items-center gap-3">
        <Link
          to="/login"
          className="text-sm text-muted hover:text-paper transition px-4 py-2"
        >
          Log In
        </Link>
        <Link
          to="/register"
          className="text-sm font-medium bg-signal text-ink px-4 py-2 rounded-full hover:brightness-110 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default LandingNavbar;
