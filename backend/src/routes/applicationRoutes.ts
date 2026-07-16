// src/routes/applicationRoutes.ts
import { Router } from "express";
import {
    getApplications,
    createApplication,
    updateApplication,
    deleteApplication,
    getStats,
} from "../controllers/applicationController";
import { protect } from "../middleware/auth";

const router = Router();

// All routes below require authentication
router.use(protect);

router.get("/", getApplications);
router.post("/", createApplication);
router.put("/:id", updateApplication);
router.delete("/:id", deleteApplication);
router.get("/stats/summary", getStats);

export default router;