import { cn } from "@/lib/utils";
import Link from "next/link";
import { UndoLeftRound } from "@solar-icons/react/ssr";
import Image from "next/image";


export default function Talo() {
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
                    Talo
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
                        Talo is an all-in-one job board and applicant tracking platform designed to bridge the gap between job seekers and employers.
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/4">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Role
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Product Designer, Founder
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start ">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Links
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-start ">
                        <p className="text-primary-text text-lg hover:underline font-medium leading-tight">
                            <Link href="https://talojobs.netlify.app/" target="_blank">Website</Link>
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/3">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Tools
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Figma, Next.js, Tailwind CSS, Shadcn UI
                    </p>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-8",
                "p-4"
            )}>
                <Image src="/images/talo.gif" alt="Talo" height={1200} width={1000} className="object-contain" />
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Talo was my first real startup idea — born from frustration with the job hunt and built to help others like me navigate it better. I wanted to solve a problem I personally experienced: fragmented job boards, zero feedback, bad UX, and poor job descriptions. So I built what I wished existed.
                </p>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-8",
                "p-4"
            )}>
                <Image src="/images/talo/talo-01.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/talo-02.png" alt="Talo" height={1200} width={1000} className="object-contain" />
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-8",
                "p-4"
            )}>
                <Image src="/images/talo/Dashboard 01.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/Dashboard 02.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/Dashboard 03.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/Dashboard 04.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/Dashboard 05.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/Dashboard 06.png" alt="Talo" height={1200} width={1000} className="object-contain" />
                <Image src="/images/talo/Dashboard 07.png" alt="Talo" height={1200} width={1000} className="object-contain" />
            </div>



        </div>
    )
}