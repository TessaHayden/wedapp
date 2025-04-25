import Cart from "../models/Cart.mjs";
import User from "../models/User.mjs";
import Product from "../models/Product.mjs";
import { console } from "node:inspector/promises";

export const cartpage = async (req, res) => {
  
  const locals = {
    title: 'Shopping Cart',
    layout: './layouts/shoppingcart.ejs',
  }
  try {
    res.render('cart', locals)
  } catch (error) {
    console.log(error)
  }
}
