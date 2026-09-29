const serviceBeauty = "/assets/image/Beauty.jpg";
const serviceHair = "/assets/image/hair-styling.jpg";
const serviceFacial = "/assets/image/Facial.jpg";
const serviceMakeup = "/assets/image/makeup.jpg";
const servicePedicure = "/assets/image/mani.jpg";
const serviceNails = "/assets/image/nail.jpg";

export type ServiceCategoryKey =
  | "beauty"
  | "hair"
  | "facial"
  | "manicure"
  | "pedicure"
  | "makeup"
  | "nails";

export interface ServiceItem {
  name: string;
  price: number;
  duration?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  key: ServiceCategoryKey;
  title: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  items: ServiceItem[];
}

export const FEATURED: { key: ServiceCategoryKey; title: string; image: string; blurb: string }[] = [
  { key: "beauty", title: "Beauty", image: serviceBeauty, blurb: "Signature beauty rituals" },
  { key: "hair", title: "Hair Styling", image: serviceHair, blurb: "Cut · Color · Treatment" },
  { key: "facial", title: "Facials", image: serviceFacial, blurb: "Glow · Hydrate · Renew" },
  { key: "makeup", title: "Makeup", image: serviceMakeup, blurb: "Editorial · Bridal · Party" },
  { key: "pedicure", title: "Mani & Pedi", image: servicePedicure, blurb: "Spa pedicure rituals" },
  { key: "nails", title: "Nail Artistry", image: serviceNails, blurb: "Gel · Extensions · Art" },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    key: "beauty",
    title: "Signature Beauty",
    tagline: "Curated rituals for radiant skin",
    description:
      "A holistic suite of beauty treatments designed to restore glow, balance, and confidence — performed with premium imported products.",
    image: serviceBeauty,
    benefits: ["Premium products", "Certified estheticians", "Personalised consultation", "Hygienic single-use tools"],
    items: [
      { name: "Eyebrow Threading", price: 80 },
      { name: "Upper Lip Threading", price: 60 },
      { name: "Forehead Threading", price: 60 },
      { name: "Chin Threading", price: 60 },
      { name: "Full Face Threading", price: 350 },
      { name: "Full Face Wax", price: 700 },
      { name: "Full Arms Wax", price: 500, popular: true },
      { name: "Half Arms Wax", price: 350 },
      { name: "Full Legs Wax", price: 700, popular: true },
      { name: "Half Legs Wax", price: 450 },
      { name: "Under Arms Wax", price: 200 },
      { name: "Full Body Wax", price: 2500 },
    ],
  },
  {
    key: "hair",
    title: "Hair Atelier",
    tagline: "Cut · Color · Treatment",
    description:
      "From precision cuts to luminous global colour and bond-repair therapies — every service is crafted by senior stylists.",
    image: serviceHair,
    benefits: ["Senior stylists", "Ammonia-free colour", "Olaplex & K18 treatments", "Personalised consultation"],
    items: [
      { name: "Hair Cut – Women", price: 700, popular: true },
      { name: "Hair Cut – Kids", price: 400 },
      { name: "Hair Wash & Blow Dry", price: 700 },
      { name: "Ironing", price: 1000 },
      { name: "Tongs / Curls", price: 1200 },
      { name: "Hair Spa", price: 1500, popular: true },
      { name: "Keratin Treatment", price: 6500 },
      { name: "Smoothening", price: 5500 },
      { name: "Botox Hair Treatment", price: 7500 },
      { name: "Global Hair Color", price: 4500 },
      { name: "Highlights – Per Streak", price: 250 },
      { name: "Root Touch-Up", price: 1200 },
    ],
  },
  {
    key: "facial",
    title: "Glow Facials",
    tagline: "Visible radiance in 60 minutes",
    description:
      "Luxury facials with imported product lines — from classic clean-ups to gold-infused signature rituals.",
    image: serviceFacial,
    benefits: ["Imported product lines", "Skin-type matched", "Relaxing aromatherapy", "Visible immediate glow"],
    items: [
      { name: "Clean Up", price: 800 },
      { name: "Fruit Facial", price: 1200 },
      { name: "VLCC Facial", price: 1800 },
      { name: "O3+ Whitening Facial", price: 2500, popular: true },
      { name: "Gold Facial", price: 3500, popular: true },
      { name: "Diamond Facial", price: 3500 },
      { name: "Hydra Facial", price: 4500 },
      { name: "Anti-Ageing Facial", price: 4000 },
      { name: "Bridal Facial", price: 5000 },
    ],
  },
  {
    key: "manicure",
    title: "Manicure Studio",
    tagline: "Pampered hands. Always.",
    description: "Spa-grade manicures with cuticle care, exfoliation, mask & massage — finished with a polished shine.",
    image: servicePedicure,
    benefits: ["Single-use tools", "Cuticle care", "Hand massage included", "Long-lasting finish"],
    items: [
      { name: "Classic Manicure", price: 500 },
      { name: "Spa Manicure", price: 800 },
      { name: "French Manicure", price: 900 },
      { name: "Luxury Gold Manicure", price: 1200, popular: true },
      { name: "Crystal Manicure", price: 1500 },
    ],
  },
  {
    key: "pedicure",
    title: "Pedicure Spa",
    tagline: "From tired to transformed",
    description:
      "Indulgent foot rituals with warm soaks, exfoliation, callus removal and a long massage — pure restoration.",
    image: servicePedicure,
    benefits: ["Warm aromatic soak", "Callus removal", "Long foot massage", "Premium finishing"],
    items: [
      { name: "Classic Pedicure", price: 700 },
      { name: "Spa Pedicure", price: 1100, popular: true },
      { name: "French Pedicure", price: 1200 },
      { name: "Luxury Gold Pedicure", price: 1600 },
      { name: "Crystal Pedicure", price: 1900 },
    ],
  },
  {
    key: "makeup",
    title: "Makeup Couture",
    tagline: "Editorial · Bridal · Party",
    description:
      "From understated party glam to elaborate bridal looks — designed by senior makeup artists using HD & airbrush techniques.",
    image: serviceMakeup,
    benefits: ["HD & airbrush", "Premium brands", "Hair styling included on bridal", "Trial available"],
    items: [
      { name: "Party Makeup", price: 2500 },
      { name: "HD Makeup", price: 4500, popular: true },
      { name: "Airbrush Makeup", price: 6500 },
      { name: "Engagement Makeup", price: 6000 },
      { name: "Bridal Makeup", price: 12000, popular: true },
      { name: "Luxury Bridal Package", price: 18000 },
      { name: "Pre-Bridal Trial", price: 3500 },
    ],
  },
  {
    key: "nails",
    title: "Nail Atelier",
    tagline: "Gel · Extensions · Art",
    description: "Couture nail artistry with gel polish, extensions, and freehand art crafted by certified nail technicians.",
    image: serviceNails,
    benefits: ["Long-lasting gel", "Hypoallergenic products", "Custom nail art", "Sanitised tools"],
    items: [
      { name: "Gel Polish – Hands", price: 900 },
      { name: "Gel Polish – Feet", price: 1000 },
      { name: "Nail Extensions (Set)", price: 2500, popular: true },
      { name: "Acrylic Extensions", price: 3000 },
      { name: "Nail Art – Per Nail", price: 150 },
      { name: "Chrome / Glitter Finish", price: 1500 },
      { name: "Nail Removal", price: 500 },
    ],
  },
];
