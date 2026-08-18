export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Verma",
    role: "Bride · 2025",
    rating: 5,
    quote:
      "My bridal look was beyond a dream. The team at SS Luxe Salon made me feel like absolute royalty — every detail was perfection.",
  },
  {
    name: "Ananya Kapoor",
    role: "Loyal Client · 3 years",
    rating: 5,
    quote:
      "The luxury experience here is unmatched. From the ambience to the products, everything feels world-class.",
  },
  {
    name: "Neha Sinha",
    role: "Fashion Editor",
    rating: 5,
    quote:
      "I have been to high-end salons across the world. SS Luxe stands proudly among them — same quality, warmer hospitality.",
  },
  {
    name: "Tara Malhotra",
    role: "Working Professional",
    rating: 5,
    quote:
      "Their hair spa transformed my hair completely. I keep coming back — it's my monthly self-care ritual.",
  },
  {
    name: "Isha Reddy",
    role: "Beauty Influencer",
    rating: 5,
    quote:
      "The makeup artists understand light, skin and emotion. Booked them for three editorials already.",
  },
];
