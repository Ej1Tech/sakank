"use client";
import React from "react";
import Navbar from "@/components/Navbar";
const AboutPage: React.FC = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="max-w-4xl p-6 rounded-lg shadow-lg bg-opacity-90 bg-gradient-to-r from-green-700 to-green-900">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-7 mb-4">
          Welcome to our platform! We are dedicated to providing the best
          services to connect users with the tools and resources they need to
          achieve their goals. Whether you're looking to learn, explore, or
          grow, we've got you covered.
        </p>
        <p className="text-lg leading-7 mb-4">
          Our mission is to create a seamless and user-friendly experience,
          ensuring that our community thrives through collaboration and
          innovation. We believe in empowering individuals by offering
          high-quality services, reliable support, and a vibrant platform that
          meets their needs.
        </p>
        <p className="text-lg leading-7">
          Thank you for choosing us as your trusted partner. We are here to help
          you every step of the way!
        </p>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
