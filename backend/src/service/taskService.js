import Task from "../models/task.js";
import User from "../models/user.js";
import UserTask from "../models/userTask.js";
import UserPoints from "../models/userPoints.js";

// Create Task
export const createTask = async ({ title, description, points, deadline, category }) => {
  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();
  const trimmedCategory = category?.trim();

  if (!trimmedTitle || !trimmedDescription || !points || !deadline) {
    throw new Error("Title, description, points and deadline are required");
  }

  const pointsInt = parseInt(points);
  if (isNaN(pointsInt) || pointsInt <= 0) {
    throw new Error("Points must be a positive number");
  }

  const deadlineDate = new Date(deadline);
  if (deadlineDate <= new Date()) {
    throw new Error("Deadline must be in the future");
  }

  const newTask = await Task.create({
    title: trimmedTitle,
    description: trimmedDescription,
    points: pointsInt,
    deadline: deadlineDate,
    category: trimmedCategory || "general",
  });

  return newTask;
};

// Get all tasks
export const getAllTasks = async (status = "active") => {
  return await Task.find({ status }).sort({ createdAt: -1 });
};

// Get task by ID
export const getTaskById = async (taskId) => {
  const task = await Task.findById(taskId);
  if (!task) throw new Error("Task not found");
  return task;
};

// Assign task
export const assignTaskToUser = async (userId, taskId) => {
  const task = await Task.findById(taskId);
  if (!task) throw new Error("Task not found");
  if (task.status !== "active") throw new Error("Task is not active");
  if (task.deadline <= new Date()) throw new Error("Task deadline has passed");

  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  const existing = await UserTask.findOne({ userId, taskId });
  if (existing) throw new Error("Task already assigned to user");

  const userTask = await UserTask.create({ userId, taskId });
  return userTask;
};

// Get user tasks
export const getUserTasks = async (userId, status = null) => {
  const query = status ? { userId, status } : { userId };
  return await UserTask.find(query)
    .populate("taskId")
    .sort({ assignedAt: -1 });
};

// Mark task completed
export const markTaskCompleted = async (userId, taskId, submissionDetails = null) => {
  const userTask = await UserTask.findOne({ userId, taskId, status: "assigned" });
  if (!userTask) throw new Error("Task assignment not found or already completed");

  userTask.status = "completed";
  userTask.completedAt = new Date();
  userTask.submissionDetails = submissionDetails || "Task completed";
  await userTask.save();

  const task = await Task.findById(taskId);
  if (!task) throw new Error("Task not found");

  await awardPoints(userId, task.points, taskId);

  return {
    userTaskId: userTask._id,
    points: task.points,
    status: "completed",
    completedAt: userTask.completedAt,
  };
};

// Award points
export const awardPoints = async (userId, points, taskId) => {
  const pointsInt = parseInt(points);
  if (isNaN(pointsInt) || pointsInt <= 0) throw new Error("Invalid points value");

  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  const userPoints = await UserPoints.findOne({ userId });
  if (!userPoints) {
    await UserPoints.create({
      userId,
      totalPoints: pointsInt,
      taskHistory: [{ taskId, points: pointsInt }],
    });
    return { totalPoints: pointsInt, pointsAwarded: pointsInt };
  }

  userPoints.totalPoints += pointsInt;
  userPoints.taskHistory.push({ taskId, points: pointsInt });
  userPoints.lastUpdated = new Date();
  await userPoints.save();

  return { totalPoints: userPoints.totalPoints, pointsAwarded: pointsInt };
};

// Get user points
export const getUserPoints = async (userId) => {
  const data = await UserPoints.findOne({ userId });
  return data || { userId, totalPoints: 0, taskHistory: [] };
};

// Leaderboard
export const getLeaderboard = async (limit = 10) => {
  const leaderboard = await UserPoints.find()
    .populate("userId", "firstName lastName email")
    .sort({ totalPoints: -1 })
    .limit(limit);

  return leaderboard.map((entry, i) => ({
    rank: i + 1,
    userId: entry.userId._id,
    name: `${entry.userId.firstName} ${entry.userId.lastName}`,
    email: entry.userId.email,
    totalPoints: entry.totalPoints,
  }));
};

// Update task status
export const updateTaskStatus = async (taskId, status) => {
  const validStatuses = ["active", "inactive", "completed"];
  if (!validStatuses.includes(status)) {
    throw new Error("Invalid status. Must be active, inactive, or completed");
  }

  const task = await Task.findById(taskId);
  if (!task) throw new Error("Task not found");

  task.status = status;
  task.updatedAt = new Date();
  await task.save();

  return task;
};