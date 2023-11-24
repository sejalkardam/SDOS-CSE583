// Order_Page.js
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import xyz from "../images/cake.jpeg"
import OrderCard from "../components/Order_Card";
import client from '../sanityClient'
import '../OrderPage.css'; // Import CSS for styling


const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    console.log('useEffect called');
    const query = `*[_type == 'orders' && customerEmail == '${localStorage.getItem('paa_emailID')}']`;
    console.log(query)

    client.fetch(query)
      .then((data) => {
        console.log('Sanity data: ', data);
        setOrders(data);
      })
      .catch((error) => {

        console.error('Error fetching data from Sanity:', error);
      });
  }, []); 

  return (
    
    <div className="order-page">
      <h1>Previous Orders</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            date={order.dateOfOrder}
            cakeName={order.productName}
            address={order.deliveryAddress}
            amount={order.orderTotal}
            imageUrl={order.productImgUrl}
            status={order.orderStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;
