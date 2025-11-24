import React from "react";

const Page = () => {
  const product = {
    name: "Premium Wireless Headphones",
    price: "₹2000",
    image: "/headphones.jpg", // Put any image in your public folder
    description: `
      Experience music like never before with our Premium Wireless Headphones.
      Designed with advanced noise-cancellation, ultra-soft ear cushions, and
      a long-lasting 40-hour battery, these headphones deliver studio-level
      audio clarity whether you're working, traveling, or relaxing.  
      
      Featuring Bluetooth 5.3 for faster pairing, high-definition sound drivers
      for deep bass and crisp highs, and a durable lightweight metal frame,
      this is the perfect blend of style, comfort, and performance.

      The built-in microphone ensures clear call quality, while the multi-device
      support lets you seamlessly switch between your phone, laptop, and tablet.
    `,
  };

//   const addToCart = () => {
//     alert(`${product.name} added to cart!`);
//   };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">

        {/* IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded-xl mb-6"
        />

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {product.name}
        </h1>

        {/* PRICE */}
        <p className="text-green-600 text-2xl font-semibold mb-4">
          {product.price}
        </p>

        {/* DESCRIPTION */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
          {product.description}
        </p>

        {/* ADD TO CART BUTTON */}
        <button
        //   onClick={addToCart}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-xl shadow-md transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Page;
