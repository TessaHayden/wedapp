import Product from "../models/Product.mjs";
import { console } from "inspector/promises";
import corsWithOptions from "../routes/cors.mjs";


export const productspage = async (req, res) => {
  const locals = {
    title: "Shop",
    description: "The Wednesday App shopping page",
    layout: './layouts/productlanding'
  };
  res.render('products', locals);
};

export const instrumentcards = async (req, res) => {
  try {

    const productitm = await Product.find({}).limit(9);
    
      res.render('instruments', { 
        title: 'Instruments',
        layout: './layouts/prodpage',
        productitm,
      });
    
  } catch (error) {
    
    console.log(error);

  }
};

export const microphonecards = async (req, res) => {

  try {
    const productitm = await Product.find({}).limit(6);
    res.render("microphones", {
      title: "Microphones",
      layout: "./layouts/prodpage",
      productitm,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studiocards = async (req, res) => {

  try {
    const productitm = await Product.find({}).limit(6);
    res.render("studio", {
      title: "Studio",
      layout: "./layouts/prodpage",
      productitm,
    });
  } catch (error) {
    console.log(error);
  }
};

export const partscards = async (req, res) => {
    
  try {
    const productitm = await Product.find({}).limit(6);
    res.render("parts", {
      title: "Parts",
      layout: "./layouts/prodpage",
      productitm,
    });
  } catch (error) {
    console.log(error);
  }
};

export const vintagecards = async (req, res) => {
  try {
    const productitm = await Product.find({}).limit(6);
    res.render("vintage", {
      title: "Vintage",
      layout: "./layouts/prodpage",
      productitm,
    });
  } catch (error) {
    console.log(error);
  }
};

export const misccards = async (req, res) => {
   
  try {
    const productitm = await Product.find({}).limit(6);
    res.render("misc", {
      title: "Misc",
      layout: "./layouts/prodpage",
      productitm
    });
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
    res.render('inventory', locals);
    
  } catch (error) {
    console.log(error)
  }
  
}

export const postinventory = async (req, res) => {
  const newProduct = new Product({
    category: req.body.category,
    modelType: req.body.modelType,
    name: req.body.name,
    description: req.body.description,
    img:[ req.files],
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
}

