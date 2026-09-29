"use client";

// SS Luxe Salon — ServicesFaqSection.tsx (Premium Redesign)
// Dependencies: lucide-react, framer-motion, React 18+
// Google Fonts in index.html / layout.tsx:
// <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

import { useState } from "react";
import { Plus, Minus, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── FAQ DATA (replace with your @/data/faqs import) ─────────────────────────

const FAQS = [
  {
    q: "Do I need to book an appointment in advance?",
    a: "Yes, we highly recommend booking in advance to ensure your preferred time slot is available. You can book easily via WhatsApp or call us directly. Walk-ins are welcome based on availability.",
  },
  {
    q: "What brands of products do you use?",
    a: "We use only premium, dermatologist-approved products from top brands including VLCC, Lotus, O3+, and Rica. All our waxing services use high-quality products suited to your skin type.",
  },
  {
    q: "How long does a bridal makeup session take?",
    a: "A full bridal makeup session typically takes 2.5 to 3.5 hours depending on the look, hair styling, and any additional services. We recommend scheduling a trial session at least 2 weeks before your wedding day.",
  },
  {
    q: "Is there a difference between basic and Rica wax?",
    a: "Rica wax is a premium Italian wax that is gentler on sensitive skin, leaves less residue, and lasts longer than regular wax. It's ideal for finer hair and delicate areas, making it worth the upgrade.",
  },
  {
    q: "How long do nail extensions typically last?",
    a: "Gel and acrylic nail extensions generally last 3 to 4 weeks with proper care. We recommend avoiding harsh chemicals and wearing gloves when cleaning. Touch-ups are available to keep them looking fresh.",
  },
  {
    q: "Do you offer packages or combo deals?",
    a: "Yes! We offer special combo packages for brides, parties, and seasonal events. Contact us on WhatsApp for our latest offers and personalised packages tailored to your needs.",
  },
  {
    q: "Is it safe to get a facial during pregnancy?",
    a: "Many of our facials are safe during pregnancy, but we recommend informing our therapist before your session. We will suggest the most suitable treatment and avoid any ingredients not recommended for expectant mothers.",
  },
];

// ─── STYLES ──────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .faq-section {
    background: #090804;
    padding: 6rem 1.5rem 7rem;
    position: relative;
    overflow: hidden;
  }

  /* radial glow behind heading */
  .faq-section::before {
    content: '';
    position: absolute;
    top: 0; left: 50%;
    transform: translateX(-50%);
    width: 700px; height: 400px;
    background: radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── Heading block ── */
  .faq-head {
    text-align: center;
    margin-bottom: 3.5rem;
    position: relative;
    z-index: 1;
  }
  .faq-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #C9A84C;
    margin-bottom: 1.1rem;
  }
  .faq-eyebrow .dot {
    width: 4px; height: 4px;
    background: rgba(201,168,76,0.5);
    border-radius: 50%;
  }
  .faq-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 5vw, 3.8rem);
    font-weight: 600;
    color: #F0E4C4;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }
  .faq-title em {
    font-style: italic;
    color: #C9A84C;
    font-weight: 400;
  }
  .faq-ornament {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    margin: 1.4rem auto 0;
    max-width: 220px;
  }
  .faq-ornament .dash { flex: 1; height: 1px; background: rgba(201,168,76,0.25); }
  .faq-ornament .gem {
    width: 6px; height: 6px;
    background: #C9A84C;
    transform: rotate(45deg);
    border-radius: 1px;
    flex-shrink: 0;
  }

  /* ── FAQ list ── */
  .faq-list {
    position: relative;
    z-index: 1;
    max-width: 780px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  /* ── FAQ item ── */
  .faq-item {
    border-radius: 16px;
    border: 1px solid rgba(201,168,76,0.12);
    background: linear-gradient(160deg, #131108, #0D0B07);
    overflow: hidden;
    transition: border-color 0.3s ease;
    position: relative;
  }
  .faq-item::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .faq-item.open {
    border-color: rgba(201,168,76,0.28);
    box-shadow: 0 12px 40px rgba(0,0,0,0.3);
  }
  .faq-item.open::before { opacity: 1; }

  /* ── Question button ── */
  .faq-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 1.3rem 1.5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .faq-q-wrap { display: flex; align-items: center; gap: 1rem; flex: 1; min-width: 0; }

  .faq-num {
    font-family: 'Playfair Display', serif;
    font-size: 0.75rem;
    font-weight: 400;
    font-style: italic;
    color: rgba(201,168,76,0.4);
    flex-shrink: 0;
    min-width: 1.4rem;
    transition: color 0.25s;
  }
  .faq-item.open .faq-num { color: #C9A84C; }

  .faq-q {
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: #DDD3B8;
    line-height: 1.4;
    transition: color 0.25s;
  }
  .faq-item.open .faq-q { color: #F0E4C4; }

  /* ── Icon circle ── */
  .faq-icon {
    width: 32px; height: 32px;
    border-radius: 50%;
    border: 1px solid rgba(201,168,76,0.2);
    background: rgba(201,168,76,0.04);
    display: flex; align-items: center; justify-content: center;
    color: rgba(201,168,76,0.55);
    flex-shrink: 0;
    transition: all 0.25s ease;
  }
  .faq-item.open .faq-icon {
    background: rgba(201,168,76,0.1);
    border-color: rgba(201,168,76,0.4);
    color: #C9A84C;
  }

  /* ── Answer ── */
  .faq-answer {
    padding: 0 1.5rem 1.4rem 1.5rem;
    padding-left: calc(1.5rem + 1rem + 1.4rem); /* align under question text */
  }

  .faq-answer-divider {
    height: 1px;
    background: rgba(201,168,76,0.08);
    margin-bottom: 1.1rem;
  }

  .faq-a {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 300;
    color: #9E9480;
    line-height: 1.75;
  }

  /* ── Bottom strip ── */
  .faq-bottom {
    max-width: 780px;
    margin: 2.5rem auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1.4rem 1.8rem;
    background: rgba(201,168,76,0.03);
    border: 1px solid rgba(201,168,76,0.12);
    border-radius: 14px;
    position: relative;
    z-index: 1;
  }
  .faq-bottom-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 300;
    color: rgba(221,211,184,0.45);
  }
  .faq-bottom-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #C9A84C;
    text-decoration: none;
    letter-spacing: 0.04em;
    transition: color 0.2s;
    border-bottom: 1px solid rgba(201,168,76,0.3);
    padding-bottom: 1px;
  }
  .faq-bottom-link:hover { color: #E8D08A; border-color: rgba(232,208,138,0.5); }
`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export function ServicesFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <style>{CSS}</style>

      <section className="faq-section">
        {/* ── Heading ── */}
        <div className="faq-head">
          <p className="faq-eyebrow">
            <span className="dot" />
            Frequently Asked Questions
            <span className="dot" />
          </p>
          <h2 className="faq-title">
            Good To <em>Know</em>
          </h2>
          <div className="faq-ornament">
            <span className="dash" />
            <span className="gem" />
            <span className="dash" />
          </div>
        </div>

        {/* ── FAQ items ── */}
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={f.q}
                className={`faq-item${isOpen ? " open" : ""}`}
              >
                <button
                  className="faq-btn"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-q-wrap">
                    <span className="faq-num">0{i + 1}</span>
                    <span className="faq-q">{f.q}</span>
                  </div>
                  <div className="faq-icon">
                    {isOpen ? (
                      <Minus size={14} strokeWidth={2} />
                    ) : (
                      <Plus size={14} strokeWidth={2} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="faq-answer">
                        <div className="faq-answer-divider" />
                        <p className="faq-a">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ── Still have questions? ── */}
        <div className="faq-bottom">
          <Sparkles size={14} color="rgba(201,168,76,0.5)" strokeWidth={1.5} />
          <p className="faq-bottom-text">Still have a question?</p>
          <a
            href="https://wa.me/918796047447"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-bottom-link"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

export default ServicesFaqSection;
