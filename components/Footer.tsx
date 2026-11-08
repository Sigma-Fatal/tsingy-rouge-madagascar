import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

const SOCIALS = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-luxe py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div>
            <p className="font-fraunces text-2xl font-semibold tracking-tight text-ivory">
              TSINGY ROUGE
            </p>
            <p className="mt-1 font-inter text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4A574]">
              Madagascar
            </p>
            <p className="mt-5 max-w-xs font-inter text-sm leading-relaxed text-ivory/60">
              Le seul et unique au monde. Textile, Lamba, et accessoires de qualité supérieure.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 transition-all duration-300 hover:border-[#D4A574] hover:text-[#D4A574]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Liens */}
          <div>
            <p className="eyebrow mb-4 text-[#D4A574]">Navigation</p>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-inter text-sm text-ivory/65 transition-colors hover:text-ivory">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <p className="eyebrow mb-4 text-[#D4A574]">Contact & Commandes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#D4A574] shrink-0" />
                <div>
                  <p className="font-inter text-sm font-medium text-ivory">Téléphone</p>
                  <p className="font-inter text-sm text-ivory/60">038 11 806 24</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#D4A574] shrink-0" />
                <div>
                  <p className="font-inter text-sm font-medium text-ivory">Email</p>
                  <p className="font-inter text-sm text-ivory/60">contact@tsingyrougetextile.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <MapPin className="h-5 w-5 text-[#D4A574] shrink-0" />
                <div>
                  <p className="font-inter text-sm font-medium text-ivory">Siège / Boutique Principale</p>
                  <p className="font-inter text-sm text-ivory/60">Antananarivo 67ha Nord Ouest Parking</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-6 text-center font-inter text-xs text-ivory/50 md:flex-row md:items-center md:text-left">
          <p>
            © {new Date().getFullYear()} Tsingy Rouge Madagascar. Tous droits réservés.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href="#" className="transition-colors hover:text-ivory">Mentions légales</a>
            <a href="#" className="transition-colors hover:text-ivory">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}