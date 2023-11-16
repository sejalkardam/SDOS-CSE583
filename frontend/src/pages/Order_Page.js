// Order_Page.js
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import xyz from "../images/cake.jpeg"
import OrderCard from "../components/Order_Card";

import '../OrderPage.css'; // Import CSS for styling


const OrderPage = () => {
  // Dummy list of previous orders
  const orders = [
    {
      date: 'October 25, 2023',
      cakeName: 'Chocolate Delight',
      address: '123 Main St, City',
      amount: '$25',
      imageUrl: "../images/cake.jpeg"
    },
    {
      date: 'November 5, 2023',
      cakeName: 'Vanilla Bliss',
      address: '456 Elm St, Town',
      amount: '$30',
      imageUrl: "../images/cake_image.jpeg"
    },
    // Add more dummy orders as needed
  ];

  return (
    
    <div className="order-page">
      <h1>Previous Orders</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            date={order.date}
            cakeName={order.cakeName}
            address={order.address}
            amount={order.amount}
            imageUrl={order.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
