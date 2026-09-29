const g1 = "/assets/gallery-1.jpg";
const g2 = "/assets/gallery-2.jpg";
const g3 = "/assets/gallery-3.jpg";
const g4 = "/assets/gallery-4.jpg";
const g5 = "/assets/gallery-5.jpg";
const g6 = "/assets/gallery-6.jpg";
const g7 = "/assets/gallery-7.jpg";
const g8 = "/assets/gallery-8.jpg";

export type GalleryCategory = "all" | "hair" | "bridal" | "makeup" | "nails" | "facial" | "salon";

export interface GalleryItem {
  src: string;
  category: Exclude<GalleryCategory, "all">;
  title: string;
}

export const GALLERY: GalleryItem[] = [
  { src: g1, category: "hair", title: "Sculpted Updo" },
  { src: g2, category: "bridal", title: "Bridal Mehndi Hands" },
  { src: g3, category: "makeup", title: "Editorial Glow" },
  { src: g4, category: "nails", title: "Crimson Almond" },
  { src: g5, category: "facial", title: "24K Gold Mask" },
  { src: g6, category: "salon", title: "The Atelier" },
  { src: g7, category: "hair", title: "Cinnamon Balayage" },
  { src: g8, category: "bridal", title: "Royal Bridal Portrait" },
  { src: g3, category: "makeup", title: "Smoky Couture" },
  { src: g4, category: "nails", title: "Classic Red" },
  { src: g5, category: "facial", title: "Glow Ritual" },
  { src: g1, category: "hair", title: "Polished Twist" },
];

export const GALLERY_CATEGORIES: { key: GalleryCategory; label: string }[] = [
  { key: "all", label: "All" },
  { key: "hair", label: "Hair" },
  { key: "bridal", label: "Bridal" },
  { key: "makeup", label: "Makeup" },
  { key: "nails", label: "Nails" },
  { key: "facial", label: "Facial" },
  { key: "salon", label: "Salon" },
];
