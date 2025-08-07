"use client";
import React from "react";
import Image from "next/image";
import { FaApple, FaShieldAlt, FaNetworkWired, FaTools } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About MicroNET
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Your trusted technology partner in the Maldives, delivering innovative solutions since day one
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Logo and Stats */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <Image
                src="/images/MicroNETlogo.png"
                alt="MicroNET Logo"
                width={300}
                height={300}
                className="w-80 h-auto object-contain mx-auto lg:mx-0"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Trusted Since 2018
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="text-center p-8 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-100 hover:border-sky-200 transition-all duration-300 shadow-lg">
                <div className="text-4xl font-bold text-sky-600 mb-3">500+</div>
                <div className="text-gray-700 font-medium">Happy Customers</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-100 hover:border-sky-200 transition-all duration-300 shadow-lg">
                <div className="text-4xl font-bold text-sky-600 mb-3">24/7</div>
                <div className="text-gray-700 font-medium">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Comprehensive Technology Solutions Across the Maldives
            </h3>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              MicroNET is your trusted provider of comprehensive technology solutions
              across the Maldives. Our services span computer peripherals, CCTV installations, 
              network infrastructure design, and IT support for businesses and homes.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              We also operate <strong className="text-sky-600 font-semibold">Micro Moto Garage</strong>, 
              a dedicated service center for motorcycle repairs and maintenance, and our
              online retail shop serves customers nationwide with quality products.
            </p>
            
            <p className="text-gray-700 text-lg leading-relaxed">
              As an authorized reseller of genuine Apple products and SOPHOS cybersecurity 
              solutions, we deliver branded hardware and software solutions tailored to 
              personal, educational, and enterprise needs.
            </p>

            {/* Call to Action */}
            <div className="pt-8">
              <a
                href="/mmg"
                className="inline-flex items-center bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FaTools />
                Visit Micro Moto Garage
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 hover:border-sky-200 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 group-hover:bg-sky-200 transition-colors duration-300">
              <FaApple className="text-2xl text-sky-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Apple Products</h4>
            <p className="text-gray-600 leading-relaxed">Authorized reseller of genuine Apple products</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 hover:border-sky-200 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 group-hover:bg-sky-200 transition-colors duration-300">
              <FaShieldAlt className="text-2xl text-sky-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity</h4>
            <p className="text-gray-600 leading-relaxed">SOPHOS security solutions for businesses</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 hover:border-sky-200 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 group-hover:bg-sky-200 transition-colors duration-300">
              <FaNetworkWired className="text-2xl text-sky-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Network Infrastructure</h4>
            <p className="text-gray-600 leading-relaxed">Professional network design and installation</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 hover:border-sky-200 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 rounded-full mb-6 group-hover:bg-sky-200 transition-colors duration-300">
              <FaTools className="text-2xl text-sky-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-3">Motorcycle Service</h4>
            <p className="text-gray-600 leading-relaxed">Professional motorcycle repairs and maintenance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
