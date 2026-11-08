import { BadgeCheck, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="apropos" className="section-pad bg-sand">
      <div className="container-luxe">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="eyebrow mb-3 text-terracotta">Témoignages</p>
          <h2 className="h-section text-charcoal">
            Ils ont vécu l'expérience Tsingy Rouge.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="card-luxe flex h-full flex-col p-7 transition-all duration-500 ease-luxe hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <blockquote className="flex-1">
                <p className="font-fraunces text-lg italic leading-relaxed text-charcoal/90">
                  « {t.quote} »
                </p>
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-charcoal/10 pt-5">
                <img
                  src={t.avatar}
                  alt={`Portrait de ${t.name}`}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-inter text-sm font-semibold text-charcoal">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-stone">
                    {t.flag} {t.country}
                  </p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 font-inter text-[10px] font-medium uppercase tracking-wider text-terracotta">
                  <BadgeCheck
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  />
                  Vérifié
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}