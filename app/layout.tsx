import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matheus-franco-psicanalise.vercel.app"),
  title: {
    default: "Matheus Franco | Psicanálise Clínica",
    template: "%s | Matheus Franco",
  },
  description:
    "Psicanálise clínica e atendimento online: um espaço de escuta para compreender repetições, conflitos e aquilo que insiste em retornar.",
  applicationName: "Matheus Franco — Psicanálise Clínica",
  keywords: [
    "psicanálise clínica",
    "psicanalista",
    "atendimento psicanalítico online",
    "escuta clínica",
    "Matheus Franco",
  ],
  authors: [{ name: "Matheus Franco" }],
  creator: "Matheus Franco",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Matheus Franco — Psicanálise Clínica",
    title: "Matheus Franco | Psicanálise Clínica",
    description:
      "O que não é dito retorna. Um espaço de escuta para compreender repetições, conflitos e a própria história.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matheus Franco | Psicanálise Clínica",
    description:
      "O que não é dito retorna. Um espaço de escuta para compreender repetições, conflitos e a própria história.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b0b",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
