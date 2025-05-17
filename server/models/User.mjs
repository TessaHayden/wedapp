import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    items: [
      {
        image: {
          type: mongoose.Schema.Types.String,
          ref: "Product"
        },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        itemName: {
          type: mongoose.Schema.Types.String,
          ref: "Product",
        },
        quantity: {
          type: mongoose.Schema.Types.Number,
          ref: "Product"
         },
        price: {
          type: mongoose.Schema.Types.Number,
          ref: "Product"
         },
      },
    ],
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
const profileSchema = new Schema(
  {
    cart: [cartSchema],
    avatar: { type: String },
    text: {type: String}
  },
  {
    timestamps:
    {updatedAt: true,
    createdAt: true}
  }
)
const UserSchema = new Schema(
  {
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
    salt: {
      type: String,
    },

    userAuth: {
      type: Boolean,
      default: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    profile: [profileSchema]
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
