import { ArrowUpRight, Tag } from "lucide-react";

export default function StatusBanner() {
  return (
    <section id="pistes" className="bg-[#5c1c0d]">
      <div className="container-luxe flex flex-col items-start justify-between gap-4 py-5 md:flex-row md:items-center md:py-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
            <Tag className="h-4 w-4 text-white" />
          </span>
          <p className="font-inter text-sm text-ivory md:text-base">
            <span className="font-semibold">Offre Spéciale :</span>{" "}
            Prix de gros disponibles pour les revendeurs.
          </p>
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 font-inter text-sm font-medium text-[#D4A574] underline-offset-4 hover:underline"
        >
          Nous contacter
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}