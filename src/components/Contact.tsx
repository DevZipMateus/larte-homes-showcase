import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Padre Mário Verse 675",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(21) 98246-0115",
      link: "https://wa.me/5521982460115",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "docelarmoveisatendimento@gmail.com",
      link: "mailto:docelarmoveisatendimento@gmail.com",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg a Sex: 8h às 18h | Sáb: 8h às 12h",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Entre em contato</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar os móveis perfeitos para o seu lar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = item.link ? (
              <a
                href={item.link}
                className="text-primary hover:text-primary/80 transition-colors font-medium"
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                {item.content}
              </a>
            ) : (
              <p className="text-muted-foreground">{item.content}</p>
            );

            return (
              <div key={index} className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                {content}
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 md:p-12 text-center text-primary-foreground shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Pronto para transformar seu lar?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Entre em contato conosco pelo WhatsApp e descubra como podemos ajudar a tornar sua casa mais bonita e acolhedora
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/5521982460115" target="_blank" rel="noopener noreferrer">
              Fale conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
