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

