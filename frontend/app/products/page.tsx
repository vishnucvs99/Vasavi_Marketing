"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [cartCount, setCartCount] = useState(0);

  // Load static JSON file instead of API
  useEffect(() => {
    fetch("/products/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading products:", err));
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  const addToCart = (product: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCartCount(existingCart.length);
    alert(`${product.Name} added to cart!`);
  };

  if (products.length === 0) return <p className="text-center mt-10">Loading products...</p>;

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      {/* HEADER */}
      <div className="flex justify-between max-w-7xl mx-auto items-center mb-10">
        <h1 className="text-4xl font-bold text-purple-700">Explore Our Collection</h1>

        <Link
          href="/cart"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-xl shadow-md"
        >
          🛒 Cart ({cartCount})
        </Link>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition"
          >
            <img
              src={`/${product.Image}`}
              alt={product.Name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h2 className="text-xl font-semibold mb-1">
              <Link href={`/products/${product.id}`} className="hover:text-purple-600">
                {product.Name}
              </Link>
            </h2>

            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {product.Description}
            </p>

            <p className="text-green-600 font-bold text-lg mb-4">₹{product.Price}</p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-xl"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
