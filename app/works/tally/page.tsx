import ResponsiveHeader from "@/components/ResponsiveHeader";
import { cn } from "@/lib/utils";
import { UndoLeftRound } from '@solar-icons/react/ssr';
import Link from "next/link";

export default function TallyDetails() {
    return (
        <div className="min-h-screen px-6 bg-dark-background font-[family-name:var(--font-darker-grotesque)]">
            <ResponsiveHeader />
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
                    Tally
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

                        A mobile app to track income, expenses, savings, and more with AI insights.
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/4">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Role
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Mobile Designer, Developer
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start ">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Links
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-start ">
                        <p className="text-primary-text text-lg hover:underline font-medium leading-tight">
                            <Link href="https://github.com/Dannny-Bab/tally" target="_blank">Github</Link>
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/3">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Tools
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Figma, Flutter, Dart, Supabase, BloC
                    </p>
                </div>

            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    Tally is a Flutter-based personal finance app designed to help you track income, expenses, savings, and more. Built with a clean, minimal aesthetic and BLoC state management, it offers a smooth, native-like experience across platforms.
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    I got tired of using spreadsheets to track my finances, so I decided to build my own app. I wanted to create a simple, intuitive app that would help me track my income, expenses, and savings. I also didn&apos;t like the idea of using a third party to track my finances, so I decided to build my own app or any other app on appstore that would help me track my finances.
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight">
                    
                </p>
            </div>
        </div>
    )
}