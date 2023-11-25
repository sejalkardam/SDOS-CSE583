import express from "express";
import * as controller from "../controller/sellerController.js";
const router = express.Router();
import {verifyToken} from "../middleware/verifyToken.js";

//Cake Apis
router.get("/api/public/cakes", verifyToken, controller.getCakes);

router.get("/api/public/cakes/:cakeId", verifyToken, controller.getCakeById);

router.post("/api/seller/cakes", verifyToken, controller.addCake);

router.put("/api/seller/cakes/:cakeId", verifyToken, controller.updateCake);

router.delete("/api/seller/cakes/:cakeId", verifyToken, controller.deleteCake); 


//Order Apis
router.get("/api/seller/orders", verifyToken, controller.getOrders);

router.get("/api/seller/orders/:orderId", verifyToken, controller.getOrderById);

router.put("/api/seller/orders/:orderId", verifyToken, controller.updateOrder);

router.get(
  "/api/seller/orders/:orderId/items/:itemId",
  verifyToken,
  controller.getOrderItem
);

//Coupons Apis

router.get("/api/seller/couponCodes", verifyToken, controller.getCoupons);

router.post("/api/seller/couponCodes", verifyToken, controller.addCoupon);

router.put(
  "/api/seller/couponCodes/:couponId",
  verifyToken,
  controller.updateCoupon
);

router.delete(
  "/api/seller/couponCodes/:couponId",
  verifyToken,
  controller.deleteCoupon
);

//Verify Payment Apis

router.post("/api/seller/verifyPayment", verifyToken, controller.verifyPayment);

export default router;