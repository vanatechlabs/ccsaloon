import { Link } from "@tanstack/react-router";
import { type Blog } from "@/data/blogs";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export function BlogDetail({ blog }: { blog: Blog }) {
  return (
    <div className="bg-[#0e0c09] text-[#f5edd8] min-h-screen font-['Jost',sans-serif] -mt-[68px] md:-mt-[100px] pt-[68px] md:pt-[100px]">
      {/* ── Hero / Header ── */}
      <header className="relative pt-8 pb-12 lg:pt-10 lg:pb-16 border-b border-[rgba(201,168,76,0.15)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-transparent to-[#c9a84c]" />
        
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[#c9a84c] mb-8 transition-colors hover:text-[#f5edd8]"
          >
            <ArrowLeft className="h-3 w-3" />
            Back to Journal
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium tracking-[0.15em] uppercase text-[rgba(201,168,76,0.6)] mb-6">
            <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {blog.date}</span>
            <span className="h-1 w-1 rounded-full bg-[rgba(201,168,76,0.3)]" />
            <span className="flex items-center gap-1.5"><Tag className="h-3 w-3" /> {blog.category}</span>
          </div>

          <h1 className="font-['Cormorant_Garamond',serif] text-[clamp(2.5rem,5vw,4rem)] font-light leading-[1.1] text-[#f5edd8] mb-8">
            {blog.title}
          </h1>

          <div className="mx-auto flex max-w-[120px] items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c9a84c]" />
            <div className="h-1.5 w-1.5 rotate-45 bg-[#c9a84c]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c9a84c]" />
          </div>
        </div>
      </header>

      {/* ── Featured Image ── */}
      <div className="mx-auto max-w-5xl px-6 -mt-8 relative z-10">
        <div className="rounded-2xl overflow-hidden border border-[rgba(201,168,76,0.2)] shadow-2xl aspect-[16/9] lg:aspect-[2/1]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Content ── */}
      <main className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <div className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:text-[rgba(245,237,216,0.7)] prose-p:leading-relaxed prose-headings:font-['Cormorant_Garamond',serif] prose-headings:font-light prose-headings:text-[#f5edd8]">
          <p className="text-xl lg:text-2xl font-['Cormorant_Garamond',serif] italic text-[#c9a84c] mb-10 text-center leading-relaxed">
            "{blog.excerpt}"
          </p>
          
          <div className="whitespace-pre-wrap text-[15px] lg:text-[16px] leading-[1.9] tracking-wide">
            {blog.content}
          </div>
        </div>

        {/* ── Share & Tags ── */}
        <div className="mt-16 pt-8 border-t border-[rgba(201,168,76,0.15)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[rgba(201,168,76,0.6)]">
              Tags:
            </span>
            <span className="rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.05)] px-4 py-1.5 text-[9px] font-medium tracking-[0.15em] uppercase text-[#c9a84c]">
              {blog.category}
            </span>
            <span className="rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.05)] px-4 py-1.5 text-[9px] font-medium tracking-[0.15em] uppercase text-[#c9a84c]">
              SS Luxe
            </span>
          </div>

          <Link
            to="/services"
            className="rounded-full border border-[#c9a84c] bg-[#c9a84c] px-8 py-3 text-[10px] font-medium tracking-[0.2em] uppercase text-[#0e0c09] transition-all hover:bg-transparent hover:text-[#c9a84c]"
          >
            Book An Appointment
          </Link>
        </div>
      </main>
    </div>
  );
}
