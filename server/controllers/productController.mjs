import Product from "../models/Product.mjs";

export const productspage = async (req, res) => {
  const locals = {
    title: "Shop Home",
    description: "The Wednesday App shopping page",
    layout: './layouts/productlanding'
  };
  res.render("products", locals);
};

export const instrumentspage = async (req, res) => {
  const locals = {
    title: "Instruments",
    description: "Shop page for instruments",
    layout: './layouts/prodpage'
  };
  res.render("instruments", locals);
}

export const inventorypage = async (req, res) => {
    const locals = {
      title: "CRUD",
      description: "CRUD page for site manager to update inventory",
      layout: "./layouts/inventorylo",
    };
  res.render('inventory', locals);
}

export const addinventory = async (req, res) => {
  const newProduct = await new Product({
    category: req.body.category,
    sku: req.body.sku,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    quantity: req.body.quantity,
    instock: req.body.instock,
  });
  const locals = {
    title: "CRUD",
    description: "CRUD page for site manager to update inventory",
    layout: "./layouts/inventorylo",
  };  
    try {
      await Product.create(newProduct);
      res.redirect("products");
    } catch (error) {
      console.log(error);
    }
}

