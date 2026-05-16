"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SmartNavbarProps = {
  whatsappUrl: string;
};

type NavTheme = "dark" | "light";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Pra quem é", href: "#pra-quem-e" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Cases", href: "#projetos" },
  { label: "Faq", href: "#faq" },
];

export default function SmartNavbar({ whatsappUrl }: SmartNavbarProps) {
  const [theme, setTheme] = useState<NavTheme>("dark");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav-theme]"),
    );

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) {
          return;
        }

        const nextTheme =
          visibleEntries[0].target.getAttribute("data-nav-theme") === "light"
            ? "light"
            : "dark";

        setTheme(nextTheme);
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: [0.1, 0.3, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isLight = theme === "light";

  return (
    <header
      className={`animate-navbar-enter fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        isLight
          ? "border-black/10 bg-[rgba(245,243,239,0.9)]"
          : "border-white/10 bg-[rgba(10,10,10,0.7)]"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link href="/" className="flex items-center">
          <span
            className={`font-display text-base font-bold md:text-xl ${
              isLight ? "text-gray-900" : "text-white"
            }`}
          >
            adryel web
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isLight ? "text-gray-700 hover:text-gray-950" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={whatsappUrl}
          className="rounded-lg bg-[#042C53] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#053a6e] md:px-5 md:py-2.5 md:text-sm"
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
