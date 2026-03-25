import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site-nine-tau-41.vercel.app"),
  title: "David Rodrigues · Portfólio",
  description:
    "Projetos em QA, automação, dados e desenvolvimento (Java, Python, Next.js).",
  openGraph: {
    title: "David Rodrigues · Portfólio",
    description:
      "Projetos em QA, automação, dados e desenvolvimento (Java, Python, Next.js).",
    siteName: "Portfólio · David Rodrigues",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "David Rodrigues · Portfólio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Rodrigues · Portfólio",
    description:
      "Portfólio de David Rodrigues com projetos em QA, automação, dados e desenvolvimento, incluindo case studies, instruções de execução, métricas e projetos em Java, Python, Next.js e TypeScript.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-background text-foreground">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/contact-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}