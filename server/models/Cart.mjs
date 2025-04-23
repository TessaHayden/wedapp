import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number,
      },
    ],
    price: {type: Number}
  },
  {
    timestamps: {
      updatedAt: true
    }

  }
);

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;