"use client";

import { useState } from "react";
import { ArrowRight, Check, Star } from "lucide-react";
import { PACKAGES } from "@/lib/data";

const FILTERS = ["Tous", "T-shirts", "Lambas", "Polos"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProductGrid() {
  const [filter, setFilter] = useState<Filter>("Tous");

  const visible = PACKAGES.filter(
    (p) => filter === "Tous" || p.category === filter
  );

  return (
    <section id="collection" className="section-pad bg-ivory">
      <div className="container-luxe">
        {/* En-tête */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 text-[#5c1c0d]">La Collection</p>
            <h2 className="h-section text-charcoal">
              Portez l'identité de Madagascar.
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-stone">
              Des pièces uniques, alliant confort moderne et héritage culturel. 
              Trouvez le vêtement qui vous ressemble.
            </p>
          </div>

          {/* Toggle pills */}
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filtrer les produits"
          >
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`pill border text-sm ${
                  filter === f
                    ? "border-[#5c1c0d] bg-[#5c1c0d] text-ivory shadow-cta"
                    : "border-charcoal/15 bg-transparent text-charcoal/70 hover:border-charcoal/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-start md:gap-8">
          {visible.map((p) => (
            <article
              key={p.id}
              className={`group card-luxe relative flex flex-col overflow-hidden transition-all duration-500 ease-luxe hover:-translate-y-1.5 hover:shadow-soft-xl ${
                p.highlighted
                  ? "md:scale-105 ring-2 ring-[#5c1c0d] shadow-soft-xl"
                  : ""
              }`}
            >
              {/* Badge */}
              {p.badge && (
                <span
                  className={`absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-inter text-xs font-semibold ${
                    p.highlighted
                      ? "bg-[#D4A574] text-charcoal shadow-soft"
                      : "bg-ivory/95 text-charcoal shadow-soft"
                  }`}
                >
                  {p.highlighted && (
                    <Star className="h-3 w-3 fill-charcoal text-charcoal" />
                  )}
                  {p.badge}
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                <img
                  src={p.image}
                  alt={`Modèle ${p.name}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Contenu */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 fill-[#D4A574] text-[#D4A574]" />
                  <span className="font-inter text-sm font-medium text-charcoal">
                    {p.rating}
                  </span>
                  <span className="font-inter text-xs text-stone">
                    ({p.reviews} avis)
                  </span>
                </div>

                <h3 className="font-fraunces text-h3 text-charcoal">
                  {p.name}
                </h3>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-fraunces text-2xl font-bold text-[#5c1c0d]">
                    {p.price}
                  </span>
                  <span className="font-inter text-xs text-stone">
                    {p.priceNote}
                  </span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 font-inter text-sm text-charcoal/80"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5c1c0d]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#boutiques"
                  className={`mt-6 justify-center ${
                    p.highlighted ? "btn-primary bg-[#5c1c0d] hover:bg-[#3a1006]" : "btn-ghost"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}