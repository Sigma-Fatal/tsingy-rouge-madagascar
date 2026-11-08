import { PARTNER_LOGOS } from "@/lib/data";

export default function SocialProof() {
  return (
    <section className="relative border-y border-charcoal/5 bg-[#F4EDE2] overflow-hidden">
      {/* Image de décoration subtile en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src="/images/couverture_pub.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container-luxe py-10 md:py-12 relative z-10">
        <p className="eyebrow mb-6 text-center text-stone">Recommandé par</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
          {PARTNER_LOGOS.map((logo) => (
            <li key={logo} className="font-fraunces text-lg font-medium tracking-tight text-charcoal/40 transition-colors duration-300 hover:text-charcoal/80 md:text-xl">
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}