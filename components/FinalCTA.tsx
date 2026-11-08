import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pub_4.jpeg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#3a1006]/85 mix-blend-multiply" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div className="container-luxe relative py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-2xl font-fraunces text-3xl leading-tight tracking-tight text-ivory md:text-h2">
          Envie de commander à distance ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl font-inter text-base leading-relaxed text-ivory/90 md:text-lg">
          Nous livrons partout à Madagascar. Contactez-nous directement pour passer commande ou pour toute demande de renseignement.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="tel:0381180624"
            className="pill group w-full justify-center bg-ivory px-7 py-3.5 text-base font-semibold text-[#5c1c0d] shadow-soft-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
          >
            <Phone className="h-4 w-4 mr-2" />
            038 11 806 24
          </a>
          <a
            href="mailto:contact@tsingyrougetextile.com"
            className="pill group w-full justify-center border border-ivory/50 px-7 py-3.5 text-base font-medium text-ivory transition-all duration-300 hover:border-ivory hover:bg-ivory/10 sm:w-auto"
          >
            <Mail className="h-4 w-4 mr-2" />
            Nous écrire
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-ivory/70 font-inter">
          <MessageCircle className="h-4 w-4" />
          <span>Réponse rapide par WhatsApp ou Email</span>
        </div>
      </div>
    </section>
  );
}