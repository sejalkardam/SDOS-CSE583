import React from 'react'
import { useLocation } from 'react-router-dom';
export default function OrderConfirmed(props) {

    const location = useLocation();
    const { orderDetails } = location.state;
    return (
        <div className="flex items-center justify-center h-screen bg-yellow-200">
            <div className="max-w-lg p-6 bg-white rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-yellow-600">Order Confirmation</h1>

                <div className="mb-4">
                    <img src={orderDetails.cakeImage} alt="Cake" className="w-full h-40 object-cover rounded" />
                </div>

                <div className="mb-4">
                    <p className="text-lg font-semibold text-yellow-800">Thank you, {orderDetails.name}!</p>
                    <p className="text-gray-600">Your order has been confirmed.</p>
                </div>

                <div className="mb-4">
                    <p className="text-lg font-semibold text-yellow-800">Delivery Address:</p>
                    <p className="text-gray-600">{orderDetails.address}</p>
                </div>

                <div className="mb-4">
                    <p className="text-lg font-semibold text-yellow-800">Order Total:</p>
                    <p className="text-green-600">{orderDetails.price}</p>
                </div>

                {/* <div className="text-center">
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:shadow-outline-yellow">
                        Track Your Order
                    </button>
                </div> */}
            </div>
        </div>
    )
}
