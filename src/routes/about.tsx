import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import About from "@/pages/about/About";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${SITE.name}` },
      { name: "description", content: "Inside SS Luxe Salon — our story, our team, our award-winning craft." },
      { property: "og:title", content: `About — ${SITE.name}` },
      { property: "og:description", content: "Meet the team and the philosophy behind SS Luxe Salon." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/src/assets/about-interior.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});
