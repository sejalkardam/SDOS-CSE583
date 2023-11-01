import {Customer} from "../models/customer.js";
import {Order} from "../models/order.js";

// Customer
export async function getCustomer(req, res) {
  try {
    let customerDetails = await Customer.find({ _id: req.params.customerId })
    res.status(200).json(customerDetails);
  } catch (err) {
    console.log("Error fetching customerDetails: " + err);
    res.status(500).json({ error: "Error getting customer details" });
  }
}

export async function addCustomer(req, res) {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.json(savedCustomer);
  } catch (error) {
    console.log("Error adding Customer: "+error)
    res.status(400).json({ error: "Error adding customer" });
  }
}

export async function updateCustomerDetails(req, res) {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.customerId,
      req.body,
      { new: true }
    );
    res.json(updatedCustomer);
  } catch (error) {
    console.log("Error updating Customer: "+error)
    res.status(400).json({ error: "Error updating Customer"});
  }
}

export async function deleteCustomer(req, res) {
  try {
    await Customer.findByIdAndRemove(req.params.customerId);
    res.json({ message: "Customer deleted" });
  } catch (error) {
    console.log("Error deleting Customer: "+error)
    res.status(400).json({ error: "Error deleting Customer" });
  }
}

// Cart
export async function getCartItems(req,res){
  try {
    const customer = await Customer.findById(req.params.customerId);
    const cartItems = customer.cart;
    res.json(cartItems);
  } catch (error) {
    console.log("Error getting CartItems: " + error);
    res.status(400).json({ error: "Error getting cartItems" });
  }

}

export async function addCartItem(req,res){
   try {
     const customer = await Customer.findById(req.params.customerId);
     customer.cart.push(req.body);
     const savedCustomer = await customer.save();
     res.json(savedCustomer.cart);
   } catch (error) {
     console.log("Error adding cartItem: " + error);
     res.status(400).json({ error: "Error adding cartItem" });
   }
}

export async function updateCartItem(req,res){
  try {
    const customer = await Customer.findById(req.params.customerId);
    const cartItem = customer.cart.id(req.params.cartItemId);
    if (cartItem) {
      cartItem.set(req.body);
      const savedCustomer = await customer.save();
      res.json(savedCustomer.cart);
    } else {
      res.status(404).json({ error: "Cart item not found" });
    }
  } catch (error) {
    console.log("Error updating CartItem: "+error)
    res.status(500).json({ error: "Error updating CartItem" });
  }
}

export async function deleteCartItem(req,res){
  try {
    const customer = await Customer.findById(req.params.customerId);
    customer.cart.id(req.params.cartItemId).remove();
    const savedCustomer = await customer.save();
    res.json(savedCustomer.cart);
  } catch (error) {
    console.log("Error deleting cartItem"+error);
    res.status(400).json({ error: "Error deleting cartItem" });
  }
}

// Wishlist
export async function getWishlistItems(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    const wishlistItems = customer.wishlist;
    res.status(200).json(wishlistItems);
  } catch (error) {
    console.log("Error getting Wishlist Items: " + error);
    res.status(500).json({ error: "Error getting wishlist items" });
  }
}

export async function addWishlistItem(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    customer.wishlist.push(req.body);
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.wishlist);
  } catch (error) {
    console.log("Error adding wishlist item: " + error);
    res.status(500).json({ error: "Error adding wishlist item" });
  }
}

export async function updateWishlistItem(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    const wishlistItem = customer.wishlist.id(req.params.wishlistItemId);
    if (wishlistItem) {
      wishlistItem.set(req.body);
      const savedCustomer = await customer.save();
      res.status(200).json(savedCustomer.wishlist);
    } else {
      res.status(404).json({ error: "Wishlist item not found" });
    }
  } catch (error) {
    console.log("Error updating Wishlist Item: " + error);
    res.status(500).json({ error: "Error updating wishlist item" });
  }
}

export async function deleteWishlistItem(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    customer.wishlist.id(req.params.wishlistItemId).remove();
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.wishlist);
  } catch (error) {
    console.log("Error deleting wishlist item: " + error);
    res.status(500).json({ error: "Error deleting wishlist item" });
  }
}

// Address 
export async function getAddresses(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    const addresses = customer.addresses;
    res.status(200).json(addresses);
  } catch (error) {
    console.log("Error getting Addresses: " + error);
    res.status(500).json({ error: "Error getting addresses" });
  }
}

export async function addAddress(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    customer.addresses.push(req.body);
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.addresses);
  } catch (error) {
    console.log("Error adding address: " + error);
    res.status(500).json({ error: "Error adding address" });
  }
}

export async function updateAddress(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    const address = customer.addresses.id(req.params.addressId);
    if (address) {
      address.set(req.body);
      const savedCustomer = await customer.save();
      res.status(200).json(savedCustomer.addresses);
    } else {
      res.status(404).json({ error: "Address not found" });
    }
  } catch (error) {
    console.log("Error updating Address: " + error);
    res.status(500).json({ error: "Error updating address" });
  }
}

export async function deleteAddress(req, res) {
  try {
    const customer = await Customer.findById(req.params.customerId);
    customer.addresses.id(req.params.addressId).remove();
    const savedCustomer = await customer.save();
    res.status(200).json(savedCustomer.addresses);
  } catch (error) {
    console.log("Error deleting address: " + error);
    res.status(500).json({ error: "Error deleting address" });
  }
}

// Order

export async function createOrder(req, res) {
  // Create a new order and add its ID to the customer's orders array
  try {
    // Fetch the customer and add the order's ID to the orders array
    const customer = await Customer.findById(req.body.customerId);
    if (!customer) {
      res.status(404).json({ error: "Customer not found" });
      return;
    }

    // Create the order
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();

    customer.orders.push(savedOrder._id);
    await customer.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Error creating order: " + error);
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
    console.error("Error getting order by ID: " + error);
    res.status(500).json({ error: "Error getting order by ID" });
  }
}

export async function getCustomerOrders(req, res) {
  // Retrieve a customer's orders by customer ID
  try {
    const customer = await Customer.findById(req.params.customerId).populate(
      "orders"
    );
    if (!customer) {
      res.status(404).json({ error: "Customer not found" });
    } else {
      res.status(200).json(customer.orders);
    }
  } catch (error) {
    console.error("Error getting customer's orders: " + error);
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
    console.error("Error updating order: " + error);
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
    console.error("Error getting order item: " + error);
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
  //     console.error("Error deleting order: " + error);
  //     res.status(500).json({ error: "Error deleting order" });
  //   }
  // }

