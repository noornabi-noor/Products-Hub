"use client"; 

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-400 via-black-400 to-pink-200 text-gray-800 py-12 mt-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Products Hub</h3>
          <p className="text-gray-800">
            Providing top-quality products for your lifestyle. Explore our products and enjoy a seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-yellow-400 transition">Products</Link></li>
            <li><Link href="/login" className="hover:text-yellow-400 transition">Login</Link></li>
            <li><Link href="/dashboard/add-product" className="hover:text-yellow-400 transition">Add Product</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/md.noornabi.noor.2024" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 text-white hover:text-gray-900 transition"><FaFacebookF /></a>
            <a href="https://x.com/i/flow/login?lang=en" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 text-white hover:text-gray-900 transition"><FaTwitter /></a>
            <a href="https://www.instagram.com/noornabi1770/" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 text-white hover:text-gray-900 transition"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/md-noornabi-bb41442b3/" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-400 text-white hover:text-gray-900 transition"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Newsletter</h4>
          <p className="text-gray-800 mb-4">Subscribe to get our latest products and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-gray-900 flex-1"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Products Hub. All rights reserved.
      </div>
    </footer>
  );
}
