"use client";

import React from 'react';
import MicroMotoNavbar from '@/MicroMotoNavbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';
import { FaMotorcycle, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';

const BookServicePage: React.FC = () => {
  return (
    <>
      <MicroMotoNavbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FaMotorcycle className="text-6xl mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Schedule Your Service
            </h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Book a convenient pickup time for your motorcycle service. 
              We&apos;ll come to you anywhere in Malé, Hulhumalé, or Vilimalé.
            </p>
          </div>
        </div>
      </section>

      {/* Service Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <FaMapMarkerAlt className="text-3xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pickup Service</h3>
              <p className="text-gray-600">
                We&apos;ll pick up your bike from your location in Malé area
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <FaClock className="text-3xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Timing</h3>
              <p className="text-gray-600">
                Choose a convenient time that works for your schedule
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <FaPhone className="text-3xl text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-600">
                Get updates and track your service with a unique code
              </p>
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />
          
          {/* Contact Info */}
          <div className="mt-12 text-center">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 inline-block">
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                Need Help or Have Questions?
              </h3>
              <p className="text-red-700 mb-3">
                Our team is ready to assist you
              </p>
              <a
                href="tel:+9609996210"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                <FaPhone />
                Call: 9996210
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BookServicePage;