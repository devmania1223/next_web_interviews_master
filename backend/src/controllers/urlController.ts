import { Request, Response } from 'express';
import { checkReachableUrls, checkUrlsByPriority } from '../services/urlService';

export const getReachableUrls = async (req: Request, res: Response) => {
    try {
        const urls = await checkReachableUrls();
        res.status(200).json(urls);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal server error';
        res.status(500).json({ message });
    }
};

export const getUrlsByPriority = async (req: Request, res: Response) => {
    const { priority } = req.params;
    if (!priority || isNaN(Number(priority))) {
        return res.status(400).json({ message: 'Invalid priority' });
    }

    try {
        const urls = await checkUrlsByPriority(Number(priority));
        res.status(200).json(urls);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Internal server error';
        res.status(500).json({ message });
    }
};
