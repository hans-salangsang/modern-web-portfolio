 "use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HoverRevealText from "./HoverRevealText";

type KpiCardProps = {
  label: string;
  value: number;
  suffix?: string;
  description: string;
  className?: string;
  durationMs?: number;
};

export default function KpiCard({
  label,
  value,
  suffix = "",
  description,
  className = "",
  durationMs,
}: KpiCardProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const target = value;
    const duration = durationMs ?? 2000; // ms
    let start: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const t = Math.min((timestamp - start) / duration, 1);
      // Very smooth ease-out so it clearly slows near the end
      const eased = 1 - Math.pow(1 - t, 4);
      const current = Math.round(eased * target);
      setDisplayValue(current);
      if (t < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return (
    <motion.div
      className={`group flex flex-col items-start text-left gap-3 min-w-0 ${className}`.trim()}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <span className="font-body text-base font-normal text-foreground tracking-normal uppercase">
        {label}
      </span>
      <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-normal leading-none">
        <HoverRevealText>
          {displayValue}
          {suffix}
        </HoverRevealText>
      </span>
      <p className="font-body text-sm text-muted leading-normal mt-1 max-w-[280px] sm:max-w-[320px]">
        {description}
      </p>
    </motion.div>
  );
}

