import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import PipelineBoard from "../components/PipelineBoard";
import { type Application } from "../types";

// Fake data — baad mein backend se aayega
const fakeApplications: Application[] = [
  {
    id: "1",
    company: "Google",
    role: "Frontend Developer",
    status: "interview",
    appliedDate: "2026-07-10",
  },
  {
    id: "2",
    company: "Systems Ltd",
    role: "Full Stack Developer",
    status: "applied",
    appliedDate: "2026-07-12",
  },
  {
    id: "3",
    company: "DevCorp",
    role: "React Developer",
    status: "offer",
    appliedDate: "2026-07-08",
  },
  {
    id: "4",
    company: "TechHub",
    role: "Backend Developer",
    status: "rejected",
    appliedDate: "2026-07-05",
  },
];

const Dashboard = () => {
  const stats = {
    total: fakeApplications.length,
    interviews: fakeApplications.filter((a) => a.status === "interview").length,
    offers: fakeApplications.filter((a) => a.status === "offer").length,
    rejected: fakeApplications.filter((a) => a.status === "rejected").length,
  };

  return (
    <div className="flex bg-ink/[0.02] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="font-display text-2xl font-bold text-ink mb-6">
          Dashboard
        </h1>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <StatsCard
            label="Total Applications"
            value={stats.total}
            color="ink"
          />
          <StatsCard
            label="Interviews"
            value={stats.interviews}
            color="signal"
          />
          <StatsCard label="Offers" value={stats.offers} color="go" />
          <StatsCard label="Rejected" value={stats.rejected} color="stop" />
        </div>

        {/* Recent Applications */}
        <h2 className="font-display text-lg font-bold text-ink mb-4">
          Recent Applications
        </h2>
        <PipelineBoard applications={fakeApplications} />
      </main>
    </div>
  );
};

export default Dashboard;
