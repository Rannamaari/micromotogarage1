import Image from "next/image";
import Link from "next/link";
import { FaMotorcycle, FaTools, FaClock, FaPhone } from "react-icons/fa";

export default function MMGAds() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-sky-600 to-blue-700 dark:from-blue-900 dark:to-black text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sky-400 dark:bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sky-600 dark:bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🏍️ Micro Moto Garage - Featured Services
          </h2>
          <p className="text-sky-100 dark:text-blue-100 text-lg max-w-2xl mx-auto">
            Your trusted motorcycle service center in Malé. Professional, reliable, and affordable.
          </p>
        </div>

        {/* Main Ad Banner */}
        <div className="bg-white/20 backdrop-blur-sm dark:bg-blue-900/50 rounded-2xl p-8 mb-12 border border-white/30 dark:border-blue-700/50 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/Micro-Moto-Logo.webp"
                  alt="Micro Moto Garage Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold">Micro Moto Garage</h3>
                  <p className="text-blue-200">Professional Motorcycle Services</p>
                </div>
              </div>
              
              <h4 className="text-3xl font-bold mb-4 text-yellow-300">
                🎉 Special Offer: 20% OFF Full Service!
              </h4>
              <p className="text-lg mb-6 text-blue-100">
                Get comprehensive motorcycle maintenance at unbeatable prices. 
                Located near Dharubaaruge, Malé - your bike deserves the best care!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/mmg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaMotorcycle />
                  Book Service Now
                </Link>
                <a
                  href="tel:+9609996210"
                  className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <FaPhone />
                  Call: 9996210
                </a>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                <FaMotorcycle className="text-6xl text-yellow-300 mx-auto lg:mx-0 lg:ml-auto mb-4" />
                <h5 className="text-xl font-bold mb-2">24/7 Emergency Service</h5>
                <p className="text-blue-100 mb-4">Fast, reliable motorcycle repairs when you need them most</p>
                <div className="text-2xl font-bold text-yellow-300">9996210</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-center">
              <FaTools className="text-4xl text-yellow-300 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Full Service Special</h4>
              <p className="text-blue-100 mb-4">Complete motorcycle maintenance package</p>
              <div className="text-2xl font-bold text-yellow-300 mb-2">MVR 450</div>
              <p className="text-sm text-blue-200 line-through mb-4">Regular: MVR 600</p>
              <Link
                href="/mmg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-semibold inline-block transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-center">
              <FaClock className="text-4xl text-yellow-300 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Express Oil Change</h4>
              <p className="text-blue-100 mb-4">Quick 30-minute oil change service</p>
              <div className="text-2xl font-bold text-yellow-300 mb-2">MVR 180</div>
              <p className="text-sm text-blue-200 mb-4">High-quality engine oil</p>
              <Link
                href="/mmg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-semibold inline-block transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
            <div className="text-center">
              <FaMotorcycle className="text-4xl text-yellow-300 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-3">Pickup & Drop</h4>
              <p className="text-blue-100 mb-4">Convenient bike pickup and delivery service</p>
              <div className="text-2xl font-bold text-yellow-300 mb-2">FREE*</div>
              <p className="text-sm text-blue-200 mb-4">*With any service booking</p>
              <Link
                href="/mmg"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-semibold inline-block transition-colors"
              >
                Schedule
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block border border-white/20">
            <p className="text-blue-100 mb-2">📍 Located near Dharubaaruge, Malé</p>
            <p className="text-blue-100 mb-2">🕒 Open: 8:00 AM - 10:00 PM (Daily)</p>
            <p className="text-yellow-300 font-semibold">📞 Emergency: 9996210 (24/7)</p>
          </div>
        </div>
      </div>
    </section>
  );
}