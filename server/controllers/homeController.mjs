export const homepage = async (req, res) => {
  const locals = {
    title: "Home",
    description: "The Wednesday App",
  };
  res.render("index", locals);
};
