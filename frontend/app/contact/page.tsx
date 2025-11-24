"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactPage() {
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
            <Image
              src="/vishnu.jpg"
              width={150}
              height={150}
              alt="Profile Photo"
              className="rounded-full object-cover w-36 h-36"
            />

          </motion.div>

          <h1 className="text-3xl font-bold text-gray-800 mt-6">
            Contact Me
          </h1>

          <p className="text-gray-600 mt-3 max-w-sm">
            Feel free to reach out for collaborations, inquiries, or project work.
            I'm always happy to connect!
          </p>

          <div className="mt-8 space-y-4 w-full">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:youremail@example.com"
              className="block bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              📧 Email Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+1234567890"
              className="block bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              📞 Call Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/8247438114"
              className="block bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              💬 WhatsApp
            </motion.a>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
