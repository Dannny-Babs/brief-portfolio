import { cn } from "@/lib/utils";
import { UndoLeftRound } from "@solar-icons/react/ssr";
import Link from "next/link";
import Image from "next/image";

export default function Inclusivio() {
    return (
    <div className="min-h-screen  font-[family-name:var(--font-darker-grotesque)]">
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex md:flex-row flex-col items-start w-full"
        )}>
            <Link href="/" className="flex flex-row gap-2 items-center justify-start w-full">
                <div className="flex flex-row gap-2 items-start justify-start p-4">
                    <UndoLeftRound size={20} color={"var(--secondary-text)"} className="w-4.5 h-4.5 mt-1" />
                    <p className="text-secondary-text  text-lg font-medium leading-tight">Back</p>
                </div>
            </Link>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-2",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Inclusivio
            </h2>
            <div className="flex flex-row gap-2 items-center justify-start ">
                <p className="text-secondary-text  font-medium leading-tight">
                    Published Jul 24, 2025
                </p>
                <div className="h-1 w-1 bg-secondary-text rounded-full " />
                <p className="text-secondary-text  font-medium leading-tight">
                    Updated Jul 24, 2025
                </p>
            </div>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex md:flex-row flex-col  w-full gap-8",
            "p-4"
        )}>
            <div className="flex flex-col gap-1 items-start justify-start md:w-1/2 ">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Description
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">

                    Inclusivio is an AI-powered accessibility platform designed to help business their websites are ADA and WCAG compliant without relying on clunky, outdated manual tools.
                </p>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start md:w-1/4">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Role
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Visual Branding & Product Designer
                </p>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start ">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Links
                </p>
                <div className="flex flex-row gap-2 items-center justify-start ">
                    <p className="text-primary-text text-lg hover:underline font-medium leading-tight">
                        <Link href="https://thea11ylabs.com/" target="_blank">Website</Link>
                    </p>
                </div>

            </div>
            <div className="flex flex-col gap-1 items-start justify-start md:w-1/3">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Tools
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Figma, UX Research, Competitive Analysis,  way too much Reddit
                </p>
            </div>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex md:flex-row flex-col  w-full gap-8",
            "p-4"
        )}>
            <Image src="/images/inclusivio/inclusivio.png" alt="Inclusivio" width={1000} height={1000} className="my-4" />
        </div>

        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex md:flex-row flex-col  w-full gap-8",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">My Contributions</h2>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <div className="flex flex-col gap-2 items-start justify-start">
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Inclusivio is one of the more technical and interesting projects I&apos;ve worked on. I came on as the visual branding and product designer, working closely with a founder who brought the idea to me. The idea was simple: use AI to make web accessibility effortless — something most tools today completely fail at.
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    This wasn&apos;t just about building another scanner. The product needed to analyze websites, detect accessibility issues in real time, and give clear, actionable fixes.
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    I partnered with the founder from day one to shape the product and brand from the ground up. I worked across:
                </p>
                <ul className="list-disc list-inside  pl-4 text-primary-text text-lg font-medium leading-tight">
                    <li>Worked through the entire user flow, from onboarding → scanning → summary reports</li>
                    <li>Designed a breakdown of issues by severity, suggested fixes, and even breakpoints for testing various screen sizes</li>
                    <li>Created a developer-first experience, including an IDE-style interface for directly fixing code inside the platform</li>
                    <li>Mapped out how we&apos;d parse and render the DOM tree to help users pinpoint problem elements</li>

                </ul>
            </div>

            <Image src="/images/inclusivio/Landing 01.png" alt="Inclusivio" width={1000} height={1000} className="my-4" />
            <Image src="/images/inclusivio/Landing 02.png" alt="Inclusivio" width={1000} height={1000} className="my-4" />
            <Image src="/images/inclusivio/Landing 3.png" alt="Inclusivio" width={1000} height={1000} className="my-4" />

        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex md:flex-row flex-col  w-full gap-8",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Dashboard Design
            </h2>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-4 ",
            "p-4"
        )}>
            <Image src="/images/inclusivio/Dashboard01.png" alt="Inclusivio" width={1000} height={1000}  />
            <Image src="/images/inclusivio/Dashboard02.png" alt="Inclusivio" width={1000} height={1000}  />
            <Image src="/images/inclusivio/Dashboard03.png" alt="Inclusivio" width={1000} height={1000}  />
            <Image src="/images/inclusivio/Dashboard04.png" alt="Inclusivio" width={1000} height={1000}  />
            <Image src="/images/inclusivio/Dashboard05.png" alt="Inclusivio" width={1000} height={1000} className="my-4"     />
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex md:flex-row flex-col  w-full gap-8",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Pitch Deck Design
            </h2>
        </div>
        <div className={cn( 
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col w-full gap-4 ",
            "p-4"
        )}>
            <Image src="/images/inclusivio/Deck01.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck02.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck03.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck04.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck05.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck08.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck09.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck10.png" alt="Inclusivio" width={1000} height={1000} />
            <Image src="/images/inclusivio/Deck11.png" alt="Inclusivio" width={1000} height={1000} />
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full ",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Challenges & Learnings
            </h2>

        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full ",
            "p-4"
        )}>
            <p className="text-primary-text text-lg font-medium leading-tight">
                Designing for a space I wasn&apos;t familiar with, accessibility tooling and dev workflows, was a big shift. I had to learn on the fly: how accessibility issues are structured, how they&apos;re resolved, what frustrates people using existing tools.
            </p>
            <p className="text-primary-text text-lg font-medium leading-tight my-4">
                There were moments where I questioned whether we could even design something intuitive around such technical complexity, but breaking it into smaller chunks helped.
            </p>
            <p className="text-primary-text text-lg font-medium leading-tight my-4">
                Also: making this product feel trustworthy, while still modern and developer-focused, was a balancing act.
            </p>

            <p className="text-primary-text text-lg font-medium leading-tight my-4">
                This project taught me how to:
            </p>
            <ul className="list-disc list-inside md:pl-4 pl-2 text-primary-text text-lg font-medium leading-tight">
                <li>Bring technical constraints into visual design decisions</li>
                <li>Think like both a designer and a developer</li>
                <li>Design for complexity without making it feel heavy</li>
                <li>Ask better questions, especially around edge cases and ethical UX</li>
                <li>Own an entire product scope — from pitch to polish</li>
            </ul>








        </div>
    </div>
    )
}