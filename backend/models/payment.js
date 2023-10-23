import mongoose from "mongoose";

// Define the schema for Payment
const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    description: "Unique identifier of the order",
  },
  transactionId: {
    type: String,
    description: "Unique identifier of the payment transaction",
  },
  amount: {
    type: Number,
    description: "Amount paid for the order",
  },
  paymentDate: {
    type: Date,
    description: "Date and time when the payment was made",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
