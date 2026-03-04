import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Oferecer móveis de qualidade, acessíveis e modernos, que tragam conforto, beleza e praticidade aos lares, tornando cada ambiente mais acolhedor e funcional.",
    },
    {
      icon: Eye,
      title: "Visão",
      description:
        "Ser uma marca referência em móveis, destacando-se pela inovação, confiança e atendimento humanizado, conquistando cada cliente com produtos que encantam e duram.",
    },
    {
      icon: Heart,
      title: "Valores",
      description:
        "Acessibilidade com qualidade, inovação constante, respeito e transparência, satisfação do cliente e trabalho com propósito.",
    },
  ];

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Sobre nós</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Qualidade, estilo e preços que cabem no seu bolso para transformar todos os ambientes do seu lar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
