"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY;
      setScrolled(top > 12);
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setProgress(h > 0 ? (top / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border-b border-transparent ${
        scrolled
          ? "bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl border-charcoal/5"
          : "bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm border-white/10"
      }`}
    >
      <div
        className="h-[2px] bg-gradient-to-r from-[#D4A574] via-[#C04828] to-[#5c1c0d] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <nav
        className="container-luxe flex h-20 items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 md:h-14 md:w-14 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/images/logo_tsingy_rouge.jpg"
              alt="Logo Tsingy Rouge Madagascar"
              fill
              className="object-contain rounded-md"
            />
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className={`font-fraunces text-xl font-bold tracking-tight transition-colors duration-300 md:text-2xl ${scrolled ? "text-[#5c1c0d]" : "text-white"}`}>
              TSINGY ROUGE
            </span>
            <span className={`mt-1 font-inter text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${scrolled ? "text-stone" : "text-white/70"}`}>
              Madagascar
            </span>
          </div>
        </a>

        {/* Nav Center */}
        <ul className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative font-inter text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled 
                    ? "text-charcoal/80 hover:text-[#5c1c0d] after:bg-[#5c1c0d]" 
                    : "text-white/90 hover:text-white after:bg-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href="#contact-whatsapp"
            className={`btn-primary hidden sm:inline-flex shadow-lg transition-all duration-300 ${
              scrolled 
                ? "bg-[#5c1c0d] hover:bg-[#3a1006] text-white" 
                : "bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Commander
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${scrolled ? "text-charcoal" : "text-white"}`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className={`border-t backdrop-blur-xl lg:hidden transition-colors duration-300 ${scrolled ? "border-charcoal/10 bg-ivory/95" : "border-white/10 bg-black/90"}`}>
          <ul className="container-luxe flex flex-col py-6">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block py-3 font-inter text-lg font-medium ${scrolled ? "text-charcoal" : "text-white"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-white/10">
              <a
                href="#contact-whatsapp"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center bg-[#5c1c0d] text-white py-3"
              >
                <MessageCircle className="h-4 w-4" />
                Commander
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}