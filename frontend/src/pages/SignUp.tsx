import { Link } from "react-router-dom";

const features = [
  "AI resume match scoring against any job post",
  "Auto-generated, tailored cover letters",
  "Interview questions predicted per role",
  "One dashboard for your entire pipeline",
];

const Signup = () => {
  return (
    <div className="min-h-screen bg-ink font-body grid grid-cols-1 lg:grid-cols-2">
      {/* Left — Branding Panel */}
      <div className="hidden lg:flex flex-col justify-between bg-surface border-r border-white/5 px-12 py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

        <Link
          to="/"
          className="relative font-display font-semibold text-xl text-paper"
        >
          Job Tracker <span className="text-signal">Pro</span>
        </Link>

        <div className="relative">
          <span className="font-mono text-xs tracking-widest text-go uppercase">
            Free to start
          </span>
          <h2 className="font-display text-3xl xl:text-4xl font-bold text-paper leading-[1.15] mt-4 max-w-md">
            Everything your job search should have had from day one.
          </h2>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full bg-go/15 flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-go" />
                </span>
                <span className="text-muted text-sm leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-muted text-xs">
          Built by Haseebi — no credit card required.
        </p>
      </div>

      {/* Right — Form Panel */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16">
        <Link
          to="/"
          className="lg:hidden font-display font-semibold text-xl text-paper mb-10"
        >
          Job Tracker <span className="text-signal">Pro</span>
        </Link>

        <div className="w-full max-w-sm mx-auto lg:mx-0">
          <span className="font-mono text-xs tracking-widest text-go uppercase">
            Get started
          </span>
          <h1 className="font-display text-3xl font-bold text-paper mt-3">
            Build your pipeline
          </h1>
          <p className="text-muted text-sm mt-2">
            Track applications, match resumes, and prep for interviews — free.
          </p>

          <form className="mt-10 space-y-5">
            <div>
              <label className="block font-mono text-[11px] tracking-widest text-muted uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-paper placeholder-muted/60 outline-none focus:border-signal transition"
              />
            </div>

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
              <label className="block font-mono text-[11px] tracking-widest text-muted uppercase mb-2">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="At least 6 characters"
                className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-paper placeholder-muted/60 outline-none focus:border-signal transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-signal text-ink font-medium py-3 rounded-full hover:brightness-110 transition"
            >
              Create Account
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
            Already have an account?{" "}
            <Link to="/login" className="text-signal hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
