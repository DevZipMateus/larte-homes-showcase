import { Mail, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Contact = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">Entre em contato</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para ajudar você a encontrar os móveis perfeitos para o seu lar
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-8 mb-10 sm:mb-12">
          <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border text-center flex-1">
            <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">Telefone</h3>
            <a
              href="tel:+5521970617304"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
            >
              (21) 97061-7304
            </a>
            <br />
            <a
              href="tel:+5521994524905"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
            >
              (21) 99452-4905
            </a>
          </div>

          <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border text-center flex-1">
            <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">E-mail</h3>
            <a
              href="mailto:atendimento@lartemoveis.com"
              className="text-primary hover:text-primary/80 transition-colors font-medium text-sm sm:text-base"
            >
              atendimento@lartemoveis.com
            </a>
          </div>

          <div className="bg-card p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border text-center flex-1">
            <div className="bg-primary/10 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">Horário de funcionamento</h3>
            <p className="text-muted-foreground text-sm sm:text-base">Seg a Sex: 8:30 às 18:00</p>
            <p className="text-muted-foreground text-sm sm:text-base">Sáb: 8:30 às 13:00</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 sm:p-8 md:p-12 text-center text-primary-foreground shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Pronto para transformar seu lar?</h3>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto px-4">
            Entre em contato conosco pelo WhatsApp e descubra como podemos ajudar a tornar sua casa mais bonita e acolhedora
          </p>
          <Button variant="whatsapp" size="xl" asChild className="w-full sm:w-auto">
            <a href="https://wa.me/5521994524905" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="" className="w-5 h-5" />
              Fale conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
