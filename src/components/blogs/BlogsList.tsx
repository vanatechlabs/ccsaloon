import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { BLOGS } from "@/data/blogs";

const GOLD = "#c9a84c";
const CREAM = "#f5edd8";
const INK = "#0e0c09";

/* Reveal-on-scroll wrapper */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0px)" : "translateY(24px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function BlogsList() {
  const [featured, ...rest] = BLOGS;

  return (
    <div
      className="bg-[#0e0c09] text-[#f5edd8] min-h-screen font-['Jost',sans-serif] -mt-[68px] md:-mt-[100px] pt-[68px] md:pt-[100px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.08), transparent)",
      }}
    >
      {/* ── Hero / Header ── */}
      <header className="relative px-6 pt-2 pb-16 text-center overflow-hidden">
        {/* faint background type */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute inset-x-0 top-6 text-center font-['Cormorant_Garamond',serif] text-[22vw] leading-none font-light text-[rgba(201,168,76,0.04)] whitespace-nowrap"
        >
          Journal
        </span>

        <div className="relative">
          <div className="mx-auto mb-6 flex w-fit items-center gap-3 text-[14px] font-medium tracking-[0.4em] uppercase text-[#c9a84c]">
            <span className="h-px w-8 bg-[#c9a84c]/50" />
            Insights &amp; Trends
            <span className="h-px w-8 bg-[#c9a84c]/50" />
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.75rem,7vw,5.5rem)] font-light leading-[1.05] text-[#f5edd8]">
            The CityCalls Saloon{" "}
            <em className="italic text-[#c9a84c]">Journal</em>
          </h1>

          <p className="mt-6 text-[12px] sm:text-[13px] font-light tracking-[0.05em] text-[rgba(245,237,216,0.55)] max-w-xl mx-auto leading-relaxed">
            Notes on beauty rituals, seasonal trends and the craft behind
            every appointment — written by the CityCalls Saloon team.
          </p>
        </div>
      </header>

      {/* ── Featured Post ── */}
      {featured && (
        <section className="mx-auto max-w-5xl px-6 pb-6">
          <Reveal>
            <Link
              to={`/blogs/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.18)] bg-[#12100d] transition-colors duration-500 hover:border-[rgba(201,168,76,0.45)]"
            >
              <div className="relative aspect-[4/3] md:aspect-auto md:h-[280px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c09]/70 via-transparent to-transparent md:bg-gradient-to-r" />
                <div className="absolute top-5 left-5 rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(14,12,9,0.65)] backdrop-blur-sm px-3 py-1 text-[9px] font-medium tracking-[0.25em] uppercase text-[#c9a84c]">
                  Featured
                </div>
              </div>

              <div className="flex flex-col justify-center p-6">
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[rgba(201,168,76,0.7)] mb-3">
                  {featured.date} · {featured.category}
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl font-light leading-tight text-[#f5edd8] mb-3 group-hover:text-[#c9a84c] transition-colors duration-300">
                  {featured.title}
                </h2>
                <p className="text-[13px] font-light text-[rgba(245,237,216,0.6)] leading-relaxed mb-6 line-clamp-2">
                  {featured.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.25em] uppercase text-[#c9a84c] transition-all duration-300 group-hover:gap-4 w-fit">
                  Read the story
                  <span className="h-px w-5 bg-[#c9a84c] relative">
                    <span className="absolute right-0 -top-[3px] h-[6px] w-[6px] border-r border-t border-[#c9a84c] rotate-45" />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </section>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="my-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.25)] to-transparent" />
          <div className="h-1.5 w-1.5 rotate-45 bg-[#c9a84c]/60" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.25)] to-transparent" />
        </div>
      </div>

      {/* ── Blogs Grid ── */}
      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((blog, i) => (
            <Reveal key={blog.id} delay={(i % 3) * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[rgba(201,168,76,0.15)] bg-[#12100d] transition-all duration-500 hover:-translate-y-1 hover:border-[rgba(201,168,76,0.4)] hover:shadow-[0_12px_40px_rgba(201,168,76,0.10)]">
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="block relative aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                  <div className="absolute top-4 left-4 rounded-full border border-[rgba(201,168,76,0.4)] bg-[rgba(14,12,9,0.7)] backdrop-blur-sm px-3 py-1 text-[9px] font-medium tracking-[0.2em] uppercase text-[#c9a84c]">
                    {blog.category}
                  </div>
                </Link>

                <div className="flex flex-col flex-1 p-6">
                  <p className="text-[10px] font-medium tracking-[0.15em] uppercase text-[rgba(201,168,76,0.6)] mb-3">
                    {blog.date}
                  </p>
                  <Link
                    to={`/blogs/${blog.slug}`}
                    className="block group-hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-semibold text-[#f5edd8] mb-3 leading-tight">
                      {blog.title}
                    </h2>
                  </Link>
                  <p className="text-[13px] font-light text-[rgba(245,237,216,0.6)] line-clamp-3 mb-6 flex-1">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-[rgba(201,168,76,0.1)]">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[#c9a84c] transition-all duration-300 hover:gap-3"
                    >
                      Read Article
                      <span className="h-[1px] w-4 bg-[#c9a84c] relative">
                        <span className="absolute right-0 -top-[3px] h-[6px] w-[6px] border-r border-t border-[#c9a84c] rotate-45" />
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
    </div>
  );
}