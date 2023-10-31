import express from "express";
import * as controller from "../controller/sellerController.js";
const router = express.Router();

//Cake Apis
router.get("/api/seller/cakes", controller.getCakes);

router.post("/api/seller/cakes", controller.addCake);

router.put("/api/seller/cakes/:cakeId",controller.updateCake);

router.delete('/api/seller/cakes/:cakeId',controller.deleteCake); 


//Order Apis
router.get("/api/seller/orders",controller.getOrders);

router.put("/api/seller/orders/:orderId", controller.updateOrder);

router.get("/api/seller/orders/:orderId/items/:itemId", controller.getOrderItem);

//Coupons Apis

router.get("/api/seller/couponCodes", controller.getCoupons);

router.post("/api/seller/couponCodes", controller.addCoupon);

router.put("/api/seller/couponCodes/:couponId",controller.updateCoupon);

router.delete("/api/seller/couponCodes/:couponId", controller.deleteCoupon);

router.use("/user", require("./user"));

router.all("*", function (req, res) {
  res.redirect("/");
});


export default router;