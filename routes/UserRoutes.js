import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
const router = express.Router();

router.get("/", getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

export default router;
