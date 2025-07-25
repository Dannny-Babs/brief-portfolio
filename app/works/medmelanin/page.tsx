import { cn } from "@/lib/utils";
import Link from "next/link";
import { UndoLeftRound } from "@solar-icons/react/ssr";

export default function MedMelanin() {
    return (<div className="min-h-screen  font-[family-name:var(--font-darker-grotesque)]">
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
                    Figma, UX Research, Competitive Analysis, Next.js, Tailwind CSS, Shadcn UI, Sanity CMS, Make, Mailchimp, Notion
                </p>
            </div>
        </div>
    </div>
    )
}   