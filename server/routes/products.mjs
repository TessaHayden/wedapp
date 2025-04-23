import express from "express";
import * as  productController from '../controllers/productController.mjs';
import multer from "multer";
import corsWithOptions from "./cors.mjs";


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

productsRouter.get("/", corsWithOptions, productController.productspage);
productsRouter.get("/inventory", corsWithOptions, productController.inventory);
productsRouter.post(
  "/inventory",
  corsWithOptions,
  upload.array("img", 5),
  productController.postinventory
);
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