import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import ProductGrid from "@/components/ProductGrid";
import ProductGallery from "@/components/ProductGallery"; // Nouveau
import StatusBanner from "@/components/StatusBanner";
import CarRental from "@/components/CarRental";
import StoreLocator from "@/components/StoreLocator";
import EventsSection from "@/components/EventsSection"; // Nouveau
import WhatsAppForm from "@/components/WhatsAppForm";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <ProductGrid />
        <ProductGallery /> {/* Ajouté ici */}
        <StatusBanner />
        <CarRental />
        <StoreLocator />
        <EventsSection /> {/* Ajouté ici */}
        <WhatsAppForm />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}