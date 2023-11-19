import express from "express";
import * as controller from "../controller/sellerController.js";
const router = express.Router();


//Cake Apis
router.get("/api/public/cakes", controller.getCakes);

router.get("/api/public/cakes/:cakeId", controller.getCakeById);

router.post("/api/seller/cakes", controller.addCake);

router.put("/api/seller/cakes/:cakeId",controller.updateCake);

router.delete('/api/seller/cakes/:cakeId',controller.deleteCake); 


//Order Apis
router.get("/api/seller/orders",controller.getOrders);

router.get("/api/seller/orders/:orderId", controller.getOrderById);

router.put("/api/seller/orders/:orderId", controller.updateOrder);

router.get("/api/seller/orders/:orderId/items/:itemId", controller.getOrderItem);

//Coupons Apis

router.get("/api/seller/couponCodes", controller.getCoupons);

router.post("/api/seller/couponCodes", controller.addCoupon);

router.put("/api/seller/couponCodes/:couponId",controller.updateCoupon);

router.delete("/api/seller/couponCodes/:couponId", controller.deleteCoupon);

//Verify Payment Apis

router.put("/api/seller/verifyPayment",controller.verifyPayment);

export default router;