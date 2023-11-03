import express from "express";
import * as controller from "../controller/customerController.js";
const router = express.Router();

// Customer APIs
router.get("/api/customers/:customerId", controller.getCustomerDetails);

router.post("/api/customers", controller.addCustomerAccount);

router.put("/api/customers/:customerId", controller.updateCustomerDetails);

router.delete("/api/customers/:customerId", controller.deleteCustomerAccount);

// Cart APIs
router.get("/api/customers/:customerId/cart",controller.getCartItems);

router.post("/api/customers/:customerId/cart", controller.addCartItem);

// router.put("/api/customers/:customerId/cart/:cartItemId",controller.updateCartItem);

router.delete("/api/customers/:customerId/cart/:cartItemId", controller.deleteCartItem);

// Wishlist APIs
router.get("/api/customers/:customerId/wishlist", controller.getWishlistItems);

router.post("/api/customers/:customerId/wishlist", controller.addWishlistItem);

router.put("/api/customers/:customerId/wishlist/:wishlistItemId", controller.updateWishlistItem);

router.delete("/api/customers/:customerId/wishlist/:wishlistItemId", controller.deleteWishlistItem);

// Address APIs
router.get("/api/customers/:customerId/addresses", controller.getAddresses);

router.post("/api/customers/:customerId/addresses", controller.addAddress);

router.put("/api/customers/:customerId/addresses/:addressId", controller.updateAddress);

router.delete("/api/customers/:customerId/addresses/:addressId", controller.deleteAddress);

// Order APIs
router.post("/api/customers/:customerId/placeOrder", controller.placeOrder);

router.get("/api/customers/:customerId/orders/:orderId", controller.getOrderById);

router.get("/api/customers/:customerId/orders", controller.getCustomerOrders);

router.put("/api/customers/:customerId/orders/:orderId", controller.updateOrder);

router.get( "/api/customers/:customerId/orders/:orderId/items/:itemId", controller.getOrderItem);

export default router;
