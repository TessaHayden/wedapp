import express from "express";
import * as homeController from "../controllers/homeController.mjs";


const indexRouter = express.Router();

indexRouter.get("/", homeController.homepage);
indexRouter.get("/signup", homeController.signup);
indexRouter.post("/signup", homeController.postsignup);
indexRouter.get("/login", homeController.loginpg);
indexRouter.post("/login", homeController.postlogin);
indexRouter.get("/logout", homeController.logoutpg);

export default indexRouter;
