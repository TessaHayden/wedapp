import express from "express";
import * as cartController from "../controllers/cartController.mjs";

const cartRouter = express.Router()

cartRouter.get("/", cartController.cartpage);

export default cartRouter;
