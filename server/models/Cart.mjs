import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true
    }

  }
);

const Cart = mongoose.model("Cart", CartSchema);
export default Cart;