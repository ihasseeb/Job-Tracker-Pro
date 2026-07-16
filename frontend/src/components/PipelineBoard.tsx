import { type Application } from "../types";

interface PipelineBoardProps {
  applications: Application[];
}

const statusStyles = {
  applied: "bg-ink/5 text-ink border-ink/10",
  interview: "bg-signal/10 text-signal border-signal/20",
  offer: "bg-go/10 text-go border-go/20",
  rejected: "bg-stop/10 text-stop border-stop/20",
};

const PipelineBoard = ({ applications }: PipelineBoardProps) => {
  return (
    <div className="flex flex-col gap-3">
      {applications.map((app) => (
        <div
          key={app.id}
          className="bg-surface border border-ink/10 rounded-xl p-4 flex items-center justify-between"
        >
          <div>
            <h3 className="font-display font-bold text-ink">{app.role}</h3>
            <p className="font-mono text-sm text-ink/50">{app.company}</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-ink/40">
              {app.appliedDate}
            </span>
            <span
              className={`font-mono text-xs uppercase px-3 py-1 rounded-full border ${statusStyles[app.status]}`}
            >
              {app.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PipelineBoard;
