import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { BookingDrawer } from "./BookingDrawer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Split NAV_LINKS into two halves
  const midpoint = Math.ceil(NAV_LINKS.length / 2);
  const leftNavLinks = NAV_LINKS.slice(0, midpoint);
  const rightNavLinks = NAV_LINKS.slice(midpoint);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 w-full z-50 transition-all duration-700 ease-in-out",
          isHome && !isScrolled
            ? "top-0 bg-transparent py-4"
            : "top-0 bg-[#0e1a0e]/95 backdrop-blur-md py-2 border-b border-[var(--gold)]/20 shadow-sm"
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-4 lg:-ml-24">
            {/* Left Navigation Links - Flexible container */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7 flex-1 max-w-[380px] justify-end">
              {leftNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-[11px] xl:text-[13px] uppercase tracking-[0.1em] xl:tracking-[0.15em] font-medium transition-all duration-300 relative group whitespace-nowrap",
                    "text-white hover:text-[var(--gold-light)]"
                  )}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] transition-all duration-300 group-hover:w-full",
                    isHome && !isScrolled ? "bg-white w-0" : "bg-[var(--gold)] w-0"
                  )} />
                </Link>
              ))}
            </div>

            {/* Centered Logo - Fixed width */}
            <Link
              to="/"
              className={cn(
                "transition-all duration-500 hover:opacity-80 flex-shrink-0"
              )}
            >
              {isHome && !isScrolled ? (
                <div className="flex flex-col items-center min-w-[120px] xl:min-w-[160px]">
                  <img
                    src="/logo.png"
                    alt="CityCalls Saloon"
                    className="h-12 xl:h-16 w-auto object-contain brightness-0 invert"
                  />
                </div>
              ) : (
                <div className="relative min-w-[120px] xl:min-w-[160px] flex justify-center items-center">
                  <img
                    src="/logo.png"
                    alt="CityCalls Saloon"
                    className="relative z-10 h-10 xl:h-12 w-auto object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
              )}
            </Link>

            {/* Right Navigation Links - Flexible container */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-7 flex-1 max-w-[380px]">
              {rightNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-[11px] xl:text-[13px] uppercase tracking-[0.1em] xl:tracking-[0.15em] font-medium transition-all duration-300 relative group whitespace-nowrap",
                    "text-white hover:text-[var(--gold-light)]"
                  )}
                  style={{ fontFamily: "'Roboto', sans-serif" }}
                >
                  {link.label}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-[2px] transition-all duration-300 group-hover:w-full",
                    isHome && !isScrolled ? "bg-white w-0" : "bg-[var(--gold)] w-0"
                  )} />
                </Link>
              ))}
            </div>

            {/* Right Side Icons - Positioned to the right */}
            <div
              className={cn(
                "flex items-center gap-4 xl:gap-6 ml-auto lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 transition-colors duration-300 text-white"
              )}
            >
              <button
                onClick={() => setIsBookingOpen(true)}
                className={cn(
                  "hidden xl:flex items-center justify-center rounded-none uppercase text-[11px] tracking-[0.12em] font-semibold px-5 h-9 transition-all duration-300 border",
                  isHome && !isScrolled
                    ? "border-white/40 text-white hover:bg-white hover:text-black bg-transparent"
                    : "border-[var(--gold)]/50 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black bg-transparent"
                )}
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                Book Appointment
              </button>

              <button
                className="xl:hidden flex items-center justify-center p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0e1a0e]/95 shadow-2xl z-50 lg:hidden border-l border-[var(--gold)]/20 text-white"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <span
                    className="text-lg font-semibold tracking-wider uppercase"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Menu
                  </span>
                  <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col space-y-1 px-6">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base uppercase tracking-[0.12em] font-medium py-3 border-b border-white/10 hover:text-[var(--gold)] transition-colors"
                        style={{ fontFamily: "'Roboto', sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-6 px-6 flex flex-col gap-3">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsBookingOpen(true);
                      }}
                      className="w-full flex items-center justify-center rounded-none uppercase text-xs tracking-[0.15em] font-semibold h-11 bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-black"
                      style={{ fontFamily: "'Roboto', sans-serif" }}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>

                <div className="p-6 border-t border-white/10 bg-black/40">
                  <p
                    className="text-xs text-white/50 uppercase tracking-wider"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    Est. 2024 — Luxury Beauty
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
