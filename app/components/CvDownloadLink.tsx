"use client";

import { type ReactNode } from "react";
import Button from "./Button";

type CvDownloadLinkProps = {
  href?: string;
  downloadFilename?: string;
  children?: ReactNode;
  className?: string;
};

export default function CvDownloadLink({
  href = "/Salangsang_Hans_Wilhelm-CV.pdf",
  downloadFilename = "Salangsang_Hans_Wilhelm-CV.pdf",
  children = "Download my CV",
  className = "",
}: CvDownloadLinkProps) {
  async function handleClick(e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) {
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
    <Button
      href={href}
      variant="outline"
      onClick={handleClick}
      download={downloadFilename}
      className={className}
    >
      {children}
    </Button>
  );
}
