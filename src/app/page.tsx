import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import RecentProjectsSlider from "@/components/RecentProjectsSlider";
import SmartNavbar from "@/components/SmartNavbar";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCheck,
  FaQuoteLeft,
  FaXmark,
} from "react-icons/fa6";



const whatsappNumber = "5585984414455";
const whatsappText = encodeURIComponent(
  "Olá! Quero um site profissional para meu negócio.",
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

const orthopedistSeoKeywords = [
  "site para ortopedista",
  "criacao de site para ortopedista",
  "landing page para ortopedista",
  "site para clinica ortopedica",
  "desenvolvimento de site para medico ortopedista",
  "seo para ortopedista",
  "site medico para ortopedista",
  "presenca digital para ortopedista",
];

export const metadata: Metadata = {
  title: "Site para Ortopedista | Landing Page e Site Medico de Alta Conversao",
  description:
    "Criação de site para ortopedista com foco em autoridade, SEO local e mais agendamentos. Landing pages e sites médicos para consultórios de ortopedia.",
  keywords: orthopedistSeoKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Site para Ortopedista | Landing Page e Site Medico de Alta Conversao",
    description:
      "Projetos digitais para ortopedistas que precisam transformar reputação médica em autoridade online e mais contatos qualificados.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Site para ortopedista desenvolvido pela Adryel Web Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site para Ortopedista | Landing Page e Site Medico de Alta Conversao",
    description:
      "Criação de site para ortopedista com foco em SEO, autoridade e conversão para consultórios de ortopedia.",
    images: ["/twitter-image"],
  },
};

const marqueeItems = [
  "Landing Pages",
  "Sites Institucionais",
  "Sistemas Web",
  "Design UI/UX",
  "SEO Técnico",
  "Alta Performance",
];

const testimonials = [
  {
    quote:
      "Foi um prazer enorme contar com o trabalho. Souberam ler, identificar e entregar exatamente o que estávamos buscando.",
    name: "Dr. Rafael Mendes",
    role: "Ortopedista",
  },
  {
    quote:
      "Com o novo site, os contatos ficaram muito mais qualificados e aumentamos a taxa de fechamento em poucas semanas.",
    name: "Carlos Andrade",
    role: "CEO da 4S Seguros",
  },
  {
    quote:
      "A presença digital agora representa o tamanho da nossa empresa. Ficou profissional, clara e com foco em resultado.",
    name: "Giovanna",
    role: "GR Pré Moldados",
  },
  {
    quote:
      "O posicionamento ficou muito mais forte. Hoje os pacientes chegam com mais confiança e prontos para agendar.",
    name: "Dra. Fernanda Lima",
    role: "Ortopedista",
  },
  {
    quote:
      "Além do design impecável, o processo foi rápido e objetivo. Melhoramos autoridade e percepção de valor.",
    name: "Roberto Teixeira",
    role: "Consultor Financeiro",
  },
  {
    quote:
      "A estrutura do site ficou extremamente clara. Agora nosso comercial recebe leads muito mais preparados.",
    name: "Mariana Costa",
    role: "Diretora Comercial",
  },
];

const orthopedistStructuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Adryel Web Studio",
  url: "https://site-adryel.vercel.app",
  description:
    "Criação de site para ortopedista, landing pages e presença digital para consultórios de ortopedia com foco em SEO e conversão.",
  areaServed: "Brasil",
  audience: {
    "@type": "Audience",
    audienceType: "Ortopedistas e clínicas ortopédicas",
  },
  serviceType: [
    "Site para ortopedista",
    "Landing page para ortopedista",
    "SEO para ortopedista",
    "Presença digital para consultório de ortopedia",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(orthopedistStructuredData),
        }}
      />

      {/* HERO + NAVBAR WRAPPER */}
      <div id="inicio" data-nav-theme="dark" className="relative min-h-0 overflow-hidden w-full md:min-h-screen">
        <SmartNavbar whatsappUrl={whatsappUrl} />

        {/* Mobile Background */}
        <div
          className="absolute inset-0 md:hidden"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05), transparent 28%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.04), transparent 24%), linear-gradient(180deg, #151515 0%, #0d0d0d 100%)",
          }}
        />

        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className="pointer-events-none absolute inset-0 hidden h-full w-full select-none object-cover md:block"
          aria-hidden="true"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* HERO */}
        <section className="animate-hero-enter relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 pb-14 pt-24 md:px-6 md:pb-28 md:pt-36">
          <div className="grid w-full gap-10 md:grid-cols-2 md:items-end md:gap-16">
            {/* Coluna esquerda */}
            <div className="space-y-6 md:space-y-7">
              <div className="inline-flex items-center overflow-hidden rounded-full border border-white/20 bg-[rgba(10,10,10,0.55)]">
                <span className="px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[#0978E4] md:px-4 md:py-2 md:text-sm">
                  EM 20 DIAS
                </span>
                <span className="border-l border-white/15 px-3 py-1.5 text-[11px] font-medium text-white/80 md:px-4 md:py-2 md:text-sm">
                  Seu novo site no ar
                </span>
              </div>
              <h1 className="font-display text-[2rem] font-bold leading-tight text-white sm:text-[2.35rem] md:text-5xl lg:text-[3.2rem]">
                Transformo seu site no reflexo real do que{" "}
                <span className="text-[#0978E4]">seu consultório de ortopedia é hoje.</span>
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base md:text-[#4B5563]">
                Criação de site para ortopedista com posicionamento estratégico,
                SEO e uma presença digital à altura da autoridade do seu
                consultório.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center md:mt-52 md:gap-x-7">
                <Link
                  href={whatsappUrl}
                  className="inline-flex min-h-11 items-center gap-2.5 rounded-xl bg-[#042C53] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#053a6e] sm:px-5 md:gap-3 md:px-6 md:py-3.5 md:text-base"
                >
                  <Image
                    src="/fotoPerfilBotãoWhatsapp.svg"
                    alt="Foto"
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  Chamar no Whatsapp
                </Link>

                <div className="w-full max-w-[320px] rounded-2xl bg-white px-4 py-3 shadow-xl sm:max-w-[250px] md:hidden">
                  <p className="font-display text-2xl font-bold text-[#042C53]">+94%</p>
                  <p className="mt-1 text-[10px] leading-snug text-[#4B5563]">
                    da confiança em um produto/serviço começa na primeira impressão do seu site
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna direita — card 94% */}
            <div className="hidden md:flex md:justify-end">
              <div className="w-full rounded-2xl bg-white px-5 py-5 shadow-2xl md:max-w-[400px] md:px-8 md:py-7">
                <p className="font-display text-3xl font-bold text-[#042C53] md:text-4xl">+94%</p>
                <p className="mt-2 text-xs leading-relaxed text-[#4B5563] md:mt-3 md:text-sm">
                  da confiança em um produto/serviço começa na primeira impressão
                  do seu site
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>

        {/* INFINITE MARQUEE */}
        <div data-nav-theme="dark" className="overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] py-5">
          <div className="marquee-inner">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex w-max shrink-0 items-center"
                aria-hidden={group === 1}
              >
                {[...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span
                    key={`${group}-${i}`}
                    className="mr-6 flex items-center gap-2 whitespace-nowrap text-sm font-semibold uppercase tracking-wide text-[rgba(248,248,248,0.5)]"
                  >
                    <span className="text-xs text-[#5dd62c]">✦</span>
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* O QUE TRAVA */}
        <section id="pra-quem-e" data-nav-theme="light" className="bg-[#F5F3EF] px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 font-[family-name:var(--font-poppins)] text-2xl font-semibold leading-tight text-gray-900 md:text-3xl">
              O que trava o crescimento
              <br />
              <span className="text-[#4B5563]">de muitos negócios:</span>
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  num: "1",
                  title: "Posicionamento fraco",
                  desc: "O lead não entende se seu negócio é para ele.",
                },
                {
                  num: "2",
                  title: "Baixa autoridade",
                  desc: "O site não sustenta o preço que você cobra.",
                },
                {
                  num: "3",
                  title: "Não tem diferencial",
                  desc: "São vistos só como mais um no mercado.",
                },
                {
                  num: "4",
                  title: "Desatualização",
                  desc: "O site atual não reflete o momento atual.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <span className="font-[family-name:var(--font-poppins)] text-4xl font-bold text-gray-900">
                    {item.num}
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-poppins)] text-sm font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4B5563]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-t border-[rgba(0,0,0,0.2)] pt-10">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_0.82fr] md:gap-10">
                <div className="font-[family-name:var(--font-poppins)]">
                  <h3 className="text-3xl font-semibold leading-tight text-gray-900">
                    Sites que posicionam.
                    <br />
                    Agendas que lotam.
                  </h3>
                  <p className="mt-8 max-w-sm text-sm leading-relaxed text-[#4B5563]">
                    Cada decisão de design tem um motivo estratégico e você entende
                    o porquê de cada uma.
                  </p>

                  <div className="mt-16 max-w-md space-y-5">
                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-gray-900">
                        <span>Sites genéricos de médico</span>
                        <span>1-2%</span>
                      </div>
                      <div className="h-9 rounded-full bg-[#D1D5DB] p-1">
                        <div className="h-full w-[11%] rounded-full bg-black" />
                      </div>
                      <p className="mt-2 text-xs text-[#4B5563]">
                        Pouca clareza, sem posicionamento
                      </p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center justify-between text-xs text-gray-900">
                        <span>Método Virada</span>
                        <span>6-12%</span>
                      </div>
                      <div className="h-9 rounded-full bg-[#D1D5DB] p-1">
                        <div className="h-full w-[92%] rounded-full bg-[#2D8FFF]" />
                      </div>
                      <p className="mt-2 text-xs text-[#4B5563]">
                        Foco em clareza, valor e tomada de decisão
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mx-auto w-full max-w-[520px] rounded-3xl bg-[#111111] p-5 md:max-w-[460px] md:p-6">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src="/imgPerfil2.svg"
                      alt="Foto de perfil"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 md:mt-20">
              <div className="rounded-3xl border border-[rgba(0,0,0,0.06)] bg-[#F8F8F7] px-6 py-6 md:px-8 md:py-7">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0 md:h-24 md:w-24">
                      <Image
                        src="/mockupPhone.svg"
                        alt="Mockup de celular"
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>

                    <div className="font-[family-name:var(--font-poppins)]">
                      <h3 className="text-2xl font-medium leading-tight text-gray-900 md:text-[2rem]">
                        Websites criados para celulares
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#4B5563]">
                        A maioria dos primeiros contatos acontece no celular. Estruturo
                        o seu site para ser claro, rápido e convincente desde a
                        primeira rolagem.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-between gap-4 md:flex-col md:items-start md:justify-center">
                    <span className="inline-flex rounded-full bg-[#042C53] px-6 py-3 text-sm font-semibold text-white">
                      Exclusivo
                    </span>
                    <p className="text-start text-xs leading-relaxed text-[#4B5563]">
                      Smartphones
                      <br />
                      &amp; Tablets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" data-nav-theme="light" className="bg-[#F5F3EF] px-6 py-20">
          <div className="mx-auto max-w-6xl font-[family-name:var(--font-poppins)]">
            <div className="mb-10 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-2 md:items-center md:gap-8">
              <p className="text-lg font-medium text-[#4B5563] md:text-2xl">Método Virado</p>
              <h2 className="max-w-md text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                Como transformo seu site em ativo de crescimento
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
              {[
                {
                  title: "Diagnóstico",
                  desc: "Leitura profunda do seu negócio, repertório e momento atual. Daqui saem as decisões que guiam tudo.",
                },
                {
                  title: "Conceito",
                  desc: "Posicionamento, mensagem e identidade definidos. O que você comunica, para quem e como.",
                },
                {
                  title: "Projeto",
                  desc: "O site toma forma - estrutura, hierarquia e fluxo pensados para converter o paciente certo.",
                },
                {
                  title: "Presença",
                  desc: "Site no ar. Presença digital alinhada ao nível do seu consultório.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-6 md:p-7">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-8 text-sm leading-relaxed text-[#4B5563] md:mt-12">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE MUDA */}
        <section data-nav-theme="dark" className="bg-[#000000] px-6 py-24">
          <div className="mx-auto max-w-6xl font-[family-name:var(--font-poppins)]">
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-white md:text-3xl">
              <span className="text-[#4B5563]">O que muda quando </span>
              seu consultório tem direção no digital.
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              <div className="rounded-3xl bg-[#282828] p-6 md:p-7">
                <FaArrowLeftLong className="text-2xl text-[#4B5563]" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold text-white">Antes</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/80">
                  {[
                    "Site que não acompanha o nível do consultóri;.",
                    "Paciente que encontra, mas não converte;",
                    "Presença digital que não reflete o consultório que você construiu;",
                    "Crescimento dependente de indicação.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FaXmark className="mt-0.5 shrink-0 text-base leading-none text-red-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-[#F5F5F5] p-6 md:p-7">
                <FaArrowRightLong className="text-2xl text-gray-900" aria-hidden="true" />
                <h3 className="mt-8 text-xl font-semibold text-gray-900">Depois</h3>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[#4B5563]">
                  {[
                    "Contato de pacientes ideais;",
                    "Pacientes que chegam prontos para fechar;",
                    "Percepção imediata de exclusividade;",
                    "Liberdade para cobrar seu preço.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <FaCheck className="mt-0.5 shrink-0 text-sm leading-none text-emerald-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="depoimentos" data-nav-theme="light" className="bg-[#F5F3EF] px-4 py-16 md:px-6 md:py-20">
          <div className="mx-auto max-w-6xl font-[family-name:var(--font-poppins)]">
            <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-start">
              <h2 className="max-w-sm text-3xl font-medium leading-tight text-gray-900 md:text-4xl">
                Ortopedistas confiam no meu processo
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-[#4B5563] md:justify-self-end">
                Flexibilidade, velocidade, sem perder qualidade. Resultados notáveis.
                Mais conversões.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="flex min-h-[260px] flex-col rounded-2xl border border-[rgba(0,0,0,0.08)] p-5 md:min-h-[300px] md:p-6"
                >
                  <FaQuoteLeft className="text-xl text-[#B7BDC7]" aria-hidden="true" />
                  <p className="mt-5 text-base font-medium leading-snug text-[#4B5563] md:mt-7 md:text-xl md:leading-tight">
                    {item.quote}
                  </p>
                  <div className="mt-auto flex items-center gap-3 pt-10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D7DBE3] text-sm font-semibold text-[#4B5563]">
                      {item.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div>
                      <p className="text-base font-semibold leading-tight text-gray-900 md:text-xl">{item.name}</p>
                      <p className="text-sm text-[#4B5563]">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <RecentProjectsSlider whatsappUrl={whatsappUrl} />
        <FaqAccordion />
      </main>
    </>
  );
}
