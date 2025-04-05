import express from "express";
import { ObjectId } from "mongodb";
import path from "path";

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.render("projects", {
    title: "The Wednesday App",
    layout: "./layouts/full-page",
  });
});

export default projectsRouter;