"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const MicroMotoNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white px-6 py-4 shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b border-blue-700/50"
      style={{
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #312e81 100%)",
        opacity: 1,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Brand with Logo - Enhanced */}
        <div className="flex-1 flex justify-left">
          <Link
            href="/"
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300 group"
          >
            <div className="relative">
              <Image
                src="/images/MicroNETlogo.png"
                alt="MicroNET Logo"
                width={42}
                height={42}
                className="rounded-full ring-2 ring-sky-300/30 group-hover:ring-sky-300/60 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-bold text-white" style={{color: '#ffffff'}}>
              MicroNET
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/mmg"
            className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium group text-white"
            style={{color: '#ffffff'}}
          >
            <span className="relative z-10" style={{color: '#ffffff'}}>Micro Moto Garage</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="/track"
            className="relative px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 font-medium group text-white"
            style={{color: '#ffffff'}}
          >
            <span className="relative z-10" style={{color: '#ffffff'}}>Tracking</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-blue-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>

          <Link
            href="/login"
            className="relative bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 px-8 py-3 rounded-full font-bold text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border overflow-hidden group"
            style={{borderColor: '#ffffff', color: '#ffffff'}}
          >
            <span className="relative z-10 flex items-center gap-2" style={{color: '#ffffff'}}>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{color: '#ffffff'}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              Login
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl hover:text-sky-300 transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="py-6 space-y-4 border-t border-blue-700/50 mt-4 bg-gradient-to-b from-blue-800/50 to-indigo-900/50 backdrop-blur-sm">
          <Link
            href="/mmg"
            className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-white"
            style={{color: '#ffffff'}}
            onClick={() => setIsOpen(false)}
          >
            Micro Moto Garage
          </Link>
          <Link
            href="/track"
            className="block py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium text-white"
            style={{color: '#ffffff'}}
            onClick={() => setIsOpen(false)}
          >
            Tracking
          </Link>
          <Link
            href="/login"
            className="block bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 px-6 py-3 rounded-full font-bold text-center mt-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border mx-4"
            style={{borderColor: '#ffffff', color: '#ffffff'}}
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center justify-center gap-2" style={{color: '#ffffff'}}>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{color: '#ffffff'}}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              Login
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MicroMotoNavbar;
