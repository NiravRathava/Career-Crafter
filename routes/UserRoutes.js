import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
import { verifyToken } from "../utils/VerifyToken.js";
const router = express.Router();

router.get("/", verifyToken,getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
