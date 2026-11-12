export type Testimonial = {
  name: string;
  country: string;
  flag: string;
  avatar: string;
  rating: number;
  quote: string;
};

export type Package = {
  id: string;
  name: string;
  category: string;
  price: string; // Prix détail
  wholesalePrice: string; // Prix gros
  priceNote: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string | null;
  features: string[];
  cta: string;
  highlighted: boolean;
};

export const NAV_LINKS = [
  { label: "La Marque", href: "#decouvrir" },
  { label: "Collection", href: "#collection" },
  { label: "Boutiques", href: "#boutiques" },
  { label: "Location Auto", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_STATS = [
  { value: "100%", label: "Made in Madagascar" },
  { value: "16", label: "Boutiques officielles" },
  { value: "24/7", label: "Service client" },
];

export const PARTNER_LOGOS = [
  "Textile Premium",
  "Lamba Authentique",
  "Livraison Partout",
  "Qualité Garantie",
];

export const FEATURES = [
  {
    icon: "Globe",
    title: "Livraison partout à Madagascar",
    description:
      "Que vous soyez à Antananarivo, Nosy Be ou Toliara, faites-vous livrer vos pièces préférées directement à domicile.",
  },
  {
    icon: "ShieldCheck",
    title: "Qualité & Authenticité",
    description:
      "Des tissus sélectionnés avec soin, des impressions durables et des motifs uniques inspirés de la richesse de notre île.",
  },
  {
    icon: "Compass",
    title: "Le seul et unique au monde",
    description:
      "Affirmez votre style avec Tsingy Rouge Madagascar. Des collections exclusives qui célèbrent la beauté de notre culture.",
  },
];

export const PACKAGES: Package[] = [
  {
    id: "tshirt",
    name: "T-shirt Adulte",
    category: "T-shirts",
    price: "40 000 Ar",
    wholesalePrice: "30 000 Ar",
    priceNote: "Coton premium",
    rating: 4.9,
    reviews: 124,
    image: "/images/pub_1.jpeg",
    badge: null,
    features: [
      "Coupe unisexe confortable",
      "Motifs exclusifs (Baleine, Espadon...)",
      "Logo brodé Tsingy Rouge",
    ],
    cta: "Voir les modèles",
    highlighted: false,
  },
  {
    id: "lamba",
    name: "Lamba Tsingy Rouge (3 Boutons)",
    category: "Lambas",
    price: "50 000 Ar",
    wholesalePrice: "40 000 Ar",
    priceNote: "Le chef-d'œuvre local",
    rating: 5.0,
    reviews: 856,
    image: "/images/pub_2.jpeg",
    badge: "Meilleur Vendeur",
    features: [
      "Tissu léger et résistant",
      "Design traditionnel & moderne",
      "Idéal pour les cérémonies ou le quotidien",
    ],
    cta: "Commander mon Lamba",
    highlighted: true,
  },
  {
    id: "enfant-grand",
    name: "T-shirt Enfant (8-12 ans)",
    category: "Enfants",
    price: "30 000 Ar",
    wholesalePrice: "25 000 Ar",
    priceNote: "Pour les plus grands",
    rating: 4.8,
    reviews: 112,
    image: "/images/pub_3.jpeg",
    badge: "Nouveauté",
    features: [
      "Tissu doux et respirant",
      "Résistant aux lavages fréquents",
      "Parfait pour l'école ou les sorties",
    ],
    cta: "Commander",
    highlighted: false,
  },
  {
    id: "enfant-petit",
    name: "T-shirt Bébé/Enfant (2-6 ans)",
    category: "Enfants",
    price: "25 000 Ar",
    wholesalePrice: "20 000 Ar",
    priceNote: "Pour les tout-petits",
    rating: 4.9,
    reviews: 98,
    image: "/images/pub_4.jpeg", // Utilisation de pub_4 (pareo) ou une autre image si vous préférez
    badge: null,
    features: [
      "Coton 100% biologique",
      "Coupe confortable",
      "Impressions adaptées aux enfants",
    ],
    cta: "Commander",
    highlighted: false,
  },
];

export const CARS = [
  {
    id: "suv",
    name: "SUV 4x4 Premium",
    type: "SUV",
    price: "À partir de 120 000 Ar / jour",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
    features: ["Idéal pour les pistes", "5 places assises", "Climatisation", "Chauffeur en option"],
  },
  {
    id: "berline",
    name: "Berline Confort",
    type: "Berline",
    price: "À partir de 80 000 Ar / jour",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    features: ["Parfait pour la ville", "4 places assises", "Économique", "GPS inclus"],
  },
  {
    id: "minivan",
    name: "Minivan Familial",
    type: "Minivan",
    price: "À partir de 150 000 Ar / jour",
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800&q=80",
    features: ["Jusqu'à 7 places", "Grand coffre", "Idéal pour les groupes", "Sièges enfants disponibles"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Miora R.",
    country: "Antananarivo",
    flag: "🇲🇬",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&q=80",
    rating: 5,
    quote:
      "J'ai commandé un lamba pour une cérémonie familiale. La qualité est incroyable, les couleurs sont magnifiques et la livraison a été super rapide. Misaotra!",
  },
  {
    name: "Kevin T.",
    country: "Nosy Be",
    flag: "🇲🇬",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&q=80",
    rating: 5,
    quote:
      "Les t-shirts sont trop stylés. C'est ma marque préférée pour les vacances. Le logo Tsingy Rouge est unique, on me demande toujours où je l'ai acheté.",
  },
  {
    name: "Sarah L.",
    country: "France",
    flag: "🇫🇷",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    rating: 5,
    quote:
      "En voyage à Madagascar, je suis tombée amoureuse de cette boutique à Diego. J'ai pris un polo et un t-shirt. Livrés en France, toujours aussi beaux après des mois.",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Où puis-je acheter vos produits ?",
    a: "Nous avons plus de 16 boutiques physiques à travers Madagascar (Antananarivo, Diego-Suarez, Nosy Be, Toliara, etc.). Consultez la section 'Points de vente' pour trouver la boutique la plus proche de chez vous.",
  },
  {
    q: "Livrez-vous partout à Madagascar ?",
    a: "Oui ! Nous assurons une livraison partout à Madagascar. Que vous soyez dans les grandes villes ou en province, nous trouvons le moyen de vous faire parvenir votre commande.",
  },
  {
    q: "Comment passer une commande à distance ?",
    a: "C'est très simple. Utilisez notre formulaire WhatsApp ou appelez-nous directement. Nous vous indiquerons les modalités de paiement (Mobile Money, virement, etc.).",
  },
  {
    q: "Quels sont vos horaires d'ouverture ?",
    a: "La plupart de nos boutiques sont ouvertes du lundi au samedi, de 8h à 18h. Nous vous conseillons d'appeler directement la boutique de votre choix pour confirmer les horaires exacts.",
  },
  {
    q: "Puis-je commander en gros pour revendre ?",
    a: "Absolument. Nous avons des conditions spéciales pour les revendeurs (prix de gros). Contactez-nous via le formulaire WhatsApp pour discuter de vos besoins.",
  },
  {
    q: "Quels sont vos moyens de paiement ?",
    a: "En boutique et à distance, nous acceptons les espèces, les paiements par Mobile Money (MVola, Orange Money, Airtel Money) et les virements bancaires.",
  },
  {
    q: "Proposez-vous la location de voitures ?",
    a: "Oui, nous mettons à votre disposition une flotte de véhicules (SUV, berlines, minivans) avec ou sans chauffeur pour découvrir Madagascar en toute liberté. Contactez-nous via WhatsApp pour un devis personnalisé.",
  },
];

export const STORES = [
  {
    city: "Antananarivo (67ha)",
    location: "67ha Nord Ouest Parking",
    phone: "038 11 805 10 / 038 11 805 06",
    image: "/images/Tana.jpg",
    query: "67ha Nord Ouest Parking Antananarivo Madagascar",
  },
  {
    city: "Antananarivo (Analakely)",
    location: "Esplanade Analakely",
    phone: "038 11 805 41 / 038 11 806 24",
    image: "/images/Tana.jpg",
    query: "Esplanade Analakely Antananarivo Madagascar",
  },
  {
    city: "Diego-Suarez",
    location: "13 Mai en face station Galana et stade Municipal",
    phone: "038 11 805 63",
    image: "/images/diego.png",
    query: "13 Mai Diego-Suarez Madagascar",
  },
  {
    city: "Nosy Be",
    location: "Senganinga",
    phone: "032 04 122 42",
    image: "/images/nosy-be.webp",
    query: "Senganinga Nosy Be Madagascar",
  },
  {
    city: "Toliara",
    location: "En face bureau fokontany Tanambao",
    phone: "038 11 805 33",
    image: "/images/Tulear.jpg",
    query: "Tanambao Toliara Madagascar",
  },
  {
    city: "Antsirabe",
    location: "Hôtel Z&A en Face ny BNI",
    phone: "038 11 807 44",
    image: "/images/Antsirabe.jpeg",
    query: "Antsirabe Madagascar",
  },
  {
    city: "Fianarantsoa",
    location: "Antarandolo En face hôtel Escale",
    phone: "038 11 807 96 / 038 11 805 87",
    image: "/images/Fianarantsoa.png",
    query: "Antarandolo Fianarantsoa Madagascar",
  },
  {
    city: "Ambovombe",
    location: "Box N°01 Ambanin'ny Hôtel la Source",
    phone: "034 04 399 92",
    image: "/images/Ambovombe.jpg",
    query: "Ambovombe Madagascar",
  },
  {
    city: "Manakara",
    location: "Centre commercial en face Stationnement Avaratra",
    phone: "034 13 074 30 / 034 68 562 93",
    image: "/images/Manakara.jpg",
    query: "Manakara Madagascar",
  },
  {
    city: "Sambava",
    location: "Antaimby ampitan'ny RESTO LING taloha",
    phone: "032 11 805 61",
    image: "/images/Sambava.png",
    query: "Sambava Madagascar",
  },
  {
    city: "Antsohihy",
    location: "Haute ville, akaikin'ny Pharmacie",
    phone: "038 11 805 82",
    image: "/images/Antsohihy.png",
    query: "Antsohihy Madagascar",
  },
  {
    city: "Ambilobe",
    location: "En face Babou bijouterie Antafiantsakana",
    phone: "032 11 805 60",
    image: "/images/ambilobe.jpg",
    query: "Ambilobe Madagascar",
  },
  {
    city: "Morondava",
    location: "Studio Continental Ampasimôpera",
    phone: "038 11 805 35 / 038 11 806 24",
    image: "/images/Morondava.webp",
    query: "Morondava Madagascar",
  },
  {
    city: "Majunga",
    location: "Lalam-baovao Ambovalanana",
    phone: "038 11 805 54 / 038 11 805 09",
    image: "/images/majunga.png",
    query: "Majunga Madagascar",
  },
];