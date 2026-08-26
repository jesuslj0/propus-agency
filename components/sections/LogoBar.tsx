import { InfiniteSlider } from "@/components/ui/infinite-slider";

// Iconos auto-hospedados en public/img/stack. Antes se cargaban desde el
// servicio de favicons de Google, lo que comunicaba la IP de cada visitante a
// un tercero sin necesidad. No volver a enlazarlos desde un dominio externo.
const stack = [
  { name: "N8N",          icon: "/img/stack/n8n.png" },
  { name: "Make",         icon: "/img/stack/make.jpg" },
  { name: "Python",       icon: "/img/stack/python.png" },
  { name: "Django",       icon: "/img/stack/django.png" },
  { name: "PostgreSQL",   icon: "/img/stack/postgresql.png" },
  { name: "TypeScript",   icon: "/img/stack/typescript.png" },
  { name: "Next.js",      icon: "/img/stack/nextjs.png" },
  { name: "Astro",        icon: "/img/stack/astro.png" },
  { name: "Coolify",      icon: "/img/stack/coolify.png" },
  { name: "DigitalOcean", icon: "/img/stack/digitalocean.png" },
  { name: "Tailwind",     icon: "/img/stack/tailwind.png" },
  { name: "Shadcn",       icon: "/img/stack/shadcn.png" },
];

const allItems = [...stack, ...stack];

export default function LogoBar() {

  return (
    <section id="logo-bar" className="py-12 border-y border-border/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <p className="text-center text-sm text-muted-foreground tracking-wide uppercase">
          Nuestro stack tecnológico
        </p>
      </div>

      {/* Máscara de fade en los bordes */}
      <div className="mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)">
        <InfiniteSlider gap={40} duration={40} durationOnHover={90} reverse={false}>
          {allItems.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2.5 rounded-full border border-border/60 bg-muted/40 px-5 py-2.5 whitespace-nowrap select-none transition-transform duration-300 ease-out hover:scale-130 cursor-default"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tech.icon}
                alt=""
                width={16}
                height={16}
                className="rounded-[3px] shrink-0"
              />
              <span className="text-sm font-semibold text-foreground/80">
                {tech.name}
              </span>
            </div>
          ))}
        </InfiniteSlider>
      </div>
    </section>
  );
}
