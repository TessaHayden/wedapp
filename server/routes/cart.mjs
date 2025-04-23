import express from "express"
import * as cartController from "../controllers/cartController.mjs"
import corsWithOptions from './cors.mjs'

const cartRouter = express.Router()

cartRouter.get("/", corsWithOptions, cartController.cartpage)

export default cartRouter;
