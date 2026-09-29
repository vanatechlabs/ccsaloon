"use client";

import { useState, useEffect } from "react";
import { Facebook, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const GOLD = "#b8945a";
const DARK = "#0e0c0b";

const socialData = [
  { icon: Facebook,  url: "https://www.facebook.com/namogangewellness.event", label: "Facebook"  },
  { icon: Instagram, url: "https://instagram.com",                             label: "Instagram" },
  { icon: Twitter,   url: "https://twitter.com",                               label: "Twitter"   },
  { icon: Youtube,   url: "https://youtube.com",                               label: "YouTube"   },
  { icon: Linkedin,  url: "https://linkedin.com",                              label: "LinkedIn"  },
];

export function SocialSidebar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes sb-slide-in {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes sb-fill-up {
          from { height: 0;    }
          to   { height: 100%; }
        }

        .sb-item {
          opacity: 0;
          transform: translateX(20px);
        }
        .sb-item.sb-show {
          animation: sb-slide-in 0.55s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        .sb-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #ffffff;
          white-space: nowrap;
          max-width: 0;
          overflow: hidden;
          opacity: 0;
          padding-right: 0;
          transition:
            max-width  0.4s cubic-bezier(0.25,0.46,0.45,0.94),
            opacity    0.3s ease,
            padding-right 0.3s ease;
        }
        .sb-item:hover .sb-label {
          max-width: 80px;
          opacity: 1;
          padding-right: 12px;
        }

        .sb-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border: 0.5px solid rgba(184,148,90,0.22);
          background: rgba(14,12,11,0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          flex-shrink: 0;
          transition: border-color 0.3s ease, background 0.3s ease;
          border-radius: 0;
        }
        .sb-item:hover .sb-btn {
          border-color: ${GOLD};
          background: rgba(184,148,90,0.07);
        }

        /* fill wipe from bottom */
        .sb-fill {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 0;
          background: rgba(184,148,90,0.06);
          transition: height 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
          pointer-events: none;
        }
        .sb-item:hover .sb-fill { height: 100%; }

        /* top-right corner accent */
        .sb-corner {
          position: absolute;
          top: 0; right: 0;
          width: 0; height: 0;
          border-top:  7px solid ${GOLD};
          border-left: 7px solid transparent;
          opacity: 0;
          transition: opacity 0.25s ease;
          pointer-events: none;
        }
        .sb-item:hover .sb-corner { opacity: 1; }

        /* left edge line */
        .sb-ledge {
          position: absolute;
          left: 0; top: 50%;
          transform: translateY(-50%);
          width: 0; height: 1px;
          background: ${GOLD};
          transition: width 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
          pointer-events: none;
        }
        .sb-item:hover .sb-ledge { width: 3px; }

        /* icon */
        .sb-icon {
          position: relative;
          z-index: 1;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .sb-item:hover .sb-icon {
          color: #ffffff;
          transform: scale(1.15);
        }

        /* vertical track line */
        .sb-track {
          position: absolute;
          right: 19px;          /* center of 38px button */
          top: 50%;
          transform: translateY(-50%);
          width: 0.5px;
          height: 60%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(184,148,90,0.18),
            transparent
          );
          pointer-events: none;
        }
      `}</style>

      {/* Fixed sidebar */}
      <div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[5px] items-end"
        style={{ position: "fixed" }}
      >
        {/* Vertical decorative track */}
        <div className="sb-track" />

        {socialData.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.label}
              className={`sb-item flex items-center cursor-pointer ${visible ? "sb-show" : ""}`}
              style={{ animationDelay: `${i * 0.08 + 0.1}s` }}
            >
              <span className="sb-label">{s.label}</span>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="sb-btn"
              >
                <div className="sb-fill" />
                <div className="sb-corner" />
                <div className="sb-ledge" />
                <Icon size={15} className="sb-icon" strokeWidth={1.5} />
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}
