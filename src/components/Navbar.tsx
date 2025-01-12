"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image"; // Import for optimized image handling in Next.js

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Disable scrolling on the body when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-gray-900 text-white shadow-md fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/imgs/icon.png" // Replace with your logo path
            alt="Logo"
            width={40} // Adjust width as needed
            height={40} // Adjust height as needed
            className="rounded-full" // Optional: For circular logo
          />
          <Link href="/" className="text-2xl font-extrabold hover:text-blue-400 transition-all">
            AI Andrt
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          <Link href="/#landing" className="relative group text-sm font-medium text-white">
            Domů
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/#about-me" className="relative group text-sm font-medium text-white">
            O mně
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/#calculator" className="relative group text-sm font-medium text-white">
            Kalkulačka
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/#aibussines" className="relative group text-sm font-medium text-white">
            Proč AI
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/#timeline" className="relative group text-sm font-medium text-white">
            Spolupráce
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/#tools" className="relative group text-sm font-medium text-white">
            AI nástroje
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
          <Link href="/#blog" className="relative group text-sm font-medium text-white">
            Blog
            <span className="block h-0.5 w-0 bg-blue-400 transition-all duration-500 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:block">
          <Link
            href="/#contact"
            className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Konzultace
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose className="h-8 w-8 text-blue-400" />
          ) : (
            <AiOutlineMenu className="h-8 w-8 text-blue-400" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 text-white flex flex-col transform transition-all duration-300 ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{ backgroundColor: "#111827" }} // Your dark BG
      >
        {/* --- Add our gradient corners here --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Top-left gradient circle */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900 rounded-full blur-3xl opacity-50" />
          {/* Bottom-right gradient circle */}
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-500 via-blue-700 to-blue-900 rounded-full blur-3xl opacity-50" />
        </div>

        {/* Mobile Menu Content */}
        <div className="relative z-10 flex flex-col justify-between w-full h-full">
          {/* Top: "Close" button + logo */}
          <div className="w-full flex justify-between items-center px-4 py-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/imgs/icon.png" // Replace with your logo path
                alt="Logo"
                width={30}
                height={30}
              />
              <span className="text-lg font-extrabold">AI Andrt</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-blue-400 focus:outline-none"
            >
              <AiOutlineClose className="h-8 w-8" />
            </button>
          </div>

          {/* Middle: Mobile nav links */}
          <div className="flex flex-col items-center space-y-6">
            <Link
              href="/#landing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              Domů
            </Link>
            <Link
              href="/#about-me"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              O mně
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              Kalkulačka
            </Link>
            <Link
              href="/#aibussines"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              Proč AI
            </Link>
            <Link
              href="/#timeline"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              Spolupráce
            </Link>
            <Link
              href="/#tools"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              AI nástroje
            </Link>
            <Link
              href="/#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white"
            >
              Blog
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-blue-400"
            >
              Kontakt
            </Link>
          </div>

          {/* Bottom: Contact Info */}
          <div className="w-full bg-gray-900 py-6 px-4 text-center">
            <p className="text-sm text-gray-300">Máte dotazy? Kontaktujte mě:</p>
            <a
              href="mailto:ai.andrt.martin@gmail.com"
              className="block mt-2 text-lg text-blue-400 underline hover:text-blue-500"
            >
              ai.andrt.martin@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
