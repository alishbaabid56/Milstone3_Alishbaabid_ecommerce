"use client"; // Ensures client-side functionality
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Cart = () => {
  const [cart, setCart] = useState<{ name: string; price: number; image: string }[]>([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);
  }, []);

  const clearCart = () => {
    if (confirm("Are you sure you want to clear the cart?")) {
      localStorage.removeItem("cart");
      setCart([]);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto flex flex-col min-h-screen">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        <div className="flex-grow">
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="border-b border-gray-200 py-4 flex flex-col sm:flex-row sm:items-center sm:space-x-6">
                {/* Display item image */}
                <div className="w-full sm:w-1/4 flex justify-center sm:justify-start mb-4 sm:mb-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="rounded-md shadow-sm"
                  />
                </div>
                <div className="flex-grow">
                  <p className="text-xl font-medium text-gray-800">{item.name}</p>
                  <p className="text-lg text-green-600">Rs. {item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <button
              onClick={clearCart}
              className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition duration-300 mb-4 sm:mb-0"
            >
              Clear Cart
            </button>
            <Link href="/buynow">
            <button
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-500 transition duration-300 mb-4 sm:mb-0"
            >
              Proceed to Checkout
            </button>
            </Link>
            <p className="text-gray-600 text-lg sm:ml-4">
              Total: Rs. {cart.reduce((total, item) => total + item.price, 0)}
            </p>
          </div>
        </div>
      )}

      {/* Continue Shopping link always visible at the bottom */}
      <div className="mt-6 text-center">
        <Link href="/product" className="text-gray-400 hover:text-gray-600 transition duration-300">
          Continue your shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;