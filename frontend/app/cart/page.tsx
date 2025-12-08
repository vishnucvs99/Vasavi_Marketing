"use client";

import React, { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeItem = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + (item.Price || 0), 0);

  // ⭐ STATIC ORDER — no API call
const handlePlaceOrder = async () => {
  if (!customer.name || !customer.phone || !customer.email || !customer.address || !customer.pincode) {
    alert("Please fill all fields.");
    return;
  }

  const adminPhone = "918247438114"; // ✅ Your WhatsApp number with country code

  // Format cart items
  const cartText = cart
    .map((item, i) => `${i + 1}. ${item.Name} — ₹${item.Price}`)
    .join("%0A");

  const message = `🛍️ *New Order Received*
  
*Customer Details:*
👤 Name: ${customer.name}
📞 Phone: ${customer.phone}
📧 Email: ${customer.email}
🏠 Address: ${customer.address}
📮 Pincode: ${customer.pincode}

*Order Items:*
${cartText}

💰 *Total:* ₹${totalPrice}

Thank you!`;

  const whatsappURL = `https://api.whatsapp.com/send?phone=${adminPhone}&text=${encodeURIComponent(
    message
  )}`;

  // Open WhatsApp with the order message
  window.open(whatsappURL, "_blank");

  // Mark success + clear cart
  setOrderSuccess(true);
  setCart([]);
  localStorage.removeItem("cart");
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-10 text-center">
        🛒 Your Cart
      </h1>

      {/* SUCCESS MESSAGE */}
      {orderSuccess && (
        <p className="text-center text-green-600 text-xl font-semibold mb-6">
          🎉 Your order has been placed successfully!  
          (Static — No backend used)
        </p>
      )}

      {cart.length === 0 && !orderSuccess ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

          {/* CART ITEMS */}
          {!orderSuccess && (
            <>
              <ul className="divide-y divide-gray-200 mb-6">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center py-4">
                    <div>
                      <p className="font-semibold text-gray-900">{item.Name}</p>
                      <p className="text-purple-600 font-medium">₹{item.Price}</p>
                    </div>
                    <button
                      onClick={() => removeItem(index)}
                      className="text-red-500 hover:text-red-700 font-medium"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <p className="text-xl font-bold text-gray-900 mb-6">
                Total: <span className="text-green-600">₹{totalPrice}</span>
              </p>
            </>
          )}

          {/* ADDRESS FORM */}
          {!orderSuccess && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">
                Shipping Address
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 
                  placeholder:text-black text-black
                  focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 
                  placeholder:text-black text-black
                  focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 
                  placeholder:text-black text-black
                  focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                />

                <textarea
                  placeholder="Full Address"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 
                  placeholder:text-black text-black
                  focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                />

                <input
                  type="number"
                  placeholder="Pincode"
                  className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 
                  placeholder:text-black text-black
                  focus:ring-2 focus:ring-purple-400 focus:outline-none"
                  value={customer.pincode}
                  onChange={(e) => setCustomer({ ...customer, pincode: e.target.value })}
                />
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full mt-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
