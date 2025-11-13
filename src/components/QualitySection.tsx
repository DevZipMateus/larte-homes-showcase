import qualityDetailImage from "@/assets/quality-detail.jpg";
import sofaDetailImage from "@/assets/sofa-detail.jpg";

const QualitySection = () => {
  const features = [
    {
      title: "Materiais premium",
      description: "Selecionamos cuidadosamente cada material para garantir durabilidade e beleza.",
    },
    {
      title: "Design atemporal",
      description: "Móveis que combinam tendências modernas com elegância duradoura.",
    },
    {
      title: "Conforto garantido",
      description: "Cada peça é projetada pensando no seu bem-estar e comodidade.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Qualidade em cada detalhe</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Comprometidos com a excelência em cada móvel que oferecemos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center mb-12 sm:mb-16">
          <div className="relative overflow-hidden rounded-lg shadow-2xl h-[300px] sm:h-[400px] lg:h-[500px]">
            <img
              src={qualityDetailImage}
              alt="Detalhe de acabamento premium em móvel com ferragens douradas"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card p-5 sm:p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-2xl h-[350px] sm:h-[400px] md:h-[500px]">
          <img
            src={sofaDetailImage}
            alt="Sofá confortável em tons de azul com almofadas amarelas decorativas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-xl text-primary-foreground">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Conforto que se vê e se sente</h3>
                <p className="text-base sm:text-lg opacity-90 leading-relaxed">
                  Cada sofá, cada cadeira, cada mesa é criada para proporcionar momentos especiais de conforto e convívio com quem você ama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
