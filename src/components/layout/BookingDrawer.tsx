import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SERVICE_CATEGORIES } from "@/data/services";

const schema = z.object({
  name: z.string().min(2, "Please share your name"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").optional().or(z.literal("")),
  service: z.string().min(1, "Pick a service"),
  date: z.string().min(1, "Pick a preferred date"),
});

type FormVals = z.infer<typeof schema>;

const inputCls =
  "w-full rounded-[4px] border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.03)] px-3.5 py-3 font-[Jost] text-[13px] font-light text-[#f5edd8] placeholder:text-[rgba(245,237,216,0.3)] outline-none transition-all duration-300 focus:border-[rgba(201,168,76,0.55)] focus:bg-[rgba(201,168,76,0.04)]";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block mb-4">
      <span className="mb-1.5 block text-[9.5px] font-medium uppercase tracking-[0.2em] text-[#c9a84c]">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[11px] text-red-400">{error}</span>}
    </label>
  );
}

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingDrawer({ isOpen, onClose }: BookingDrawerProps) {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormVals>({ resolver: zodResolver(schema) });

  const onSubmit = async (_v: FormVals) => {
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer (Sliding from Left) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-[70] flex w-[90%] max-w-[420px] flex-col border-r border-[rgba(201,168,76,0.15)] bg-[#0e0c09] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[rgba(201,168,76,0.15)] px-7 py-6">
              <div>
                <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-[#c9a84c] mb-1">
                  Reserve Your Spot
                </p>
                <h2 className="font-['Cormorant_Garamond',serif] text-2xl font-light text-[#f5edd8]">
                  Book Appointment
                </h2>
              </div>
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(201,168,76,0.2)] text-[rgba(201,168,76,0.6)] transition-all hover:border-[rgba(201,168,76,0.5)] hover:text-[#c9a84c]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto px-7 py-8 hide-scrollbar">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#c9a84c] bg-[rgba(201,168,76,0.1)] text-[#c9a84c]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl text-[#f5edd8] mb-2">
                    Request Received
                  </h3>
                  <p className="text-xs font-light tracking-wide text-[rgba(245,237,216,0.5)] leading-relaxed">
                    Thank you for choosing SS Luxe. Our concierge will contact you shortly to confirm your booking.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full justify-between">
                  <div>
                    <Field label="Full Name *" error={errors.name?.message}>
                      <input {...register("name")} className={inputCls} placeholder="e.g. Aanya Sharma" />
                    </Field>

                    <Field label="Phone Number *" error={errors.phone?.message}>
                      <input {...register("phone")} className={inputCls} placeholder="+91 99999 99999" />
                    </Field>

                    <Field label="Email Address (Optional)" error={errors.email?.message}>
                      <input {...register("email")} type="email" className={inputCls} placeholder="your@email.com" />
                    </Field>

                    <Field label="Select Service *" error={errors.service?.message}>
                      <select {...register("service")} className={inputCls}>
                        <option value="" className="bg-[#0e0c09] text-[#f5edd8]">Choose a category...</option>
                        {SERVICE_CATEGORIES.map((c) => (
                          <option key={c.key} value={c.title} className="bg-[#0e0c09] text-[#f5edd8]">
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field label="Preferred Date *" error={errors.date?.message}>
                      <input {...register("date")} type="date" className={inputCls} />
                    </Field>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[rgba(201,168,76,0.1)]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-3 bg-[#c9a84c] px-6 py-4 text-[11px] font-medium tracking-[0.25em] uppercase text-[#0e0c09] transition-all hover:bg-[#d4a843] disabled:opacity-70"
                      style={{ borderRadius: "2px" }}
                    >
                      {isSubmitting ? "Processing..." : "Confirm Booking"}
                      <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="mt-4 text-center text-[10px] text-[rgba(245,237,216,0.3)]">
                      By booking, you agree to our salon policies.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
