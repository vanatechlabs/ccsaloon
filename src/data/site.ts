export const SITE = {
  name: "CITYCALLS SALOON",
  shortName: "CityCalls Saloon",
  tagline: "Beauty Begins Here, Confidence Stays Forever",
  description:
    "CityCalls Saloon — a premium beauty studio offering luxury hair, skin, nails, bridal makeup and spa experiences in an opulent black & gold environment.",
  phones: ["+91 87960 47447"] as const,
  phonesRaw: ["+918796047447"] as const,
  hours: "Mon – Sun · 10:00 AM – 9:00 PM",
  email: "hello@ssluxesalon.com",
  address: "Aya nagar bus stand with PNB Bank near Arjan garh metro station, New Delhi, Delhi 110047",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    whatsapp: "https://wa.me/918796047447",
  },
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
  { to: "/contact", label: "Contact" },
] as const;
