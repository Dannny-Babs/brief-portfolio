import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Babalola - Design Engineer",
  description: "Design engineer based in Toronto, building products that are both functional and beautiful. Currently working at Med Melanin creating user-centered solutions for healthcare.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethinkSans.variable} font-[family-name:var(--font-rethink-sans)] antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
