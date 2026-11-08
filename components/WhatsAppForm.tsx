"use client";

import { useState } from "react";
import { Send, User, MessageSquare, MapPin } from "lucide-react";
import { STORES } from "@/lib/data";

export default function WhatsAppForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Numéro WhatsApp officiel de Tsingy Rouge (ex: 261381180624)
    const phoneNumber = "261381180624"; 
    
    const text = `Bonjour Tsingy Rouge Madagascar! 👋%0A%0AJe m'appelle *${name}*.%0AJe vous contacte depuis le site web.%0A%0A📍 Ville : ${city}%0A💬 Message : ${message}%0A%0AMerci de me recontacter.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact-whatsapp" className="relative py-24 overflow-hidden bg-[#1A1A1A]">
      {/* Dégradé de fond subtil */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2a120c] to-[#1A1A1A]" />
      <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1600&q=80')] bg-cover bg-center mix-blend-overlay" />
      
      <div className="container-luxe relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Textos de gauche */}
          <div className="max-w-lg">
            <p className="eyebrow mb-4 text-[#D4A574]">Contact Direct</p>
            <h2 className="font-fraunces text-4xl md:text-5xl text-white leading-tight">
              Échangeons sur votre <br/>
              <em className="text-[#D4A574] italic font-light">prochaine pièce.</em>
            </h2>
            <p className="mt-6 font-inter text-white/60 text-lg leading-relaxed">
              Une question sur une taille, une livraison ou une commande en gros ? 
              Laissez-nous un message. Nous vous répondons sur WhatsApp dans les plus brefs délais.
            </p>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <p className="font-inter text-sm text-white/50 uppercase tracking-wider font-semibold">WhatsApp Business</p>
                <p className="font-inter text-white font-medium">038 11 806 24</p>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[24px] bg-gradient-to-r from-[#D4A574] to-[#C04828] opacity-20 blur-lg" />
            <form onSubmit={handleSubmit} className="relative rounded-[24px] bg-white/5 p-8 backdrop-blur-xl border border-white/10 shadow-2xl">
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60">Votre nom</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 h-5 w-5 text-white/40" />
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Jean Dupont"
                      className="w-full rounded-xl bg-black/20 border border-white/10 py-3 pl-12 pr-4 font-inter text-white placeholder:text-white/30 focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60">Votre ville</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-white/40" />
                    <select 
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full appearance-none rounded-xl bg-black/20 border border-white/10 py-3 pl-12 pr-4 font-inter text-white placeholder:text-white/30 focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574] transition-all"
                    >
                      <option value="" disabled>Sélectionnez votre ville</option>
                      {STORES.map(s => <option key={s.city} value={s.city} className="text-black">{s.city}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-inter text-xs font-semibold uppercase tracking-wider text-white/60">Votre message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-white/40" />
                    <textarea 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Je souhaite commander un t-shirt taille M..."
                      rows={4}
                      className="w-full resize-none rounded-xl bg-black/20 border border-white/10 py-3 pl-12 pr-4 font-inter text-white placeholder:text-white/30 focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574] transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-inter font-semibold text-white transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#1A1A1A]"
                >
                  <Send className="h-5 w-5" />
                  Envoyer sur WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}