import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import QualitySection from "@/components/QualitySection";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <QualitySection />
        <Products />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
