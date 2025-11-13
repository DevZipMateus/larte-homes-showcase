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
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Sobre nós</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça os valores que guiam nosso trabalho e nos tornam referência em móveis de qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/50"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-3xl font-bold text-foreground mb-4">Nosso compromisso</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na Larte Móveis, acreditamos que cada peça de mobiliário tem o poder de transformar um espaço em um lar.
            Trabalhamos com dedicação para oferecer o melhor custo-benefício, sem abrir mão da qualidade, do design e
            do atendimento humanizado que você merece.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
