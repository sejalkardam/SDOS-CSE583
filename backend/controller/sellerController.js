import Cakes from "../models/cake.js";
import { Order } from "../models/order.js";
import Coupon from "../models/coupon.js";
import razorpay from "./config/razorpay.js";

// Cakes
export async function getCakes(req, res) {
  try {
    let filteredCakes = await Cakes.find({});
    const { category, priceFrom, priceTo } = req.query;

    if (category) {
      filteredCakes = filteredCakes.filter(
        (cake) => cake.category === category
      );
    }
    if (priceFrom) {
      filteredCakes = filteredCakes.filter(
        (cake) => cake.price >= parseFloat(priceFrom)
      );
    }
    if (priceTo) {
      filteredCakes = filteredCakes.filter(
        (cake) => cake.price <= parseFloat(priceTo)
      );
    }
    res.status(200).json(filteredCakes);
  } catch (err) {
    console.log("Error fetching getCakes: " + err);
    res.status(500).json({ error: "Error getting cakes" });
  }
}

export async function getCakeById(req, res) {
  try {
    const cake = await Cakes.find({"cakeId":req.params.cakeId});

    if (cake) {
      res.status(200).json(cake); // Return the cake if found
    } else {
      res.status(404).json({ error: "Cake not found" }); // Return a 404 status if not found
    }
  } catch (err) {
    console.log("Error in getCakeByID", err);
    res.status(500).json({ error: "Error in getting Cake By Id" });
  }
}

export async function addCake(req, res) {
  try {
    const newCake = req.body;

    // Perform validation and error handling as needed
    if (!newCake || !newCake.name || !newCake.price || !newCake.id) {
      return res.status(400).json({ error: "Enter correct details of Cake" });
    }
    const cakeItem = new Cakes(newCake);
    const savedCakeItem = await cakeItem.save();

    res.status(201).json(savedCakeItem);
  } catch (err) {
    console.log("Error adding cake: " + err);
    res.status(500).json({ error: "Error adding cake" });
  }
}

export async function updateCake(req, res) {
  const cakeId = req.params.cakeId;
  const updatedCakeData = req.body;

  try {
    // Use Mongoose's updateOne method to fully update the cake by ID
    const result = await Cakes.updateOne({ id: cakeId }, updatedCakeData);

    if (result.nModified === 0) {
      return res.status(404).json({ error: "Cake not found" });
    }

    res.status(200).json(updatedCakeData); // Respond with the updated data
  } catch (err) {
    console.log("Error updating cake" + err);
    res.status(500).json({ error: "Error updating cake" });
  }
}

export async function deleteCake(req, res) {
  const cakeId = req.params.cakeId;

  try {
    // Use Mongoose's deleteOne function to delete the cake by ID
    const result = await Cakes.deleteOne({ id: cakeId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Cake not found" });
    }

    res.status(204).end();
  } catch (err) {
    console.log("Error deleting cake" + err);
    res.status(500).json({ error: "Error deleting cake" });
  }
}

// Orders
export async function getOrders(req, res) {
  try {
    let filteredOrders = await Order.find({});
    // const { category, priceFrom, priceTo } = req.query;

    // if (category) {
    //   filteredCakes = filteredCakes.filter((cake) => cake.category === category);
    // }
    // if (priceFrom) {
    //   filteredCakes = filteredCakes.filter(
    //     (cake) => cake.price >= parseFloat(priceFrom)
    //   );
    // }
    // if (priceTo) {
    //   filteredCakes = filteredCakes.filter(
    //     (cake) => cake.price <= parseFloat(priceTo)
    //   );
    // }
    res.status(200).json(filteredOrders);
  } catch (err) {
    console.log("Error fetching getOrders: " + err);
    res.status(500).json({ error: "Error getting Orders" });
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

export async function updateOrder(req, res) {
  const orderId = req.params.orderId;
  const updatedOrderData = req.body;

  try {
    // Use Mongoose's updateOne method to fully update the order by ID
    const result = await Order.updateOne({ _id: orderId }, updatedOrderData);

    if (result.nModified === 0) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json(await Order.findById(orderId)); // Respond with the updated data
  } catch (err) {
    console.log("Error updating Order" + err);
    res.status(500).json({ error: "Error updating Order" });
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

// Coupons

export async function getCoupons(req, res) {
  try {
    const coupons = await Coupon.find();
    res.status(200).json(coupons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting couponCodes" });
  }
}

export async function addCoupon(req, res) {
  const newCoupon = new Coupon(req.body);
  try {
    // Implement logic to add a new coupon code to the store
    const savedCoupon = await newCoupon.save();
    res.status(201).json(savedCoupon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateCoupon(req, res) {
  const couponId = req.params.couponId;
  try {
    const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, req.body, {
      new: true,
    });

    if (!updatedCoupon) {
      return res.status(404).json({ error: "Coupon code not found" });
    }

    res.status(200).json(updatedCoupon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteCoupon(req, res) {
  const couponId = req.params.couponId;

  try {
    // Implement logic to delete a specific coupon code by its unique ID
    const deletedCoupon = await Coupon.findByIdAndRemove(couponId);

    if (!deletedCoupon) {
      return res.status(404).json({ error: "Coupon code not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Verify Payment

export async function verifyPayment(req, res) {
  try {
    const paymentId = res.body.rzp_paymentId;
    const psp_orderId = res.body.psp_orderId;
    const signature = res.body.rzp_signature;

    // Verify signature using razorpay.utils.validatePaymentVerification Method
    const isValidSignature = await razorpay.utils.validatePaymentVerification(
      { order_id: psp_orderId, payment_id: paymentId },
      signature,
      process.env.RAZOR_KEY_SECRET
    );

    // Check if signature is valid or not
    if (isValidSignature) {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.orderId,
        { paymentStatus: "Captured" },
        {
          new: true,
        }
      );
      res.status(200).json("Payment Successful");
    } else {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.orderId,
        { paymentStatus: "Failed" },
        {
          new: true,
        }
      );
      res.status(500).json("Invalid Payment");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Invalid Payement. Something Went Wrong",
    });
  }
}

export async function verifyWebHookPayment(req, res) {
  try {
    // Verify signature using razorpay.utils.validateWebhookSignature method
    const isValidSignature = razorpay.utils.validateWebhookSignature(
      req.body,
      req.body.signature,
      process.env.RAZOR_KEY_SECRET
    );

    // Check if signature is valid or not
    if (isValidSignature) {
      res.status(200).json("Payment Successful");
    } else {
      res.status(500).json("Invalid Payment");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Invalid Payement. Something Went Wrong",
    });
  }
}
