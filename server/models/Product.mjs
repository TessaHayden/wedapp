import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String,
  },
  sku: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  img: {
    filename: String,
    path: String,
    originalname: String,
    mimetype: String,
    size: Number,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  instock: {
    type: Boolean,
    default: false,
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;