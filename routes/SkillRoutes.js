import express from "express";
import {
  createSkill,
  deleteSkill,
  getSkill,
} from "../controllers/SkillController.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();

router.route("/").get(verifyToken,getSkill).post(verifyToken,createSkill);
router.route("/:id").delete(verifyToken,deleteSkill);

export default router;
