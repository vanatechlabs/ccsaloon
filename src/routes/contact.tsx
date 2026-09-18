import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/data/site";
import Contact from "@/pages/contact/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE.name}` },
      { name: "description", content: "Book your appointment or visit CityCalls Saloon. Reach us on phone, WhatsApp or our quick contact form." },
      { property: "og:title", content: `Contact — ${SITE.name}` },
      { property: "og:description", content: "Book your appointment or get in touch with CityCalls Saloon." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});
