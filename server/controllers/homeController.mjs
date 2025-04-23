import User from "../models/User.mjs";
import { console } from "node:inspector/promises";
import { salt, hashPassword, comparePassword } from '../config/auth.mjs';


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

  const inputPassword = (req.body.password)
  const hashedPassword = hashPassword(inputPassword, salt);
  const { fname, lname, username, email } = req.body
  
  const newUser = new User({
    fname,
    lname,
    username,
    email,
    password: hashedPassword,
    salt: salt
  });

  try {
    await User.create(newUser);
    const locals = {
      layout: "./layouts/full-page",
      successMsg: `Congratulations ${newUser.fname}!  Your registration was completed successfully.`
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

  try {
    const query = { username: req.body.username };
    const user = await User.findOne(query);
    if (user == null) {
      return res.status(400).send("User was not found");
    }
    const inputPassword = req.body.password;
    const isMatch = comparePassword(inputPassword, user.password, user.salt);
    const locals = {
    title: "Login",
    description: "Login to the Wednesday App",
    layout: "./layouts/full-page",
    successMsg: `Welcome ${user.username}, you are logged in.`,
    };
    if (!isMatch) {
      return res.status(400).send('The username and password do not match our records.')
    }
    if (isMatch) {
       return res.render("success", locals);
    }

  } catch (error) {
    console.log(error);
  }
};
