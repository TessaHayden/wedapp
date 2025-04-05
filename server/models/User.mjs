import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fname: {
    type: String,
    required: "Please enter your first name",
  },
  lname: {
    type: String,
    required: "Please enter your last name",
  },
  username: {
    type: String,
    required: "Please enter a username",
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
  },
  password: {
    type: String,
    required: "Create a password",
  },
  admin: {
    type: Boolean,
    default: false,
  },
});


const User = mongoose.model("User", UserSchema);
export default User;