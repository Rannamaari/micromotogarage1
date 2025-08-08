"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import MicroMotoNavbar from "@/MicroMotoNavbar";
import Footer from "@/components/Footer";
import { createClient } from "@/lib/supabaseClient";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWrench, FaMotorcycle, FaOilCan, FaCog } from "react-icons/fa";

// Dynamic import for reCAPTCHA
const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

const generateTrackingCode = () => {
  const randomDigits = Math.floor(1000 + Math.random() * 9000); // ensures a 4-digit number
  return `MMG${randomDigits}`;
};

const MicroMotoGaragePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    bike: "",
    service: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [trackingCode, setTrackingCode] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const scrollToBookingForm = () => {
    const bookingSection = document.getElementById('booking-form');
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Phone number validation - only allow numbers
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, ''); // Remove all non-digit characters
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setTrackingCode("");

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    const code = generateTrackingCode();

    const message = `
🚨 New Bike Service Booking!
👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
🏍️ Bike: ${formData.bike}
🛠️ Service: ${formData.service}
📝 Notes: ${formData.notes || "None"}
🔐 Tracking Code: ${code}
`;

    // Push to Supabase
    const supabase = createClient();
    const { error } = await supabase.from("bookings").insert([
      {
        name: formData.name,
        phone: formData.phone,
        bike_model: formData.bike, // ✅ correct DB column
        service_type: formData.service, // ✅ correct DB column
        notes: formData.notes,
        status: "pending", // ✅ default to "pending"
        tracking_code: code,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      alert(`❌ Failed to save booking to Supabase: ${error.message}`);
      setLoading(false);
      return;
    }

    // Send notification
    try {
      const res = await fetch('/api/send-notification', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, captchaToken }),
      });

      const result = await res.json();

      if (result.success) {
        setSuccessMsg("✅ Booking sent successfully!");
        setTrackingCode(code);
        setFormData({ name: "", phone: "", bike: "", service: "", notes: "" });
        setCaptchaToken(null);
      } else {
        console.error('Notification error:', result.error);
        if (result.error?.includes('CAPTCHA')) {
          alert("❌ CAPTCHA verification failed. Please try again.");
        } else {
          alert("⚠️ Notification failed to send, but booking was saved.");
        }
      }
    } catch (err) {
      console.error('Network error:', err);
      alert("⚠️ Error sending notification, but booking was saved.");
    }

    setLoading(false);
  };

  return (
    <>
      <MicroMotoNavbar />
      

      {/* Logo Section */}
      <section className="bg-gradient-to-b from-white to-red-50 py-12 shadow-lg border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Micro-Moto-Logo.webp"
              alt="Micro Moto Garage Logo"
              width={180}
              height={180}
              className="rounded-full shadow-2xl ring-4 ring-red-500/40 hover:ring-red-500/60 transition-all duration-300 hover:scale-105"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-3">
            Micro Moto Garage
          </h1>
          <p className="text-xl text-red-700 font-medium">
            Your Trusted Motorcycle Service Center in Malé
          </p>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-950 text-white py-20 overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-800/20 via-transparent to-red-950/40"></div>
          <div className="absolute top-20 right-20 w-80 h-80 bg-red-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl text-red-100 font-light leading-relaxed mb-6">
              Professional motorcycle maintenance, repairs, and customizations with certified technicians using genuine parts and modern equipment
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+9609996210"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-red-500/30"
              style={{backgroundColor: '#dc2626 !important', borderColor: '#dc2626 !important', color: '#ffffff !important'}}
            >
              <FaPhone />
              Call Now: 9996210
            </a>
            <a
              href="/book-service"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border border-green-500/30"
              style={{backgroundColor: '#16a34a !important', borderColor: '#16a34a !important', color: '#ffffff !important'}}
            >
              <FaMapMarkerAlt />
              Schedule Pickup
            </a>
            <a
              href="mailto:moto@micronet.mv"
              className="bg-red-600 hover:bg-red-700 border border-red-500 hover:border-red-400 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              style={{backgroundColor: '#dc2626 !important', borderColor: '#dc2626 !important', color: '#ffffff !important'}}
            >
              <FaEnvelope />
              Email Us
            </a>
            <button
              onClick={scrollToBookingForm}
              className="bg-red-600 hover:bg-red-700 border border-red-500 hover:border-red-400 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              style={{backgroundColor: '#dc2626 !important', borderColor: '#dc2626 !important', color: '#ffffff !important'}}
            >
              <FaWrench />
              Book a Service
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Micro Moto Garage
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Professional Motorcycle Service in Malé
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Located conveniently near Dharubaaruge in the heart of Malé, Micro Moto Garage 
                has been serving the motorcycle community with excellence for years. We specialize 
                in comprehensive motorcycle maintenance, repairs, and customizations.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team of experienced technicians uses modern equipment and genuine parts 
                to ensure your motorcycle runs at its best. From routine maintenance to major 
                overhauls, we handle it all with precision and care.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-6 bg-red-50 rounded-xl border border-red-100 hover:bg-red-100 transition-colors duration-300">
                  <FaWrench className="text-red-600 text-2xl" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Technicians</h4>
                    <p className="text-sm text-gray-600">Certified professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-6 bg-red-50 rounded-xl border border-red-100 hover:bg-red-100 transition-colors duration-300">
                  <FaCog className="text-red-600 text-2xl" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Parts</h4>
                    <p className="text-sm text-gray-600">Genuine & reliable</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-600" />
                Our Location in Malé
              </h3>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-80"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6285742285645!2d73.50668!3d4.17569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f7f6f1234567a%3A0x1234567890abcdef!2sDharubaaruge%2C%20Male%2C%20Maldives!5e0!3m2!1sen!2smv!4v1234567890"
                  loading="lazy"
                  allowFullScreen
                  title="Micro Moto Garage Location"
                ></iframe>
              </div>
              <div className="mt-4 p-6 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
                <p className="text-gray-800 mb-3">
                  <strong>Address:</strong> Near Dharubaaruge, Malé 20026, Maldives
                </p>
                <p className="text-gray-800 mb-3">
                  <strong>Landmark:</strong> Close to the main convention center
                </p>
                <div className="border-t border-red-200 pt-3 mt-3">
                  <p className="text-gray-800 mb-2">
                    <strong className="flex items-center gap-2">
                      <FaClock className="text-red-600" />
                      Working Hours:
                    </strong>
                  </p>
                  <p className="text-gray-700 ml-6">Monday - Thursday: 08:00 AM - 10:00 PM</p>
                  <p className="text-gray-700 ml-6">Saturday - Sunday: 08:00 AM - 10:00 PM</p>
                  <p className="text-red-600 font-semibold ml-6">Friday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16 bg-gradient-to-br from-red-50 to-red-100 -mx-4 px-4 py-20 border-t border-red-200">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Professional Services
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive motorcycle services to keep your bike running smoothly and safely. 
              Our certified technicians use genuine parts and modern equipment for superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-200 group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors duration-300">
                  <FaWrench className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Full Service</h3>
              </div>
              <ul className="text-gray-700 space-y-3 text-sm leading-relaxed">
                <li>• Complete engine inspection</li>
                <li>• Oil and filter change</li>
                <li>• Brake system check</li>
                <li>• Chain adjustment</li>
                <li>• Electrical system check</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-200 group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors duration-300">
                  <FaOilCan className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Oil Change</h3>
              </div>
              <ul className="text-gray-700 space-y-3 text-sm leading-relaxed">
                <li>• High-quality engine oil</li>
                <li>• Oil filter replacement</li>
                <li>• Oil level optimization</li>
                <li>• System flush (if needed)</li>
                <li>• Quick 30-minute service</li>
                <li>• Disposal of old oil</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-red-100 hover:border-red-200 group">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors duration-300">
                  <FaCog className="text-2xl text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Brake Service</h3>
              </div>
              <ul className="text-gray-700 space-y-3 text-sm leading-relaxed">
                <li>• Brake pad replacement</li>
                <li>• Brake fluid change</li>
                <li>• Disc/drum inspection</li>
                <li>• Brake line check</li>
                <li>• Safety testing</li>
                <li>• Performance adjustment</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <FaMotorcycle className="text-4xl text-red-600 dark:text-red-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-white">Chain & Bearing</h3>
              </div>
              <ul className="text-red-700 dark:text-red-200 space-y-2 text-sm">
                <li>• Chain cleaning & lubrication</li>
                <li>• Sprocket inspection</li>
                <li>• Bearing replacement</li>
                <li>• Alignment adjustment</li>
                <li>• Tension optimization</li>
                <li>• Long-lasting maintenance</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <FaWrench className="text-4xl text-red-600 dark:text-red-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-white">Complete Overhaul</h3>
              </div>
              <ul className="text-red-700 dark:text-red-200 space-y-2 text-sm">
                <li>• Engine rebuild</li>
                <li>• Transmission service</li>
                <li>• Electrical rewiring</li>
                <li>• Body restoration</li>
                <li>• Performance upgrades</li>
                <li>• Warranty included</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <FaMapMarkerAlt className="text-4xl text-red-600 dark:text-red-400 mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-white">Pickup & Drop</h3>
              </div>
              <ul className="text-red-700 dark:text-red-200 space-y-2 text-sm">
                <li>• Free pickup service</li>
                <li>• Convenient scheduling</li>
                <li>• Safe transportation</li>
                <li>• Delivery to your location</li>
                <li>• Track service progress</li>
                <li>• Contactless service option</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-form" className="mb-16 scroll-mt-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Service
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Schedule your motorcycle service online. We&apos;ll confirm your booking and provide a tracking code.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {successMsg && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">{successMsg}</span>
                </div>
                {trackingCode && (
                  <p className="mt-3 p-3 bg-white rounded border font-semibold text-center">
                    Your tracking code: <span className="text-red-600 text-lg">{trackingCode}</span>
                  </p>
                )}
              </div>
            )}

            <form className="bg-white p-10 rounded-2xl shadow-2xl space-y-8 border border-red-100" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-3">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-red-200 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your contact number (numbers only)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    maxLength={15}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-red-200 font-semibold mb-2">Bike Model & Number</label>
                <input
                  type="text"
                  name="bike"
                  placeholder="e.g., Honda CBR 150R - A12345"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={formData.bike}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-red-200 font-semibold mb-2">Service Type</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service Type</option>
                  <option>Full Service</option>
                  <option>Oil Change</option>
                  <option>Brake Pad Replacement</option>
                  <option>Chain/Bearing Service</option>
                  <option>Complete Overhaul</option>
                  <option>Pickup/Drop Request</option>
                  <option>Custom Work</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-red-200 font-semibold mb-2">Additional Notes</label>
                <textarea
                  name="notes"
                  placeholder="Describe any specific issues or requirements..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={handleCaptchaChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
                disabled={loading}
                style={{backgroundColor: '#dc2626 !important', color: '#ffffff !important'}}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Booking Service...
                  </>
                ) : (
                  <>
                    <FaWrench />
                    Book My Service Now
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default MicroMotoGaragePage;
