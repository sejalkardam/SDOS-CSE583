import mongoose from "mongoose";

// Define the schema for Payment
const paymentSchema = new mongoose.Schema({
  orderId: {
    type: String,
    description: "Unique identifier of the order",
  },
  paymentId: {
    type: String,
    description: "Unique identifier of the payment transaction",
  },
  status: {
    type: String,
    description: "Status of the order",
  },
  recieptId: {
    type: String,
    description: "Unique identifier of the reciept",
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
