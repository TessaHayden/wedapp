import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: {
    type: String
  },
  sku: {
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  img: [{
    type: String,
  }],
  price: {
    type: Number
  },
  quantity: {
    type: Number,
  },
  instock: {
    type: Boolean,
    default: false
  },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;