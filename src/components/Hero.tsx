import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/20 via-transparent to-indigo-900/30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-sky-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center justify-center p-6">
            <Image
              src="/images/MicroNETlogo.png"
              alt="MicroNET Logo"
              width={180}
              height={180}
              className="rounded-full shadow-2xl ring-4 ring-sky-300/50 hover:ring-sky-400/60 transition-all duration-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-5xl mx-auto space-y-8 mb-16">
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl lg:text-5xl text-white font-light leading-relaxed">
              Connecting Technology with People in the Maldives
            </p>
            <p className="text-xl md:text-2xl text-sky-200 font-light leading-relaxed">
              Your trusted partner for comprehensive digital solutions, professional motorcycle services, and cutting-edge technological innovation
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a
            href="/mmg"
            className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-sky-400/30"
          >
            🏍️ Micro Moto Garage
          </a>
          <a
            href="https://shop.micronet.mv"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-lg hover:bg-white/20 border border-white/30 hover:border-white/50 px-10 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🛒 Online Shop
          </a>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔧</div>
            <h3 className="font-semibold text-xl mb-3 text-white">Expert Services</h3>
            <p className="text-blue-100 leading-relaxed">Professional motorcycle maintenance and repair services with certified technicians</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
            <h3 className="font-semibold text-xl mb-3 text-white">Tech Solutions</h3>
            <p className="text-blue-100 leading-relaxed">Cutting-edge digital solutions and IT infrastructure for modern businesses</p>
          </div>
          <div className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🇲🇻</div>
            <h3 className="font-semibold text-xl mb-3 text-white">Local Expertise</h3>
            <p className="text-blue-100 leading-relaxed">Proudly serving the Maldivian community with trusted, reliable excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
