import { useMemo, useState } from "react";
import { Sparkles, Scissors, Droplets, HandMetal, Brush, Wand2, Search, Phone, ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    key: "beauty",
    icon: Sparkles,
    title: "Beauty Services",
    items: [
      { name: "Eyebrows", price: 40 },
      { name: "Upper Lips", price: 20 },
      { name: "Forehead", price: 20 },
      { name: "Chin", price: 20 },
      { name: "Eyebrows (Wax)", price: 100 },
      { name: "Upper Lips (Wax)", price: 60 },
      { name: "Forehead (Wax)", price: 40 },
      { name: "Chin (Wax)", price: 40 },
      { name: "Side Lock Wax", price: 200 },
      { name: "Face Wax", price: 400 },
      { name: "Under Arms (Normal)", price: 80 },
      { name: "Under Arms (Rica)", price: 100 },
      { name: "Hand Wax (Normal)", price: 250 },
      { name: "Half Legs Wax (Normal)", price: 400 },
      { name: "Full Legs Wax (Normal)", price: 600 },
      { name: "Hand Wax (Rica)", price: 400 },
      { name: "Half Legs Wax (Rica)", price: 500 },
      { name: "Full Legs Wax (Rica)", price: 800 },
      { name: "B. Wax (Normal)", price: 1500, popular: true },
      { name: "B. Wax (Rica)", price: 2000 },
    ],
  },
  {
    key: "hair",
    icon: Scissors,
    title: "Hair Services",
    items: [
      { name: "Headwash", price: 200 },
      { name: "Blow Dryer", price: 300 },
      { name: "Hair Spa (Basic)", price: 800 },
      { name: "Hair Spa (Advance)", price: 1200 },
      { name: "Baby Haircuts", price: 250 },
      { name: "Haircuts", price: 500 },
      { name: "Smoothing / Rebonding", price: 3000, popular: true },
      { name: "Keratin", price: 2500, popular: true },
      { name: "Botox", price: 3500 },
      { name: "Nenoplastia", price: 5000 },
      { name: "Highlights Per Stick", price: 250 },
      { name: "Global Color", price: 3000 },
      { name: "Highlights + Global Color", price: 5000 },
      { name: "Hair Ironing", price: 500 },
      { name: "Hair Curls", price: 700 },
      { name: "Advance Hairstyling", price: 1000 },
    ],
  },
  {
    key: "facials",
    icon: Droplets,
    title: "Facials",
    items: [
      { name: "Cleanup", price: 800 },
      { name: "Face Bleach", price: 200 },
      { name: "Full Back Bleach", price: 200 },
      { name: "Face Dtan", price: 500 },
      { name: "Skin Brightening Mask", price: 500 },
      { name: "VLCC Facial", price: 1000 },
      { name: "Lotus Facial", price: 1500, popular: true },
      { name: "Kanpeki", price: 2000 },
      { name: "O3+ Facial", price: 2500 },
      { name: "Hydra Facial", price: 3500, popular: true },
    ],
  },
  {
    key: "mani-pedi",
    icon: HandMetal,
    title: "Mani / Pedi Services",
    items: [
      { name: "Manicure (Basic)", price: 500 },
      { name: "Manicure (Deluxe)", price: 800, popular: true },
      { name: "Foot Massage", price: 350 },
      { name: "Pedicure (Basic)", price: 800 },
      { name: "Pedicure (Deluxe)", price: 1200, popular: true },
    ],
  },
  {
    key: "makeup",
    icon: Brush,
    title: "Makeup",
    items: [
      { name: "Basic Makeup", price: 1500 },
      { name: "Party Makeup", price: 2500, popular: true },
      { name: "HD Party Makeup", price: 3500 },
      { name: "HD + Airbrush Party Makeup", price: 5000 },
      { name: "Engagement Makeup", price: 8000 },
      { name: "Reception Makeup", price: 10000 },
      { name: "Bridal Makeup", price: 15000, popular: true },
    ],
  },
  {
    key: "nails",
    icon: Wand2,
    title: "Nail Services",
    items: [
      { name: "Nail Paint Overlay", price: 600 },
      { name: "Nail Extension", price: 800 },
      { name: "Acrylic Nails Extensions", price: 1400 },
      { name: "Gel Nail Extensions", price: 1200, popular: true },
      { name: "French Nails Art", price: 300 },
      { name: "Ombre Nails Art", price: 400 },
      { name: "Cat Eye Nail Art", price: 600 },
      { name: "Advance Chrome Nail Art", price: 200 },
      { name: "Brush Nail Art Per Finger", price: 50 },
      { name: "Poly Gel Nail", price: 1400 },
    ],
  },
];

const WHATSAPP = "https://wa.me/917428808884";

export function ServicesMenuSection() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const pool = active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.key === active);
    if (!query.trim()) return pool;
    const q = query.toLowerCase();
    return pool
      .map((c) => ({
        ...c,
        items: c.items.filter((i) => i.name.toLowerCase().includes(q)),
      }))
      .filter((c) => c.items.length > 0);
  }, [active, query]);

  return (
    <div className="bg-[#0e0c09] text-[#f5edd8] min-h-screen font-['Jost',sans-serif]">
      {/* ── Hero / Header ── */}
      <header className="relative px-6 pt-24 pb-12 text-center border-b border-[rgba(201,168,76,0.15)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#c9a84c]" />
        
        <p className="mb-4 text-[14px] font-medium tracking-[0.35em] uppercase text-[#c9a84c]">
          Established in Excellence
        </p>
        <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] text-[#f5edd8]">
          SS <em className="italic text-[#c9a84c]">Luxe</em> Salon
        </h1>
        
        <div className="mx-auto my-6 flex max-w-[260px] items-center justify-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a84c]" />
          <div className="h-1.5 w-1.5 rotate-45 bg-[#c9a84c]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a84c]" />
        </div>
        
        <p className="text-[11px] font-medium tracking-[0.22em] uppercase text-[rgba(232,215,140,0.45)]">
          Service Price List
        </p>
      </header>

      {/* ── Filters & Search ── */}
      <div className="sticky top-[57px] xl:top-[65px] z-40 bg-[rgba(14,12,9,0.95)] px-6 py-6 border-b border-[rgba(201,168,76,0.15)] backdrop-blur-md">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 lg:flex-row">
          
          {/* Categories */}
          <nav className="flex w-full overflow-x-auto hide-scrollbar gap-2 lg:w-auto" aria-label="Filter services">
            {[{ key: "all", label: "All Services" }, ...CATEGORIES.map((c) => ({ key: c.key, label: c.title }))].map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[10px] font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                  active === t.key
                    ? "border-[#c9a84c] bg-[#c9a84c] text-[#0e0c09]"
                    : "border-[rgba(201,168,76,0.25)] text-[rgba(245,237,216,0.6)] hover:border-[#c9a84c] hover:text-[#f5edd8]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* Search */}
          <div className="relative w-full max-w-[260px] shrink-0">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#c9a84c]" />
            <input
              type="search"
              placeholder="Search a service..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(255,255,255,0.02)] py-3 pl-12 pr-6 text-sm text-[#f5edd8] placeholder-[rgba(245,237,216,0.3)] outline-none transition-all focus:border-[#c9a84c]"
            />
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        {visible.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-sm font-light tracking-[0.1em] text-[rgba(245,237,216,0.4)]">
              No services found for "{query}"
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((cat) => (
            <article
              key={cat.key}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#12100d] transition-all duration-500 hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_8px_30px_rgba(201,168,76,0.08)]"
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 border-b border-[rgba(201,168,76,0.1)] px-7 py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)] text-[#c9a84c] transition-transform duration-500 group-hover:scale-110">
                  <cat.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#f5edd8]">
                    {cat.title}
                  </h2>
                  <p className="mt-1 text-[9px] font-medium tracking-[0.15em] uppercase text-[rgba(201,168,76,0.6)]">
                    {cat.items.length} services
                  </p>
                </div>
              </div>

              {/* Items List */}
              <ul className="flex-1 divide-y divide-dashed divide-[rgba(201,168,76,0.1)] px-3 py-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-lg px-4 py-3.5 transition-colors hover:bg-[rgba(201,168,76,0.04)]"
                  >
                    <div className="flex flex-1 items-center gap-3">
                      <span className="text-[13.5px] font-light text-[#e0d6c1]">
                        {item.name}
                      </span>
                      {item.popular && (
                        <span className="rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.05)] px-2 py-0.5 text-[7px] font-medium tracking-[0.15em] uppercase text-[#c9a84c]">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 font-['Cormorant_Garamond',serif] text-[1.15rem] font-semibold text-[#c9a84c]">
                      <span className="mr-0.5 text-xs opacity-70 font-sans font-light">₹</span>
                      {item.price.toLocaleString("en-IN")}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Card Footer */}
              <div className="border-t border-[rgba(201,168,76,0.1)] p-5">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-[rgba(201,168,76,0.4)] px-6 py-3.5 text-[10px] font-medium tracking-[0.25em] uppercase text-[#c9a84c] transition-all duration-300 hover:bg-[#c9a84c] hover:text-[#0e0c09]"
                >
                  Book {cat.title}
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[rgba(201,168,76,0.15)] bg-[#0a0806] px-6 py-16 text-center">
        <p className="font-['Cormorant_Garamond',serif] text-3xl font-light italic text-[rgba(245,237,216,0.7)]">
          Beauty Begins Here, Confidence Stays Forever.
        </p>
        <div className="mx-auto mt-8 mb-6 h-px w-24 bg-[rgba(201,168,76,0.3)]" />
        <p className="mb-4 text-[9px] font-medium tracking-[0.3em] uppercase text-[rgba(201,168,76,0.6)]">
          Book Your Appointment Today
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-lg font-light text-[#c9a84c]">
          <a href="tel:7428808884" className="flex items-center gap-2 transition-colors hover:text-[#f5edd8]">
            <Phone className="h-4 w-4" /> 7428808884
          </a>
        </div>
      </footer>
    </div>
  );
}

export default ServicesMenuSection;
