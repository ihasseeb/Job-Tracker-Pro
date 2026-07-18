import { type Application } from "../types";
import { useAppStore } from "../store/useAppStore"; // Zustand Store Import Kiya

interface PipelineBoardProps {
  applications: Application[];
}

const statusStyles = {
  applied: "bg-ink/5 text-ink border-ink/10 focus:ring-ink/20",
  interview: "bg-signal/10 text-signal border-signal/20 focus:ring-signal/20",
  offer: "bg-go/10 text-go border-go/20 focus:ring-go/20",
  rejected: "bg-stop/10 text-stop border-stop/20 focus:ring-stop/20",
};

const PipelineBoard = ({ applications }: PipelineBoardProps) => {
  // Zustand store se update action aur loading state nikaal rahe hain
  const { updateApplicationStatus, loading } = useAppStore();

  const handleStatusChange = async (
    id: string,
    newStatus: Application["status"],
  ) => {
    try {
      // Backend API call through store to update status in MongoDB
      await updateApplicationStatus(id, newStatus);
    } catch (err) {
      console.error("Failed to update application status:", err);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {applications.map((app) => (
        <div
          key={app.id}
          className="bg-surface border border-ink/10 rounded-xl p-4 flex items-center justify-between hover:border-ink/20 transition-all shadow-sm"
        >
          <div>
            <h3 className="font-display font-bold text-ink">{app.role}</h3>
            <p className="font-mono text-sm text-ink/50">{app.company}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-ink/40">
              {app.appliedDate}
            </span>

            {/* Status Pill ko Dropdown banaya taake user directly status change kar sake */}
            <select
              value={app.status}
              disabled={loading}
              onChange={(e) =>
                handleStatusChange(
                  app.id,
                  e.target.value as Application["status"],
                )
              }
              className={`font-mono text-xs uppercase px-3 py-1 rounded-full border cursor-pointer outline-none appearance-none text-center focus:ring-2 transition-all ${statusStyles[app.status]} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PipelineBoard;
