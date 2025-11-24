"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
      >
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-36 h-36 rounded-full bg-yellow-400 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              📝
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-800 mt-6">
            Blog
          </h1>

          <p className="text-gray-600 mt-3 max-w-sm">
            Explore articles, updates, and helpful content from our team.
          </p>

          <div className="mt-8 space-y-4 w-full">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/blog/latest"
              className="block bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              📚 Latest Posts
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/blog/categories"
              className="block bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              🧩 Categories
            </motion.a>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
