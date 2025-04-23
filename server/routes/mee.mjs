import express from "express";

const meeRouter = express.Router();

meeRouter.get("/", (req, res) => {
  res.render("mee", {
    title: "The Wednesday App",
    layout: "./layouts/full-page",
  });
});

export default meeRouter;
