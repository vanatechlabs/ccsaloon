import { Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function FloatingContact() {
  const phoneNumber = SITE.phonesRaw[0]; // Gets the primary number from your site config
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, "");
  const message = "Hello! I would like to book an appointment at SS Luxe Salon.";
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed left-4 bottom-6 z-50 flex flex-col items-center gap-4 lg:left-6 lg:bottom-8">
      <style>{`
        @keyframes floatPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes floatRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        .fc-btn {
          position: relative;
          z-index: 50;
          width: 44px;
          height: 44px;
          background: #0e0c0b;
          border: 1px solid rgba(201, 162, 39, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
          animation: floatPulse 2s ease-in-out infinite;
        }

        .fc-btn:hover {
          transform: scale(1.1) !important;
          background: #110f0d;
          border-color: #c9a227;
        }

        .fc-ring {
          position: absolute;
          inset: -2px;
          border-radius: 50%;
          border: 1.5px solid rgba(201, 162, 39, 0.4);
          animation: floatRing 2s ease-out infinite;
        }

        .fc-ring:nth-child(2) {
          animation-delay: 0.5s;
        }

        .fc-ring:nth-child(3) {
          animation-delay: 1s;
        }

        .fc-tooltip {
          position: absolute; left: 100%; margin-left: 12px; top: 50%;
          transform: translateY(-50%) translateX(-10px) scale(0.8); opacity: 0; pointer-events: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); white-space: nowrap;
        }
        .fc-btn:hover .fc-tooltip {
          opacity: 1; transform: translateY(-50%) translateX(0) scale(1);
        }
        .fc-tooltip-content {
          padding: 6px 12px; border-radius: 4px; color: #0e0c0b; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em;
          font-weight: bold; background-color: #c9a227; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5); position: relative;
        }
        .fc-tooltip-arrow {
          position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
          width: 0; height: 0; border-top: 5px solid transparent; border-bottom: 5px solid transparent; border-right: 5px solid #c9a227;
        }
      `}</style>

      {/* Call Button */}
      <a href={`tel:${phoneNumber}`} className="fc-btn group" aria-label="Call us">
        <div className="fc-ring"></div>
        <div className="fc-ring"></div>
        <Phone className="w-[18px] h-[18px] text-[#c9a227] group-hover:text-[#e8c97a] transition-colors" strokeWidth={1.5} />
        
        {/* Tooltip */}
        <div className="fc-tooltip">
          <div className="fc-tooltip-content">
            Call Us
            <div className="fc-tooltip-arrow"></div>
          </div>
        </div>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fc-btn group"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="fc-ring" style={{ animationDelay: "0.2s" }}></div>
        <div className="fc-ring" style={{ animationDelay: "0.7s" }}></div>
        <svg className="w-5 h-5 text-[#c9a227] group-hover:text-[#e8c97a] transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>

        {/* Tooltip */}
        <div className="fc-tooltip">
          <div className="fc-tooltip-content">
            WhatsApp
            <div className="fc-tooltip-arrow"></div>
          </div>
        </div>
      </a>
    </div>
  );
}
