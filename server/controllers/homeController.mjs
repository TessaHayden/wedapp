import User from "../models/User.mjs";
import { console } from "node:inspector/promises";
import { salt, hashPassword, comparePassword } from "../config/auth.mjs";
import { getToken } from "../config/authorization.mjs";

export const homepage = async (req, res) => {
  const locals = {
    title: "Home",
    description: "The Wednesday App",
  };
  res.render("index", locals);
};

export const signup = async (req, res) => {
  const locals = {
    title: "Sign up",
    description: "Sign up for the Wednesday App",
    layout: "./layouts/signupform",
  };
  res.render("signup", locals);
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

export const loginpg = async (req, res) => {
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

export const postlogin = async (req, res) => {
  const locals = {
    title: "Login",
    description: "Login to the Wednesday App",
    layout: "./layouts/full-page",
    successMsg: `Welcome ${user.username}, you are logged in.`,
  };
  try {
    const query = { username: req.body.username };
    const user = await User.findOne(query);
    const userToken = getToken({ username: req.body.username });
    if (user == null) {
      return res.status(400).send("User was not found");
    }
    const inputPassword = req.body.password;
    const isMatch = comparePassword(inputPassword, user.password, user.salt);
    if (!isMatch) {
      return res
        .status(400)
        .send("The username and password do not match our records.");
    }
    if (isMatch) {
      req.session.user = {
        id: user._id,
        fname: user.fname,
        username: user.username,
      };
      return res.render("success", locals);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logoutpg = async (req, res, next) => {
  const locals = {
    title: "Login",
    description: "Login to the Wednesday App",
    layout: "./layouts/full-page",
    successMsg: `Welcome, you are logged out.`,
  };
  try {
    if (req.session) {
      req.session.destroy();
      res.clearCookie("session-id");
      res.redirect("/");
    } else {
      return next(err);
    }
    return res.render("success", locals);
  } catch (error) {
    console.log(error);
  }
};
