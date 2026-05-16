"use client";

import { useState } from "react";
import { FaPlus, FaXmark } from "react-icons/fa6";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Quanto tempo leva pra ter resultados?",
    answer:
      "Entrego o projeto em até 20 dias. A partir daí, os primeiros resultados aparecem conforme o volume de tráfego. Sites bem posicionados costumam gerar leads qualificados já nas primeiras semanas.",
  },
  {
    question: "Eu preciso ter tudo pronto? Textos, fotos, etc?",
    answer:
      "Não. Escrevo toda a copy com base no diagnóstico do seu negócio. Para as imagens, oriento o que é necessário, mas o projeto não trava por falta de material.",
  },
  {
    question: "Isso substitui o Instagram ou outra rede?",
    answer:
      "Não substitui, complementa. As redes geram atenção. O site converte essa atenção em contato qualificado, com mais autoridade e menos dependência de algoritmo.",
  },
  {
    question: "O site pode crescer junto com o meu negócio?",
    answer:
      "Sim. Entrego o projeto estruturado para expansão conforme seu negócio evolui: novas páginas, ajustes de posicionamento e novos cases.",
  },
];

export default function FaqAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1, 2, 3]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index],
    );
  };

  return (
    <section id="faq" data-nav-theme="dark" className="bg-black px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl font-[family-name:var(--font-poppins)]">
        {faqItems.map((item, index) => {
          const isOpen = openItems.includes(index);

          return (
            <article key={item.question} className="border-b border-white/10 py-9 md:py-10">
              <div className="grid grid-cols-[40px_1fr_auto] gap-6 md:grid-cols-[60px_1fr_auto] md:gap-8">
                <span className="pt-1 text-xl font-semibold text-white md:text-3xl">{index + 1}</span>

                <div>
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="cursor-pointer text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-xl font-semibold leading-tight text-white md:text-4xl">
                      {item.question}
                    </h3>
                  </button>

                  {isOpen && (
                    <p
                      id={`faq-answer-${index}`}
                      className="mt-4 max-w-4xl text-base leading-relaxed text-[#9CA3AF] md:mt-5 md:text-2xl"
                    >
                      {item.answer}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="cursor-pointer self-start text-white/90"
                  aria-label={isOpen ? `Fechar pergunta ${index + 1}` : `Abrir pergunta ${index + 1}`}
                >
                  {isOpen ? <FaXmark size={20} /> : <FaPlus size={20} />}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
