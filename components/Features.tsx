"use client";

import { Compass, Globe, ShieldCheck } from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { dictionary } from "@/lib/dictionary";

const ICONS = { ShieldCheck, Compass, Globe };

export default function Features() {
  const { lang } = useApp();
  const t = dictionary[lang].features;

  const features = [
    { icon: "ShieldCheck", title: t.f2title, desc: t.f2desc },
    { icon: "Compass", title: t.f3title, desc: t.f3desc },
    { icon: "Globe", title: t.f1title, desc: t.f1desc },
  ];

  return (
    <section id="decouvrir" className="section-pad bg-sand dark:bg-darkBg transition-colors duration-300">
      <div className="container-luxe">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-3 text-brand dark:text-gold">Pourquoi nous choisir</p>
          <h2 className="h-section text-charcoal dark:text-white">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((f, i) => {
            const Icon = ICONS[f.icon as keyof typeof ICONS];
            return (
              <article key={i} className="group relative rounded-2xl bg-ivory dark:bg-darkSurface p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-charcoal/5 dark:border-white/5">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand/5 dark:bg-brand/20 group-hover:scale-110 transition-transform duration-500">
                  <Icon className="h-8 w-8 text-brand dark:text-gold" />
                </div>
                <h3 className="font-fraunces text-2xl text-charcoal dark:text-white mb-3">{f.title}</h3>
                <p className="font-inter text-stone dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}