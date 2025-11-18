import express from "express";
import * as replyController from "../controllers/replyController.js"

const router = express.Router();

router.post("/", replyController.createReply);

router.get("/", replyController.getReplies);

export default router;