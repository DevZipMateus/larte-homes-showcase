import livingRoomImage from "@/assets/living-room.jpg";
import bedroomImage from "@/assets/bedroom.jpg";
import diningRoomImage from "@/assets/dining-room.jpg";

const Products = () => {
  const products = [
    {
      title: "Sala de estar",
      description: "Sofás, poltronas e mesas de centro que combinam conforto e elegância para receber seus convidados com estilo.",
      image: livingRoomImage,
      alt: "Sala de estar moderna com sofá azul e almofadas amarelas douradas",
    },
    {
      title: "Quartos",
      description: "Camas, guarda-roupas e criados-mudos que transformam seu quarto em um refúgio de descanso e tranquilidade.",
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
    <section id="produtos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nossos produtos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Móveis que combinam qualidade, design moderno e preços acessíveis para cada ambiente do seu lar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">{product.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Interessado em conhecer nossa linha completa de produtos?
          </p>
          <a
            href="https://wa.me/5521982460115"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 text-base font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Solicite nosso catálogo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
