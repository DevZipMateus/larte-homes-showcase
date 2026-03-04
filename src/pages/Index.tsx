import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Testimonials />
        <Contact />
        <Map />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
