import { Link } from "react-router-dom";

const stats = [
  { label: "Applications tracked", value: "12,400+" },
  { label: "Resume matches run", value: "38,000+" },
  { label: "Avg. match accuracy", value: "94%" },
];

const Login = () => {
  return (
    <div className="min-h-screen bg-ink font-body grid grid-cols-1 lg:grid-cols-2">
      {/* Left — Branding Panel */}
      <div className="hidden lg:flex flex-col justify-between bg-surface border-r border-white/5 px-12 py-10 relative overflow-hidden">
        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

        <Link
          to="/"
          className="relative font-display font-semibold text-xl text-paper"
        >
          Job Tracker <span className="text-signal">Pro</span>
        </Link>

        <div className="relative">
          <span className="font-mono text-xs tracking-widest text-go uppercase">
            Built for engineers
          </span>
          <h2 className="font-display text-3xl xl:text-4xl font-bold text-paper leading-[1.15] mt-4 max-w-md">
            Track every application like it's a deploy pipeline.
          </h2>
          <p className="text-muted text-sm mt-4 max-w-sm leading-relaxed">
            Auto-fill from job posts, AI resume matching, and generated cover
            letters — all in one place.
          </p>
        </div>

        <div className="relative grid grid-cols-3 gap-6 pt-8 border-t border-white/5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-xl font-bold text-signal">
                {stat.value}
              </p>
              <p className="text-muted text-xs mt-1 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right — Form Panel */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16">
        {/* Mobile-only logo */}
        <Link
          to="/"
          className="lg:hidden font-display font-semibold text-xl text-paper mb-10"
        >
          Job Tracker <span className="text-signal">Pro</span>
        </Link>

        <div className="w-full max-w-sm mx-auto lg:mx-0">
          <span className="font-mono text-xs tracking-widest text-go uppercase">
            Welcome back
          </span>
          <h1 className="font-display text-3xl font-bold text-paper mt-3">
            Log in to your pipeline
          </h1>
          <p className="text-muted text-sm mt-2">
            Pick up your applications right where you left them.
          </p>

          <form className="mt-10 space-y-5">
            <div>
              <label className="block font-mono text-[11px] tracking-widest text-muted uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-paper placeholder-muted/60 outline-none focus:border-signal transition"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono text-[11px] tracking-widest text-muted uppercase">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-signal hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-paper placeholder-muted/60 outline-none focus:border-signal transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-signal text-ink font-medium py-3 rounded-full hover:brightness-110 transition"
            >
              Log in
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="h-px bg-white/10 flex-1" />
            <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
              or
            </span>
            <div className="h-px bg-white/10 flex-1" />
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-white/10 text-paper font-medium py-3 rounded-full hover:bg-white/5 transition">
            Continue with Google
          </button>

          <p className="text-muted text-sm text-center mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="text-signal hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
