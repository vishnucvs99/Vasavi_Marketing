"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MyOrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          📦 My Orders
        </h1>

        {/* Order List */}
        <div className="space-y-4">

          {/* Example Order Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-gray-100 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">Order #12345</p>
                <p className="text-gray-600 text-sm">Placed on Jan 10, 2025</p>
              </div>
              <span className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                Delivered
              </span>
            </div>
          </motion.div>

          {/* Example 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-4 bg-gray-100 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">Order #98765</p>
                <p className="text-gray-600 text-sm">Placed on Dec 20, 2024</p>
              </div>
              <span className="px-3 py-1 bg-yellow-500 text-white rounded-lg text-sm">
                Pending
              </span>
            </div>
          </motion.div>

          {/* Example 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-4 bg-gray-100 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800">Order #54321</p>
                <p className="text-gray-600 text-sm">Placed on Dec 1, 2024</p>
              </div>
              <span className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">
                Shipped
              </span>
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <motion.a
            href="/account"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
          >
            ← Back to Account
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
