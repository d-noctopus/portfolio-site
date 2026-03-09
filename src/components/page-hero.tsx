import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  imageSrc?: string; // ex: "/contact-hero.jpg"
  badge?: string;
  rightSlot?: React.ReactNode; // cards/CTA em cima da imagem
  children?: React.ReactNode; // conteúdo do lado esquerdo (botões etc)
};

export default function PageHero({
  title,
  subtitle,
  imageSrc = "/contact-hero.jpg",
  badge,
  rightSlot,
  children,
}: PageHeroProps) {
  return (
    <section className="rounded-2xl border overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Texto */}
        <div className="p-6 sm:p-8 space-y-5">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
            {badge ? (
              <p className="text-xs inline-flex w-fit rounded-full border px-3 py-1 text-muted-foreground">
                {badge}
              </p>
            ) : null}
            {subtitle ? (
              <p className="text-muted-foreground max-w-prose leading-relaxed">{subtitle}</p>
            ) : null}
          </div>

          {children ? <div className="space-y-4">{children}</div> : null}
        </div>

        {/* Imagem */}
        <div className="relative min-h-[260px] lg:min-h-full bg-muted overflow-hidden">
          <Image
            src={imageSrc}
            alt="Hero"
            fill
            priority
            className="object-cover opacity-80 brightness-95 contrast-110 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/25 to-transparent" />
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.20),transparent_55%)]" />

          {rightSlot ? (
            <div className="absolute bottom-4 left-4 right-4">{rightSlot}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}