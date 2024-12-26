"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  salePrice: number;
}

const ProductHomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = (rating: number = 0) => {
    const fullStars = Array(rating).fill("★");
    const emptyStars = Array(5 - rating).fill("☆");
    return [...fullStars, ...emptyStars].join("");
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h2 className="text-4xl font-semibold text-gray-900 text-center mb-12">SHOP HERE!!!!!!!!!</h2>
      <p className="text-center text-gray-700 mb-10">
        Shop 100% Authentic Miss Rose makeup products from Official Miss Rose Cosmetics Store in Pakistan.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-start">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-white border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={224} // Aspect ratio for h-56 equivalent
                  className="object-cover w-full h-56"
                  priority // Ensures these images load faster
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  Sale
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                <div className="text-yellow-500 text-lg mb-2">{renderStars(product.rating)}</div>
                <p className="text-gray-500 line-through">Rs. {product.price}</p>
                <p className="text-black font-semibold text-lg">Rs. {product.salePrice}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductHomePage;