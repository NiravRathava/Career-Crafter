import express from "express";
import {
  createUserDetails,
  getUserDetails,
  updateUserDetails,
} from "../controllers/UserDetailsController.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();
router.route("/").post(verifyToken,createUserDetails);
router.route("/:id").get(verifyToken,getUserDetails).put(verifyToken,updateUserDetails);
export default router;
