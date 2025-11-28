"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartCount(cart.length);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://vasavi-marketing-backend.onrender.com/api/products?populate=*");
        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product: any) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(product);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCartCount(existingCart.length);
    alert(`${product.Name} added to cart!`);
  };

  if (loading) {
    return (
      <p className="text-center text-gray-500 text-lg mt-16">
        Loading products...
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-16">
        No products found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 p-10">

      {/* HEADER */}
      <div className="flex justify-between max-w-7xl mx-auto items-center mb-10">
        <h1 className="text-4xl font-bold text-purple-700">Explore Our Collection</h1>

        <Link
          href="/cart"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition"
        >
          🛒 Cart ({cartCount})
        </Link>
      </div>

      {/* PRODUCT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => {
          const attrs = product;
          const imageUrl =
            attrs.Image && attrs.Image[0]?.url
              ? `http://localhost:1337${attrs.Image[0].url}`
              : "/no-image.png";

          return (
            <div
              key={product.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 
                         hover:shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              {/* IMAGE */}
              <img
                src={imageUrl}
                alt={attrs.Name}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              {/* TITLE */}
              <h2 className="text-xl font-semibold text-gray-900 mb-1">
                <Link
                  href={`/products/${product.id}`}
                  className="hover:text-purple-600"
                >
                  {attrs.Name}
                </Link>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {Array.isArray(attrs.Description)
                  ? attrs.Description[0]?.children?.[0]?.text
                  : "No description available"}
              </p>

              {/* PRICE */}
              <p className="text-green-600 font-bold text-lg mb-4">
                ₹{attrs.Price}
              </p>

              {/* ADD TO CART BUTTON */}
              <button
                onClick={() => addToCart(attrs)}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 
                           text-white py-2 rounded-xl font-medium shadow-md 
                           hover:shadow-lg transition"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
