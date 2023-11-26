import { Customer } from "../models/customer.js";
import { Order } from "../models/order.js";
import Cake from "../models/cake.js";
import razorpay from "../config/razorpay.js";
import uniqid from "uniqid";
// Customer
export async function getCustomerDetails(req, res) {
  try {
    let customerDetails = await Customer.findOne({ uid: req.user });
    res.status(200).json(customerDetails);
  } catch (err) {
    console.log("Error fetching customerDetails: ");
    console.log(err);
    res.status(500).json({ error: "Error getting customer details" });
  }
}

export async function addCustomerAccount(req, res) {
  try {
    let customerDetails = await Customer.findOne({ uid: req.user });
    if(customerDetails){
      console.log("Customer already exists");
      res.status(200);
    }
    else{
       console.log("Customer needs to be added");
       const newCustomer = new Customer({ uid: req.user, ...req.body });
       const savedCustomer = await newCustomer.save();
       console.log(savedCustomer);
       res.status(201).json(savedCustomer);

    }
   
  } catch (error) {
    console.log("Error adding Customer: ");
    console.log(error);
    res.status(500).json({ error: "Error adding customer" });
  }
}

export async function updateCustomerDetails(req, res) {
  try {
    const updatedCustomer = await Customer.findOneAndUpdate({ "uid": req.user },
      req.body,
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (error) {
    console.log("Error updating Customer: ");
    console.log(error);
    res.status(500).json({ error: "Error updating Customer" });
  }
}

export async function deleteCustomerAccount(req, res) {
  try {
    await Customer.findOneAndDelete({ "uid": req.user });
    res.status(204).json({ message: "Customer deleted" });
  } catch (error) {
    console.log("Error deleting Customer: ");
    console.log(error);
    res.status(500).json({ error: "Error deleting Customer" });
  }
}

// Cart
export async function getCartItems(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    const cartItems = customer.cart;
    res.json([
      {
        cart: cartItems,
        totalCartValue: customer.totalCartValue,
      },
    ]);
  } catch (error) {
    console.log("Error getting CartItems: ");
    console.log(error);
    res.status(400).json({ error: "Error getting cartItems" });
  }
}

export async function addCartItem(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    customer.cart=[req.body];
    customer.totalCartValue=0;

    const cakePrice = req.body.price;
    
    customer.totalCartValue = cakePrice ;

    const savedCustomer = await customer.save();
    res.json([
      {
        cart: savedCustomer.cart,
        totalCartValue: savedCustomer.totalCartValue,
      },
    ]);
  } catch (error) {
    console.log("Error adding cartItem: ");
    console.log(error);
    res.status(500).json({ error: "Error adding cartItem" });
  }
}

// export async function updateCartItem(req, res) {
//   try {
//     const customer = await Customer.findOne({ "uid": req.user });
//     const cartItem = customer.cart.id(req.params.cartItemId);
//     if (cartItem) {
//       if (req.body.quantity != undefined) {
//         const cakePrice = cartItem.price;
//         const current = req.body.quantity;
//         const prev = cartItem.quantity;
//         customer.totalCartValue += cakePrice * (current - prev);
//       }
//       cartItem.set(req.body);
//       if (req.body.quantity == 0) {
//         customer.cart.pull({ _id: req.params.cartItemId });
//       }
//       const savedCustomer = await customer.save();
//       res.json([
//         {
//           cart: savedCustomer.cart,
//           totalCartValue: savedCustomer.totalCartValue,
//         },
//       ]);
//     } else {
//       res.status(404).json({ error: "Cart item not found" });
//     }
//   } catch (error) {
//     console.log("Error updating CartItem: " );
//      console.log(error);
//     res.status(500).json({ error: "Error updating CartItem" });
//   }
// }

export async function deleteCartItem(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    const cartItem = customer.cart.id(req.params.cartItemId);
    const cakePrice = cartItem.price;
    customer.totalCartValue = 0;

    customer.cart.pull({ _id: req.params.cartItemId });
    const savedCustomer = await customer.save();
    res.json([
      {
        cart: savedCustomer.cart,
        totalCartValue: savedCustomer.totalCartValue,
      },
    ]);
  } catch (error) {
    console.log("Error deleting cartItem");
    console.log(error);
    res.status(400).json({ error: "Error deleting cartItem" });
  }
}

export async function clearCart(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    customer.totalCartValue = 0;
    customer.cart = [];
    const savedCustomer = await customer.save();
    res.json([
      {
        cart: savedCustomer.cart,
        totalCartValue: savedCustomer.totalCartValue,
      },
    ]);
  } catch (error) {
    console.log("Error clearing cart");
    console.log(error);
    res.status(400).json({ error: "Error clearing cart" });
  }
}

// Wishlist
export async function getWishlistItems(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    const wishlistItems = customer.wishlist;
    res.status(200).json(wishlistItems);
  } catch (error) {
    console.log("Error getting Wishlist Items: ");
    console.log(error);
    res.status(500).json({ error: "Error getting wishlist items" });
  }
}

export async function addWishlistItem(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    customer.wishlist.push(req.body);
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.wishlist);
  } catch (error) {
    console.log("Error adding wishlist item: ");
    console.log(error);
    res.status(500).json({ error: "Error adding wishlist item" });
  }
}

export async function updateWishlistItem(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    const wishlistItem = customer.wishlist.id(req.params.wishlistItemId);
    if (wishlistItem) {
      wishlistItem.set(req.body);
      const savedCustomer = await customer.save();
      res.status(200).json(savedCustomer.wishlist);
    } else {
      res.status(404).json({ error: "Wishlist item not found" });
    }
  } catch (error) {
    console.log("Error updating Wishlist Item: ");
    console.log(error);
    res.status(500).json({ error: "Error updating wishlist item" });
  }
}

export async function deleteWishlistItem(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    customer.wishlist.pull({ cakeId: req.params.wishlistItemId });
    const savedCustomer = await customer.save();
    res.status(200).json((await Customer.findOne({ uid: req.user })).wishlist);
  } catch (error) {
    console.log("Error deleting wishlist item: ");
    console.log(error);
    res.status(500).json({ error: "Error deleting wishlist item" });
  }
}

// Address
export async function getAddresses(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    const addresses = customer.addresses;
    res.status(200).json(addresses);
  } catch (error) {
    console.log("Error getting Addresses: ");
    console.log(error);
    res.status(500).json({ error: "Error getting addresses" });
  }
}

export async function addAddress(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    customer.addresses.push(req.body);
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.addresses);
  } catch (error) {
    console.log("Error adding address: ");
    console.log(error);
    res.status(500).json({ error: "Error adding address" });
  }
}

export async function updateAddress(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    const address = customer.addresses.id(req.params.addressId);
    if (address) {
      address.set(req.body);
      const savedCustomer = await customer.save();
      res.status(200).json(savedCustomer.addresses);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    console.log("Error updating Address: ");
    console.log(error);
    res.status(500).json({ error: "Error updating address" });
  }
}

export async function deleteAddress(req, res) {
  try {
    const customer = await Customer.findOne({ uid: req.user });
    customer.addresses.pull({ _id: req.params.addressId });
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.addresses);
  } catch (error) {
    console.log("Error deleting address: ");
    console.log(error);
    res.status(500).json({ error: "Error deleting address" });
  }
}

// Order

export async function placeOrder(req, res) {
  // Create a new order and add its ID to the customer's orders array

  try {
    // Fetch the customer and add the order's ID to the orders array
    let customer = await Customer.findOne({ uid: req.user });
    if (!customer || !customer.cart) {
      console.error("Customer not found");
      return res.status(404).json({ error: "Customer not found" });
    }
    const orderDetails = req.body;
    let orderData = {
      receipt_id: uniqid.process("RECEIPT-"),
      items: customer.cart,
      totalAmount: customer.totalCartValue,
      customerId: req.user,
      ...orderDetails,
    };

    if (orderDetails.modeOfPayment === "onlinePayment") {
      const options = {
        amount: orderData.totalAmount * 100, // amount == Rs 10
        currency: "INR",
        receipt: orderData["receipt_id"],
        payment_capture: 1,
        // 1 for automatic capture // 0 for manual capture
      };

      razorpay.orders.create(options, async function (err, psp_order) {
        if (err) {
          console.error(
            "Error in creating razorpay order" + JSON.stringify(err)
          );
          console.error(options);
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }

        console.log("Razorpay Order created: " + psp_order.id);

        orderData["psp_orderId"] = psp_order.id;

        // Create the order
        const newOrder = new Order(orderData);
        const savedOrder = await newOrder.save();

        customer.orders.push(savedOrder._id);
        customer.cart = [];
        customer.totalCartValue = 0;
        await customer.save();
        return res.status(201).json(savedOrder);
      });
    } else {
      
      const newOrder = new Order(orderData);
      const savedOrder = await newOrder.save();

      customer.orders.push(savedOrder._id);
      customer.cart = [];
      customer.totalCartValue = 0;
      await customer.save();

      return res.status(201).json(savedOrder);
    }
  } catch (error) {
    console.error("Error creating order: ");
    console.log(error);
    res.status(500).json({ error: "Error creating order" });
  }
}

export async function getOrderById(req, res) {
  // Get a single order by ID
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) {
      res.status(404).json({ error: "Order not found" });
    } else {
      res.status(200).json(order);
    }
  } catch (error) {
    console.error("Error getting order by ID: " + JSON.stringify(error));
    res.status(500).json({ error: "Error getting order by ID" });
  }
}

export async function getCustomerOrders(req, res) {
  // Retrieve a customer's orders by customer ID
  try {
    const customer = await Customer.findOne({ uid: req.user }).populate("orders");
    if (!customer) {
      res.status(404).json({ error: "Customer not found" });
    } else {
      res.status(200).json(customer.orders);
    }
  } catch (error) {
    console.error("Error getting customer's orders: " + JSON.stringify(error));
    res.status(500).json({ error: "Error getting customer's orders" });
  }
}

export async function updateOrder(req, res) {
  // Update an order by ID
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedOrder) {
      res.status(404).json({ error: "Order not found" });
    } else {
      res.status(200).json(updatedOrder);
    }
  } catch (error) {
    console.error("Error updating order: " + JSON.stringify(error));
    res.status(500).json({ error: "Error updating order" });
  }
}

export async function getOrderItem(req, res) {
  // Function to get a specific order item
  try {
    const orderId = req.params.orderId;
    const itemId = req.params.itemId;
    const order = await Order.findById(orderId);

    if (!order) {
      res.status(404).json({ error: "Order not found" });
      return;
    }

    // Find the item within the order based on the itemId
    const item = order.items.id(itemId);

    if (!item) {
      res.status(404).json({ error: "Order item not found" });
    } else {
      res.status(200).json(item);
    }
  } catch (error) {
    console.error("Error getting order item: " + JSON.stringify(error));
    res.status(500).json({ error: "Error getting order item" });
  }
}

// Delete an order by ID
// Delete an order by ID and remove it from the customer's orders array
// export async function deleteOrder(req, res) {
//   try {
//     const orderId = req.params.orderId;
//     const customer = await Customer.findOneAndUpdate(
//       { orders: orderId },
//       { $pull: { orders: orderId } },
//       { new: true }
//     );

//     if (!customer) {
//       res.status(404).json({ error: "Order not found" });
//       return;
//     }

//     const deletedOrder = await Order.findByIdAndRemove(orderId);

//     if (!deletedOrder) {
//       res.status(404).json({ error: "Order not found" });
//     } else {
//       res.status(200).json({ message: "Order deleted" });
//     }
//   } catch (error) {
//     console.error("Error deleting order: " + JSON.stringify(error));
//     res.status(500).json({ error: "Error deleting order" });
//   }
// }
