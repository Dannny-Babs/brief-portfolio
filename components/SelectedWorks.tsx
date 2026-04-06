import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type WorkCardProps = {
    href: string;
    src: string;
    alt: string;
    title: string;
    description: string;
    cellClassName?: string;
};

function WorkCard({
    href,
    src,
    alt,
    title,
    description,
    cellClassName,
}: WorkCardProps) {
    return (
        <article
            className={cn(
                "portfolio-card-hover relative w-full border-dark-border p-4",
                cellClassName
            )}
        >
            <Link
                href={href}
                className="group block rounded-sm outline-none transition-opacity duration-200 ease-out focus-visible:ring-2 focus-visible:ring-primary-text focus-visible:ring-offset-2 focus-visible:ring-offset-dark-background"
            >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm bg-dark-border/15">
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        unoptimized={src.toLowerCase().endsWith(".gif")}
                        className="portfolio-card-media object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-200 ease-out group-hover:bg-black/55 group-focus-visible:bg-black/55"
                        aria-hidden
                    />
                    <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <span className="rounded-full border border-white px-3 py-1 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-200 ease-out group-hover:opacity-100 group-focus-visible:opacity-100">
                            View details
                        </span>
                    </span>
                </div>
                <h4 className="mt-4 text-balance text-xl font-medium leading-tight tracking-wide text-primary-text">
                    {title}
                </h4>
                <p className="mt-1 text-pretty text-[17px] font-medium leading-tight text-secondary-text">
                    {description}
                </p>
            </Link>
        </article>
    );
}

const columns: WorkCardProps[][] = [
    [
        {
            href: "/works/inclusivio",
            src: "/images/inclusivio/inclusivio.png",
            alt: "Inclusivio project preview",
            title: "Inclusivio",
            description: "Accessibility compliance dashboard and landing UX",
            cellClassName: "border-b-[1.5px] border-r-[1.5px]",
        },
        {
            href: "/works/talo",
            src: "/images/talo.gif",
            alt: "Talo project preview",
            title: "Talo",
            description: "Job board and ATS with AI-assisted workflows",
            cellClassName: "border-r-[1.5px]",
        },
    ],
    [
        {
            href: "/works/sortee",
            src: "/images/Sortee.png",
            alt: "Sortee project preview",
            title: "Sortee",
            description: "Pitch decks and brand exploration for a startup",
            cellClassName: "border-b-[1.5px] border-r-[1.5px]",
        },
        {
            href: "/works/juniper",
            src: "/images/Juniper.png",
            alt: "Juniper project preview",
            title: "Juniper",
            description: "Apartment search, onboarding, and investment flows",
            cellClassName: "border-l-[1.5px] border-r-[1.5px]",
        },
    ],
    [
        {
            href: "/works/medmelanin",
            src: "/images/MedMelanin.png",
            alt: "Med Melanin app preview",
            title: "MedMelanin App",
            description: "Health advocacy for women of colour—web and mobile",
            cellClassName: "border-b-[1.5px] border-r-[1.5px]",
        },
        {
            href: "/works/tally",
            src: "/images/Tally.png",
            alt: "Tally project preview",
            title: "Tally",
            description: "Personal finance tracking with AI-assisted insights",
            cellClassName: "border-r-[1.5px]",
        },
    ],
];

export default function SelectedWorks() {
    return (
        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] border-dark-border md:grid-cols-3">
            {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex h-full flex-col">
                    {column.map((work) => (
                        <WorkCard key={work.href} {...work} />
                    ))}
                </div>
            ))}
        </div>
    );
}
