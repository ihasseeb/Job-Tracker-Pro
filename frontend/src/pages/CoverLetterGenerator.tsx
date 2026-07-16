import { useState } from "react";

const CoverLetterGenerator = () => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [coverLetter, setCoverLetter] = useState("");

  const handleGenerate = async () => {
    if (!company || !role || !jobDescription) return;

    setLoading(true);
    setCoverLetter("");

    // Phase 3 mein — yahan FastAPI /ai/cover-letter ko call karenge
    // Abhi FAKE response — UI test karne ke liye
    setTimeout(() => {
      setCoverLetter(
        `Dear ${company} Hiring Team,\n\nI am excited to apply for the ${role} position at ${company}. With my background in full stack development and hands-on experience building production-level applications, I believe I would be a strong fit for this role.\n\nIn my recent projects, I have worked extensively with React, TypeScript, Node.js, and MongoDB — building complete applications from database design to deployment. I am particularly drawn to ${company} because of its reputation for innovation and technical excellence.\n\nI would welcome the opportunity to discuss how my skills align with your team's needs.\n\nBest regards,\nHaseebi`,
      );
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(coverLetter);
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-paper mb-2">
        Cover Letter Generator
      </h1>
      <p className="font-mono text-sm text-muted mb-6">
        AI writes a tailored cover letter based on the job description
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Google"
            className="bg-surface-2 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper placeholder:text-muted/50 outline-none focus:border-signal transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Frontend Developer"
            className="bg-surface-2 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper placeholder:text-muted/50 outline-none focus:border-signal transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="font-mono text-xs uppercase tracking-wide text-muted">
          Job Description
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={8}
          placeholder="Paste the job description here..."
          className="bg-surface-2 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-paper placeholder:text-muted/50 outline-none focus:border-signal resize-none transition"
        />
      </div>

      <button
        onClick={handleGenerate}
        disabled={!company || !role || !jobDescription || loading}
        className="bg-signal text-ink font-mono text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-signal/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "Generating..." : "Generate Cover Letter"}
      </button>

      {loading && (
        <div className="mt-8 flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-signal border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-sm text-muted">
            AI is writing your cover letter...
          </span>
        </div>
      )}

      {coverLetter && !loading && (
        <div className="mt-8 bg-surface-2 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-display font-bold text-paper">
              Generated Cover Letter
            </h3>
            <button
              onClick={handleCopy}
              className="font-mono text-xs text-muted border border-white/10 px-3 py-1.5 rounded-lg hover:bg-white/5 hover:text-paper transition"
            >
              Copy
            </button>
          </div>
          <p className="font-mono text-sm text-paper/80 whitespace-pre-line leading-relaxed">
            {coverLetter}
          </p>
        </div>
      )}
    </div>
  );
};

export default CoverLetterGenerator;
