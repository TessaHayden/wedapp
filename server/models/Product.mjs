import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    category: {
      type: String,
      enum: [
        "microphones",
        "instruments",
        "studio",
        "parts",
        "vintage",
        "misc",
      ],
    },
    modelType: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    img: [{
      path: {type: String},
      originalname: {type: String},
      mimetype: {type: String}
    }],

    price: { type: Number },

    quantity: { type: Number },

    instock: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
