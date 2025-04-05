import User from "../models/User.mjs";

export const homepage = async (req, res) => {
  const locals = {
    title: 'Home',
    description: 'The Wednesday App',
  }
  res.render('index', locals);
};

export const signup = async (req, res) => {
  const locals = {
    title: "Sign up",
    description: "Sign up for the Wednesday App",
    layout: './layouts/signupform'
  };
  res.render('signup', locals);
};

export const postsignup = async (req, res) => {
  const newUser = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
  
  try {
    await User.create(newUser)
    
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
};
