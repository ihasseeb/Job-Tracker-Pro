interface StatsCardProps {
  label: string;
  value: number;
  color: "signal" | "go" | "stop" | "ink";
}

const StatsCard = ({ label, value, color }: StatsCardProps) => {
  const colorMap = {
    signal: "text-signal border-signal/20",
    go: "text-go border-go/20",
    stop: "text-stop border-stop/20",
    ink: "text-ink border-ink/20",
  };

  return (
    <div className={`bg-surface border rounded-xl p-5 ${colorMap[color]}`}>
      <p className="font-mono text-xs uppercase tracking-wide text-ink/50 mb-2">
        {label}
      </p>
      <p
        className={`font-display text-3xl font-bold ${colorMap[color].split(" ")[0]}`}
      >
        {value}
      </p>
    </div>
  );
};

export default StatsCard;
