import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import NavLinks from "./components/NavLinks";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hans Salangsang | Full Stack Developer Portfolio",
  description:
    "Full stack developer and software engineer. React, Next.js, TypeScript, Node.js. Building maintainable solutions. Based in Philippines. Available for projects and collaboration.",
  icons: {
    icon: "/h_icon.svg",
  },
  openGraph: {
    title: "Hans Salangsang | Full Stack Developer Portfolio",
    description:
      "Full stack developer and software engineer. React, Next.js, TypeScript, Node.js. Building maintainable solutions. Based in Philippines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 sm:py-5 pl-6 pr-4 sm:pl-12 sm:pr-8 lg:pl-16 lg:pr-12">
              <a
                href="#hero"
                className="inline-block opacity-95 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-foreground/30 focus:ring-offset-2 focus:ring-offset-background rounded"
                aria-label="Hans Salangsang - Home"
              >
                <img src="/h_icon-transparent.svg" alt="Hans Salangsang" className="h-8 w-auto sm:h-9" />
              </a>
              <NavLinks />
            </div>
          </div>
        </nav>
        <div
          className="fixed top-0 left-0 right-0 h-32 sm:h-48 pointer-events-none z-40 bg-gradient-to-b from-background to-transparent"
          aria-hidden
        />
        <main className="pt-16 sm:pt-[4.5rem]">
          {children}
        </main>
        <div
          className="fixed bottom-0 left-0 right-0 h-32 sm:h-48 pointer-events-none z-40 bg-gradient-to-t from-background to-transparent"
          aria-hidden
        />
      </body>
    </html>
  );
}
