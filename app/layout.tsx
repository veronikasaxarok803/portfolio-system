import type { Metadata } from "next";
import { inter, spaceGrotesk, ibmPlexMono } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veronika Haran — UI/UX & Web Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
