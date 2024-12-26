"use client"



import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductPage = () => {
  const { id } = useParams(); 
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (id) {
      setLoading(false);
    }

    
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    
  }, [id]);
  const products: Record<string, { name: string; price: number; salePrice: number; image: string; description: string; rating: number }> = {
    "1": {
      name: "Miss Rose Lipstick",
      price: 499,
      salePrice: 399,
      image: "/post2.png",
      description: "A high-quality lipstick that provides long-lasting color and hydration.",
      rating: 4,
    },
    "2": {
      name: "Miss Rose Mascara",
      price: 699,
      salePrice: 599,
      image: "/post3.png",
      description: "An enriching mascara that gives your lashes volume and definition.",
      rating: 5,
    },
    "3": {
      name: "Miss Rose Foundation",
      price: 899,
      salePrice: 799,
      image: "/post1.png",
      description: "A smooth foundation that gives a flawless, radiant finish.",
      rating: 4,
    },
    "4": {
      name: "Miss Rose Concealer",
      price: 450,
      salePrice: 299,
      image: "/post4.png",
      description: "A creamy concealer that helps cover blemishes and dark circles.",
      rating: 4,
    },
    "5": {
      name: "Miss Rose Eyeliner",
      price: 350,
      salePrice: 299,
      image: "/post5.png",
      description: "A bold eyeliner to make your eyes pop and define them.",
      rating: 5,
    },
    "6": {
      name: "Miss Rose Blush",
      price: 499,
      salePrice: 450,
      image: "/post6.png",
      description: "A beautiful blush that gives a natural flush to your cheeks.",
      rating: 4,
    },
    "7": {
      name: "Miss Rose Lip Gloss",
      price: 399,
      salePrice: 349,
      image: "/post7.png",
      description: "A glossy finish that keeps your lips hydrated and shiny.",
      rating: 4,
    },
    "8": {
      name: "Miss Rose Eyeshadow",
      price: 799,
      salePrice: 699,
      image: "/post8.png",
      description: "A range of vibrant shades for a perfect eye makeup look.",
      rating: 5,
    },
    "9": {
      name: "Miss Rose Highlighter",
      price: 499,
      salePrice: 450,
      image: "/post9.png",
      description: "A glowing highlighter that gives you a radiant finish.",
      rating: 5,
    },
    "10": {
      name: "Miss Rose Setting Spray",
      price: 399,
      salePrice: 350,
      image: "/post10.png",
      description: "A setting spray that keeps your makeup in place all day.",
      rating: 4,
    },
    "11": {
      name: "Miss Rose Nail Polish",
      price: 250,
      salePrice: 199,
      image: "/post11.png",
      description: "A range of nail polishes in various shades for all occasions.",
      rating: 3,
    },
    "12": {
      name: "Miss Rose Contour Kit",
      price: 999,
      salePrice: 899,
      image: "/post12.png",
      description: "A contour kit with everything you need for a sculpted face.",
      rating: 4,
    },
  };

  const product = id ? products[id as string] : null;
  const addToCart = () => {
    if (!product) {
      alert("Product not found.");
      return;
    }

    if (!id) {
      alert("Product ID is missing.");
      return;
    }

    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      cart.push({ id, name: product.name, price: product.salePrice, image: product.image });
      localStorage.setItem("cart", JSON.stringify(cart));

      // Update cart count state immediately
     
      alert("Added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("There was an error adding the product to the cart.");
    }
  };

  const clearCart = () => {
    try {
      localStorage.removeItem("cart");
    
      alert("Cart cleared!");
    } catch (error) {
      console.error("Error clearing cart:", error);
      alert("There was an error clearing the cart.");
    }
  };

  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    const fullStar = "★"; // Full star symbol
    const emptyStar = "☆"; // Empty star symbol
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? fullStar : emptyStar);
    }

    return stars.join(" ");
  };

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10">
      {product ? (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 flex flex-col justify-start space-y-4 mt-20">
            <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-lg text-gray-600">{product.description}</p>
            <div className="flex items-center gap-2">
              <span className="text-lg font-medium text-yellow-5">{renderStars(product.rating)}</span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-xl font-bold text-gray-400 line-through">Rs. {product.price}</p>
              <p className="text-xl font-bold text-green-600">Rs. {product.salePrice}</p>
            </div>

            {/* Quantity and Add to Cart Section */}
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="text-lg font-medium text-gray-700">Quantity:</label>
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className="w-16 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              onClick={addToCart}
              className="bg-black text-white py-2 px-6 rounded-lg mt-4 hover:bg-gray-800 transition duration-300 text-center">
              Add to Cart
            </button>
            <Link href="/buynow"  className="bg-green-700 text-white py-2 px-6 rounded-lg mt-4 hover:bg-green-500 transition duration-300 text-center">
            <button>
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">Product not found.</p>
      )}
      
    </div>
  );
};

export default ProductPage;