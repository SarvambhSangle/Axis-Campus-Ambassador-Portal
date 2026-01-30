import {
    createTask,
    getAllTasks,
    getTaskById,
    assignTaskToUser,
    getUserTasks,
    markTaskCompleted,
    getUserPoints,
    getLeaderboard,
    updateTaskStatus
} from '../service/taskService.js';

export const createTaskController = async (req, res) => {
    const { title, description, points, deadline, category } = req.body;

    if (!title || !description || !points || !deadline) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'Title, description, points and deadline are required'
        });
    }

    try {
        const task = await createTask({ title, description, points, deadline, category });
        res.status(201).json({
            responseCode: "201",
            success: true,
            responseMessage: 'Task created successfully',
            data: task
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const getAllTasksController = async (req, res) => {
    const { status } = req.query;

    try {
        const tasks = await getAllTasks(status);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'Tasks retrieved successfully',
            data: tasks
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const getTaskByIdController = async (req, res) => {
    const { taskId } = req.params;

    if (!taskId) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'Task ID is required'
        });
    }

    try {
        const task = await getTaskById(taskId);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'Task retrieved successfully',
            data: task
        });
    } catch (err) {
        res.status(404).json({
            responseCode: "404",
            success: false,
            responseMessage: err.message
        });
    }
};

export const assignTaskController = async (req, res) => {
    const { userId, taskId } = req.body;

    if (!userId || !taskId) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'User ID and Task ID are required'
        });
    }

    try {
        const assignment = await assignTaskToUser(userId, taskId);
        res.status(201).json({
            responseCode: "201",
            success: true,
            responseMessage: 'Task assigned successfully',
            data: assignment
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const getUserTasksController = async (req, res) => {
    const { userId } = req.params;
    const { status } = req.query;

    if (!userId) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'User ID is required'
        });
    }

    try {
        const userTasks = await getUserTasks(userId, status);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'User tasks retrieved successfully',
            data: userTasks
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const markTaskCompletedController = async (req, res) => {
    const { userId, taskId, submissionDetails } = req.body;

    if (!userId || !taskId) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'User ID and Task ID are required'
        });
    }

    try {
        const completion = await markTaskCompleted(userId, taskId, submissionDetails);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'Task marked as completed successfully',
            data: completion
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const getUserPointsController = async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'User ID is required'
        });
    }

    try {
        const userPoints = await getUserPoints(userId);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'User points retrieved successfully',
            data: userPoints
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const getLeaderboardController = async (req, res) => {
    const { limit } = req.query;
    const limitInt = limit ? parseInt(limit) : 10;

    try {
        const leaderboard = await getLeaderboard(limitInt);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'Leaderboard retrieved successfully',
            data: leaderboard
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};

export const updateTaskStatusController = async (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;

    if (!taskId || !status) {
        return res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: 'Task ID and status are required'
        });
    }

    try {
        const updatedTask = await updateTaskStatus(taskId, status);
        res.status(200).json({
            responseCode: "200",
            success: true,
            responseMessage: 'Task status updated successfully',
            data: updatedTask
        });
    } catch (err) {
        res.status(400).json({
            responseCode: "400",
            success: false,
            responseMessage: err.message
        });
    }
};