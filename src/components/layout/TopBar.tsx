"use client";
import { Phone, Clock, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/data/site";

export function TopBar() {
  return (
    <div
      className="hidden md:block relative overflow-hidden"
      style={{
        background: "transparent",
        borderBottom: "1px solid rgba(212,175,55,0.5)",
      }}
    >
      {/* Gold shimmer bottom line */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #d4af37, #f5e070, #d4af37, transparent)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl h-10 items-center justify-between px-7">

        {/* Left — Phones */}
        <div className="flex items-center">
          <a
            href={`tel:${SITE.phonesRaw[0]}`}
            className="flex items-center gap-1.5 pr-3 text-[11px] font-normal tracking-[0.04em] text-white transition-colors hover:text-white/80 font-['Inter',sans-serif]"
          >
            <Phone className="h-3 w-3 text-[#d4af37]" />
            {SITE.phones[0]}
          </a>


        </div>

        {/* Center — Hours */}
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white font-['Inter',sans-serif]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] opacity-60" />
          <Clock className="h-2.5 w-2.5 text-[#d4af37]" />
          {SITE.hours}
          <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37] opacity-60" />
        </div>

        {/* Right — Socials */}
        <div className="flex items-center gap-2">
          {[
            { href: SITE.socials.instagram, label: "Instagram", icon: <Instagram className="h-3 w-3" /> },
            { href: SITE.socials.facebook, label: "Facebook", icon: <Facebook className="h-3 w-3" /> },
            {
              href: SITE.socials.whatsapp,
              label: "WhatsApp",
              icon: (
                <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6L0 24l6.18-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.06-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A9.94 9.94 0 1122 12c0 5.51-4.49 10-10 10zm5.43-7.39c-.3-.15-1.77-.87-2.05-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.16 8.16 0 01-2.4-1.48 9.01 9.01 0 01-1.67-2.08c-.17-.3 0-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01a1.1 1.1 0 00-.8.37 3.36 3.36 0 00-1.05 2.5c0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.12 4.52.72.31 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.27-.2-.57-.35z" />
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-7 w-7 items-center justify-center rounded-full text-[#c8a84b] transition-all hover:-translate-y-px hover:text-[#f5e070]"
              style={{
                border: "1px solid rgba(212,175,55,0.35)",
                background: "rgba(212,175,55,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#d4af37";
                (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.35)";
                (e.currentTarget as HTMLElement).style.background = "rgba(212,175,55,0.05)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
