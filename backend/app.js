import express from "express"; 
import db from "./config/mongoose.js";
import routes from "./routes/routes.js";
import bodyParser from "body-parser";
  
const app = express(); 
const PORT = 5000;

// Define middleware to parse JSON requests
app.use(bodyParser.json());

app.use("/",routes); 
  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 