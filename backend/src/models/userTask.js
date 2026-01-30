import mongoose from "mongoose";

const userTaskSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    status: { type: String, enum: ["assigned", "completed"], default: "assigned" },
    assignedAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
    submissionDetails: { type: String },
});

export default mongoose.model("UserTask", userTaskSchema);