import express from "express";
import {
  createSkill,
  deleteSkill,
  getSkill,
} from "../controllers/SkillController.js";

const router = express.Router();

router.route("/").get(getSkill).post(createSkill);
router.route("/:id").delete(deleteSkill);

export default router;
