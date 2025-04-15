import User from "../models/User.mjs";

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
  try {
    const data = req.body.password;
    function hashData(data) {
    return crypto.createHash("sha256").update(data).digest("hex");
    }
    
    const newUser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      email: req.body.email,
      password: hashData,
    });

    await User.create(newUser);
    const locals = {
      layout: './layouts/full-page',
      successMsg: `Congratulations ${newUser.fname}!  Your registration was completed successfully. Login using your username: ${newUser.username} and password.`
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
  res.render("login", locals);
};
