"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";

type ProjectCard = {
  title: string;
  description: string;
  metric: string;
  image: string;
  imageAlt: string;
  mockupImage?: string;
  mockupAlt?: string;
};

const projectCards: ProjectCard[] = [
  {
    title: "Dr. Filipe Arruda",
    description:
      "Clínica ortopédica especializada em dor e mobilidade. Posicionamos o consultório no digital e aumentamos os agendamentos.",
    metric: "+30% agendamento",
    image: "/familia.jpg",
    imageAlt: "Projeto do Dr. Filipe Arruda",
    mockupImage: "/ortopedistamockup.png",
    mockupAlt: "Mockup do site do Dr. Filipe Arruda",
  },
  {
    title: "QUATRO SEGUROS",
    description:
      "Reposicionamos uma indenizadora de seguro de vida, com comunicação mais clara e foco em conversão.",
    metric: "60% cotações",
    image: "/notebookmockup.png",
    imageAlt: "Projeto da Quatro Seguros",
  },
  {
    title: "GR Pré Moldados",
    description:
      "Nova presença digital para destacar autoridade da empresa e melhorar o ROI das campanhas.",
    metric: "3x ROI com tráfego pago",
    image: "/mulhernoNotebook.jpg",
    imageAlt: "Projeto da GR Pré Moldados",
    mockupImage: "/grpremoldadosMockup.png",
    mockupAlt: "Mockup do site da GR Pré Moldados",
  },
];

type RecentProjectsSliderProps = {
  whatsappUrl: string;
};

export default function RecentProjectsSlider({
  whatsappUrl,
}: RecentProjectsSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateViewportMode = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewportMode();
    mediaQuery.addEventListener("change", updateViewportMode);

    return () => mediaQuery.removeEventListener("change", updateViewportMode);
  }, []);

  const canGoPrev = activeSlide > 0;
  const maxSlide = isDesktop ? projectCards.length - 2 : projectCards.length - 1;
  const canGoNext = activeSlide < maxSlide;

  const handlePrev = () => {
    if (canGoPrev) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setActiveSlide((prev) => prev + 1);
    }
  };

  const sliderTransform = isDesktop
    ? activeSlide === 0
      ? "translateX(0)"
      : "translateX(calc(-1 * (50% + 0.625rem)))"
    : `translateX(calc(-${activeSlide} * (100% + 1rem)))`;

  return (
    <section id="projetos" data-nav-theme="light" className="bg-[#F5F3EF] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl font-[family-name:var(--font-poppins)]">
        <div className="mb-10 flex items-start justify-between gap-5">
          <h2 className="max-w-[240px] text-xl font-medium leading-tight text-gray-900 md:max-w-[340px] md:text-3xl">
            Resultados de projetos recentes
          </h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Mostrar projeto anterior"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#4B5563] text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaArrowLeftLong size={14} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Mostrar próximo projeto"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
            >
              <FaArrowRightLong size={14} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 md:gap-5"
            style={{ transform: sliderTransform }}
          >
            {projectCards.map((card) => (
              <article
                key={card.title}
                className="min-w-[100%] rounded-2xl bg-white/80 p-2 shadow-[0_1px_0_rgba(0,0,0,0.06)] md:min-w-[calc(50%-0.625rem)]"
              >
                <div className="relative mb-4 aspect-[16/11] overflow-hidden rounded-xl md:aspect-[16/10]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  {card.mockupImage && (
                    <div className="pointer-events-none absolute bottom-1 left-2 z-10 h-[88%] w-[64%] md:left-3 md:h-[90%] md:w-[66%]">
                      <Image
                        src={card.mockupImage}
                        alt={card.mockupAlt ?? "Mockup do projeto"}
                        fill
                        sizes="(max-width: 868px) 98vw, 18vw"
                        className="object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 md:text-lg">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4B5563] md:text-sm">{card.description}</p>
                <p className="mt-3 text-base font-semibold text-gray-900 md:mt-4 md:text-lg">{card.metric}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-3xl bg-black px-4 py-8 md:px-14 md:py-14">
            <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:120px_100%] opacity-35" />

            <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <div className="inline-flex items-center gap-3 md:gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d1f23] text-[#25D366] md:h-12 md:w-12">
                    <FaWhatsapp size={20} />
                  </div>
                  <p className="max-w-[260px] font-[family-name:var(--font-poppins)] text-lg font-medium leading-snug text-[#9CA3AF] md:max-w-[360px] md:text-2xl">
                    Entre em contato comigo pelo WhatsApp
                  </p>
                </div>

                <h2 className="mt-7 max-w-xl font-[family-name:var(--font-poppins)] text-[2rem] font-semibold leading-[1.05] text-white md:mt-10 md:text-3xl">
                  Seu consultório tem o site que merece?
                </h2>
              </div>

              <div className="flex flex-col justify-between md:items-start">
                <p className="max-w-md font-[family-name:var(--font-poppins)] text-base font-medium leading-snug text-[#9CA3AF] md:text-lg">
                  Saiba como posso ajudar seu consultório a se posicionar e criar autoridade com um website único.
                </p>

                <Link
                  href={whatsappUrl}
                  className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#042C53] px-4 py-3 font-[family-name:var(--font-poppins)] text-sm font-semibold text-white transition-colors hover:bg-[#0a4b7a] md:mt-10 md:gap-4 md:px-5 md:py-3.5 md:text-lg"
                >
                  <span className="relative inline-flex h-9 w-9 shrink-0 items-center justify-center md:h-12 md:w-12">
                    <Image
                      src="/fotoPerfilBotãoWhatsapp.svg"
                      alt="Foto de perfil"
                      width={36}
                      height={36}
                      className="rounded-full object-cover"
                    />
                    <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#B6FF00] bg-[#57d86c]" />
                  </span>
                  Chamar no WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
