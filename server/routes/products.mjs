import express from "express";
import * as productController from '../controllers/productController.mjs';
import multer from "multer";

const productsRouter = express.Router();
const upload = multer({ dest: '../data/uploads' });

productsRouter.get("/", productController.productspage);
productsRouter.get("/inventory", productController.inventory);
productsRouter.post("/", upload.array('img', 5), productController.postinventory);
productsRouter.get("/instruments", productController.productcards);

export default productsRouter;