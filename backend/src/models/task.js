import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    points: { type: Number, required: true },
    deadline: { type: Date, required: true },
    category: { type: String, default: "general" },
    status: { type: String, enum: ["active", "inactive", "completed"], default: "active" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Task", taskSchema);