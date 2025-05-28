import User from "../models/User.mjs";
import Product from "../models/Product.mjs";
import jwt from "jsonwebtoken";
import { console } from "node:inspector/promises";
import { salt, hashPassword, comparePassword } from "../config/auth.mjs";
import "dotenv/config";

export const signup = async (req, res) => {
  const locals = {
    title: "Sign up",
    description: "Sign up for the Wednesday App",
    layout: "./layouts/signupform",
  };
  try {
    res.render("signup", locals);
  } catch (error) {
    console.log(error);
  }
};

export const postsignup = async (req, res) => {
  const inputPassword = req.body.password;
  const hashedPassword = hashPassword(inputPassword, salt);
  const { fname, lname, username, email } = req.body;

  const newUser = new User({
    fname,
    lname,
    username,
    email,
    password: hashedPassword,
    salt: salt,
    userAuth: true,
    admin: false,
  });
  try {
    await User.create(newUser);
    const locals = {
      layout: "./layouts/full-page",
      successMsg: `Congratulations ${newUser.fname}!  Your registration was completed successfully.`,
    };
    res.render("success", locals);
  } catch (error) {
    console.log(error);
  }
};

export const loginpg = (req, res) => {
  const locals = {
    title: "Login",
    description: "Login on the Wednesday App",
    layout: "./layouts/full-page",
  };

  try {
    res.render("login", locals);
  } catch (error) {
    console.log(error);
  }
};

export const postlogin = async (req, res, next) => {
  try {
    const query = { username: req.body.username };
    const user = await User.findOne(query);
    const locals = {
      title: `${user.username}`,
      description: "User's profile page",
      layout: "./layouts/full-page",
      successMsg: `Welcome ${user.username}, you are logged in.`,
      user,
    };

    if (user == null) {
      res.status(400).send("User was not found");
    }

    const inputPassword = req.body.password;
    const isMatch = comparePassword(inputPassword, user.password, user.salt);

    if (!isMatch) {
      res
        .status(400)
        .send("The username and password do not match our records.");
    }

    if (isMatch) {

      const payload = {
        _id: user._id,
        username: user.username,
        userRole: user.userAuth,
      };
      jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION,
      });
      res.render("success", locals)
    }
  } catch (error) {
    console.log(error);
  }
  
};

export const logoutpg = async (req, res, next) => {
  const locals = {
    title: "Log Out",
    description: "Log out",
    layout: "./layouts/full-page",
    successMsg: `You are logged out.`,
  };
  try {
    res.render("success", locals);
    next()
  } catch (error) {
    console.log(error);
  }
};

export const adminDashboard = async (req, res) => {
  const locals = {
    title: "Admin Dashboard",
    description:
      "GUI for admin/owner to create, update and delete users/inventory/products/featured projects",
    layout: "./layouts/dashboard",
  };
  try {
    res.render("admin", locals);
  } catch (error) {
    console.log(error);
  }
};

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
