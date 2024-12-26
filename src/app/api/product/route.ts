import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Miss Rose Lipstick", price: 499, image: "/post2.png", rating: 4, salePrice: 399 },
    { id: 2, name: "Miss Rose Mascara", price: 699, image: "/post3.png", rating: 5, salePrice: 599 },
    { id: 3, name: "Miss Rose Foundation", price: 899, image: "/post1.png", rating: 3, salePrice: 799 },
    { id: 4, name: "Miss Rose Concealer", price: 450, image: "/post4.png", rating: 4, salePrice: 299 },
    { id: 5, name: "Miss Rose Eyeliner", price: 350, image: "/post5.png", rating: 5, salePrice: 299 },
    { id: 6, name: "Miss Rose Blush", price: 499, image: "/post6.png", rating: 4, salePrice: 450 },
    { id: 7, name: "Miss Rose Lip Gloss", price: 399, image: "/post7.png", rating: 4, salePrice: 349 },
    { id: 8, name: "Miss Rose Eyeshadow", price: 799, image: "/post8.png", rating: 5, salePrice: 699 },
    { id: 9, name: "Miss Rose Highlighter", price: 499, image: "/post9.png", rating: 5, salePrice: 450 },
    { id: 10, name: "Miss Rose Setting Spray", price: 399, image: "/post10.png", rating: 4, salePrice: 350 },
    { id: 11, name: "Miss Rose Nail Polish", price: 250, image: "/post11.png", rating: 3, salePrice: 199 },
    { id: 12, name: "Miss Rose Contour Kit", price: 999, image: "/post12.png", rating: 4, salePrice: 899 },
  ];

  return NextResponse.json(products);
}