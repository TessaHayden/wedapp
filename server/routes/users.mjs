import express from "express";
import { ObjectId } from "mongodb";
import path from "path";

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
  res.render("signup", {
    title: "The Wednesday App",
    layout: "./layouts/full-page",
  });
});

usersRouter.post('/signup', (req, res) => {
    const user = req.body
})



export default usersRouter;