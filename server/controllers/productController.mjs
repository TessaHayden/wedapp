import Product from "../models/Product.mjs";

export const productspage = async (req, res) => {
  const locals = {
    title: "Shop Home",
    description: "The Wednesday App shopping page",
    layout: './layouts/productlanding'
  };
  res.render("products", locals);
};

