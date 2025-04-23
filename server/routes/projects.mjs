import express from "express";


const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  res.render("projects", {
    title: "The Wednesday App",
    layout: "projects",
  });
});

export default projectsRouter;