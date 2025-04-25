import express from "express";
import User from "../models/User.mjs";
import * as adminController from "../controllers/adminController.mjs";
import corsWithOptions from "./cors.mjs";
import multer from "multer";

const adminRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "server/data/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

adminRouter.get(
  "/",
  corsWithOptions,
  adminController.adminDashboard
);
adminRouter.get(
  "/inventory",
  corsWithOptions,
  adminController.inventory
);
adminRouter.post(
  "/inventory",
  corsWithOptions,
  upload.array("img", 5),
  adminController.postinventory
);



export default adminRouter;
