import express from "express";
import { ObjectId } from "mongodb";
import path from "path";

const meeRouter = express.Router();

meeRouter.get("/", (req, res) => {
  res.render("mee", {
    title: "The Wednesday App",
    layout: "./layouts/full-page",
  });
});

export default meeRouter;
