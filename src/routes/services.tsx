import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import Services from "@/pages/services/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services & Pricing — ${SITE.name}` },
      { name: "description", content: "Explore luxury hair, skin, nail, makeup and bridal services at SS Luxe Salon with transparent pricing." },
      { property: "og:title", content: `Services & Pricing — ${SITE.name}` },
      { property: "og:description", content: "Luxury hair, skin, nails, makeup, bridal & spa rituals — premium pricing, transparent." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/src/assets/hero-hair.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});
