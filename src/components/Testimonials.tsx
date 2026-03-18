import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star, X, ExternalLink } from "lucide-react";
import review1 from "@/assets/review-1.png";
import review2 from "@/assets/review-2.png";
import review3 from "@/assets/review-3.png";
import review4 from "@/assets/review-4.png";
import review5 from "@/assets/review-5.png";
import review6 from "@/assets/review-6.png";
import review7 from "@/assets/review-7.png";

const reviews = [
  { src: review1, alt: "Avaliação de Fabiana Dos Santos" },
  { src: review2, alt: "Avaliação de Wanda Munhoz" },
  { src: review3, alt: "Avaliação de Gabriela Ventura" },
  { src: review4, alt: "Avaliação de Cintia Barbosa" },
  { src: review5, alt: "Avaliação de Gerlaine Silva" },
  { src: review6, alt: "Avaliação de Andrey Oliveira" },
  { src: review7, alt: "Avaliação de Gabriela Besson" },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (expanded) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next, expanded]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl sm:text-3xl font-bold text-foreground">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground">
            318 avaliações no Google
          </p>
        </div>

        <div className="relative max-w-lg mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:bg-accent/10 transition-colors"
            aria-label="Avaliação anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 bg-card border border-border rounded-full p-2 shadow-md hover:bg-accent/10 transition-colors"
            aria-label="Próxima avaliação"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          <div
            className="bg-card rounded-xl shadow-lg border border-border overflow-hidden cursor-pointer"
            onClick={() => setExpanded(true)}
          >
            <img
              src={reviews[current].src}
              alt={reviews[current].alt}
              className="w-full h-auto object-contain"
            />
          </div>

          {expanded && (
            <div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={() => setExpanded(false)}
            >
              <button
                className="absolute top-4 right-4 text-white bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
                onClick={(e) => { e.stopPropagation(); setExpanded(false); }}
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/20 rounded-full p-3 hover:bg-white/30 transition-colors"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Próxima"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <img
                src={reviews[current].src}
                alt={reviews[current].alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary scale-125" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ir para avaliação ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8">
            <a
              href="https://share.google/qlri1YKAoXcFv0bei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4" />
              Ver no Google - Loja Pavuna
            </a>
            <a
              href="https://share.google/y7S4fUpQBilMGIFQs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4" />
              Ver no Google - Loja Anchieta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
