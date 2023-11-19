import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import sellerRoutes from "./routes/sellerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import db from "./config/mongoose.js";
import bodyParser from "body-parser";
import expressListEndpoints from "express-list-endpoints";
import Razorpay from "razorpay";
import { sendMail } from "./mailers/sample.js";
import axios from "axios";

const app = express();
const PORT = 5000;

const instance = new Razorpay({
  key_id: process.env.RAZOR_KEY_ID,
  key_secret: process.env.RAZOR_KEY_SECRET,
});

app.use(cors());

app.get("/payment", (req, res) => {
  console.log("where");
  try {
    const options = {
      amount: 10 * 100, // amount == Rs 10
      currency: "INR",
      receipt: "receipt#1",
      payment_capture: 1,
      // 1 for automatic capture // 0 for manual capture
    };
    instance.orders.create(options, async function (err, order) {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Something Went Wrong",
        });
      }
      console.log(order);
      return res.status(200).json(order);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
});

app.post("/verifyPayment", async (req, res) => {
  const paymentId = res.body.paymentId;

  const paymentStatus = payment.status;
  const orderId=payment.order_id;
  const signature=res.body.signature;


      // Verify signature using razorpay.utils.validateWebhookSignature method
      const isValidSignature = instance.utils.validatePaymentVerification(
        { order_id: orderId, payment_id: paymentId },
        signature,
        process.env.RAZOR_KEY_SECRET
      );

      // Check if signature is valid or not
      if (isValidSignature) {
        res.status(200).json("Payment Successful");
      } else {
        res.status(500).json("Invalid Payment");
      }

      // Send payment status back to frontend
      res.json({ paymentStatus: paymentStatus });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({
        message: "Invalid Payement. Something Went Wrong",
      });
    });

  

  // const abc = await axios
  //   .post(
  //     `https://${process.env.RAZOR_KEY_ID}:${process.env.RAZOR_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
  //     {
  //       amount: 10 * 100,
  //       currency: "INR",
  //     }
  //   )
  //   .then((response) => {
  //     console.log(response.data);
  //     // Process the response data here
  //     return;
  //   })
  //   .catch((error) => {
  //     console.error(error.response);
  //     return res.status(500).json({
  //       message: "Something Went Wrong",
  //     });
  //   });

  // console.log(abc);

  // return abc;
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

app.use("/", sellerRoutes);
app.use("/", customerRoutes);

const endpoints = expressListEndpoints(app);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
