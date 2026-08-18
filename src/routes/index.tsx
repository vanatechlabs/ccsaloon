import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import Home from "@/pages/home/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Luxury Salon & Beauty Studio` },
      { name: "description", content: SITE.description },
      { property: "og:title", content: `${SITE.name} — Luxury Salon & Beauty Studio` },
      { property: "og:description", content: SITE.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
