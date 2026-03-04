import { Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Andrey Oliveira",
      date: "Uma semana atrás",
      text: "Ótimo trabalho, fomos muito bem atendidos na loja e também durante as tratativas de compra e entrega dos produtos. Foram entregues bem rápido e chegaram em perfeitas condições, muito bem embalados e são produtos de ótima qualidade. A Larte Móveis está de parabéns! 👏🏽",
    },
    {
      name: "Fabiana Gabina",
      date: "5 meses atrás",
      text: "Gostaria de agradecer ao vendedor Renato pelo excelente atendimento e por sua dedicação no que faz. Obrigada pela atenção. O mundo precisa de mais vendedores como o Renato. Deus abençoe 🙌",
    },
    {
      name: "Wanda Munhoz",
      date: "2 semanas atrás",
      text: "Já tem tempo que compro nessa loja, gosto do ótimo atendimento e da rapidez na entrega. O vendedor Renato, me atendeu com muita simpatia e eficiência. Obrigada.",
    },
    {
      name: "Gabriela Besson",
      date: "5 meses atrás",
      text: "Ótimo atendimento, chegou tudo direitinho. Perfeito! Eles montam também, porém eu pedi pra deixar assim mesmo para abrir com meu esposo.",
    },
    {
      name: "Gabriela Ventura",
      date: "3 semanas atrás",
      text: "Comprei um guarda-roupa e estou apaixonada pelo produto, ótimo atendimento com o vendedor Renato e o material é impecável, voltarei a comprar mais coisas na loja.",
    },
    {
      name: "Lucas Sanches",
      date: "4 meses atrás",
      text: "Fiquei impressionado com a qualidade dos móveis e com o atendimento da equipe! Desde o momento da compra até a entrega, tudo foi feito com muito profissionalismo e cuidado. Meus móveis chegaram perfeitamente embalados e superaram minhas expectativas. Parabéns à loja pelo ótimo trabalho, com certeza voltarei a comprar!",
    },
    {
      name: "Marcia Batista",
      date: "Um ano atrás",
      text: "Gosto de comprar com eles pq são muito educados e atenciosos e a loja entrega e faz a montagem. Vendedora Angela muito bacana, compro com ela pelo tel e eles entregam super rápido. Toda vez que comprei fui muito bem atendida. Recomendo.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            O que nossos clientes dizem
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl sm:text-3xl font-bold text-foreground">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground">
            318 avaliações no Google
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground text-sm sm:text-base">{review.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
