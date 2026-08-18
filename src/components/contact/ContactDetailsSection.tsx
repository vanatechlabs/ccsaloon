import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";

const schema = z.object({
  name: z.string().min(2, "Please share your name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email"),
  service: z.string().min(1, "Pick a service"),
  date: z.string().min(1, "Pick a preferred date"),
  message: z.string().max(500).optional(),
});

type FormVals = z.infer<typeof schema>;

const INFO = [
  { icon: MapPin, label: "Address", key: "address" as const },
  { icon: Phone, label: "Phone", key: "phones" as const },
  { icon: Clock, label: "Hours", key: "hours" as const },
  { icon: Mail, label: "Email", key: "email" as const },
];

const inputCls =
  "w-full rounded-[4px] border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.03)] px-3.5 py-2.5 font-[Jost] text-xs font-light text-[#f5edd8] placeholder:text-[rgba(245,237,216,0.2)] outline-none transition-all duration-300 focus:border-[rgba(201,168,76,0.55)] focus:bg-[rgba(201,168,76,0.04)]";

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-[8.5px] font-medium uppercase tracking-[0.2em] text-[#c9a84c]">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-[11px] text-red-400">{error}</span>}
    </label>
  );
}

export function ContactDetailsSection() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormVals>({ resolver: zodResolver(schema) });

  const onSubmit = async (_v: FormVals) => {
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      className="relative overflow-hidden rounded-xl bg-[#0e0c09] px-6 py-14"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)" }}
      />

      {/* Corner brackets */}
      <span className="absolute top-4 left-5 h-4 w-4 border-t border-l border-[rgba(201,168,76,0.3)]" />
      <span className="absolute bottom-4 right-5 h-4 w-4 border-b border-r border-[rgba(201,168,76,0.3)]" />

      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.35fr]">

        {/* ── Left: Info ── */}
        <div>
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[rgba(201,168,76,0.45)]" />
            <span className="text-[9.5px] font-medium uppercase tracking-[0.22em] text-[#c9a84c]">
              Reach Us
            </span>
          </div>

          <h2
            className="text-[32px] font-light leading-tight text-[#f5edd8]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Walk in, dial in,{" "}
            <br />
            <em className="italic text-[#d4a843]">or message us.</em>
          </h2>
          <p className="mt-2 mb-7 text-xs font-light italic text-[rgba(245,237,216,0.35)]">
            We'd love to host you.
          </p>

          {/* Info cards */}
          <ul className="space-y-2 mb-6">
            {INFO.map(({ icon: Icon, label, key }) => {
              const val =
                key === "phones"
                  ? SITE.phones.join(" · ")
                  : SITE[key];
              return (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-md border border-[rgba(201,168,76,0.12)] bg-[rgba(255,255,255,0.02)] p-3.5 transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:bg-[rgba(201,168,76,0.03)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(201,168,76,0.35)] bg-[rgba(201,168,76,0.07)]">
                    <Icon className="h-3.5 w-3.5 text-[#c9a84c]" />
                  </span>
                  <div>
                    <p className="text-[8.5px] font-medium uppercase tracking-[0.2em] text-[#c9a84c]">
                      {label}
                    </p>
                    <p className="mt-0.5 text-[12px] font-light leading-relaxed text-[rgba(245,237,216,0.6)]">
                      {val}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href={SITE.socials.instagram}
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] transition-all hover:bg-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.5)]"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.socials.facebook}
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(201,168,76,0.3)] text-[#c9a84c] transition-all hover:bg-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.5)]"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.socials.whatsapp}
              className="ml-auto inline-flex items-center gap-2 bg-[#c9a84c] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#0e0c09] transition-opacity hover:opacity-88"
              style={{ borderRadius: "2px" }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div className="rounded-lg border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.02)] p-7">
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-2.5">
            <span className="h-px w-6 bg-[rgba(201,168,76,0.45)]" />
            <span className="text-[9.5px] font-medium uppercase tracking-[0.22em] text-[#c9a84c]">
              Booking Enquiry
            </span>
          </div>

          <h3
            className="text-2xl font-semibold text-[#f5edd8]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Tell us about your visit
          </h3>
          <p className="mt-1 mb-6 text-[11px] font-light text-[rgba(245,237,216,0.3)]">
            We'll confirm within 24 hours.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2.5 md:grid-cols-2">
              <Field label="Full Name" error={errors.name?.message}>
                <input {...register("name")} className={inputCls} placeholder="Your name" />
              </Field>

              <Field label="Phone" error={errors.phone?.message}>
                <input {...register("phone")} className={inputCls} placeholder="+91 ..." />
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <input {...register("email")} type="email" className={inputCls} placeholder="you@email.com" />
              </Field>

              <Field label="Service" error={errors.service?.message}>
                <select {...register("service")} className={inputCls}>
                  <option value="" className="bg-[#0e0c09] text-[#f5edd8]">Select a service</option>
                  {SERVICE_CATEGORIES.map((c) => (
                    <option key={c.key} value={c.title} className="bg-[#0e0c09] text-[#f5edd8]">{c.title}</option>
                  ))}
                </select>
              </Field>

              <Field label="Preferred Date" error={errors.date?.message}>
                <input {...register("date")} type="date" className={inputCls} />
              </Field>

              <Field label="Message (optional)" error={errors.message?.message} className="md:col-span-2">
                <textarea
                  {...register("message")}
                  rows={3}
                  className={`${inputCls} resize-none`}
                  placeholder="Anything you'd like us to know…"
                />
              </Field>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 bg-[#c9a84c] px-6 py-3 text-[9.5px] font-medium uppercase tracking-[0.22em] text-[#0e0c09] transition-opacity hover:opacity-88 disabled:opacity-60"
                style={{ borderRadius: "2px" }}
              >
                {isSubmitting ? "Sending…" : "Send Request"}
                <Send className="h-3 w-3" />
              </button>

              {sent && (
                <span className="flex items-center gap-2 text-[11px] font-light text-[#c9a84c]">
                  <CheckCircle2 className="h-4 w-4" />
                  Thanks! We'll be in touch shortly.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-[3px] w-[3px] rounded-full bg-[rgba(201,168,76,0.35)]" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.35)]" />
      </div>
    </section>
  );
}
