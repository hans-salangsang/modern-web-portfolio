"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Phase = "idle" | "deleting" | "typing";

type TypewriterTextProps = {
  text: string;
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseBetweenMs?: number;
  className?: string;
};

export default function TypewriterText({
  text,
  typingSpeedMs = 60,
  deletingSpeedMs = 40,
  pauseBetweenMs = 3000,
  className,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [target, setTarget] = useState(text);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // Detect mobile viewport once on mount and on resize.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // When text prop changes, start a delete-then-type cycle.
  useEffect(() => {
    if (isMobile) {
      setTarget(text);
      setDisplayed(text);
      setPhase("idle");
      return;
    }
    if (text === target) return;
    setTarget(text);
    setPhase("deleting");
  }, [text, target, isMobile]);

  // When coming back from mobile to desktop, restart typing animation.
  useEffect(() => {
    if (isMobile === false) {
      setTarget(text);
      setDisplayed("");
      setPhase("typing");
    }
  }, [isMobile, text]);

  useEffect(() => {
    if (isMobile) return;
    if (phase === "idle") return;

    const isDeleting = phase === "deleting";
    const delay = isDeleting ? deletingSpeedMs : typingSpeedMs;

    const timeout = setTimeout(() => {
      if (phase === "deleting") {
        if (!displayed.length) {
          setPhase("typing");
          return;
        }
        setDisplayed(displayed.slice(0, -1));
        return;
      }

      if (phase === "typing") {
        const nextLength = displayed.length + 1;
        const next = target.slice(0, nextLength);

        setDisplayed(next);

        if (nextLength >= target.length) {
          setPhase("idle");
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [
    phase,
    target,
    displayed,
    typingSpeedMs,
    deletingSpeedMs,
    pauseBetweenMs,
  ]);

  // When idle and not hovered, loop the animation by starting a delete after a pause.
  useEffect(() => {
    if (isMobile) return;
    if (phase !== "idle" || hovered) return;
    if (displayed !== target) {
      // Ensure we show full text before looping again.
      setDisplayed(target);
      return;
    }
    const timeout = setTimeout(() => {
      setPhase("deleting");
    }, pauseBetweenMs);
    return () => clearTimeout(timeout);
  }, [phase, hovered, pauseBetweenMs, displayed, target]);

  // When hovered, show full text and pause the loop.
  useEffect(() => {
    if (isMobile) return;
    if (!hovered) return;
    setDisplayed(target);
    setPhase("idle");
  }, [hovered, target]);

  const baseClass = "relative inline-block";
  const mergedClass = className ? `${className} ${baseClass}` : baseClass;

  const Caret = () => (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute top-0 -right-[0.26em] bg-accent"
      style={{ width: 3, height: "0.9em", borderRadius: 9999 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0, 0] }}
      transition={{
        duration: 1.0,
        repeat: Infinity,
        ease: "linear",
        times: [0, 0.49, 0.5, 1],
      }}
    />
  );

  const splitLines = (value: string) => {
    const parts = value.split(" ");
    const firstLine = parts[0] ?? "";
    const rest = parts.length > 1 ? value.slice(firstLine.length + 1) : "";
    return { firstLine, rest };
  };

  return (
    <span
      className={mergedClass}
      onMouseEnter={!isMobile ? () => setHovered(true) : undefined}
      onMouseLeave={!isMobile ? () => setHovered(false) : undefined}
    >
      {/* Invisible placeholder to lock in final height (Hans + Salangsang on two lines) */}
      <span className="invisible block">
        {(() => {
          const { firstLine, rest } = splitLines(text);
          return (
            <>
              <span>{firstLine}</span>
              {rest && (
                <>
                  <br />
                  <span>{rest}</span>
                </>
              )}
            </>
          );
        })()}
      </span>

      {/* Animated text + caret overlayed on top */}
      <span className="absolute inset-0">
        {(() => {
          if (!displayed) return null;
          const { firstLine, rest } = splitLines(displayed);

          if (!rest) {
            // Still typing the first word
            return (
              <span className="relative inline-block">
                {firstLine}
                {!isMobile && <Caret />}
              </span>
            );
          }

          // Second line exists; caret sits at end of second line
          return (
            <>
              <span>{firstLine}</span>
              <br />
              <span className="relative inline-block">
                {rest}
                {!isMobile && <Caret />}
              </span>
            </>
          );
        })()}
      </span>
    </span>
  );
}

