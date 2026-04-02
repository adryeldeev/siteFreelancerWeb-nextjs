"use client";

import Image from "next/image";
import Link from "next/link";
import PortfolioSlider from "@/components/PortfolioSlider";
import StatsSection from "@/components/StatsSection";
import {
  ArrowRight,
  Check,
  Rocket,
  Building2,
  Settings2,
  TrendingUp,
  MessageCircle,
  Star,
  ChevronDown,
} from "lucide-react";



const whatsappNumber = "5500000000000";
const whatsappText = encodeURIComponent(
  "Olá! Quero um site profissional para meu negócio.",
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

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
    name: "Carlos Andrade",
    role: "Advogado",
    text: "Em menos de 2 semanas tive minha landing page no ar. Os contatos através do site dobraram no primeiro mês.",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    role: "Empreendedora Digital",
    text: "Design incrível e entrega no prazo. O site ficou exatamente como eu imaginava, profissional e moderno.",
    rating: 5,
  },
  {
    name: "Roberto Teixeira",
    role: "Consultor Financeiro",
    text: "Excelente trabalho! A performance do site é impecável e o SEO já está gerando resultados orgânicos.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Além do desenvolvimento, terei algum custo extra?",
    paragraphs: [
      "Sim. Para publicar um projeto na internet é necessário ter um domínio, por exemplo, www.meusite.com.br, que tem custo médio de R$40/ano.",
      "Também precisa ter uma hospedagem web para armazenar os arquivos do seu site. Ela tem um custo médio de R$30/mês.",
    ],
  },
  {
    question: "Após a entrega do projeto, tenho suporte?",
    paragraphs: [
      "Sim! Após a entrega do projeto, oferecemos, no mínimo, 15 dias de suporte gratuito. Neste período, realizamos todos os ajustes necessários do projeto.",
    ],
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    paragraphs: [],
    items: [
      "À vista, com desconto de 10%",
      "50/50, ou seja, metade do pagamento no início e a outra na entrega do projeto",
      "Cartão de crédito em até 6x sem juros",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(20,20,20,0.85)] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-display text-xl font-bold">
            <span className="text-[#5dd62c]">adryel</span>
            <span className="text-[#f8f8f8]"> web</span>
          </Link>

          <div className="flex items-center gap-3">
            <a href={whatsappUrl} className="rounded-lg bg-[#5dd62c] px-5 py-2.5 text-sm font-semibold text-[#101010] transition-colors hover:bg-[#4ab325]">
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-2 md:items-stretch md:gap-12">
            <div className="space-y-6">
              <span className="badge-accent">✦ Agência Web</span>
              <h1 className="max-w-[11ch] font-display text-[2.35rem] font-bold leading-tight text-[#f8f8f8] sm:text-[2.75rem] md:max-w-[14ch] md:text-5xl lg:max-w-[15ch] lg:text-[3.5rem]">
                Sites que{" "}
                <span className="text-[#5dd62c] [text-shadow:0_0_40px_rgba(93,214,44,0.4)]">
                  Vendem
                </span>
                .<br className="hidden md:block" />
                Design que Converte.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-[rgba(248,248,248,0.65)]">
                Criamos landing pages, sites institucionais e sistemas web com alta performance e design que converte visitantes em clientes.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={whatsappUrl} className="flex items-center gap-2 rounded-lg bg-[#5dd62c] px-6 py-3 font-bold text-[#101010] transition-colors hover:bg-[#4ab325]">
                  Solicitar Orçamento
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
                <a href="#portfolio" className="rounded-lg border border-[rgba(255,255,255,0.15)] px-6 py-3 font-semibold text-[#f8f8f8] transition-colors hover:border-[#5dd62c] hover:text-[#5dd62c]">
                  Ver Portfólio
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-2">
                {["+ 50 projetos entregues", "100% de satisfação", "Entrega ágil"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[rgba(248,248,248,0.6)]">
                    <Check size={15} className="shrink-0 text-[#5dd62c]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full pt-6 md:pt-0">
              <div className="absolute inset-0 rounded-full bg-[#5dd62c] opacity-[0.06] blur-[90px]" />
              <div className="glass-card relative h-full min-h-[320px] overflow-hidden rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.5)] md:min-h-0">
                <Image
                  src="/IMGDuplicada.png"
                  alt="Exemplo de projeto desenvolvido pela Adryel Web"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.35)] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* INFINITE MARQUEE */}
        <div className="overflow-hidden border-y border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] py-5">
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

        {/* SERVICES BENTO GRID */}
        <section id="servicos" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 text-center">
            <span className="badge-accent">Nossos Serviços</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">
              Soluções Completas para sua Presença Digital
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Landing Pages – wide */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-[rgba(93,214,44,0.25)] md:col-span-2">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#5dd62c] opacity-[0.04] blur-[60px]" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(93,214,44,0.2)] bg-[rgba(93,214,44,0.1)]">
                <Rocket size={22} className="text-[#5dd62c]" />
              </div>
              <span className="mb-3 inline-block rounded-full border border-[rgba(93,214,44,0.2)] bg-[rgba(93,214,44,0.1)] px-2.5 py-1 text-xs text-[#5dd62c]">Mais Vendido</span>
              <h3 className="mb-3 font-display text-2xl font-bold text-[#f8f8f8]">Landing Pages</h3>
              <p className="leading-relaxed text-[rgba(248,248,248,0.6)]">
                Páginas de alta conversão para campanhas, lançamentos e captação de leads. Cada elemento é pensado para transformar visitantes em clientes.
              </p>
            </div>
            {/* Sites Institucionais */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-[rgba(93,214,44,0.25)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(93,214,44,0.2)] bg-[rgba(93,214,44,0.1)]">
                <Building2 size={22} className="text-[#5dd62c]" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-[#f8f8f8]">Sites Institucionais</h3>
              <p className="text-sm leading-relaxed text-[rgba(248,248,248,0.6)]">
                Presença digital profissional para posicionar sua marca e gerar novas oportunidades de negócio.
              </p>
            </div>
            {/* Sistemas Web */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-[rgba(93,214,44,0.25)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(93,214,44,0.2)] bg-[rgba(93,214,44,0.1)]">
                <Settings2 size={22} className="text-[#5dd62c]" />
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-[#f8f8f8]">Sistemas Web</h3>
              <p className="text-sm leading-relaxed text-[rgba(248,248,248,0.6)]">
                Plataformas personalizadas para automatizar processos e escalar sua operação digital.
              </p>
            </div>
            {/* SEO wide */}
            <div className="glass-card group relative overflow-hidden rounded-2xl p-8 transition-colors hover:border-[rgba(93,214,44,0.25)] md:col-span-2">
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#5dd62c] opacity-[0.03] blur-[60px]" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[rgba(93,214,44,0.2)] bg-[rgba(93,214,44,0.1)]">
                <TrendingUp size={22} className="text-[#5dd62c]" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-[#f8f8f8]">SEO & Alta Performance</h3>
              <p className="leading-relaxed text-[rgba(248,248,248,0.6)]">
                Estrutura técnica otimizada para aparecer nos primeiros resultados do Google. Score 100 no Google Lighthouse em todos os projetos entregues.
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="mx-auto max-w-6xl px-6">
          <StatsSection />
        </div>

        {/* PORTFOLIO */}
        <div className="mx-auto max-w-6xl px-6">
          <PortfolioSlider />
        </div>

        {/* TESTIMONIALS */}
        <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 text-center">
            <span className="badge-accent">Depoimentos</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card space-y-4 rounded-2xl p-6">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#5dd62c] text-[#5dd62c]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[rgba(248,248,248,0.75)]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(93,214,44,0.2)] bg-[rgba(93,214,44,0.15)] text-sm font-bold text-[#5dd62c]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#f8f8f8]">{t.name}</div>
                    <div className="text-xs text-[rgba(248,248,248,0.5)]">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-12 text-center">
            <span className="badge-accent">FAQ</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[#f8f8f8] md:text-4xl">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="glass-card group rounded-2xl p-6 open:border-[rgba(93,214,44,0.25)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-semibold text-[#f8f8f8] marker:content-none">
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-[#5dd62c] transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>

                <div className="mt-4 space-y-3 text-[rgba(248,248,248,0.68)]">
                  {faq.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {!!faq.items?.length && (
                    <ul className="space-y-2 pl-4">
                      {faq.items.map((item) => (
                        <li key={item} className="list-disc leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="mx-auto max-w-6xl px-6 pb-24">
          <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-[#5dd62c] opacity-[0.03] blur-[80px]" />
            <div className="relative">
              <span className="badge-accent">Comece Agora</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-[#f8f8f8] md:text-5xl">
                Pronto para transformar sua
                <br className="hidden md:block" />
                <span className="text-[#5dd62c]"> presença digital</span>?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[rgba(248,248,248,0.6)]">
                Vamos conversar sobre seu projeto. Análise gratuita e proposta personalizada em até 24 horas.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={whatsappUrl} className="flex items-center gap-2 rounded-xl bg-[#5dd62c] px-8 py-4 text-base font-bold text-[#101010] transition-colors hover:bg-[#4ab325]">
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(15,15,15,0.8)]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
          <Link href="/" className="font-display text-lg font-bold">
            <span className="text-[#5dd62c]">ADRYEL</span>
            <span className="text-[#f8f8f8]"> WEB</span>
          </Link>
          <p className="text-sm text-[rgba(248,248,248,0.4)]">
            © {new Date().getFullYear()} Adryel Web Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-[rgba(248,248,248,0.5)]">
            <a href="#servicos" className="transition-colors hover:text-[#5dd62c]">Serviços</a>
            <a href="#portfolio" className="transition-colors hover:text-[#5dd62c]">Portfólio</a>
            <a href={whatsappUrl} className="transition-colors hover:text-[#5dd62c]">Contato</a>
          </div>
        </div>
      </footer>
    </>
  );
}
