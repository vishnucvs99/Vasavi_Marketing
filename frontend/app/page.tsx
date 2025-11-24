"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-purple-50 to-pink-50 text-gray-800">

      {/* 🌐 NAVBAR */}
      <header className="w-full backdrop-blur-xl bg-white/80 shadow-md py-4 px-6 sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            vasavi Marketing
          </div>

          <nav className="flex gap-8 text-lg font-medium text-gray-700">
            {["Home", "Products", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-purple-600 transition">{item}</span>
                <span className="absolute bottom-[-3px] left-0 w-0 group-hover:w-full h-[2px] bg-purple-500 transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* 🏙️ HERO SECTION */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-sm">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Discover Premium Products
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-gray-700 mt-6 mb-10">
          Explore electronics, fashion and more — enjoy the best deals and secure PhonePe payments.
        </p>

        <Link
          href="/products"
          className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300"
        >
          Browse Products
        </Link>
      </main>

      {/* 📍 FOOTER */}
      <footer className="bg-white border-t border-gray-200 text-gray-700 pt-16 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Home", "My Account", "My Orders", "About Us",
                "Payment Policy", "Privacy Policy", "Return & Refund Policy",
                "Shipping Policy", "Terms & Conditions", "Blog",
              ].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="hover:text-purple-600 transition">
                    {link}
                  </Link>

                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">📞 <span>8247438114</span></li>
              <li className="flex items-center gap-2">💬 <span>9440844113</span></li>
              <li className="flex items-center gap-2">✉️ <span>vishnucvs99@gmail.com</span></li>
              <li className="flex items-start gap-2">
                📍
                <span>
                  Andhara Pradesh ,Kurnool(D),Sirvella(M),Yerraguntla, murali book storesh opposite
                  <br />Yerraguntla -518510
                </span>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Social</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">▶️ YouTube</li>
              <li className="flex items-center gap-3">📘 Facebook</li>
              <li className="flex items-center gap-3">📌 Pinterest</li>
              <li className="flex items-center gap-3">📸 Instagram</li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-start">
            <Image
              src="/vishnu.jpg"
              width={150}
              height={150}
              alt="Profile Photo"
              className="rounded-full object-cover w-36 h-36"
            />

            <p className="text-sm mt-4 text-gray-600">
              Quality products. Fast delivery.
              Trusted by thousands of customers.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm mt-14 border-t border-gray-200 pt-4">
          © {new Date().getFullYear()} MyShop — All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
''