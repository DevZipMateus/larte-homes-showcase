import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Showroom da Larte Móveis com móveis elegantes e modernos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 py-24 sm:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in text-neutral-950">
            Larte Móveis
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-6 sm:mb-8 font-semibold animate-fade-in">
            Seu lar do jeito que você sempre sonhou
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed animate-fade-in text-gray-950">
            Móveis de qualidade, acessíveis e modernos que trazem conforto, beleza e praticidade para cada ambiente.
            <span className="block mt-3 sm:mt-4 font-semibold italic text-neutral-950">"Cada móvel, um pedacinho do seu lar."</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in">
            <Button variant="whatsapp" size="xl" asChild className="w-full sm:w-auto">
              <a href="https://wa.me/5521982460115" target="_blank" rel="noopener noreferrer">
                <img src={whatsappIcon} alt="" className="w-5 h-5" />
                Entre em contato
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild className="w-full sm:w-auto">
              <a href="#produtos">
                Ver produtos
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;