import img1 from "@/assets/hero-bridal.jpg";
import img2 from "@/assets/service-hair.jpg";
import img3 from "@/assets/service-facial.jpg";
import img4 from "@/assets/service-nails.jpg";
import img5 from "@/assets/service-beauty.jpg";
import img6 from "@/assets/gallery-5.jpg";
import img7 from "@/assets/hero-hair.jpg";

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export const BLOGS: Blog[] = [
  {
    id: "1",
    slug: "top-bridal-makeup-trends-2026",
    title: "Top Bridal Makeup Trends for 2026",
    excerpt: "Discover the most enchanting bridal makeup looks that are taking the wedding season by storm.",
    content: "When it comes to bridal makeup, 2026 is all about enhancing natural beauty with a touch of modern glamour. Soft, glowing skin paired with subtle, earthy tones on the eyes and lips is a major trend. Brides are moving away from heavy contouring towards a more luminous, fresh-faced finish. The focus is on skin prep, using high-quality hydrating products to achieve a glass-skin effect. Another popular trend is the revival of the classic red lip, but with a softer, blurred edge rather than a sharp, defined line. For eye makeup, metallic and shimmer shades in rose gold and champagne are highly requested, adding a sparkle that looks stunning in both daylight and evening photography.",
    date: "April 15, 2026",
    category: "Bridal",
    image: img1,
  },
  {
    id: "2",
    slug: "benefits-of-regular-hair-spa",
    title: "Why Your Hair Needs a Regular Spa Treatment",
    excerpt: "Explore the hidden benefits of incorporating hair spa treatments into your monthly beauty routine.",
    content: "A regular hair spa treatment is more than just a luxurious indulgence; it is a necessity for maintaining healthy, beautiful hair. Our daily lives expose our hair to pollution, UV rays, and styling damage, leading to dryness, frizz, and breakage. A hair spa provides deep conditioning that restores lost moisture and repairs the hair cuticle from within. It also stimulates the scalp, improving blood circulation and promoting healthy hair growth. The massage component of a hair spa is incredibly relaxing, reducing stress which is a known factor in hair fall. By making hair spa a regular part of your routine, you ensure that your hair remains strong, shiny, and resilient against environmental stressors.",
    date: "May 2, 2026",
    category: "Hair Care",
    image: img2,
  },
  {
    id: "3",
    slug: "secrets-to-glowing-skin",
    title: "Secrets to Achieving Radiant, Glowing Skin",
    excerpt: "Unlock the professional secrets to maintaining a flawless and glowing complexion all year round.",
    content: "Achieving radiant skin is a combination of a good skincare routine, professional treatments, and a healthy lifestyle. At SS Luxe, we believe that glowing skin starts with deep hydration and proper exfoliation. Removing dead skin cells regularly allows serums and moisturizers to penetrate deeper, maximizing their effectiveness. Professional facials, such as our signature Hydra Facial, deeply cleanse and infuse the skin with essential nutrients, instantly boosting radiance. Additionally, incorporating antioxidants like Vitamin C into your daily routine helps combat free radicals and brighten the skin tone. Don't forget the basics: drinking plenty of water, getting adequate sleep, and always wearing sunscreen are non-negotiable steps for a flawless complexion.",
    date: "May 18, 2026",
    category: "Skincare",
    image: img3,
  },
  {
    id: "4",
    slug: "choosing-right-nail-art",
    title: "How to Choose the Perfect Nail Art for Any Occasion",
    excerpt: "From minimalist chic to extravagant bling, find out how to select nail art that complements your style.",
    content: "Nail art has become a true form of self-expression. Choosing the right design depends on the occasion and your personal style. For professional settings or everyday elegance, minimalist designs like the classic French tip, subtle ombré, or negative space art are perfect choices. They add a touch of sophistication without being overpowering. For weddings or special events, you can opt for more elaborate designs featuring chrome finishes, 3D elements, or intricate hand-painted motifs that match your outfit. The key is to communicate your vision clearly with our expert nail technicians, who can customize the design, shape, and length to create a unique look that perfectly suits your hands and the occasion.",
    date: "June 5, 2026",
    category: "Nails",
    image: img4,
  },
  {
    id: "5",
    slug: "understanding-keratin-treatment",
    title: "Everything You Need to Know About Keratin Treatments",
    excerpt: "Say goodbye to frizz and hello to smooth, manageable hair with our comprehensive guide to Keratin.",
    content: "If you struggle with frizzy, unmanageable hair, a Keratin treatment might be your holy grail. This treatment works by smoothing down the cells that overlap to form your hair strands. The layers of cells, called the hair cuticle, absorb the keratin, resulting in hair that looks full and glossy. It significantly reduces styling time and makes your hair highly resistant to humidity. At SS Luxe, we use premium, formaldehyde-free keratin formulas that nourish the hair while smoothing it. The results can last anywhere from 3 to 6 months, depending on your hair type and how well you maintain it post-treatment using sulfate-free shampoos. It's an investment in your hair's daily appearance and health.",
    date: "June 20, 2026",
    category: "Hair Care",
    image: img5,
  },
  {
    id: "6",
    slug: "pre-bridal-beauty-timeline",
    title: "The Ultimate Pre-Bridal Beauty Timeline",
    excerpt: "A step-by-step guide to prepping your skin, hair, and body for the biggest day of your life.",
    content: "Preparation is key to looking your absolute best on your wedding day. We recommend starting your pre-bridal beauty regimen at least six months in advance. Begin with establishing a solid skincare routine and scheduling monthly facials to address any specific concerns like pigmentation or acne. Three months out is the ideal time to experiment with hair color and styles. One month before the big day, focus on deep conditioning hair spa treatments and regular body polishing for a head-to-toe glow. The final week should be reserved for your waxing, threading, and luxury mani-pedi sessions. Following a structured timeline ensures you avoid last-minute stress and guarantees you'll walk down the aisle radiating confidence and beauty.",
    date: "July 1, 2026",
    category: "Bridal",
    image: img6,
  },
  {
    id: "7",
    slug: "essential-hair-care-tips",
    title: "5 Essential Hair Care Tips for Summer",
    excerpt: "Keep your locks healthy, hydrated, and frizz-free during the harsh summer months.",
    content: "Summer brings sunshine and beach days, but it can also wreak havoc on your hair. UV rays, chlorine, and salt water strip away natural oils, leaving your hair dry and brittle. To protect your hair, start by wearing a hat or using a UV-protectant spray when stepping out. Always rinse your hair with fresh water before and after swimming to minimize chlorine or salt absorption. Swap your regular conditioner for a deep-conditioning mask once a week to restore moisture. Additionally, minimize the use of heat styling tools; embrace your natural texture or use heatless styling methods. Finally, stay hydrated—drinking plenty of water is just as important for your hair as it is for your skin.",
    date: "July 12, 2026",
    category: "Hair Care",
    image: img7,
  }
];
