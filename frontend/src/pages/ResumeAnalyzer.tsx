import { useState } from 'react';
import type { ResumeAnalysis } from '../types';

const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResumeAnalysis | null>(null);

  const handleAnalyze = async () => {
    if (!resumeText || !jobDescription) return;

    setLoading(true);
    setResult(null);

    // Phase 3 mein — yahan FastAPI /ai/resume-match ko call karenge
    // Abhi ke liye — fake delay + fake result (UI test karne ke liye)
    setTimeout(() => {
      setResult({
        matchScore: 78,
        matchedSkills: ['React', 'TypeScript', 'Node.js', 'REST APIs'],
        missingSkills: ['GraphQL', 'AWS', 'Docker'],
        suggestions: [
          'Add specific metrics to your project descriptions (e.g. "improved performance by 30%")',
          'Mention any experience with cloud deployment (AWS/Azure)',
          'Highlight team collaboration and leadership if applicable',
        ],
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-8">
      <h1 className="font-display text-2xl font-bold text-paper mb-2">
        Resume Analyzer
      </h1>
      <p className="font-mono text-sm text-muted mb-6">
        AI compares your resume with the job description and gives you a match score
      </p>

      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Resume Input */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Your Resume
          </label>
          <textarea
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            rows={12}
            placeholder="Paste your resume text here..."
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-paper outline-none focus:border-signal resize-none placeholder:text-muted/50"
          />
        </div>

        {/* Job Description Input */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={12}
            placeholder="Paste the job description here..."
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono text-sm text-paper outline-none focus:border-signal resize-none placeholder:text-muted/50"
          />
        </div>
      </div>

      {/* Analyze Button */}
      <button
        onClick={handleAnalyze}
        disabled={!resumeText || !jobDescription || loading}
        className="bg-signal text-ink font-mono text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-signal/90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? 'Analyzing...' : 'Analyze Match'}
      </button>

      {/* Loading state */}
      {loading && (
        <div className="mt-8 flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-signal border-t-transparent rounded-full animate-spin" />
          <span className="font-mono text-sm text-muted">
            AI is analyzing your resume...
          </span>
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <div className="mt-8 flex flex-col gap-6">

          {/* Match Score */}
          <div className="bg-surface border border-white/5 rounded-xl p-6 flex items-center gap-6">
            <div className="relative w-24 h-24 flex items-center justify-center">
              <span className="font-display text-3xl font-bold text-go">
                {result.matchScore}%
              </span>
            </div>
            <div>
              <h3 className="font-display font-bold text-paper text-lg">
                Match Score
              </h3>
              <p className="font-mono text-sm text-muted">
                Your resume matches {result.matchScore}% of this job's requirements
              </p>
            </div>
          </div>

          {/* Matched Skills */}
          <div className="bg-surface border border-white/5 rounded-xl p-5">
            <h3 className="font-mono text-xs uppercase tracking-wide text-go mb-3">
              ✓ Matched Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.matchedSkills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs bg-go/10 text-go border border-go/20 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="bg-surface border border-white/5 rounded-xl p-5">
            <h3 className="font-mono text-xs uppercase tracking-wide text-stop mb-3">
              ✕ Missing Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs bg-stop/10 text-stop border border-stop/20 px-3 py-1.5 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-surface border border-white/5 rounded-xl p-5">
            <h3 className="font-mono text-xs uppercase tracking-wide text-signal mb-3">
              💡 Suggestions
            </h3>
            <ul className="flex flex-col gap-2">
              {result.suggestions.map((suggestion, i) => (
                <li key={i} className="font-mono text-sm text-muted flex gap-2">
                  <span className="text-signal shrink-0">→</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;