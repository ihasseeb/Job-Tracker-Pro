import { Link } from "react-router-dom";
import LandingNavbar from "../components/LandingNavbar";
import PipelineBoard from "../components/PipelineBoard";

const stages = [
  {
    tag: "STAGE 01",
    title: "Auto-fill from the posting",
    desc: "Paste a job description. Company, role, and requirements fill in on their own — no retyping.",
  },
  {
    tag: "STAGE 02",
    title: "Resume match score",
    desc: "See exactly how your resume stacks up against the posting, and which skills are missing.",
  },
  {
    tag: "STAGE 03",
    title: "Cover letter, written",
    desc: "A tailored cover letter drafted from the job post in seconds — you edit, not start from zero.",
  },
  {
    tag: "STAGE 04",
    title: "Interview prep",
    desc: "The questions most likely to come up for this exact role, generated before you walk in.",
  },
];

const Home = () => {
  return (
    <div className="bg-ink min-h-screen font-body">
      <LandingNavbar />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-10 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="font-mono text-xs tracking-widest text-go uppercase">
            AI-powered job search
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-paper leading-[1.1] mt-4">
            Job hunting, <span className="text-signal">tracked</span> like an
            engineer would track it.
          </h1>
          <p className="text-muted text-lg mt-6 max-w-md leading-relaxed">
            Stop losing applications in a spreadsheet. Job Tracker Pro logs
            every application and uses AI to match, write, and prep you for
            what's next.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              to="/register"
              className="bg-signal text-ink font-medium px-7 py-3 rounded-full hover:brightness-110 transition"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="border border-white/15 text-paper font-medium px-7 py-3 rounded-full hover:bg-white/5 transition"
            >
              Sign In
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="bg-surface-2 border border-white/5 rounded-2xl p-6 w-full max-w-md">
            <p className="font-mono text-[10px] tracking-widest text-muted mb-4">
              YOUR PIPELINE — LIVE
            </p>
            <PipelineBoard applications={[]} />
          </div>
        </div>
      </section>

      {/* Stages / Features */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-20 border-t border-white/5">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper max-w-lg">
          One job post in. Four things happen automatically.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 mt-12 rounded-2xl overflow-hidden">
          {stages.map((stage) => (
            <div key={stage.tag} className="bg-ink p-8">
              <span className="font-mono text-[11px] tracking-widest text-signal">
                {stage.tag}
              </span>
              <h3 className="font-display text-xl font-semibold text-paper mt-3">
                {stage.title}
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-paper max-w-2xl mx-auto">
            Built for people who'd rather write code than chase down recruiters.
          </h2>
          <Link
            to="/register"
            className="inline-block mt-8 bg-signal text-ink font-medium px-8 py-3 rounded-full hover:brightness-110 transition"
          >
            Start Tracking — It's Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span className="font-display font-semibold text-paper">
            Job Tracker <span className="text-signal">Pro</span>
          </span>
          <span>Built by Haseebi</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
