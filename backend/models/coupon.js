import mongoose from "mongoose";

// Define the schema for Coupon
const couponSchema = new mongoose.Schema({
  id: {
    type: String,
    description: "Unique identifier for the coupon code",
  },
  code: {
    type: String,
    description: "Coupon code value",
  },
  discountPercentage: {
    type: Number,
    description: "Discount percentage applied by the coupon code",
  },
  validFrom: {
    type: Date,
    description: "Start date when the coupon is valid",
  },
  validUntil: {
    type: Date,
    description: "End date until which the coupon is valid",
  },
});

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
