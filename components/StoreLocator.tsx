"use client";

import { useRef, useState, useEffect } from "react";
import { MapPin, Phone, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { STORES } from "@/lib/data";

export default function StoreLocator() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fonction pour scroller vers une carte spécifique
  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        container.scrollTo({
          left: card.offsetLeft - container.offsetLeft - 24,
          behavior: "smooth",
        });
        setActiveIndex(index);
      }
    }
  };

  const scrollByAmount = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // LOGIQUE D'AUTO-SCROLL
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      // Si on arrive à la fin, on revient au début
      if (nextIndex >= STORES.length) {
        nextIndex = 0;
      }
      scrollTo(nextIndex);
    }, 3000); // Défile toutes les 3 secondes

    return () => clearInterval(interval);
  }, [activeIndex, isPaused]);

  // Mettre à jour l'index lors d'un scroll manuel (molette/toucher)
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / (cardWidth * 0.8));
      
      if (newIndex >= 0 && newIndex < STORES.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  return (
    <section id="boutiques" className="section-pad bg-[#F4EDE2] overflow-hidden">
      <div className="container-luxe">
        
        {/* En-tête de section avec boutons de navigation */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 text-[#5c1c0d]">Réseau Officiel</p>
            <h2 className="h-section text-charcoal">
              Nos 16 points de vente.
            </h2>
            <p className="mt-4 font-inter text-base leading-relaxed text-stone">
              Trouvez la boutique Tsingy Rouge la plus proche de chez vous. 
              Le carrousel défile automatiquement pour vous montrer toutes nos villes.
            </p>
          </div>
          
          {/* Boutons de défilement (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => scrollByAmount("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 bg-transparent text-charcoal transition-all hover:bg-charcoal hover:text-white focus:outline-none focus:ring-2 focus:ring-[#5c1c0d]"
              aria-label="Boutique précédente"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scrollByAmount("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 bg-transparent text-charcoal transition-all hover:bg-charcoal hover:text-white focus:outline-none focus:ring-2 focus:ring-[#5c1c0d]"
              aria-label="Boutique suivante"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carrousel avec Scroll Snap et Auto-scroll */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {STORES.map((store, idx) => (
            <a 
              key={idx} 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.query)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-shrink-0 w-[85vw] sm:w-[340px] lg:w-[380px] snap-start overflow-hidden rounded-[24px] bg-[#1A1A1A] shadow-xl transition-all duration-500 ease-luxe hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="absolute inset-0">
                <img 
                  src={store.image} 
                  alt={`Boutique ${store.city}`} 
                  className="h-full w-full object-cover opacity-50 transition-transform duration-700 ease-luxe group-hover:scale-110 group-hover:opacity-30"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/70 to-transparent opacity-95" />
              </div>

              <div className="relative p-7 flex flex-col h-full justify-end min-h-[320px]">
                <div className="absolute top-6 right-6">
                   <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white transition-colors group-hover:bg-[#D4A574] group-hover:text-[#3a1006]">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                
                <h3 className="font-fraunces text-[28px] leading-tight font-semibold text-white mb-4 group-hover:text-[#D4A574] transition-colors">
                  {store.city}
                </h3>
                
                <div className="space-y-3 mt-2 pt-4 border-t border-white/20">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 shrink-0 text-[#D4A574] mt-0.5" />
                    <p className="font-inter text-[15px] font-medium text-white/90 leading-snug">
                      {store.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-[#D4A574]" />
                    <p className="font-inter text-[15px] font-semibold text-white">
                      {store.phone}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination / Indicateurs */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {STORES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ease-luxe ${
                activeIndex === idx 
                  ? "w-8 bg-[#5c1c0d]" 
                  : "w-2.5 bg-charcoal/20 hover:bg-charcoal/40"
              }`}
              aria-label={`Aller à la boutique ${idx + 1}`}
              aria-current={activeIndex === idx}
            />
          ))}
        </div>

      </div>
    </section>
  );
}