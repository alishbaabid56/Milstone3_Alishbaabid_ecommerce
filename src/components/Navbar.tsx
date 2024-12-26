"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo1.png" alt="Logo" className="h-10 w-50 object-cover" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 ml-auto">
          <Link href="/">
            <span className="cursor-pointer hover:text-gray-300">Home</span>
          </Link>
          <Link href="/about">
            <span className="cursor-pointer hover:text-gray-300">About Us</span>
          </Link>
          <Link href="/product">
            <span className="cursor-pointer hover:text-gray-300">Product</span>
          </Link>
          <Link href="/reviews">
            <span className="cursor-pointer hover:text-gray-300">Reviews</span>
          </Link>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-gray-300">Contact Us</span>
          </Link>
          <Link href="/cart">
            <span className="flex items-center cursor-pointer hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 5H19M7 13l-1.2 5H19m0 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0M5 21a2 2 0 11-4 0m4 0a2 2 0 11-4 0"
                />
              </svg>
              <span>Cart </span>
            </span>
          </Link>
        </nav>

        {/* Mobile Menu & Cart Icon */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon for smaller screens */}
          <div className="md:hidden flex items-center justify-center space-x-2 mt-2">
            <Link href="/cart" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 5H19M7 13l-1.2 5H19m0 0a2 2 0 11-4 0m4 0a2 2 0 11-4 0M5 21a2 2 0 11-4 0m4 0a2 2 0 11-4 0"
                />
              </svg>
              <span className="text-sm">Cart </span>
            </Link>
          </div>

          {/* Navigation Icon */}
          <div className="md:hidden relative mt-4">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg ml-10">
                <Link href="/">
                  <div className="block px-4 py-2 hover:bg-gray-100">Home</div>
                </Link>
                <Link href="/about">
                  <div className="block px-4 py-2 hover:bg-gray-100">About Us</div>
                </Link>
                <Link href="/product">
                  <div className="block px-4 py-2 hover:bg-gray-100">Products</div>
                </Link>
                <Link href="/reviews">
                  <div className="block px-4 py-2 hover:bg-gray-100">Reviews</div>
                </Link>
                <Link href="/contact">
                  <div className="block px-4 py-2 hover:bg-gray-100">Contact Us</div>
                </Link>
               
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar