import Cart from "../models/Cart.mjs";
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
