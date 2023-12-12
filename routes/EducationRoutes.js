import express from "express";
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/EducationController.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();

router.route("/").post(verifyToken,createEducation).get(verifyToken,getEducation);
router
  .route("/:id")
  .put(verifyToken,updateEducation)
  .delete(verifyToken,deleteEducation);

export default router;
