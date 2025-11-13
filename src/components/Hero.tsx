import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Showroom da Larte Móveis com móveis elegantes e modernos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Larte Móveis
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary mb-8 font-semibold animate-fade-in">
            Transforme sua casa em um lar acolhedor
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in">
            Móveis de qualidade, acessíveis e modernos que trazem conforto, beleza e praticidade para cada ambiente.
            <span className="block mt-4 text-accent font-semibold italic">"Cada móvel, um pedacinho do seu lar."</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5521982460115" target="_blank" rel="noopener noreferrer">
                Entre em contato
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
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
