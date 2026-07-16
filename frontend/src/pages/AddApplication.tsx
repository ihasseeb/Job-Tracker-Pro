import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddApplication = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "applied",
    appliedDate: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Application:", formData);
    // Phase 2 mein — backend API call yahan hogi
    navigate("/dashboard");
  };

  return (
    <div className="p-8 max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-paper mb-6">
        Add New Application
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-surface border border-white/5 rounded-xl p-6 flex flex-col gap-5"
      >
        {/* Company */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Google"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper outline-none focus:border-signal placeholder:text-muted/50"
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Role
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper outline-none focus:border-signal placeholder:text-muted/50"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper outline-none focus:border-signal"
          >
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* Applied Date */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Applied Date
          </label>
          <input
            type="date"
            name="appliedDate"
            value={formData.appliedDate}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper outline-none focus:border-signal"
          />
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase tracking-wide text-muted">
            Notes (optional)
          </label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={3}
            placeholder="Any details, referral, recruiter name..."
            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 font-mono text-sm text-paper outline-none focus:border-signal resize-none placeholder:text-muted/50"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="bg-signal text-ink font-mono text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-signal/90 transition"
          >
            Save Application
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="border border-white/10 text-muted font-mono text-sm px-6 py-2.5 rounded-lg hover:bg-white/5 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApplication;
