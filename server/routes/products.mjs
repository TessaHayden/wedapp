import express from "express";
import * as  productController from '../controllers/productController.mjs';
import corsWithOptions from "./cors.mjs";

const productsRouter = express.Router();

productsRouter.get("/", corsWithOptions, productController.productspage);

productsRouter.get(
  "/instruments",
  corsWithOptions,
  productController.instrumentcards
);
productsRouter.get(
  "/microphones",
  corsWithOptions,
  productController.microphonecards
);
productsRouter.get("/studio", corsWithOptions, productController.studiocards);
productsRouter.get("/parts", corsWithOptions, productController.partscards);
productsRouter.get("/vintage", corsWithOptions, productController.vintagecards);
productsRouter.get("/misc", corsWithOptions, productController.misccards);

export default productsRouter;