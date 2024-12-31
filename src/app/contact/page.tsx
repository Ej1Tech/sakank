"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    // Add your form submission logic here, e.g., send to an API
    alert("Thank you for your message! We'll get back to you soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg bg-opacity-90 bg-gradient-to-r from-green-700 to-green-900">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-center mb-6">
          We'd love to hear from you! Please fill out the form below and we'll
          respond as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 placeholder-gray-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <textarea
              placeholder="Your Message"
              className="w-full p-3 bg-gray-200 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 placeholder-gray-500"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div></>
  );
};

export default ContactPage;
