// MainSection.js
import React from "react";

const Midsec = () => {
  return (
    <main className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between">
          <div className="space-y-6 md:w-1/2">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Find Your Style with Our Latest Collection
            </h1>
            <p className="text-lg">
              Discover the best deals on clothing, gadgets, and more. Shop now
              and elevate your lifestyle.
            </p>
            <br />
            <br />
            <a
              href="#featured"
              className="bg-blue-600 mt- text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              Shop Now
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/articles/Header_4bf3c320-7c35-478b-8159-5f5d360f9d92.png?v=1729897444"
              alt="Promotional Banner"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl font-bold mb-6">Shop by Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Clothing", "Electronics", "Accessories", "Home"].map(
              (category, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center justify-center bg-white shadow-md rounded-lg h-28 hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-medium">{category}</h3>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
          <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src="https://img.freepik.com/premium-photo/women-s-bag-shoes-neckerchief-fashionable-women-s-things-accessories-stylish-red-women-s-bag-shoes-elegant-women-s-clothes_331695-10714.jpg"
                  alt={`Product ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium">Product Name</h3>
                  <p className="text-gray-600 mt-1">$99.99</p>
                  <a
                    href="#"
                    className="mt-4 block text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't Miss Our Exclusive Offers!
          </h2>
          <p className="mb-6">
            Subscribe to our newsletter and be the first to know about new
            arrivals and sales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-md hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Midsec;
