import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import sellerRoutes from "./routes/sellerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import db from "./config/mongoose.js";
import emailTransporter from "./config/nodemailer.js";
import razorpay from "./config/razorpay.js";
import bodyParser from "body-parser";
import expressListEndpoints from "express-list-endpoints";
import welcomeMail from "./mailers/welcome.js";
const app = express();
const PORT = 5000;

app.use(cors());

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
