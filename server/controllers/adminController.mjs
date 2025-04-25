import User from "../models/User.mjs";
import Product from "../models/Product.mjs";
import { console } from "node:inspector/promises";
import { salt, hashPassword, comparePassword } from "../config/auth.mjs";


export const adminDashboard = async (req, res) => {
  const locals = {
    title: "Admin Dashboard",
    description: "GUI for admin/owner to create, update and delete users/inventory/products/featured projects",
    layout: "./layouts/dashboard"
  }
  try {
    res.render('admin', locals)
  } catch (error) {
    console.log(error)
  }
}

export const inventory = async (req, res) => {
  const locals = {
    title: "CRUD",
    description: "CRUD page for site manager to update inventory",
    layout: "./layouts/inventorylo",
  };
  try {
    res.render("inventory", locals);
  } catch (error) {
    console.log(error);
  }
};

export const postinventory = async (req, res) => {
  const newProduct = new Product({
    category: req.body.category,
    modelType: req.body.modelType,
    name: req.body.name,
    description: req.body.description,
    img: [req.files],
    price: req.body.price,
    quantity: req.body.quantity,
    instock: req.body.instock,
  });
  try {
    await Product.create(newProduct);
    const locals = {
      title: "The Wednesday App",
      description: "Inventory UI",
      layout: "./layouts/full-page",
      successMsg: `${newProduct.name} has been successfully added to your inventory under ${newProduct.category}.`,
    };
    res.render("success", locals);
  } catch (error) {
    console.log(error);
  }
};

