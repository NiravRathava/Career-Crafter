import express from "express";
import {
  getEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/EducationController.js";

const router = express.Router();

router.route("/").post(createEducation).get(getEducation);
router
  .route("/:id")
  .put(updateEducation)
  .delete(deleteEducation);

export default router;
