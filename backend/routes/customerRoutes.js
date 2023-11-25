import express from "express";
import * as controller from "../controller/customerController.js";
const router = express.Router();
import {verifyToken} from "../middleware/verifyToken.js";

// Customer APIs
router.get("/api/customers", verifyToken, controller.getCustomerDetails);

router.post("/api/customers", verifyToken, controller.addCustomerAccount);

router.put("/api/customers", verifyToken, controller.updateCustomerDetails);

router.delete("/api/customers", verifyToken, controller.deleteCustomerAccount);

// Cart APIs
router.get("/api/customers/cart", verifyToken, controller.getCartItems);

router.post("/api/customers/cart", verifyToken, controller.addCartItem);

router.delete("/api/customers/clearCart", verifyToken, controller.clearCart);

// router.put("/api/customers/cart/:cartItemId", verifyToken,controller.updateCartItem);

router.delete(
  "/api/customers/cart/:cartItemId",
  verifyToken,
  controller.deleteCartItem
);

// Wishlist APIs
router.get("/api/customers/wishlist", verifyToken, controller.getWishlistItems);

router.post("/api/customers/wishlist", verifyToken, controller.addWishlistItem);

router.put(
  "/api/customers/wishlist/:wishlistItemId",
  verifyToken,
  controller.updateWishlistItem
);

router.delete(
  "/api/customers/wishlist/:wishlistItemId",
  verifyToken,
  controller.deleteWishlistItem
);

// Address APIs
router.get("/api/customers/addresses", verifyToken, controller.getAddresses);

router.post("/api/customers/addresses", verifyToken, controller.addAddress);

router.put(
  "/api/customers/addresses/:addressId",
  verifyToken,
  controller.updateAddress
);

router.delete(
  "/api/customers/addresses/:addressId",
  verifyToken,
  controller.deleteAddress
);

// Order APIs
router.post("/api/customers/placeOrder", verifyToken, controller.placeOrder);

router.get(
  "/api/customers/orders/:orderId",
  verifyToken,
  controller.getOrderById
);

router.get("/api/customers/orders", verifyToken, controller.getCustomerOrders);

router.put(
  "/api/customers/orders/:orderId",
  verifyToken,
  controller.updateOrder
);

router.get(
  "/api/customers/orders/:orderId/items/:itemId",
  verifyToken,
  controller.getOrderItem
);

export default router;
