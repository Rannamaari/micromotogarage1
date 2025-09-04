import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import MicroCool from "@/components/MicroCool";
import MMGAd from "@/components/MMGAds";
import ShopTeaser from "@/components/ShopTeaser";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <MicroCool />
        <MMGAd />
        <ShopTeaser />
        <ContactLocation />
      </main>
      <Footer />
    </div>
  );
}
