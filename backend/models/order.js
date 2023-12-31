import mongoose from "mongoose";

// Define the schema for OrderedItem
const orderedItemSchema = new mongoose.Schema({
  name: {
    type: String,
    description: "Unique identifier of the cake",
    required: true,
  },
  price: {
    type: Number,
    description: "Price of Cake",
    required: true,
  },
  quantity: {
    type: String,
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
    required: true,
  },
  address: {
    type: String,
    description: "the destination address",
    required: true,
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
    required: true,
  },
  totalAmount: {
    type: Number,
    description: "Total amount of the order",
    required: true,
  },
  modeOfPayment: {
    type: String,
    description: "Mode of payment of the order",
    required: true,
  },
  psp_paymentId: {
    type: String,
    description: "Payment Service Provider's paymentId",
  },
  psp_orderId: {
    type: String,
    description: "Payment Service Provider's orderId",
  },
  receipt_id:{
    type: String,
    description: "Unique receipt Id",
    required: true
  },
  paymentStatus:{
    type: String,
    description: "Payment's Status",
    default: "PENDING"
  },
  orderStatus: {
    type: String,
    description: "Current status of the order (e.g., pending, completed)",
    enum: ["PENDING", "COMPLETED", "CANCELLED", "IN PROCESS"],
    default: "PENDING"
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
  },
  deliveryDate: {
    type: Date,
    description: "Delivery date of the order",
  },
});

const Order = mongoose.model("Order", orderSchema);

export { Order, orderSchema };
