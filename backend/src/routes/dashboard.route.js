import express from 'express';
import { dashboard } from '../controllers/auth.controller.js';
import { authenticate } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/", authenticate, dashboard);

export default router;