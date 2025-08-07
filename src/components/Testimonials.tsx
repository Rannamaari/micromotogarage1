"use client";

import { useState, useEffect } from "react";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    location: "Malé",
    bike: "Honda CBR 150R",
    rating: 5,
    text: "Excellent service at Micro Moto Garage! They fixed my CBR's engine problem quickly and professionally. The staff is knowledgeable and the prices are very reasonable. Highly recommended!",
    service: "Engine Repair",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Ibrahim Waheed",
    location: "Hulhumalé",
    bike: "Yamaha FZ",
    rating: 5,
    text: "Best motorcycle service in Malé! They provide pickup and drop service which is very convenient. My Yamaha FZ runs like new after their full service. Will definitely come back!",
    service: "Full Service",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Mariyam Ali",
    location: "Vilimalé",
    bike: "Honda Dio",
    rating: 5,
    text: "Very professional and trustworthy garage. They explained everything clearly and didn't overcharge. My scooter's brake issue was resolved perfectly. Great customer service!",
    service: "Brake Repair",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Mohamed Rasheed",
    location: "Malé",
    bike: "Suzuki Gixxer",
    rating: 5,
    text: "Fast and reliable service! Got my oil change done in 30 minutes as promised. The technicians are experienced and use quality parts. Fair pricing and excellent work quality.",
    service: "Oil Change",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Aishath Naya",
    location: "Hulhumalé",
    bike: "TVS Jupiter",
    rating: 5,
    text: "Amazing experience! They picked up my scooter from home, serviced it completely, and delivered it back. The tracking system kept me informed throughout. Highly satisfied!",
    service: "Pickup Service",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "Ali Manik",
    location: "Malé",
    bike: "Honda CB Shine",
    rating: 5,
    text: "Emergency breakdown at midnight and they came to help immediately! Professional 24/7 service saved my day. Reasonable pricing even for emergency calls. True lifesavers!",
    service: "Emergency Service",
    date: "1 month ago"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'} text-sm`}
      />
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
            Real experiences from satisfied customers at Micro Moto Garage
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span>5.0 out of 5 stars</span>
            <span>•</span>
            <span>500+ reviews</span>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <FaQuoteLeft className="text-4xl text-blue-200 mb-6" />

          {/* Current Testimonial */}
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-4">
              {renderStars(testimonials[currentIndex].rating)}
            </div>

            {/* Customer Info */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-gray-600 mb-2">
                {testimonials[currentIndex].location} • {testimonials[currentIndex].bike}
              </p>
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full text-sm">
                <span className="text-blue-800 font-medium">
                  {testimonials[currentIndex].service}
                </span>
                <span className="text-blue-600">•</span>
                <span className="text-blue-600">
                  {testimonials[currentIndex].date}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex 
                      ? 'bg-blue-600' 
                      : 'bg-blue-200 hover:bg-blue-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-blue-600 text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Satisfied Customers!
            </h3>
            <p className="mb-6">
              Experience the best motorcycle service in Malé. Book your service today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/mmg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Book Service Now
              </a>
              <a
                href="tel:+9609996210"
                className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Call: 9996210
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}