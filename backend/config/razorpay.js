import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();

export const razorpay = new Razorpay({
  key_id: process.env.RAZOR_KEY_ID,
  key_secret: process.env.RAZOR_KEY_SECRET,
});