import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteName = "Adryel Web Studio";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://adryelweb.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Adryel Web Studio | Sites Profissionais que Vendem",
    template: `%s | ${siteName}`,
  },
  description:
    "Criacao de landing pages, sites institucionais e sistemas web com foco em performance, SEO e conversao.",
  keywords: [
    "criacao de sites",
    "landing page",
    "site institucional",
    "desenvolvimento web",
    "seo tecnico",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName,
    title: "Adryel Web Studio | Sites Profissionais que Vendem",
    description:
      "Projetos web com design sob medida, carregamento rapido e estrutura otimizada para gerar mais oportunidades.",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Adryel Web Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adryel Web Studio | Sites Profissionais que Vendem",
    description:
      "Landing pages e sites institucionais com foco em performance, SEO e resultado comercial.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
