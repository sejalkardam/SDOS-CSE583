import express from "express";
import * as controller from "../controller/sellerController.js";
import customerRoutes from "../routes/customerRoutes.js";
const router = express.Router();

//Cake Apis
router.get("/public/cakes", controller.getCakes);

router.post("/seller/cakes", controller.addCake);

router.put("/seller/cakes/:cakeId",controller.updateCake);

router.delete('/seller/cakes/:cakeId',controller.deleteCake); 


//Order Apis
router.get("/seller/orders",controller.getOrders);

router.put("/seller/orders/:orderId", controller.updateOrder);

router.get("/seller/orders/:orderId/items/:itemId", controller.getOrderItem);

//Coupons Apis

router.get("/seller/couponCodes", controller.getCoupons);

router.post("/seller/couponCodes", controller.addCoupon);

router.put("/seller/couponCodes/:couponId",controller.updateCoupon);

router.delete("/seller/couponCodes/:couponId", controller.deleteCoupon);

router.use("/customer", customerRoutes);

router.all("*", function (req, res) {
  res.redirect("/");
});


export default router;