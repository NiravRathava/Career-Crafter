import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
import { verifyToken } from "../utils/VerifyToken.js";
const router = express.Router();

router.get("/",getUsers);
router.route("/:id").get(getUser).put(verifyToken,updateUser).delete(verifyToken,deleteUser);

export default router;
