import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
} from "../controllers/PostConrtoller.js";
import { verifyToken } from "../utils/VerifyToken.js";

const router = express.Router();

router.route("/").post(verifyToken,createPost).get(verifyToken,getPosts);
router.route("/:id").get(verifyToken,getPost).delete(verifyToken,deletePost);
export default router;
