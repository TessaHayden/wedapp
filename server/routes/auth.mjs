import express from "express";
import * as authController from "../controllers/authController.mjs";
import multer from "multer";
import corsWithOptions from "./cors.mjs";
import { verifyToken, isUser } from "../config/auth.mjs";

const authRouter = express.Router();

authRouter.get("/signup", corsWithOptions, authController.signup);
authRouter.post("/signup", corsWithOptions, authController.postsignup);

authRouter.get("/login", corsWithOptions, authController.loginpg);
authRouter.post("/login", corsWithOptions, authController.postlogin);

authRouter.get(
  "/profile",
  corsWithOptions,
  verifyToken,
  isUser,
  authController.profilepg
);

authRouter.get("/cart", verifyToken, isUser, authController.cartpage);

authRouter.get(
  "/logout",
  corsWithOptions,
  verifyToken,
  isUser,
  authController.logoutpg
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "server/data/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

authRouter.get("/", corsWithOptions, authController.adminDashboard);
authRouter.get("/inventory", corsWithOptions, authController.inventory);
authRouter.post(
  "/inventory",
  corsWithOptions,
  upload.array("img", 5),
  authController.postinventory
);

export default authRouter;
