import mongoose from "mongoose";
import { Schema } from "mongoose";
import { ObjectId } from "mongoose";

const userSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fname: {
    type: String,
    required: True,
  },
  lname: {
    type: String,
    required: True,
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

const signupSchema = new Schema(
  {
    fname: {
      type: String,
      required: "Enter your first name",
    },
    lname: {
      type: String,
      required: "Enter your last name",
    },
    username: {
      type: String,
      required: "Create your username",
    },
    email: {
      type: String,
      required: "Enter your email address",
    },
    password: {
      type: String,
      required: "Create a password",
    }
  }
);

const loginSchema = new Schema(
  {
    username: {
      type: String,
      required: "Enter your username",
    },
    password: {
      type: String,
      required: "Enter your password",
    }
  }
);

const User = mongoose.model("User", userSchema);
export default User;