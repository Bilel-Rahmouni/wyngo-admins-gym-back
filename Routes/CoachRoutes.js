import express from "express";
import { createCoach, getAllCoaches, updateCoach, deleteCoach } from "../controllers/CoachControllers.js";
const router = express.Router();

// POST /coaches/create - Create a new coach
router.post("/create", createCoach);

// GET /coaches/all - Get all coaches
router.get("/all", getAllCoaches);

// PUT /coaches/:id - Update a coach
router.put("/:id", updateCoach);

// DELETE /coaches/:id - Delete a coach
router.delete("/:id", deleteCoach);

export default router;
