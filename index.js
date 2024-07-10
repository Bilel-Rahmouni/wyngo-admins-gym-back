import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./Routes/UserRoutes.js";
import adminRoutes from "./Routes/AdminRoutes.js";
import coachRoutes from "./Routes/CoachRoutes.js";
import taskRoutes from "./Routes/TaskRoutes.js";
/* CONFIGURATIONs */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy());
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.static("public"));

/* ROUTES */
app.use("/users", userRoutes);
app.use("/admins", adminRoutes);
app.use("/coaches", coachRoutes);
app.use("/tasks", taskRoutes);
/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5002;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
  });
