import express from "express";
import * as controller from "../controller/controller.js";
const router = express.Router();

// Route to retrieve cakes with optional query parameters
router.get("/api/seller/cakes", controller.getCakes);

// Route to add a new cake
router.post("/api/seller/cakes", controller.addCake);

//Route to update a cake by Id
router.put("/api/seller/cakes/:cakeId",controller.updateCake);

// Route to delete a cake by ID
router.delete('/api/seller/cakes/:cakeId',controller.deleteCake); 

export default router;