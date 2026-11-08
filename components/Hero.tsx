import { Star } from "lucide-react";
import BookingBar from "./BookingBar";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#1A1A1A]">
      
      {/* Image du VRAI site Tsingy Rouge */}
      <div className="absolute inset-0">
        <Image
          src="/images/tsingy_rouge.jpg"
          alt="Paysage du Tsingy Rouge Madagascar"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Dégradé chic pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#5c1c0d]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      <div className="container-luxe relative flex min-h-[90vh] flex-col justify-center py-32">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow mb-6 flex items-center gap-3 text-[#D4A574]">
            <span className="h-px w-8 bg-[#D4A574]" />
            Le seul et unique au monde
          </p>

          <h1 className="font-fraunces text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-[80px]">
            L'élégance <em className="text-[#D4A574] italic font-light">sauvage</em> de notre île.
          </h1>

          <p className="mt-8 max-w-xl font-inter text-lg leading-relaxed text-white/80 md:text-xl font-light">
            Découvrez la collection exclusive Tsingy Rouge. Des vêtements et lambas d'exception, inspirés par la beauté brute et éphémère de notre terre.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a href="#collection" className="pill bg-[#D4A574] text-[#3a1006] hover:bg-white hover:text-[#3a1006] px-8 py-4 text-base font-semibold shadow-xl transition-all duration-300 hover:-translate-y-1">
              Découvrir la collection
            </a>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-[#1A1A1A] overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&q=80&random=${i}`} className="h-full w-full object-cover" alt="" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-[#D4A574]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="font-inter text-xs text-white/70 mt-1">+2 000 clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <BookingBar />
        </div>
      </div>
    </section>
  );
}