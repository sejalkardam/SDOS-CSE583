import auth from "../config/firebase-config.js";
import mongoose from "mongoose";

export const verifyToken = async (req, res, next) => {

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decodeValue = await auth.verifyIdToken(token);
    if (decodeValue) {
      req.user = decodeValue.uid;
      return next();
    }
  } catch (e) {
    console.log("Error in verifyToken");
    console.log(e);
    return res.status(404).json({ message: "User not authenticated" });
  }
};
