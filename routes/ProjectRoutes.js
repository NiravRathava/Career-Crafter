import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/ProjectController.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();

router.route("/").get(verifyToken,getProjects).post(verifyToken,createProject);
router.route("/:id").put(verifyToken,updateProject).delete(verifyToken,deleteProject);

export default router;
