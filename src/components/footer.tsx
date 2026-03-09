import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-5xl px-4 py-8 space-y-6 text-sm text-muted-foreground">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="space-y-2">
            <p className="font-medium text-foreground">David Rodrigues</p>
            <p className="leading-relaxed">
              Portfólio com projetos em QA, automação, dados e desenvolvimento.
            </p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-foreground">Navegação</p>
            <div className="flex flex-col gap-1">
              <Link href="/" className="hover:text-foreground transition">
                Home
              </Link>
              <Link href="/projects" className="hover:text-foreground transition">
                Projetos
              </Link>
              <Link href="/about" className="hover:text-foreground transition">
                Sobre
              </Link>
              <Link href="/contact" className="hover:text-foreground transition">
                Contato
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-foreground">Links</p>
            <div className="flex flex-col gap-1">
              <a
                href="https://github.com/Dev02553"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/david-silva-rodrigues-500190284/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:David_2553@hotmail.com"
                className="hover:text-foreground transition break-all"
              >
                David_2553@hotmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} David Rodrigues</p>
          <p>Next.js · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
}