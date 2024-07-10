import express from "express";
import {
  login,
  register,
  forgotPassword,
  updateUser,
} from "../controllers/AdminControllers.js";

const router = express.Router();

// Define routes
router.post("/signup", register); // Route for signing up a new admin
router.post("/login", login); // Route for logging in an admin
router.post("/forgotpassword", forgotPassword); // Route for handling forgot password functionality
router.put("/updateUser", updateUser); // Route for updating user information

export default router;
