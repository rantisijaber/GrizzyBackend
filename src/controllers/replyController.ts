import type {Request, Response} from "express";
import * as replyService from "../services/replyService";

export const createReply = async (req: Request, res: Response) => {
    try {
        const reply = await replyService.createReply(req.body);
        return res.status(201).json({reply})
    } catch (error) {
        return res.status(400).json({
            message: "Could not create reply",
        })
    }
}

export const getReplies = async (req: Request, res: Response) => {
     try {
         const commentId = req.params.id
         const replies = await replyService.getReplies(parseInt(commentId));
         return res.status(200).json({replies});
     } catch (error) {
         return res.status(400).json({
             message: "Could not find replies",
         });
     }
}