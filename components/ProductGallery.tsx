"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/AppContext";
import { dictionary } from "@/lib/dictionary";

// CORRECTION DU NOM : t-shirt_enfant-2_6_v2.jpeg
const GALLERY_IMAGES = [
  { src: "/images/t-shirt_enfant-2_6.jpeg", cat: "Enfants" },
  { src: "/images/t-shirt_enfant-2_6_v1.jpeg", cat: "Enfants" },
  { src: "/images/t-shirt_enfant-2_6_v2.jpeg", cat: "Enfants" },
  { src: "/images/t-shirt_enfant-6_12.jpg", cat: "Enfants" },
  { src: "/images/lamba_adulte.jpg", cat: "Lambas" },
  { src: "/images/lamba_adulte_1.jpg", cat: "Lambas" },
  { src: "/images/lamba_adulte_2.jpg", cat: "Lambas" },
  { src: "/images/lamba_adulte_3.jpg", cat: "Lambas" },
  { src: "/images/lamba_adulte_5.jpg", cat: "Lambas" },
];

const ITEMS_PER_PAGE = 4;

export default function ProductGallery() {
  const { lang } = useApp();
  const t = dictionary[lang].gallery;
  const [currentPage, setCurrentPage] = useState(1);
  const [direction, setDirection] = useState(0); // Pour l'animation (1 = droite, -1 = gauche)

  const totalPages = Math.ceil(GALLERY_IMAGES.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = GALLERY_IMAGES.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentPage((prev) => {
      if (newDirection === 1) return Math.min(totalPages, prev + 1);
      if (newDirection === -1) return Math.max(1, prev - 1);
      return prev;
    });
  };

  // Variantes d'animation pour le défilement horizontal
  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 1000 : -1000, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }),
  };

  return (
    <section className="section-pad bg-sand dark:bg-darkSurface transition-colors duration-300 overflow-hidden">
      <div className="container-luxe">
        
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="h-section text-charcoal dark:text-white">{t.title}</h2>
            <p className="mt-2 font-inter text-stone dark:text-gray-400">{t.desc}</p>
          </div>
          
          {/* Contrôles de Pagination */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => paginate(-1)}
              disabled={currentPage === 1}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-ivory dark:bg-darkBg border border-charcoal/10 dark:border-white/10 disabled:opacity-30 hover:bg-brand hover:text-white transition-colors"
              aria-label={t.prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="font-inter text-sm font-bold text-charcoal dark:text-white">
              {currentPage} / {totalPages}
            </span>
            <button 
              onClick={() => paginate(1)}
              disabled={currentPage === totalPages}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-ivory dark:bg-darkBg border border-charcoal/10 dark:border-white/10 disabled:opacity-30 hover:bg-brand hover:text-white transition-colors"
              aria-label={t.next}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carrousel Animé */}
        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 absolute inset-0"
            >
              {currentImages.map((img, idx) => (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-ivory dark:bg-darkBg shadow-soft">
                  <img 
                    src={img.src} 
                    alt={`Galerie ${idx}`} 
                    className="h-full w-full object-cover transition-transform duration-700 ease-luxe group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                    {img.cat}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicateurs de pagination (Points) */}
        <div className="mt-8 flex items-center justify-center gap-2 relative z-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx + 1 > currentPage ? 1 : -1);
                setCurrentPage(idx + 1);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentPage === idx + 1 ? "w-8 bg-brand" : "w-2.5 bg-charcoal/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}