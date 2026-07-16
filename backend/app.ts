import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db";
import authRoutes from "./src/routes/authRoute";
import applicationRoutes from "./src/routes/applicationRoutes";

dotenv.config();
connectDB();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Job Tracker Pro API is running!" });
});

app.listen(PORT, () => {
  console.log(`Server is running successfully`);
});
