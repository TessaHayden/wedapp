import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'},
    items: [{
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }],
    subtotal: { type: Number },
    fees: { type: Number },
    total: { type: Number },
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const Cart = mongoose.model("Cart", cartSchema)

export default Cart