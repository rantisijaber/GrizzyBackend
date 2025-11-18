import type { Request, Response } from 'express';
import * as classDiscussionService from "../services/classDiscussionService.js"

export const getDiscussions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const classDiscussions = await classDiscussionService.getAllDiscussions();
        if (!classDiscussions || classDiscussions.length === 0) {
            return res.status(404).json({
                message: 'No class discussion found',
            })
        } else {
            return res.status(200).json(classDiscussions);
        }
    } catch (error) {
        return res.status(500).json({
            message: "Could not get discussions" + JSON.stringify(error),
        })
    }
}

export const findDiscussion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                message: "Invalid discussion ID",
            })
        }

        const classDiscussion = await classDiscussionService.getDiscussion(id);
        if (!classDiscussion) {
            return res.status(404).json({
                message: "Could not find discussion",
            })
        }

        return res.status(200).json(classDiscussion);
    } catch (error) {
        return res.status(500).json({
            message: "Could not find discussion",
        })
    }
}
export const createDiscussion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const savedDiscussion = await classDiscussionService.createDiscussion(req.body);
        return res.status(201).json(savedDiscussion);
    } catch (error) {
        return res.status(500).json({
            message: "Could not create discussion",
        })
    }
}

