import express from "express";
import * as homeController from "../controllers/homeController.mjs";
import corsWithOptions from "./cors.mjs";


const indexRouter = express.Router();

indexRouter.get("/", corsWithOptions, homeController.homepage)

export default indexRouter;
