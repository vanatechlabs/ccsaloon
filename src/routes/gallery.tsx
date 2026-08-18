import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import Gallery from "@/pages/gallery/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery — ${SITE.name}` },
      { name: "description", content: "Step inside our visual archive — hair, bridal, makeup, nails, facials and the SS Luxe atelier." },
      { property: "og:title", content: `Gallery — ${SITE.name}` },
      { property: "og:description", content: "A curated visual archive of SS Luxe Salon transformations and ambience." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: "/src/assets/hero-nails.jpg" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});
