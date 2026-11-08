import { Compass, Globe, ShieldCheck } from "lucide-react";
import { FEATURES } from "@/lib/data";

const ICONS = {
  ShieldCheck,
  Compass,
  Globe,
} as const;

export default function Features() {
  return (
    <section id="decouvrir" className="section-pad bg-sand">
      <div className="container-luxe">
        <div className="mb-14 max-w-2xl md:mb-20">
          <p className="eyebrow mb-3 text-terracotta">Pourquoi nous choisir</p>
          <h2 className="h-section text-charcoal">
            Une expérience pensée pour les voyageurs exigeants.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS];
            return (
              <article
                key={f.title}
                className="group rounded-card p-2 transition-all duration-500 ease-luxe"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta/10 transition-transform duration-500 ease-luxe group-hover:scale-110">
                  <Icon
                    className="h-6 w-6 text-terracotta"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="relative inline-block font-fraunces text-h3 text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-terracotta after:transition-all after:duration-500 after:ease-luxe group-hover:after:w-full">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-sm font-inter text-base leading-relaxed text-stone">
                  {f.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}