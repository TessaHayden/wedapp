import express from "express";
import * as homeController from '../controllers/homeController.mjs';

const indexRouter = express.Router();

indexRouter.get('/', homeController.homepage);
indexRouter.get('/signup', homeController.signup);

export default indexRouter;
