import express from "express";
import * as profileController from "../controllers/profileController.mjs";
import corsWithOptions from "./cors.mjs";
import { verifyToken, isUser } from "../config/auth.mjs";

const profileRouter = express.Router();

profileRouter.get("/profile", corsWithOptions, verifyToken, isUser, profileController.profile)

export default profileRouter