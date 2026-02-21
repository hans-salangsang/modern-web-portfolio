"use client";

import { type ReactNode } from "react";

type CvDownloadLinkProps = {
  href?: string;
  downloadFilename?: string;
  children?: ReactNode;
  className?: string;
};

const baseClasses =
  "font-body text-sm font-normal tracking-[0.08em] uppercase text-foreground underline underline-offset-8 hover:opacity-80 transition-opacity cursor-pointer";

export default function CvDownloadLink({
  href = "/Salangsang_Hans_Wilhelm-CV.pdf",
  downloadFilename = "Salangsang_Hans_Wilhelm-CV.pdf",
  children = "Download my CV",
  className = "",
}: CvDownloadLinkProps) {
  async function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    try {
      const res = await fetch(href);
      if (!res.ok) throw new Error("Failed to fetch");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = downloadFilename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      window.open(href, "_blank");
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseClasses} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
