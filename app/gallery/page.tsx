import type { Metadata } from "next";
import Link from "next/link";

import ResponsiveHeader from "@/components/ResponsiveHeader";
import DammydevEmbeds from "@/components/gallery/DammydevEmbeds";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Gallery — Daniel Babalola",
  description: "Interactive components and UI experiments.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen px-6 bg-dark-background font-[family-name:var(--font-darker-grotesque)]">
      <ResponsiveHeader />

      <div
        className={cn(
          "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
          "flex flex-row items-center w-full justify-between"
        )}
      >
        <h1 className="text-lg font-medium text-secondary-text">GALLERY</h1>
        <Link
          href="https://github.com/Dannny-Babs/dammydev-ui"
          className="rounded-sm text-sm font-medium text-nav-link underline underline-offset-4 opacity-85 transition-opacity duration-200 ease-out hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-text focus-visible:ring-offset-2 focus-visible:ring-offset-dark-background"
          target="_blank"
          rel="noreferrer"
        >
          dammydev-ui
        </Link>
      </div>

      <main
        className={cn(
          "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5 md:p-8",
          "flex flex-col gap-10"
        )}
      >
        <div className="max-w-2xl">
          <p className="text-primary-text text-xl leading-relaxed font-medium">
            Interactive UI components and small experiments.
          </p>
          <p className="text-secondary-text text-base leading-relaxed mt-2">
            The interactive pieces below are rendered live from my{" "}
            <Link
              href="https://github.com/Dannny-Babs/dammydev-ui"
              className="text-nav-link underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              dammydev-ui
            </Link>{" "}
            library.
          </p>
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-text">
              Interactive
            </h2>
          </div>
          <DammydevEmbeds />
        </section>
      </main>
    </div>
  );
}

