import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { 
  createTaskController,
  getAllTasksController,
  getTaskByIdController,
  assignTaskController, 
  getLeaderboardController, 
  getUserPointsController, 
  getUserTasksController, 
  markTaskCompletedController,
  updateTaskStatusController
} from '../controller/taskController.js';

const taskRouter = express.Router();

// Public routes (no authentication needed)
taskRouter.get('/tasks', getAllTasksController); // Get all active tasks
taskRouter.get('/tasks/:taskId', getTaskByIdController); // Get specific task
taskRouter.get('/leaderboard', getLeaderboardController); // Public leaderboard

// Protected routes (require authentication)
taskRouter.post('/tasks', verifyToken, createTaskController); // Create task
taskRouter.post('/tasks/assign', verifyToken, assignTaskController); // Assign task
taskRouter.get('/tasks/user/:userId', verifyToken, getUserTasksController); // Get user tasks
taskRouter.post('/tasks/complete', verifyToken, markTaskCompletedController); // Complete task
taskRouter.get('/points/:userId', verifyToken, getUserPointsController); // Get user points
taskRouter.put('/tasks/:taskId/status', verifyToken, updateTaskStatusController); // Update task status

export default taskRouter;