"use client"
import { cn } from "@/lib/utils";
import { UndoLeftRound } from '@solar-icons/react/ssr';
import Link from "next/link";
import Image from "next/image";

export default function TallyDetails() {
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

                        Tally is a Flutter-based personal finance app I designed and built to replace the clunky spreadsheets and third-party finance tools I didn&apos;t trust.
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
                <Image src="/images/tally/Tally.png" alt="Tally" width={1000} height={1000} />
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    Tally is a Flutter-based personal finance app designed to help you track income, expenses, savings, and more. Built with a clean, minimal aesthetic and BLoC state management, it offers a smooth, native-like experience across platforms.
                </p>
                <Image src="/images/tally/Tally1.png" alt="Tally" width={1000} height={1000} />

                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    Like most students and creatives, I tracked money in spreadsheets… until I got tired of using spreadsheets to track my finances, so I decided to build my own app. I wanted a tool that:
                    <ul className="list-disc list-inside my-4 pl-4">
                        <li>Gave me visibility into my savings and expenses</li>
                        <li>Was mobile and simple</li>
                        <li>Didn&apos;t need to send my data to a third-party service</li>
                    </ul>
                    So I decided to build it myself. Tally was born.


                </p>
                <Image src="/images/tally/Tally2.png" alt="Tally" width={1000} height={1000} />

                <Image src="/images/tally/Tally3.png" alt="Tally" width={1000} height={1000} />
                <Image src="/images/tally/Tally4.png" alt="Tally" width={1000} height={1000} />
                <Image src="/images/tally/Tally5.png" alt="Tally" width={1000} height={1000} />
                <Image src="/images/tally/Tally6.png" alt="Tally" width={1000} height={1000} />
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <h4 className="text-primary-text text-xl font-medium leading-tight ">
                    Challenges
                </h4>

            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <p className="text-primary-text text-lg font-medium leading-tight ">
                    Despite solid progress, I hit a few roadblocks:
                    <ul className="list-disc list-inside my-4 pl-4">
                        <li>No access to a Mac limited iOS testing/building</li>
                        <li>Real-device testing was inconsistent due to hardware availability</li>
                        <li>Solo development meant slow progress on implementation + testing</li>
                    </ul>
                    Still, the architecture, design system, and early build are solid foundations for future work.
                </p>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <h4 className="text-primary-text text-xl font-medium leading-tight ">
                    Lessons Learned
                </h4>
            </div>

            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <p className="text-primary-text text-lg font-medium leading-tight my-4" >
                    Tally was a fast-paced solo project that gave me room to build and think clearly. Because it was scoped small, I could move quickly, experiment with ideas, and focus on what mattered without getting stuck in overengineering.

                    <br />
                    <br />
                    I learned how to plan and prioritize features based on what was realistic for one person to ship. I mapped out data models in a way that supported future scalability, especially around personal finance tracking. I implemented local storage for real-world persistence and learned how to use SharedPreferences efficiently.

                    <br />
                    <br />
                    The project helped me design responsive UIs that felt natural across devices and encouraged me to constantly ask: if this works on Android, will it work just as well on iOS? While I couldn&apos;t fully test iOS due to hardware limitations, it pushed me to think more cross-platform.

                    <br />
                    <br />
                    I didn&apos;t rely on AI while building Tally. Most of the UI was designed directly in code from scratch. I barely touched Figma, using my instincts and experience to make layout and motion decisions on the fly.

                    <br />
                    <br />
                    Using the BLoC pattern helped me manage state in a clean and predictable way. I focused on error handling, smooth data flow, and making sure user input was handled consistently throughout the app.

                    <br />
                    <br />

                    The roadmap is in place, and I know how I&apos;d return to it when the timing and tools align. Whether I continue in Flutter or rebuild it in React Native or native Swift, Tally is the kind of project that sharpened how I design, plan, and ship products that matter.


                </p>
            </div>
        </div>
    )
}