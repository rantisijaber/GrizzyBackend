import type { Request, Response } from 'express';
import * as commentService from '../services/commentService.js';


export const createComment = async (req: Request, res: Response): Promise<Response> => {
    try {
        const comment = await commentService.createComment(req.body);
        return res.status(201).json(comment);
    } catch (error) {
        return res.status(400).json({
            message: "Could not create comment",
        })
    }
}

export const getAllComments = async (req: Request, res: Response): Promise<Response> => {
    try {
        const comments = await commentService.getAllComments();
        if (!comments.length) {
            return res.status(404).json({
                message: 'No comments found',
            })
        }
        return res.status(200).json(comments);
    } catch (error) {
        return res.status(400).json({
            message: "Could not get comments",
        })
    }
}