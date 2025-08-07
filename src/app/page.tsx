import About from "@/components/About";
import Services from "@/components/Services";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MicroMotoNavbar from "@/MicroMotoNavbar";
import MMGAds from "@/components/MMGAds";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <MicroMotoNavbar />
      <main className="font-sans bg-gradient-to-br from-sky-50 to-white text-gray-900">
        <Hero />
        <About />
        <Services />
        <MMGAds />
        <Testimonials />
        <Promo />
      </main>
      <Footer />
    </>
  );
}
