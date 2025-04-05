import express from "express";
import * as productController from '../controllers/productController.mjs';

const productsRouter = express.Router();

productsRouter.get("/", productController.productspage);

export default productsRouter;