import express from 'express';
import * as homeController from '../controllers/homeController.mjs';

const router = express.Router();

router.get('/', homeController.homepage);

export default router;