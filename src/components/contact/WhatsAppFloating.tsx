import { SITE } from "@/data/site";

export function WhatsAppFloating() {
  return (
    <a
      href={SITE.socials.whatsapp}
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-gold text-background shadow-gold-glow animate-pulse-gold"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
        <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6L0 24l6.18-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52z" />
      </svg>
    </a>
  );
}
