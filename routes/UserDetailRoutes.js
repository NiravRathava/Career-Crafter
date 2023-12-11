import express from "express";
import {
  createUserDetails,
  getUserDetails,
  updateUserDetails,
} from "../controllers/UserDetailsController.js";

const router = express.Router();
router.route("/").post(createUserDetails);
router.route("/:id").get(getUserDetails).put(updateUserDetails);
export default router;
