"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the sidebar toggle
import LoginOrSign from "@/components/LoginOrSign"; // Import the LoginOrSign component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isSignUp, setIsSignUp] = useState(true); // State to toggle between sign-up and sign-in
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const openModal = () => setIsModalOpen(true); // Open modal
  const closeModal = () => setIsModalOpen(false); // Close modal
  const toggleSignUp = () => setIsSignUp((prev) => !prev); // Toggle sign-up and sign-in
  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev); // Toggle sidebar visibility

  return (
    <>
      {/* Navbar */}
      <nav className="p-4 bg-gradient-to-r from-green-700 to-green-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-semibold">
            Al Wasit
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300 transition duration-200">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition duration-200">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition duration-200">
              Contact
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Auth Button for Desktop */}
          <div className="hidden md:block">
            <button
              className="bg-white text-green-600 hover:bg-green-100 py-2 px-4 rounded-md"
              onClick={openModal}
            >
              Sign In / Sign Up
            </button>
          </div>
        </div>

        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <div className="bg-gradient-to-r from-green-700 to-green-900 text-white fixed inset-y-0 left-0 w-64 z-50 p-4 md:hidden">
            <button
              className="text-white text-2xl mb-4"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
            <nav className="space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-gray-300 transition duration-200"
                onClick={toggleSidebar}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-white hover:text-gray-300 transition duration-200"
                onClick={toggleSidebar}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-gray-300 transition duration-200"
                onClick={toggleSidebar}
              >
                Contact
              </Link>
              <button
                className="bg-white text-green-600 hover:bg-green-100 py-2 px-4 rounded-md mt-4 w-full"
                onClick={() => {
                  openModal();
                  toggleSidebar();
                }}
              >
                Sign In / Sign Up
              </button>
            </nav>
          </div>
        )}
      </nav>

      {/* Conditionally render the modal when it's open */}
      {isModalOpen && (
        <LoginOrSign
          isSignUp={isSignUp}
          closeModal={closeModal}
          toggleSignUp={toggleSignUp}
        />
      )}
    </>
  );
};

export default Navbar;
