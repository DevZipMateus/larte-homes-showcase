import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Produtos", href: "#produtos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo e Slogan */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logo} alt="Larte Móveis" className="h-12 sm:h-16 w-auto brightness-0 invert" />
            <p className="text-xs sm:text-sm opacity-90 italic">
              "Cada móvel, um pedacinho do seu lar."
            </p>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              Móveis de qualidade, acessíveis e modernos para transformar sua casa em um lar acolhedor.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">Links rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-xs sm:text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">Contato</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <span>R. Motorista Luiz Abreu, 527 - Anchieta, Rio de Janeiro</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:atendimento@lartemoveis.com"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition-all break-all"
                >
                  atendimento@lartemoveis.com
                </a>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">Horário de funcionamento</h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Segunda a sexta</p>
                  <p>8h às 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm opacity-80">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sábado</p>
                  <p>8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-primary-foreground/20 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm opacity-80">
            <p className="text-center sm:text-left">
              © {currentYear} Larte Móveis - Doce Lar Móveis. Todos os direitos reservados.
            </p>
            <p className="text-center sm:text-right">
              CNPJ: 07.611.671/0001-38
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
