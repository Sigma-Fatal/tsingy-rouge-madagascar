import { Car, ArrowRight, Check } from "lucide-react";
import { CARS } from "@/lib/data";

export default function CarRental() {
  return (
    <section id="location" className="section-pad bg-[#1A1A1A] text-white overflow-hidden relative">
      {/* Décoration avec couverture_pub.jpg floutée */}
      <div className="absolute inset-0 opacity-10">
        <img src="/images/couverture_pub.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/80" />

      <div className="container-luxe relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3 text-[#D4A574]">Mobilité</p>
            <h2 className="font-fraunces text-4xl md:text-5xl leading-tight">
              Explorez l'île en toute <em className="italic text-[#D4A574]">liberté.</em>
            </h2>
            <p className="mt-4 font-inter text-white/60 text-lg">
              Que ce soit pour un road trip ou un transfert, notre flotte de véhicules est à votre disposition.
            </p>
          </div>
          <a href="#contact-whatsapp" className="hidden md:inline-flex btn-primary bg-[#D4A574] text-[#1A1A1A] hover:bg-white whitespace-nowrap">
            Réserver un véhicule
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <div key={car.id} className="group rounded-2xl bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={car.image} alt={car.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {car.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-fraunces text-2xl font-semibold mb-1">{car.name}</h3>
                <p className="font-inter text-[#D4A574] text-sm font-medium mb-5">{car.price}</p>
                
                <ul className="space-y-3 mb-8">
                  {car.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="h-4 w-4 text-[#D4A574]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a href="#contact-whatsapp" className="flex items-center justify-center w-full py-3 rounded-xl border border-white/20 text-sm font-semibold hover:bg-white hover:text-[#1A1A1A] transition-colors">
                  Demander un devis
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}