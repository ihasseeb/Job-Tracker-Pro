import { useState } from "react";
import type { InterviewQuestion } from "../types";

const categoryStyles = {
  technical: "bg-signal/10 text-signal border-signal/20",
  behavioral: "bg-go/10 text-go border-go/20",
  company: "bg-white/5 text-muted border-white/10",
};

const InterviewPrep = () => {
  const [role, setRole] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);

  const handleGenerate = async () => {
    if (!role || !jobDescription) return;

    setLoading(true);
    setQuestions([]);

    // Phase 3 mein — yahan FastAPI /ai/interview-questions ko call karenge
    // Abhi FAKE response — UI test karne ke liye
    setTimeout(() => {
      setQuestions([
        {
          question:
            "Explain the difference between useEffect and useLayoutEffect in React.",
          category: "technical",
        },
        {
          question: "How would you optimize a slow-loading React application?",
          category: "technical",
        },
        {
          question:
            "Tell me about a time you had to debug a difficult production issue.",
          category: "behavioral",
        },
        {
          question:
            "Describe a situation where you disagreed with a teammate. How did you resolve it?",
          category: "behavioral",
        },
        {
          question: "Why do you want to work at this company specifically?",
          category: "company",
        },
        {
          question: "What do you know about our tech stack and products?",
          category: "company",
        },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-paper mb-2">
        Interview Prep
      </h1>
      <p className="font-mono text-sm text-muted mb-6">
        AI predicts likely interview questions based on the role
      </p>

      <div className="flex flex-col gap-2 mb-4">
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
        disabled={!role || !jobDescription || loading}
        className="bg-signal text-ink font-mono text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-signal/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "Generating..." : "Generate Questions"}
      </button>

      {loading && (
        <div className="mt-8 flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-signal border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-sm text-muted">
            AI is preparing your interview questions...
          </span>
        </div>
      )}

      {questions.length > 0 && !loading && (
        <div className="mt-8 flex flex-col gap-3">
          {questions.map((q, i) => (
            <div
              key={i}
              className="bg-surface-2 border border-white/10 rounded-xl p-4 flex items-start justify-between gap-4"
            >
              <p className="font-mono text-sm text-paper/80">{q.question}</p>
              <span
                className={`font-mono text-xs uppercase px-3 py-1 rounded-full border shrink-0 ${categoryStyles[q.category]}`}
              >
                {q.category}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewPrep;
