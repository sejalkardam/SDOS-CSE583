import express from "express";
import * as controller from "../controller/controller.js";
const router = express.Router();

// Route to retrieve cakes with optional query parameters
router.get("/api/seller/cakes", controller.getCakes);

// Route to add a new cake
router.post("/api/seller/cakes", controller.addCake);

export default router;