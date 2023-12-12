import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
} from "../controllers/PostConrtoller.js";

const router = express.Router();

router.route("/").post(createPost).get(getPosts);
router.route("/:id").get(getPost).delete(deletePost);
export default router;
