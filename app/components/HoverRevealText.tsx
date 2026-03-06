"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type HoverRevealTextProps = {
  children: ReactNode;
};

export default function HoverRevealText({ children }: HoverRevealTextProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // On mobile / small screens, render static text with no hover animation
  if (!isDesktop) {
    return (
      <span className="inline-flex relative overflow-hidden align-baseline pb-1">
        {children}
      </span>
    );
  }

  // Desktop: hover reveal animation
  return (
    <motion.span
      className="inline-flex relative overflow-hidden align-baseline pb-2"
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.span
        className="inline-block"
        variants={{
          rest: { y: "0%" },
          hover: { y: "-120%" },
        }}
        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="inline-block absolute left-0 top-0"
        variants={{
          rest: { y: "120%" },
          hover: { y: "0%" },
        }}
        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}


