import express from 'express';
import * as classDiscussionController from '../controllers/classDiscussionController.js';


const router = express.Router();

router.get("/", classDiscussionController.getDiscussions);

router.get("/:id", classDiscussionController.findDiscussion);

router.post("/", classDiscussionController.createDiscussion);

export default router;