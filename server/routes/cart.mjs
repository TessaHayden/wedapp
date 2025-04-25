import express from "express"
import * as cartController from "../controllers/cartController.mjs"
import corsWithOptions from './cors.mjs'
import verifyUser from '../config/authorization.mjs'

const cartRouter = express.Router()

cartRouter.get("/", corsWithOptions, verifyUser, cartController.cartpage)

export default cartRouter;
