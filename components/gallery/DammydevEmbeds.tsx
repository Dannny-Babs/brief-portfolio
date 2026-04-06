"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import MorphSurface from "@/components/dammydev-ui/MorphSurface";
import TableOfContentsMorph from "@/components/dammydev-ui/TableOfContentsMorph";
import { IOSpinner } from "@/components/dammydev-ui/spinner";

function ShowcaseFrame({
  title,
  sourceHref,
  children,
  className,
}: {
  title: string;
  sourceHref: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-md border border-dark-border bg-dark-background/40 p-4 md:p-5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-text">
            Interactive
          </p>
          <h3 className="text-xl font-semibold text-primary-text mt-1 tracking-[-0.02em]">
            {title}
          </h3>
        </div>
        <Link
          href={sourceHref}
          className="rounded-sm text-sm font-medium text-nav-link underline underline-offset-4 opacity-85 transition-opacity duration-200 ease-out hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-text focus-visible:ring-offset-2 focus-visible:ring-offset-dark-background"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </Link>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function DammydevEmbeds() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ShowcaseFrame
        title="Morphing Create Menu"
        sourceHref="https://github.com/Dannny-Babs/dammydev-ui/blob/master/components/MorphSurface.tsx"
      >
        <div className="flex min-h-[280px] items-center justify-center rounded-md border border-dark-border bg-white p-6">
          <MorphSurface />
        </div>
      </ShowcaseFrame>

      <ShowcaseFrame
        title="Table of Contents Dock"
        sourceHref="https://github.com/Dannny-Babs/dammydev-ui/blob/master/components/TableOfContentsMorph.tsx"
        className="lg:row-span-2"
      >
        <div className="relative min-h-[420px] overflow-hidden rounded-md border border-dark-border bg-white p-6">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold text-neutral-950">Read me</h2>
            <p className="mt-2 text-sm text-neutral-600">
              This is a sandbox so the Table of Contents has headings to index.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-neutral-950">
              Section One
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Scroll a little, then open the dock.
            </p>
            <h3 className="mt-10 text-xl font-semibold text-neutral-950">
              Section Two
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              The progress indicator updates as sections enter the viewport.
            </p>
            <h3 className="mt-10 text-xl font-semibold text-neutral-950">
              Section Three
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              In the real component gallery, this sits on top of content.
            </p>
          </div>
          <TableOfContentsMorph />
        </div>
      </ShowcaseFrame>

      <ShowcaseFrame
        title="iOS-style Spinner"
        sourceHref="https://github.com/Dannny-Babs/dammydev-ui/blob/master/components/spinner.tsx"
      >
        <div className="flex items-center justify-between rounded-md border border-dark-border bg-white p-4">
          <div className="flex items-center gap-3">
            <IOSpinner className="scale-110" />
            <span className="text-sm font-medium text-neutral-950">
              Loading state
            </span>
          </div>
          <IOSpinner className="scale-110" light />
        </div>
      </ShowcaseFrame>
    </div>
  );
}

