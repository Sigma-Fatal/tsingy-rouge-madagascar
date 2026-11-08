"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad bg-ivory">
      <div className="container-luxe">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-3 text-terracotta">Questions fréquentes</p>
            <h2 className="h-section text-charcoal">
              Tout ce qu'il faut savoir.
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-stone">
              Une question non listée ? Écrivez-nous sur WhatsApp, nous
              répondons 24/7.
            </p>
          </div>

          <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-terracotta"
                  >
                    <span className="font-fraunces text-lg font-medium text-charcoal">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-stone transition-transform duration-300 ease-luxe ${
                        isOpen ? "rotate-180 text-terracotta" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    className={`grid overflow-hidden transition-all duration-500 ease-luxe ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 pb-5 pr-10 font-inter text-base leading-relaxed text-stone">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}