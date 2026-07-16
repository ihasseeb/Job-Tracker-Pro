const Overview = () => {
  return (
    <div className="p-8">
      <h1 className="font-display text-3xl font-bold text-paper mb-6">
        Your Pipeline
      </h1>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-surface border border-white/5 rounded-lg p-6">
          <p className="text-muted text-sm font-mono">Applications</p>
          <p className="text-3xl font-bold text-signal mt-2">12</p>
        </div>
        <div className="bg-surface border border-white/5 rounded-lg p-6">
          <p className="text-muted text-sm font-mono">In Progress</p>
          <p className="text-3xl font-bold text-signal mt-2">8</p>
        </div>
        <div className="bg-surface border border-white/5 rounded-lg p-6">
          <p className="text-muted text-sm font-mono">Interviews</p>
          <p className="text-3xl font-bold text-signal mt-2">3</p>
        </div>
        <div className="bg-surface border border-white/5 rounded-lg p-6">
          <p className="text-muted text-sm font-mono">Offers</p>
          <p className="text-3xl font-bold text-signal mt-2">1</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
