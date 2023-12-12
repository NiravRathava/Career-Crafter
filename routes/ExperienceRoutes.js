import express from "express";
import {
  getExperience,
  createExperience,
  updateExperience,
  deleteExperience,
} from "../controllers/ExperienceController.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();

router.route("/").post(verifyToken,createExperience).get(verifyToken,getExperience);
router.route("/:id").put(verifyToken,updateExperience).delete(verifyToken,deleteExperience);

export default router;
