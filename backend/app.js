import express from "express"; 
import sellerRoutes from "./routes/sellerRoutes.js";
import customerRoutes from "./routes/customerRoutes.js";
import db from "./config/mongoose.js";
import bodyParser from "body-parser";
import  expressListEndpoints from "express-list-endpoints";
  
const app = express(); 
const PORT = 5000;

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