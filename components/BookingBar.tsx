"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { STORES } from "@/lib/data";

export default function BookingBar() {
  const [city, setCity] = useState("");

  return (
    <div className="w-full">
      <div className="rounded-[20px] border border-white/60 bg-white/95 p-3 shadow-soft-xl backdrop-blur-xl md:p-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.5fr_auto] md:items-stretch">
          
          {/* Select Ville */}
          <label className="group flex items-center gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-sand/60">
            <MapPin
              className="h-5 w-5 shrink-0 text-[#5c1c0d]"
              aria-hidden="true"
            />
            <span className="flex w-full flex-col">
              <span className="eyebrow text-[10px] text-stone">Trouver une boutique</span>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full cursor-pointer appearance-none bg-transparent font-inter text-sm font-medium text-charcoal outline-none"
              >
                <option value="">Sélectionnez votre ville...</option>
                {Array.from(new Set(STORES.map(s => s.city))).map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </span>
          </label>

          {/* CTA */}
          <a
            href="#boutiques"
            className="btn-primary justify-center whitespace-nowrap bg-[#5c1c0d] hover:bg-[#3a1006] md:px-8"
          >
            Voir les points de vente
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Réassurance */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center font-inter text-xs text-ivory/90 drop-shadow-md md:justify-start">
        <span>Qualité premium</span>
        <span className="hidden md:inline" aria-hidden="true">·</span>
        <span>Paiement sécurisé</span>
        <span className="hidden md:inline" aria-hidden="true">·</span>
        <span>Service client réactif</span>
      </div>
    </div>
  );
}