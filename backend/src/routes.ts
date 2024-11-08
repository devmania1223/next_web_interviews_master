import { Router } from 'express';
import { getReachableUrls, getUrlsByPriority } from './controllers/urlController';

const router = Router();

router.get('/urls/reachable', getReachableUrls);
router.get('/urls/priority/:priority', getUrlsByPriority);

export default router;
