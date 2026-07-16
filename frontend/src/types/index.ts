export interface Application {
  id: string;
  company: string;
  role: string;
  status: "applied" | "interview" | "offer" | "rejected";
  appliedDate: string;
  notes?: string;
}
export interface ResumeAnalysis {
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  suggestions: string[];
}
export interface DashboardStats {
  total: number;
  interviews: number;
  offers: number;
  rejected: number;
}

export interface CoverLetterResult {
  coverLetter: string;
}

export interface InterviewQuestion {
  question: string;
  category: "technical" | "behavioral" | "company";
}
