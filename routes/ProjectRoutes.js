import express from "express";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../controllers/ProjectController.js";

const router = express.Router();

router.route("/").get(getProjects).post(createProject);
router.route("/:id").put(updateProject).delete(deleteProject);

export default router;
