import express from "express";
import { ObjectId } from "mongodb";
import path from "path";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "The Wednesday App",
    layout: "./layouts/index-page",
  });
});

export default indexRouter;
