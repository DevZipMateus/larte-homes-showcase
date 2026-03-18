import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const stores = [
  {
    name: "Loja Pavuna",
    address: "Av. Crisóstomo Pimentel de Oliveira, 1969, Pavuna - Rio de Janeiro",
    hours: ["Seg a Sex: 8:30 às 18:00", "Sáb: 8:30 às 14:00"],
    phone: "(21) 99452-4905",
    whatsapp: "5521994524905",
    googleLink: "https://share.google/qlri1YKAoXcFv0bei",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5!2d-43.3661!3d-22.8236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x996476914d89ad%3A0xd9a5bd897bcd3470!2sLarte%20M%C3%B3veis!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
  },
  {
    name: "Loja Anchieta",
    address: "R. Motorista Luiz Abreu, 527 - Anchieta, Rio de Janeiro - RJ",
    hours: ["Seg a Sex: 8:30 às 18:00", "Sáb: 8:30 às 13:00"],
    phone: "(21) 97061-7304",
    whatsapp: "5521970617304",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5!2d-43.3961!3d-22.8336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUi4gTW90b3Jpc3RhIEx1aXogQWJyZXUsIDUyNyAtIEFuY2hpZXRh!5e0!3m2!1spt-BR!2sbr!4v1700000000000",
  },
];

const Map = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Nossas lojas</h2>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {stores.map((store, idx) => (
            <div key={idx}>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">{store.name}</h3>

              <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex items-start gap-4">
                  <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">Endereço</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{store.address}</p>
                  </div>
                </div>

                <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex items-start gap-4">
                  <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">Horário</h4>
                    {store.hours.map((h, i) => (
                      <p key={i} className="text-sm sm:text-base text-muted-foreground">{h}</p>
                    ))}
                  </div>
                </div>

                <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md border border-border flex items-start gap-4">
                  <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">Telefone</h4>
                    <a
                      href={`https://wa.me/${store.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      {store.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-xl border border-border">
                <iframe
                  src={store.mapSrc}
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Localização da ${store.name} no Google Maps`}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px]"
                />
              </div>

              {store.googleLink && (
                <div className="mt-4 text-center">
                  <a
                    href={store.googleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver no Google Maps
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Map;
