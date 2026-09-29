"use client";

// SS Luxe Salon — Footer.tsx (Premium Redesign)
// Dependencies: lucide-react, next/link
// Replace @/data/site and @/data/services imports with your actual data files

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  MessageCircle,
  Clock,
  Crown,
} from "lucide-react";
import { SITE, NAV_LINKS } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";

// ─── STYLES ──────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .ft {
    position: relative;
    background: #0A0D12;
    font-family: 'DM Sans', sans-serif;
    overflow: hidden;
  }

  /* deep blue-tinted dark with subtle texture */
  .ft::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 15% 0%, rgba(201,168,76,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 50% 35% at 85% 100%, rgba(201,168,76,0.04) 0%, transparent 55%);
    pointer-events: none;
  }

  /* top gold shimmer line */
  .ft-shimmer {
    height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(201,168,76,0.15) 20%,
      rgba(201,168,76,0.7) 50%,
      rgba(201,168,76,0.15) 80%,
      transparent 100%
    );
  }

  /* ── CTA banner ── */
  .ft-cta {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 2rem 0;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid rgba(201,168,76,0.1);
    padding-bottom: 3.5rem;
  }
  @media (max-width: 700px) {
    .ft-cta { grid-template-columns: 1fr; text-align: center; }
    .ft-cta-btns { justify-content: center !important; }
  }
  .ft-cta-label {
    font-size: 13px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: rgba(201,168,76,0.55);
    margin-bottom: 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
  .ft-cta-label::before {
    content: '';
    width: 24px; height: 1px;
    background: rgba(201,168,76,0.4);
  }
  .ft-cta-heading {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 600;
    color: #F0E4C4;
    line-height: 1.2;
  }
  .ft-cta-heading em {
    font-style: italic;
    font-weight: 400;
    color: #C9A84C;
  }
  .ft-cta-btns {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .ft-btn-gold {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.6rem;
    background: linear-gradient(135deg, #C9A84C, #A8843A);
    color: #0A0D12;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-radius: 50px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: box-shadow 0.22s, transform 0.22s;
    white-space: nowrap;
  }
  .ft-btn-gold:hover {
    box-shadow: 0 8px 28px rgba(201,168,76,0.3);
    transform: translateY(-2px);
  }
  .ft-btn-outline {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.6rem;
    background: transparent;
    color: #C9A84C;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-radius: 50px;
    text-decoration: none;
    border: 1px solid rgba(201,168,76,0.3);
    cursor: pointer;
    transition: background 0.22s, border-color 0.22s;
    white-space: nowrap;
  }
  .ft-btn-outline:hover {
    background: rgba(201,168,76,0.06);
    border-color: rgba(201,168,76,0.55);
  }

  /* ── Main grid ── */
  .ft-grid {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3.5rem 2rem;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    gap: 3rem;
  }
  @media (max-width: 1024px) {
    .ft-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 560px) {
    .ft-grid { grid-template-columns: 1fr; gap: 2rem; }
  }

  /* ── Brand column ── */
  .ft-brand-logo {
    display: inline-flex;
    align-items: center;
    gap: 0.85rem;
    text-decoration: none;
    margin-bottom: 1.5rem;
  }
  .ft-logo-mark {
    width: 48px; height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.35);
    background: rgba(201,168,76,0.05);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: #C9A84C;
    letter-spacing: 0.05em;
    flex-shrink: 0;
  }
  .ft-logo-text { line-height: 1; }
  .ft-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 600;
    color: #F0E4C4;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    display: block;
  }
  .ft-logo-sub {
    font-size: 9px;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: #C9A84C;
    margin-top: 2px;
    display: block;
  }

  .ft-tagline {
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    color: rgba(221,211,184,0.5);
    line-height: 1.5;
    margin-bottom: 0.85rem;
  }
  .ft-desc {
    font-size: 13px;
    font-weight: 300;
    color: rgba(187,178,158,0.55);
    line-height: 1.75;
    margin-bottom: 1.6rem;
    max-width: 260px;
  }

  /* social icons */
  .ft-socials { display: flex; gap: 0.6rem; }
  .ft-social {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.2);
    background: transparent;
    display: flex; align-items: center; justify-content: center;
    color: rgba(201,168,76,0.55);
    text-decoration: none;
    transition: all 0.22s ease;
  }
  .ft-social:hover {
    border-color: rgba(201,168,76,0.55);
    background: rgba(201,168,76,0.07);
    color: #C9A84C;
    transform: translateY(-2px);
  }

  /* ── Column shared ── */
  .ft-col-heading {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.38em;
    text-transform: uppercase;
    color: rgba(201,168,76,0.55);
    margin-bottom: 1.4rem;
    display: flex;
    align-items: center;
    gap: 0.55rem;
  }
  .ft-col-heading::after {
    content: '';
    flex: 0 0 40px;
    height: 1px;
    background: rgba(201,168,76,0.15);
  }

  .ft-nav-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem; }
  .ft-nav-link {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 13px;
    font-weight: 300;
    color: #E8D08A;
    text-decoration: none;
    transition: color 0.2s;
  }
  .ft-nav-link svg { opacity: 0; transition: opacity 0.2s, transform 0.2s; transform: translate(-3px, 3px); }
  .ft-nav-link:hover { color: #FFFFFF; }
  .ft-nav-link:hover svg { opacity: 1; transform: translate(0, 0); }

  /* ── Contact column ── */
  .ft-contact-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.1rem; }
  .ft-contact-item { display: flex; align-items: flex-start; gap: 0.85rem; }
  .ft-contact-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    background: rgba(201,168,76,0.06);
    border: 1px solid rgba(201,168,76,0.14);
    display: flex; align-items: center; justify-content: center;
    color: #C9A84C;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .ft-contact-label {
    font-size: 9px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #C9A84C;
    margin-bottom: 0.25rem;
    display: block;
  }
  .ft-contact-value {
    font-size: 13px;
    font-weight: 300;
    color: #E8D08A;
    text-decoration: none;
    display: block;
    line-height: 1.55;
    transition: color 0.2s;
  }
  a.ft-contact-value:hover { color: #FFFFFF; }

  /* ── Divider ── */
  .ft-divider {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    height: 1px;
    background: linear-gradient(90deg,
      transparent,
      rgba(201,168,76,0.12) 20%,
      rgba(201,168,76,0.22) 50%,
      rgba(201,168,76,0.12) 80%,
      transparent
    );
  }

  /* ── Bottom bar ── */
  .ft-bottom {
    position: relative;
    z-index: 1;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.4rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .ft-copy {
    font-size: 13px;
    font-weight: 300;
    color: #FFFFFF;
    letter-spacing: 0.05em;
  }
  @media (max-width: 560px) {
    .ft-bottom { justify-content: center; text-align: center; }
    .ft-cta { padding: 3rem 1.5rem 0; }
    .ft-grid { padding: 2.5rem 1.5rem; }
    .ft-desc { max-width: 100%; }
  }
`;

// ─── WHATSAPP ICON ────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6L0 24l6.18-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.93 11.93 0 00-3.48-8.52z" />
    </svg>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <>
      <style>{CSS}</style>

      <footer className="ft">
        {/* top shimmer */}
        <div className="ft-shimmer" />

        {/* ── CTA Banner ── */}
        <div className="ft-cta">
          <div>
            <p className="ft-cta-label">Book Your Visit</p>
            <h2 className="ft-cta-heading">
              Ready for your <em>transformation?</em>
            </h2>
          </div>
          <div className="ft-cta-btns">
            <a
              href={SITE.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="ft-btn-gold"
            >
              <MessageCircle size={14} strokeWidth={1.5} />
              WhatsApp Us
            </a>
            <a href={`tel:${SITE.phonesRaw[0]}`} className="ft-btn-outline">
              <Phone size={14} strokeWidth={1.5} />
              Call Now
            </a>
          </div>
        </div>

        {/* ── Main 4-col grid ── */}
        <div className="ft-grid">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center mb-4 transition-transform hover:-translate-y-1 duration-300">
              <img src="/logo.png" alt="CityCalls Saloon" className="h-12 md:h-14 w-auto object-contain brightness-0 invert" />
            </Link>

            <p className="ft-tagline">{SITE.tagline}</p>
            <p className="ft-desc">
              A luxury beauty studio crafted for women who appreciate detail,
              intention, and timeless elegance.
            </p>

            <div className="ft-socials">
              <a
                href={SITE.socials.instagram}
                aria-label="Instagram"
                className="ft-social"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href={SITE.socials.facebook}
                aria-label="Facebook"
                className="ft-social"
              >
                <Facebook size={15} strokeWidth={1.5} />
              </a>
              <a
                href={SITE.socials.whatsapp}
                aria-label="WhatsApp"
                className="ft-social"
              >
                <WhatsAppIcon size={15} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="ft-col-heading">Explore</h4>
            <ul className="ft-nav-list">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link href={l.to} className="ft-nav-link">
                    {l.label}
                    <ArrowUpRight size={11} strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="ft-col-heading">Services</h4>
            <ul className="ft-nav-list">
              {SERVICE_CATEGORIES.slice(0, 6).map((s) => (
                <li key={s.key}>
                  <Link href="/services" className="ft-nav-link">
                    {s.title}
                    <ArrowUpRight size={11} strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="ft-col-heading">Get In Touch</h4>
            <ul className="ft-contact-list">
              <li className="ft-contact-item">
                <div className="ft-contact-icon">
                  <Phone size={14} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="ft-contact-label">Call Us</span>
                  <a
                    href={`tel:${SITE.phonesRaw[0]}`}
                    className="ft-contact-value"
                  >
                    {SITE.phones[0]}
                  </a>
                </div>
              </li>

              <li className="ft-contact-item">
                <div className="ft-contact-icon">
                  <Mail size={14} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="ft-contact-label">Email</span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="ft-contact-value"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>

              <li className="ft-contact-item">
                <div className="ft-contact-icon">
                  <MapPin size={14} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="ft-contact-label">Location</span>
                  <span className="ft-contact-value">{SITE.address}</span>
                </div>
              </li>

              <li className="ft-contact-item">
                <div className="ft-contact-icon">
                  <Clock size={14} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="ft-contact-label">Hours</span>
                  <span className="ft-contact-value">{SITE.hours}</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[rgba(201,168,76,0.15)]">
              <h4 className="ft-col-heading !mb-3">Download Our App</h4>
              <div className="flex items-center gap-2.5 flex-wrap">
                <a
                  href="#"
                  className="transition-transform hover:scale-105"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src="/play.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto object-contain rounded"
                  />
                </a>
                <a
                  href="#"
                  className="transition-transform hover:scale-105"
                  aria-label="Download on the App Store"
                >
                  <img
                    src="/apple.png"
                    alt="Download on the App Store"
                    className="h-10 w-auto object-contain rounded"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="ft-divider" />

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
