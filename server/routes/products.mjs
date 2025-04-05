import express from "express";
import * as productController from '../controllers/productController.mjs';

const productsRouter = express.Router();

productsRouter.get("/", productController.productspage);
productsRouter.get("/products/inventory", productController.inventorypage);
productsRouter.post("/products/inventory", productController.addinventory);

export default productsRouter;