"use client";

import { Toaster } from "sonner";

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-right"
      theme="dark"
      closeButton
      duration={5000}
      toastOptions={{
        classNames: {
          toast:
            "font-body rounded-xl !border-0 !bg-[color-mix(in_oklch,var(--accent)_10%,var(--background))] !text-foreground shadow-lg px-4 py-3",
          title: "font-body text-sm text-foreground leading-snug",
          description: "font-body text-sm !text-muted leading-snug",
          icon: "!text-foreground",
          closeButton:
            "!text-foreground hover:!text-foreground hover:bg-accent/10 !border !border-divider !bg-background",
          actionButton:
            "bg-foreground text-background hover:bg-foreground/90 !border-0",
          cancelButton:
            "bg-background/15 text-foreground hover:bg-background/25 !border-0",
        },
      }}
    />
  );
}

