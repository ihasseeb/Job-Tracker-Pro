import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";
import PipelineBoard from "../components/PipelineBoard";
import { useAppStore } from "../store/useAppStore"; // Zustand Store Import Kiya

const Dashboard = () => {
  // Zustand store se states aur actions nikaal rahe hain
  const {
    applications,
    stats: backendStats,
    loading,
    error,
    fetchApplications,
    fetchStats,
  } = useAppStore();

  // Component mount hote hi backend se fresh data pull karega
  useEffect(() => {
    fetchApplications();
    fetchStats();
  }, [fetchApplications, fetchStats]);

  // Agar backend stats abhi tak load nahi huay, toh local fallback calculation use karein
  const stats = {
    total: backendStats?.total || applications.length,
    interviews:
      backendStats?.interviews ||
      applications.filter((a) => a.status === "interview").length,
    offers:
      backendStats?.offers ||
      applications.filter((a) => a.status === "offer").length,
    rejected:
      backendStats?.rejected ||
      applications.filter((a) => a.status === "rejected").length,
  };

  return (
    <div className="flex bg-ink/2 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display text-2xl font-bold text-ink">
            Dashboard
          </h1>
          {/* Chota sa active indicator */}
          {loading && (
            <span className="font-mono text-xs text-signal animate-pulse">
              Syncing pipeline...
            </span>
          )}
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="bg-stop/10 border border-stop/20 text-stop text-xs font-mono rounded-lg p-3 mb-6">
            ⚠️ {error}
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

        {/* Recent Applications Section */}
        <h2 className="font-display text-lg font-bold text-ink mb-4">
          Recent Applications
        </h2>

        {applications.length === 0 && !loading ? (
          <div className="border border-dashed border-ink/10 rounded-xl p-12 text-center bg-surface">
            <p className="text-muted text-sm font-mono">
              No applications tracked yet.
            </p>
          </div>
        ) : (
          <PipelineBoard applications={applications} />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
