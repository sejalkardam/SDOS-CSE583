import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/paa_creations_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to MongoDB successfully");
});

export default db;
