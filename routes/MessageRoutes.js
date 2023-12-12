import express from "express";
import {
  sendMessage,
  getMessageHistory,
} from "../controllers/MessageController.js";
import { verifyToken } from "../utils/VerifyToken.js";
const router = express.Router();

router.post("/send/:id?", verifyToken,sendMessage);
router.get("/:id", verifyToken,getMessageHistory);

export default router;
