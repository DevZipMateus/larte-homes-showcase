const Map = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Nossa localização</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Av. Chrisóstomo Pimentel de Oliveira, 1969 - Pavuna, Rio de Janeiro - RJ
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5!2d-43.3661!3d-22.8236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996476914d89ad%3A0xd9a5bd897bcd3470!2sLarte%20M%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Larte Móveis no Google Maps"
            className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;
