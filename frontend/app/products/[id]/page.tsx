"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadProduct = async () => {
      try {
        const res = await fetch("/products/products.json");
        const data = await res.json();

        // Find product by ID in static JSON
        const matched = data.find((item: any) => item.id == id);

        setProduct(matched);
      } catch (err) {
        console.error("Error loading product:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p className="text-center p-10">Loading...</p>;
  if (!product) return <p className="text-center p-10">Product not found.</p>;

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <Link href="/products" className="text-blue-600 underline mb-6 block">
        ← Back to Products
      </Link>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        {/* IMAGE */}
        <img
          src={`/${product.Image}`}
          alt={product.Name}
          className="w-full h-80 object-cover rounded-xl"
        />

        {/* TITLE */}
        <h1 className="text-gray-900 text-sm mb-3 line-clamp-2">{product.Name}</h1>

        {/* DESCRIPTION */}
        <p className="text-gray-700 mt-4">{product.Description}</p>

        {/* PRICE */}
        <p className="text-2xl font-bold text-green-600 mt-4">₹{product.Price}</p>
      </div>
    </div>
  );
}
