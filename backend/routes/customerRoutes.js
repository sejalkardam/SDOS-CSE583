import express from "express";
import * as controller from "../controller/customerController.js";
const router = express.Router();

// Customer APIs
router.post("/customer/:customerId", controller.getCustomer);

router.post("/customer", controller.addCustomer);

router.put("/customer/:customerId", controller.updateCustomerDetails);

router.delete("/customer/:customerId", controller.deleteCustomer);

// Cart APIs
router.get("/customers/:customerId/cart",controller.getCartItems);

router.post("/customers/:customerId/cart", controller.addCartItem);

router.put("/customers/:customerId/cart/:cartItemId",controller.updateCartItem);

router.delete("/customers/:customerId/cart/:cartItemId", controller.deleteCartItem);

// Wishlist APIs
router.get("/customers/:customerId/wishlist", controller.getWishlistItems);

router.post("/customers/:customerId/wishlist", controller.addWishlistItem);

router.put("/customers/:customerId/wishlist/:wishlistItemId", controller.updateWishlistItem);

router.delete("/customers/:customerId/wishlist/:wishlistItemId", controller.deleteWishlistItem);

// Address APIs
router.get("/customers/:customerId/addresses", controller.getAddresses);

router.post("/customers/:customerId/addresses", controller.addAddress);

router.put("/customers/:customerId/addresses/:addressId", controller.updateAddress);

router.delete("/customers/:customerId/addresses/:addressId", controller.deleteAddress);

// Order APIs
router.post("/customers/:customerId/orders", controller.createOrder);

router.get("/customers/:customerId/orders/:orderId", controller.getOrderById);

router.get("/customers/:customerId/orders", controller.getCustomerOrders);

router.put("/customers/:customerId/orders/:orderId", controller.updateOrder);

router.get( "/customers/:customerId/orders/:orderId/items/:itemId", controller.getOrderItem);

export default router;
