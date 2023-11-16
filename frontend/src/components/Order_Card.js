// Order_Card.js

import React, { useState, useEffect } from 'react';
import '../OrderCard.css'; // Import CSS for styling

function OrderCard({ date, cakeName, address, amount, imageUrl }) {
  return (
    
    <div className="order-card">
      <div className="cake-info">
        <img src={imageUrl} alt="Cake" className="cake-image" />
        <div>
          <p className="cake-name">{cakeName}</p>
          <div className="order-details">
            <p><strong>Order Date:</strong> {date}</p>
            <p><strong>Order Amount:</strong> {amount}</p>
            <p><strong>Order Address:</strong> {address}</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default OrderCard;
