"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Advocacia",
    category: "Landing Page",
    description:
      "Landing page para escritório de advocacia com foco em captação de clientes e geração de consultas gratuitas.",
    image: "/AdvogadoLandingPageFigma1.png",
    alt: "Landing page para escritório de advocacia",
  },
  {
    id: 2,
    title: "Seguro de Vida",
    category: "Landing Page",
    description:
      "Página de vendas para seguro de vida com design focado em conversão e geração de leads qualificados.",
    image: "/4ssegurosite.png",
    alt: "Landing page para seguro de vida",
  },
  {
    id: 3,
    title: "JP Tecidos",
    category: "Site Institucional",
    description:
      "Site institucional moderno para empresa de tecidos, destacando produtos e gerando novas oportunidades de negócio.",
    image: "/jptecidosSite-20260401.png",
    alt: "Site institucional para JP Tecidos",
  },
  {
    id: 4,
    title: "Cardiologista",
    category: "Site Profissional",
    description:
      "Site profissional desenvolvido para cardiologista, com apresentação clara dos serviços e foco em autoridade digital.",
    image: "/cardiologiaSite.png",
    alt: "Site profissional para cardiologista",
  },
  {
    id: 5,
    title: "Dermatologia",
    category: "Site Profissional",
    description:
      "Site voltado para a area de dermatologia, com estrutura pensada para destacar especialidades e facilitar o contato.",
    image: "/DemartologiaSite.png",
    alt: "Site profissional para dermatologia",
  },
  {
    id: 6,
    title: "GR Premoldados",
    category: "Site Institucional",
    description:
      "Site institucional para empresa de premoldados, com foco em apresentar servicos, credibilidade e canais de atendimento.",
    image: "/grPremoldadosSite.png",
    alt: "Site institucional para GR Premoldados",
  },
  {
    id: 7,
    title: "Psicologa",
    category: "Site Profissional",
    description:
      "Site profissional para psicologa com foco em apresentar especialidades, gerar confianca e facilitar agendamentos.",
    image: "/templatePsicologoSite.png",
    alt: "Site profissional para psicologa",
  },
];

export default function PortfolioSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="portfolio" className="py-24">
      <div className="mb-12 text-center">
        <span className="badge-accent">Portfólio</span>
        <h2 className="mt-4 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">
          Veja o que já fizemos
        </h2>
        <p className="mt-4 text-[rgba(248,248,248,0.6)]">
          Projetos reais entregues com qualidade e resultado
        </p>
      </div>

      {/* Slider track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="min-w-full">
              <div className="glass-card overflow-hidden rounded-2xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full bg-[#111111] md:aspect-auto md:min-h-[380px] md:w-3/5">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      loading={project.id === 1 ? "eager" : "lazy"}
                      className="object-contain object-center p-2 md:p-4"
                      sizes="(max-width: 768px) 100vw, 30vw"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex flex-col justify-center space-y-4 p-8 md:w-2/5">
                    <span className="badge-accent w-fit">{project.category}</span>
                    <h3 className="font-display text-2xl font-bold text-[#f8f8f8]">
                      {project.title}
                    </h3>
                    <p className="leading-relaxed text-[rgba(248,248,248,0.6)]">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] text-[rgba(248,248,248,0.6)] transition-colors hover:border-[#5dd62c] hover:text-[#5dd62c]"
          aria-label="Projeto anterior"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-[#5dd62c]"
                  : "w-2 bg-[rgba(248,248,248,0.3)] hover:bg-[rgba(248,248,248,0.5)]"
              }`}
              aria-label={`Ir para projeto ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] text-[rgba(248,248,248,0.6)] transition-colors hover:border-[#5dd62c] hover:text-[#5dd62c]"
          aria-label="Próximo projeto"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
