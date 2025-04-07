import express from "express";
import * as productController from '../controllers/productController.mjs';
import multer from "multer";

const productsRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "server/data/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

productsRouter.get("/", productController.productspage);
productsRouter.get("/inventory", productController.inventory);
productsRouter.post("/inventory", upload.array('img', 5), productController.postinventory);
productsRouter.get("/instruments", productController.instrumentcards);
productsRouter.get("/microphones", productController.microphonecards);
productsRouter.get("/studio", productController.studiocards);
productsRouter.get("/parts", productController.partscards);
productsRouter.get("/vintage", productController.vintagecards);
productsRouter.get("/misc", productController.misccards);

export default productsRouter;