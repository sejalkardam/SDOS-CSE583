import mongoose from "mongoose";

// Define the schema for WishlistItem
const wishlistItemSchema = new mongoose.Schema({
  id: {
    type: String,
    description: "Unique identifier for the wishlist item",
  },
  cakeId: {
    type: String,
    description: "Unique identifier of the cake in the wishlist",
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
  id: {
    type: String,
    description: "Unique identifier for the cart item",
  },
  itemId: {
    type: String,
    description: "Unique identifier of the cake",
  },
  quantity: {
    type: Number,
    description: "Quantity of the cake ordered",
  },
  customization: {
    type: String,
    description:
      "Customization details for the cake (size, flavor, message, etc.)",
  },
});

// Define the schema for Customer
const customerSchema = new mongoose.Schema({
  id: {
    type: String,
    description: "Unique identifier for the customer",
  },
  firstName: {
    type: String,
    description: "First name of the customer",
  },
  lastName: {
    type: String,
    description: "Last name of the customer",
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
  },
  orders: {
    type: [String],
    description: "List of customer's order IDs",
  },
  cart: {
    type: [cartItemSchema],
    description: "List of items in the customer's cart",
  },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
