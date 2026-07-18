import { create } from "zustand";
import api from "../services/api";
import type { Application, DashboardStats } from "../types"; // Humne jo types/index.ts banayi thi[cite: 1]

interface AppState {
  applications: Application[];
  stats: DashboardStats | null;
  loading: boolean;
  error: string | null;

  // Actions
  fetchApplications: () => Promise<void>;
  fetchStats: () => Promise<void>;
  addApplication: (appData: Omit<Application, "id">) => Promise<boolean>;
  updateApplicationStatus: (
    id: string,
    status: Application["status"],
  ) => Promise<boolean>;
  deleteApplication: (id: string) => Promise<boolean>;
}

export const useAppStore = create<AppState>((set, get) => ({
  applications: [],
  stats: null,
  loading: false,
  error: null,

  // 1. Fetch All Applications[cite: 1]
  fetchApplications: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/applications");
      // Backend response structure: { success: true, data: [...] }[cite: 1]
      const apps = response.data.data.map((app: any) => ({
        id: app._id, // MongoDB key ko frontend id key mein map kar rahe hain[cite: 1]
        company: app.company,
        role: app.role,
        status: app.status,
        appliedDate: app.appliedDate.split("T")[0], // Date formatting
        notes: app.notes,
      }));
      set({ applications: apps, loading: false });
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Failed to fetch applications",
        loading: false,
      });
    }
  },

  // 2. Fetch Dashboard Stats[cite: 1]
  fetchStats: async () => {
    try {
      const response = await api.get("/applications/stats/summary");
      set({ stats: response.data.data });
    } catch (err: any) {
      console.error("Failed to fetch stats", err);
    }
  },

  // 3. Add Application[cite: 1]
  addApplication: async (appData) => {
    set({ loading: true, error: null });
    try {
      await api.post("/applications", appData);
      // Data change hone ke baad list aur stats refresh karein
      get().fetchApplications();
      get().fetchStats();
      return true;
    } catch (err: any) {
      set({
        error: err.response?.data?.message || "Failed to add application",
        loading: false,
      });
      return false;
    }
  },

  // 4. Update Application Status[cite: 1]
  updateApplicationStatus: async (id, status) => {
    try {
      await api.put(`/applications/${id}`, { status });
      // Local state update taake instant UI change dikhe aur extra network request na ho
      set((state) => ({
        applications: state.applications.map((app) =>
          app.id === id ? { ...app, status } : app,
        ),
      }));
      get().fetchStats(); // Stats tab bhi update honge
      return true;
    } catch (err: any) {
      console.error("Status update failed", err);
      return false;
    }
  },

  // 5. Delete Application[cite: 1]
  deleteApplication: async (id) => {
    try {
      await api.delete(`/applications/${id}`);
      set((state) => ({
        applications: state.applications.filter((app) => app.id !== id),
      }));
      get().fetchStats();
      return true;
    } catch (err: any) {
      console.error("Delete failed", err);
      return false;
    }
  },
}));
