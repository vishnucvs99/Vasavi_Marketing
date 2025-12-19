"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-2xl p-8 shadow-xl border border-gray-200"
      >
        <div className="flex flex-col items-center text-center">

          {/* Profile Image */}
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-36 h-36 rounded-full overflow-hidden shadow-lg"
          >
            <Image
              src="/vishnu.jpg"
              alt="Profile Image"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-800 mt-6">
            My Account
          </h1>

          <p className="text-gray-600 mt-3 max-w-sm">
            Manage your profile, orders, and account details.
          </p>

          <div className="mt-8 space-y-4 w-full">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/my-orders"
              className="block bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              📦 View Orders
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/edit-profile"
              className="block bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              📝 Edit Profile
            </motion.a>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
