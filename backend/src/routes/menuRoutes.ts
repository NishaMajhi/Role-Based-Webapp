import { Router } from 'express';
import { getConfiguration, getMenus } from '../controllers/menuController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authenticate, getMenus);
router.get('/configure', authenticate, getConfiguration)

export default router;
