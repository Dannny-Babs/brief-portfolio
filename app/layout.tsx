import type { Metadata } from "next";
import { Rethink_Sans, Darker_Grotesque } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

const defaultTitle = "Daniel Babalola — Software Engineer";
const defaultDescription =
  "Software engineer based in Toronto. Forward-deployed at Rose Rocket, shipping customer-facing features for logistics. Background in design and healthcare SaaS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: "Daniel Babalola",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/images/profile.png",
        width: 400,
        height: 400,
        alt: "Daniel Babalola",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rethinkSans.variable} ${darkerGrotesque.variable} font-[family-name:var(--font-rethink-sans)] antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
