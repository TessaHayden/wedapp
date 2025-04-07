import Product from "../models/Product.mjs";

export const productspage = async (req, res) => {
  const locals = {
    title: "Shop Home",
    description: "The Wednesday App shopping page",
    layout: './layouts/productlanding'
  };
  res.render('products', locals);
};

export const productcards = async (req, res) => {

  try {
   const productitm = await Product.find({}).limit(6);
    res.render('instruments', { title: "Instruments",
    layout: "./layouts/prodpage", productitm});
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
  res.render('inventory', locals);
}

export const postinventory = async (req, res) => {
  const newProduct = new Product({
    category: req.body.category,
    sku: req.body._id,
    name: req.body.name,
    description: req.body.description,
    img: req.files,
    price: req.body.price,
    quantity: req.body.quantity,
    instock: req.body.instock,
  });
    try {
      await Product.create(newProduct);
      const locals = {
        layout: './layouts/full-page'
      }
      res.render('success', locals);
    } catch (error) {
      console.log(error);
    }
}

