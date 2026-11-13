"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X, MessageCircle, Moon, Sun, Globe } from "lucide-react";
import { useApp } from "@/lib/AppContext";
import { dictionary } from "@/lib/dictionary";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, theme, toggleTheme } = useApp();
  const t = dictionary[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.brand, href: "#decouvrir" },
    { label: t.nav.collection, href: "#collection" },
    { label: t.nav.stores, href: "#boutiques" },
    { label: t.nav.cars, href: "#location" },
    { label: t.nav.events, href: "#evenements" }, // Nouveau lien
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-ivory/90 dark:bg-darkBg/90 shadow-soft backdrop-blur-xl" : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm"}`}>
      <nav className="container-luxe flex h-20 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 md:h-14 md:w-14">
            <Image src="/images/logo_tsingy_rouge.jpg" alt="Logo" fill className="object-contain rounded-md" />
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className={`font-fraunces text-xl font-bold md:text-2xl ${scrolled ? "text-brand dark:text-white" : "text-white"}`}>TSINGY ROUGE</span>
            <span className={`mt-1 font-inter text-[10px] uppercase tracking-widest ${scrolled ? "text-stone dark:text-gray-400" : "text-white/70"}`}>Madagascar</span>
          </div>
        </a>

        {/* Nav Center */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={`text-sm font-medium transition-colors hover:text-brand ${scrolled ? "text-charcoal dark:text-gray-200" : "text-white"}`}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions (Langue, Thème, CTA) */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Sélecteur de Langue */}
          <div className={`hidden sm:flex items-center gap-1 text-sm font-medium ${scrolled ? "text-charcoal dark:text-white" : "text-white"}`}>
            <Globe className="h-4 w-4" />
            {["FR", "EN", "MG"].map((l) => (
              <button key={l} onClick={() => setLang(l as any)} className={`px-1 hover:text-brand ${lang === l ? "text-brand font-bold" : "opacity-70"}`}>
                {l}
              </button>
            ))}
          </div>

          {/* Bouton Thème */}
          <button onClick={toggleTheme} className={`p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 ${scrolled ? "text-charcoal dark:text-white" : "text-white"}`}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          {/* CTA WhatsApp */}
          <a href="#contact-whatsapp" className="btn-primary hidden sm:inline-flex bg-brand hover:bg-brandDeep text-white">
            <MessageCircle className="h-4 w-4" /> {t.nav.order}
          </a>

          {/* Mobile Menu Button */}
          <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 ${scrolled ? "text-charcoal dark:text-white" : "text-white"}`}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="lg:hidden bg-ivory dark:bg-darkSurface border-t border-charcoal/10 dark:border-white/10">
          <ul className="container-luxe flex flex-col py-4">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-charcoal dark:text-white">{l.label}</a></li>
            ))}
            {/* Langues Mobile */}
            <li className="flex gap-4 py-3 border-t border-charcoal/10 dark:border-white/10">
              {["FR", "EN", "MG"].map((l) => (
                <button key={l} onClick={() => setLang(l as any)} className={`px-2 py-1 rounded ${lang === l ? "bg-brand text-white" : "bg-black/5 dark:bg-white/10 dark:text-white"}`}>{l}</button>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}