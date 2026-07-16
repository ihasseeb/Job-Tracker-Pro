// src/controllers/applicationController.ts
import { Request, Response } from "express";
import { ApplicationModel } from "../models/Application";

// Get all applications — only for the logged-in user
export const getApplications = async (req: Request, res: Response) => {
    try {
        const applications = await ApplicationModel.find({ user: req.user?._id }).sort({
            createdAt: -1,
        });
        res.json({ success: true, data: applications });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Create a new application
export const createApplication = async (req: Request, res: Response) => {
    try {
        const { company, role, status, appliedDate, notes } = req.body;

        const application = await ApplicationModel.create({
            user: req.user?._id,
            company,
            role,
            status,
            appliedDate,
            notes,
        });

        res.status(201).json({ success: true, data: application });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Update an existing application
export const updateApplication = async (req: Request, res: Response) => {
    try {
        const application = await ApplicationModel.findOneAndUpdate(
            { _id: req.params.id, user: req.user?._id },
            req.body,
            { new: true }
        );

        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found" });
        }

        res.json({ success: true, data: application });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Delete an application
export const deleteApplication = async (req: Request, res: Response) => {
    try {
        const application = await ApplicationModel.findOneAndDelete({
            _id: req.params.id,
            user: req.user?._id,
        });

        if (!application) {
            return res.status(404).json({ success: false, message: "Application not found" });
        }

        res.json({ success: true, message: "Application deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};

// Get dashboard stats
export const getStats = async (req: Request, res: Response) => {
    try {
        const applications = await ApplicationModel.find({ user: req.user?._id });

        const stats = {
            total: applications.length,
            interviews: applications.filter((a) => a.status === "interview").length,
            offers: applications.filter((a) => a.status === "offer").length,
            rejected: applications.filter((a) => a.status === "rejected").length,
        };

        res.json({ success: true, data: stats });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error" });
    }
};