import express from "express";
import * as commentController from "../controllers/commentController.js";


const router = express.Router();

router.get("/", commentController.getAllComments);

router.post("/", commentController.createComment);

export default router;