import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Application } from '../../types';

// Fake data — Phase 2 mein backend se aayega
const fakeApplications: Application[] = [
  { id: '1', company: 'Google', role: 'Frontend Developer', status: 'interview', appliedDate: '2026-07-10' },
  { id: '2', company: 'Systems Ltd', role: 'Full Stack Developer', status: 'applied', appliedDate: '2026-07-12' },
  { id: '3', company: 'DevCorp', role: 'React Developer', status: 'offer', appliedDate: '2026-07-08' },
  { id: '4', company: 'TechHub', role: 'Backend Developer', status: 'rejected', appliedDate: '2026-07-05' },
  { id: '5', company: 'Meta', role: 'React Native Developer', status: 'applied', appliedDate: '2026-07-14' },
];

const statusStyles = {
  applied: 'bg-white/5 text-muted border-white/10',
  interview: 'bg-signal/10 text-signal border-signal/20',
  offer: 'bg-go/10 text-go border-go/20',
  rejected: 'bg-stop/10 text-stop border-stop/20',
};

const Applications = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filters = ['all', 'applied', 'interview', 'offer', 'rejected'];

  const filteredApps = fakeApplications.filter((app) => {
    const matchSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.role.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'all' || app.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-2xl font-bold text-paper">
          Applications
        </h1>
        <Link
          to="/dashboard/add"
          className="bg-signal text-ink font-mono text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-signal/90 transition"
        >
          + Add Application
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by company or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper outline-none focus:border-signal mb-4 placeholder:text-muted/50"
      />

      <div className="flex gap-2 mb-6 flex-wrap">
        {filters.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`font-mono text-xs uppercase px-4 py-2 rounded-full border transition ${
              statusFilter === status
                ? 'bg-signal text-ink border-signal'
                : 'bg-white/5 text-muted border-white/10 hover:border-white/30'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {filteredApps.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-mono text-sm text-muted">
            Koi application nahi mili! 😔
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-surface border border-white/5 rounded-xl p-4 flex items-center justify-between hover:border-signal/30 transition"
            >
              <div>
                <h3 className="font-display font-bold text-paper">{app.role}</h3>
                <p className="font-mono text-sm text-muted">{app.company}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted">
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
      )}

      <p className="font-mono text-xs text-muted mt-4">
        {filteredApps.length} of {fakeApplications.length} applications
      </p>
    </div>
  );
};

export default Applications;
