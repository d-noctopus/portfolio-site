"use client";

import Image from "next/image";

const CONTACT = {
  name: "David",
  email: "David_2553@hotmail.com",
  github: "https://github.com/Dev02553",
  linkedin: "https://www.linkedin.com/in/david-silva-rodrigues-500190284/",
};

function CopyButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(text)}
      className="rounded-md border px-4 py-2 hover:bg-muted transition"
      title={`Copiar: ${text}`}
    >
      {label}
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="rounded-2xl border overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Texto */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Contato
              </h1>
              <p className="text-muted-foreground max-w-prose leading-relaxed">
                Se você quiser conversar sobre <b>QA</b>, <b>automação</b>,{" "}
                <b>dados/ETL</b>, <b>backend</b> ou <b>frontend</b>, me chama.
                Também topo colaborações e projetos.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-md border px-4 py-2 hover:bg-muted transition"
                href={`mailto:${CONTACT.email}?subject=Contato%20-%20Portf%C3%B3lio`}
              >
                Enviar e-mail
              </a>

              <CopyButton text={CONTACT.email} label="Copiar e-mail" />

              <a
                className="rounded-md border px-4 py-2 hover:bg-muted transition"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                className="rounded-md border px-4 py-2 hover:bg-muted transition"
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>

            {/* Mini-cards */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl border p-4">
                <div className="text-xs text-muted-foreground">E-mail</div>
                <div className="text-sm font-medium break-all">
                  {CONTACT.email}
                </div>
              </div>

              <div className="rounded-xl border p-4">
                <div className="text-xs text-muted-foreground">
                  Disponível para
                </div>
                <div className="text-sm font-medium">
                  Estágio • Trainee • Jr • Freela
                </div>
              </div>
            </div>

            {/* EN */}
            <div className="rounded-xl border p-4">
              <div className="text-xs text-muted-foreground mb-1">EN</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you&apos;d like to talk about <b>QA</b>, <b>automation</b>,{" "}
                <b>data/ETL</b>, <b>backend</b> or <b>frontend</b>, feel free to
                reach out. I&apos;m open to internships, junior roles, freelance
                and collaborations.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative min-h-[260px] lg:min-h-full bg-muted overflow-hidden">
            <Image
              src="/contact-hero.jpg"
              alt="Banner de contato"
              fill
              priority
              className="object-cover opacity-55 brightness-110 contrast-125 saturate-150"
            />

            {/* Overlay: mantém leitura, mas deixa a imagem aparecer bem mais */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/35 to-transparent" />

            {/* Leve glow */}
            <div className="absolute -inset-24 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.20),transparent_55%)]" />

            <div className="absolute bottom-4 left-4 right-4 rounded-xl border bg-background/70 backdrop-blur p-4">
              <div className="text-sm font-medium">Resposta</div>
              <div className="text-sm text-muted-foreground">
                Geralmente em até 24–48h
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como posso ajudar */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Como posso ajudar</h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "QA / Automação",
              desc: "Selenium/JUnit, evidências, organização de suíte e redução de flakiness.",
            },
            {
              title: "Dados / ETL",
              desc: "Pipelines, validação, consistência e relatórios auditáveis (Excel/SQL).",
            },
            {
              title: "Dev (apoio)",
              desc: "APIs, dashboards, organização de código e boas práticas.",
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border p-5">
              <div className="font-medium">{c.title}</div>
              <p className="text-sm text-muted-foreground mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Links rápidos */}
      <section className="rounded-xl border p-5 space-y-3">
        <h2 className="text-lg font-semibold">Links rápidos</h2>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border px-4 py-2 hover:bg-muted transition"
            href={`mailto:${CONTACT.email}`}
          >
            E-mail
          </a>
        </div>
      </section>
    </div>
  );
}