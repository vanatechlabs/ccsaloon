"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function Counter({ end, suffix = "", prefix = "", label, duration = 2.4 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  return (
    <div ref={ref} className="text-center relative px-4 group">
      <div className="font-display text-5xl md:text-[3.5rem] text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-500 font-semibold tracking-tight">
        {inView ? <CountUp end={end} duration={duration} prefix={prefix} suffix={suffix} separator="," /> : `${prefix}0${suffix}`}
      </div>
      <p className="mt-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60">{label}</p>
    </div>
  );
}
