import express from "express";
import {
  getAllServices,
  createService,
  updateService,
  deleteService,
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/serviceProjectController.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

// Services - Public
router.get("/services", getAllServices);

// Services - Admin
router.post("/services", authMiddleware, createService);
router.put("/services/:id", authMiddleware, updateService);
router.delete("/services/:id", authMiddleware, deleteService);

// Projects - Public
router.get("/projects", getAllProjects);

// Projects - Admin
router.post("/projects", authMiddleware, createProject);
router.put("/projects/:id", authMiddleware, updateProject);
router.delete("/projects/:id", authMiddleware, deleteProject);

export default router;
