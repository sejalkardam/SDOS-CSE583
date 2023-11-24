import mongoose from "mongoose";
import { orderSchema } from "../models/order.js";

// Define the schema for WishlistItem
const wishlistItemSchema = new mongoose.Schema({
  cakeId: {
    type: String,
    description: "Unique identifier of the cake in the wishlist",
    required: true,
  },
  addedAt: {
    type: Date,
    description: "Date and time when the item was added to the wishlist",
  },
});

// Define the schema for Address
const addressSchema = new mongoose.Schema({
  street: {
    type: String,
    description: "Street address",
  },
  city: {
    type: String,
    description: "City name",
  },
  state: {
    type: String,
    description: "State or province name",
  },
  postalCode: {
    type: String,
    description: "Postal or ZIP code",
  },
  country: {
    type: String,
    description: "Country name",
  },
  isPrimary: {
    type: Boolean,
    description: "Indicates if this is the customer's primary address",
  },
});

// Define the schema for CartItem
const cartItemSchema = new mongoose.Schema({
  name: {
    type: String,
    description: "Unique identifier of the cake",
    required: true,
  },
  price:{
   type: Number,
   description: "Price of item",
   required: true
  },
  quantity: {
    type: Number,
    description: "Quantity of the cake ordered",
    required: true,
  },
  customization: {
    type: String,
    description:
      "Customization details for the cake (size, flavor, message, etc.)",
  },
});

// Define the schema for Customer
const customerSchema = new mongoose.Schema(
  {
    uid:{
      type:String,
      required:true,
      unique:true
    },
    firstName: {
      type: String,
      description: "First name of the customer",
      required: true,
    },
    lastName: {
      type: String,
      description: "Last name of the customer",
      required: true,
    },
    age: {
      type: Number,
      description: "Age of the customer",
    },
    email: {
      type: String,
      description: "Email address of the customer",
    },
    phoneNumber: {
      type: String,
      description: "Phone number of the customer",
    },
    addresses: {
      type: [addressSchema],
      description: "List of customer addresses",
      default: [],
    },
    birthDate: {
      type: Date,
      description: "Birthday of the customer",
    },
    anniversaryDate: {
      type: Date,
      description: "Anniversary of the customer",
    },
    wishlist: {
      type: [wishlistItemSchema],
      description: "List of product IDs in the customer's wishlist",
      default: [],
    },
    orders: {
      type: [String],
      description: "List of customer's order IDs",
      default: [],
    },
    cart: {
      type: [cartItemSchema],
      description: "List of items in the customer's cart",
      default: [],
    },
    totalCartValue: {
      type: Number,
      description: "The total value of all products in the customer's cart",
      default: 0,
    },
  },
  { versionKey: false},
  
);

const Customer = mongoose.model("Customer", customerSchema);

export {Customer, customerSchema, cartItemSchema, addressSchema,wishlistItemSchema};
