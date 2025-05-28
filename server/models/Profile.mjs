import mongoose from "mongoose";

const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Cart"
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    avatar: { type: String },
    text: { type: String },
  },
  {
    timestamps: { updatedAt: true, createdAt: true },
  }
);

const Profile = mongoose.model("Profile", profileSchema)

export default Profile;