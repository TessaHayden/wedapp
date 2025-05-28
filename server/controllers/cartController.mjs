import User from "../models/User.mjs";
import Product from "../models/Product.mjs";
import jwt from "jsonwebtoken";
import { console } from "node:inspector/promises";
import "dotenv/config";

export const cart = async (req, res, next) => {
  try {
    res.render("cart")
  } catch (error) {
    console.log(error)
    res.json({message: "Sorry there was an issue finding your cart"})
    next()
  }
}