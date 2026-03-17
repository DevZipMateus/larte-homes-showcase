import livingRoomImage from "@/assets/living-room.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import diningRoomImage from "@/assets/dining-room.jpg";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Products = () => {
  const products = [
    {
      title: "Sala de estar",
      description: "Sofás, poltronas, mesas de sala, racks, painéis e tudo o que a sua sala merece para ficar completa, confortável e cheia de estilo.",
      image: livingRoomImage,
      alt: "Sala de estar moderna com sofá azul e almofadas amarelas douradas",
    },
    {
      title: "Quartos",
      description: "Camas, guarda-roupas, cômodas, criados-mudos e tudo o que o seu quarto merece para ser mais aconchegante.",
      image: bedroomImage,
      alt: "Quarto elegante com cama confortável e decoração em tons de azul",
    },
    {
      title: "Sala de jantar",
      description: "Mesas e cadeiras perfeitas para reunir a família e criar momentos inesquecíveis ao redor de uma boa refeição.",
      image: diningRoomImage,
      alt: "Sala de jantar sofisticada com mesa e cadeiras em tons de azul e dourado",
    },
  ];

  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Nossos produtos</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Qualidade, estilo e preços que cabem no seu bolso para transformar todos os ambientes do seu lar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border border-border"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{product.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center px-4">
          <p className="text-base sm:text-lg text-muted-foreground mb-5 sm:mb-6">
            Interessado em conhecer nossa linha completa de produtos?
          </p>
          <a
            href="https://wa.me/5521982460115"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 h-12 sm:h-14 px-8 sm:px-10 text-sm sm:text-base font-semibold rounded-lg bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            <img src={whatsappIcon} alt="" className="w-5 h-5" />
            Solicite nosso catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
