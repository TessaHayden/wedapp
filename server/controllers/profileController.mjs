import User from "../models/User.mjs";
import Product from "../models/Product.mjs";
import jwt from "jsonwebtoken";
import { console } from "node:inspector/promises";
import "dotenv/config";

export const profile = async (req, res, next) => {
  try {
    const user = await User.find()

    res.render("profile")
    next();
  } catch (error) {
    console.log(error)
    next()
  }
}

export const cart = async (req, res, next) => {
  try {
    const user = await User.findById({ user: req.user._id });
    if (!user) {
      res.json({ message: "User not found" });
    }
    res.json({ message: "Successfully found User" });
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};