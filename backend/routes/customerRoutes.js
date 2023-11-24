import express from "express";
import * as controller from "../controller/customerController.js";
const router = express.Router();

// Customer APIs
router.get("/api/customers", controller.getCustomerDetails);

router.post("/api/customers", controller.addCustomerAccount);

router.put("/api/customers", controller.updateCustomerDetails);

router.delete("/api/customers", controller.deleteCustomerAccount);

// Cart APIs
router.get("/api/customers/cart",controller.getCartItems);

router.post("/api/customers/cart", controller.addCartItem);

router.delete("/api/customers/clearCart", controller.clearCart);

// router.put("/api/customers/cart/:cartItemId",controller.updateCartItem);

router.delete("/api/customers/cart/:cartItemId", controller.deleteCartItem);

// Wishlist APIs
router.get("/api/customers/wishlist", controller.getWishlistItems);

router.post("/api/customers/wishlist", controller.addWishlistItem);

router.put("/api/customers/wishlist/:wishlistItemId", controller.updateWishlistItem);

router.delete("/api/customers/wishlist/:wishlistItemId", controller.deleteWishlistItem);

// Address APIs
router.get("/api/customers/addresses", controller.getAddresses);

router.post("/api/customers/addresses", controller.addAddress);

router.put("/api/customers/addresses/:addressId", controller.updateAddress);

router.delete("/api/customers/addresses/:addressId", controller.deleteAddress);

// Order APIs
router.post("/api/customers/placeOrder", controller.placeOrder);

router.get("/api/customers/orders/:orderId", controller.getOrderById);

router.get("/api/customers/orders", controller.getCustomerOrders);

router.put("/api/customers/orders/:orderId", controller.updateOrder);

router.get( "/api/customers/orders/:orderId/items/:itemId", controller.getOrderItem);

export default router;
