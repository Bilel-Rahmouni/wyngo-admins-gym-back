import express from "express";
import { createTask, getAllTasks, getTaskById, updateTaskById, deleteTaskById } from "../controllers/TaskControllers.js";

const router = express.Router();

// POST /tasks/create - Create a new task
router.post("/create", createTask);

// GET /tasks/all - Get all tasks
router.get("/all", getAllTasks);

// GET /tasks/:id - Get task by id
router.get("/:id", getTaskById);

// PUT /tasks/:id - Update task by id
router.put("/:id", updateTaskById);

// DELETE /tasks/:id - Delete task by id
router.delete("/:id", deleteTaskById);

export default router;
