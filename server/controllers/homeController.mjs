import User from "../models/User.mjs";
import crypto, { createHmac } from 'node:crypto';

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

  let { fname, lname, username, email, password } = req.body;
  const newUser = new User({
    fname,
    lname,
    username,
    email,
    password,
  });

  try {

    await User.create(newUser);
    const locals = {
      layout: './layouts/full-page',
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
    layout: "login",
    };
  
    const loginUser = User.find(user => user.username == req.body.username)
    if (user == null) {
      return res.send("400 user not found");
  };

  try {

    
    res.render("login", locals);

  } catch (error) {
    console.log(error);
  }
};
