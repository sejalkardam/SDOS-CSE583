import mongoose from "mongoose";

// Define the schema for OrderedItem
const orderedItemSchema = new mongoose.Schema({
  cakeId: {
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

// Define the schema for Order
const orderSchema = new mongoose.Schema({
  customerId: {
    type: String,
    description: "Id of the customer who placed the order",
  },
  addressId: {
    type: String,
    description: "Id of the destination address",
  },
  recieverPhoneNo: {
    type: String,
    description: "Phone number of the receiver",
  },
  recieverName: {
    type: String,
    description: "Name of the receiver",
  },
  items: {
    type: [orderedItemSchema],
    description: "List of ordered items (cakes) with details",
  },
  totalAmount: {
    type: Number,
    description: "Total amount of the order",
  },
  modeOfPayment: {
    type: String,
    enum: ["cashOnDelivery", "netBanking", "upi", "wallet"],
    description: "Mode of payment of the order",
  },
  paymentId: {
    type: String,
    description: "Details of the payment",
  },
  status: {
    type: String,
    description: "Current status of the order (e.g., pending, completed)",
  },
  feedback: {
    rating: {
      type: Number,
      description: "Customer's rating (e.g., 1 to 5 stars)",
    },
    comments: {
      type: String,
      description: "Customer's comments or feedback",
    },
    createdAt: {
      type: Date,
      description: "Date and time when the feedback was submitted",
    },
    description: "Customer feedback or comments on the order",
  },
  deliveryDate: {
    type: Date,
    description: "Delivery date of the order",
  },
});

const Order = mongoose.model("Order", orderSchema);

export { Order, OrderedItem, orderSchema };
