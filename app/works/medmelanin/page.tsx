import { cn } from "@/lib/utils";
import Link from "next/link";
import { UndoLeftRound } from "@solar-icons/react/ssr";
import Image from "next/image";

export default function MedMelanin() {
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
                Med Melanin
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
                    Med Melanin is a telehealth platform built to reduce the rate of misdiagnosis for women of color (WOC).
                </p>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start md:w-1/4">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Role
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Designer Engineer (Product, Web, UI Design)
                </p>
            </div>
            <div className="flex flex-col gap-1 items-start justify-start ">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Links
                </p>
                <div className="flex flex-row gap-2 items-center justify-start ">
                    <p className="text-primary-text text-lg hover:underline font-medium leading-tight">
                        <Link href="https://medmelanin.com/" target="_blank">Website</Link>
                    </p>
                </div>

            </div>
            <div className="flex flex-col gap-1 items-start justify-start md:w-1/3">
                <p className="text-secondary-text text-lg font-medium leading-tight">
                    Tools
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Figma, Next.js, Tailwind CSS, Shadcn UI, Sanity CMS, Make, Mailchimp, Notion
                </p>
            </div>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <p className="text-primary-text text-lg font-medium leading-tight">
                I joined the team over a year ago to help build the product from zero to one and scale its design and development efforts. This project became one of the most meaningful experiences of my career — not just because of the mission, but because of the complexity, scale, and depth of the problems we were trying to solve.
            </p>
            <Image src="/images/medmelanin/Landing-01.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Landing -02.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Landing -03.png" alt="Med Melanin" width={1000} height={1000} />


        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Dashboard Design
            </h2>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <h3 className="text-primary-text text-lg font-medium leading-tight">
                Problem & Product Scope
            </h3>
            <p className="text-primary-text text-lg font-medium leading-tight">
                Our mission is to reduce the rate of misdiagnosis for women of color — and create a platform that helps users advocate for themselves, understand their symptoms, and get connected to professionals who understand their stories.
            </p>
            <p className="text-primary-text text-lg font-medium leading-tight">
                That means designing for:
            </p>
            <ul className="list-disc list-inside  pl-4 text-primary-text text-lg font-medium leading-tight">
                <li>A wide age range (teens to elderly users)</li>
                <li>Variable digital literacy</li>
                <li>High-stakes, emotional user flows</li>
                <li>Trust, clarity, and simplicity at every step</li>
            </ul>
            <Image src="/images/medmelanin/Dashboard-01.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Dashboard-02.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Dashboard-03.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Dashboard-04.png" alt="Med Melanin" width={1000} height={1000} />
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Mobile App Design
            </h2>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <Image src="/images/medmelanin/Mobile01.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Mobile02.png" alt="Med Melanin" width={1000} height={1000} />
            <Image src="/images/medmelanin/Mobile03.png" alt="Med Melanin" width={1000} height={1000} />

        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <h2 className="text-primary-text text-xl font-medium leading-tight">
                Challenges & Learnings
            </h2>
        </div>
        <div className={cn(
            "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
            "flex  flex-col  w-full gap-8",
            "p-4"
        )}>
            <p className="text-primary-text text-lg font-medium leading-tight">
                Challenges I Faced

                <ul className="list-disc list-inside  pl-4 text-primary-text text-lg font-medium leading-tight">
                    <li>Compliance constraints: Navigating what we could and couldn&apos;t display or collect</li>
                    <li>Handoff friction: Creating smoother dev handoffs through documentation and design checklists</li>
                    <li>User research at scale: Analyzed over 200+ user questions, conducted feedback loops, and used it to continuously iterate product flows</li>
                    <li>Making complexity feel simple: Designing for a wide range of users — from older users on low-end devices to younger users familiar with fintech apps — without making anyone feel out of place</li>
                </ul>
            </p>


            <p className="text-primary-text text-lg font-medium leading-tight">
                What I Learned
            </p>
            <p className="text-primary-text text-lg font-medium leading-tight">
                Med Melanin taught me how to design for real-world problems. I had to think about trust, bias, empathy, compliance, and scale — all at once. I learned how to:

                <ul className="list-disc list-inside  pl-4 text-primary-text text-lg font-medium leading-tight">
                    <li>Build accessible, scalable design systems</li>
                    <li>Balance product design with frontend execution</li>
                    <li>Ship full-stack work while staying grounded in research</li>
                    <li>Align with stakeholders across tech, design, and mission impact</li>
                </ul>
            </p>





        </div>

    </div>
    )
}   