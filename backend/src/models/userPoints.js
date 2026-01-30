import mongoose from "mongoose";

const userPointsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  totalPoints: { type: Number, default: 0 },
  taskHistory: [
    {
      taskId: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
      points: Number,
      awardedAt: { type: Date, default: Date.now },
    },
  ],
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("UserPoints", userPointsSchema);