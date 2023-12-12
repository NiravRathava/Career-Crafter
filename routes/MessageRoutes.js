import express from "express";
import {
  sendMessage,
  getMessageHistory,
} from "../controllers/MessageController.js";
const router = express.Router();

router.post("/send/:id?", sendMessage);
router.get("/:id", getMessageHistory);

export default router;
