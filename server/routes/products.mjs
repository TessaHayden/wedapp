import express from "express";
import { ObjectId } from "mongodb";
import path from "path";
import bodyParser from "body-parser";
import { title } from "process";

const productsRouter = express.Router();
productsRouter.use(bodyParser.json());

productsRouter.get("/", (req, res) => {
  res.render("products", {
    title: "The Wednesday App",
    layout: "./layouts/productlanding",
  });
});

productsRouter.route("/microphones").get((req, res) => {
  res.render("products/microphones", {title: "The Wednesday App", layout: "./layouts/prodpage"});
});

productsRouter.route("/mixers").get((req, res) => {
  res.render("products/mixers", {
    title: "The Wednesday App",
    layout: "./layouts/prodpage",
  });
});
productsRouter.route("/instruments").get((req, res) => {
  res.render("products/instruments", {
    title: "The Wednesday App",
    layout: "./layouts/prodpage",
  });
});
productsRouter.route("/parts").get((req, res) => {
  res.render("products/parts", {
    title: "The Wednesday App",
    layout: "./layouts/prodpage",
  });
});
productsRouter.route("/scooters").get((req, res) => {
  res.render("products/scooters", {
    title: "The Wednesday App",
    layout: "./layouts/prodpage",
  });
});
productsRouter.route("/vacuumcleaners").get((req, res) => {
  res.render("products/vacuumcleaners", {
    title: "The Wednesday App",
    layout: "./layouts/prodpage",
  });
});

export default productsRouter;