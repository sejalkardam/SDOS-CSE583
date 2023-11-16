import express from "express"; 
import cors from "cors";
import sellerRoutes from "./routes/sellerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import db from "./config/mongoose.js";
import bodyParser from "body-parser";
import  expressListEndpoints from "express-list-endpoints";
import Razorpay from "razorpay";
const app = express(); 
const PORT = 5000;
import dotenv from "dotenv";
dotenv.config();

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
            payment_capture: 0,
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

app.post("/capture/:paymentId", (req, res) => {
    console.log("where2");
    try {
        return request(
            {
                method: "POST",
                url: `https://${process.env.RAZOR_KEY_ID}:${process.env.RAZOR_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: 10 * 100, // amount == Rs 10 // Same As Order amount
                    currency: "INR",
                },
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });
                }
                console.log("Status:", response.statusCode);
                console.log("Headers:", JSON.stringify(response.headers));
                console.log("Response:", body);
                return res.status(200).json(body);
            });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});

// Middleware to parse JSON requests
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/",sellerRoutes); 
app.use("/", customerRoutes); 


const endpoints = expressListEndpoints(app);
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 