import { Schema, model, Document, Types } from "mongoose";

export interface ApplicationDocument extends Document {
    user: Types.ObjectId;
    company: string;
    role: string;
    status: "applied" | "interview" | "offer" | "rejected";
    appliedDate: Date;
    notes?: string;
}

const applicationSchema = new Schema<ApplicationDocument>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        company: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            enum: ["applied", "interview", "offer", "rejected"],
            default: "applied",
        },
        appliedDate: {
            type: Date,
            required: true,
        },
        notes: {
            type: String,
            trim: true,
        },
    },
    { timestamps: true }
);

export const ApplicationModel = model<ApplicationDocument>(
    "Application",
    applicationSchema
);