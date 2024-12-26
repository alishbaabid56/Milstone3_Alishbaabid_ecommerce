"use client";

import { useEffect, useState } from "react";

type OrderDetails = {
  name: string;
  email: string;
  street: string;
  city: string;
  phone: string;
  productName: string;
  quantity: string;
};

export default function Confirmation() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <p className="text-lg text-gray-700">Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-xl w-full">
        <div className="flex justify-center items-center mb-4">
          <div className="bg-green-500 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-green-700">Order Confirmed!</h1>
        <p className="mt-2 text-gray-600">
          Thank you for your purchase. Here are your order details:
        </p>

        <div className="mt-6 text-left bg-white p-4 rounded-lg shadow-md">
          <p className="text-gray-800 break-words">
            <strong>Full Name:</strong> {orderDetails.name}
          </p>
          <p className="text-gray-800 break-words">
            <strong>Email:</strong> {orderDetails.email}
          </p>
          <p className="text-gray-800 break-words">
            <strong>Street Address:</strong> {orderDetails.street}
          </p>
          <p className="text-gray-800 break-words">
            <strong>City:</strong> {orderDetails.city}
          </p>
          <p className="text-gray-800 break-words">
            <strong>Phone Number:</strong> {orderDetails.phone}
          </p>
          <p className="text-gray-800 break-words">
            <strong>Quantity:</strong> {orderDetails.quantity}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("orderDetails");
            window.location.href = "/";
          }}
          className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
}