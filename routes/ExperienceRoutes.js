import express from "express";
import {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/ExperienceController.js";

const router = express.Router();

router.route("/").post(createExperience).get(getExperience);
router.route("/:id").put(updateExperience).delete(deleteExperience);

export default router;
