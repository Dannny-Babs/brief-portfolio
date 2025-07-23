"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import AsciiWelcome from "@/components/ascii-welcome";

export default function Home() {
    const getDate = () => {
        const date = new Date();
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    const date = getDate();

    return (
        <div className="min-h-screen px-6 bg-dark-background font-[family-name:var(--font-darker-grotesque)]">
            <ResponsiveHeader />
            <div className={cn(
                "aspect-2/1 select-none sm:aspect-5/1 max-w-5xl mx-auto      border-r-[1.5px] border-l-[1.5px] border-b-[1.5px]              border-dark-border",
                "flex items-center justify-center text-black dark:text-white",
                "screen-line-before screen-line-after before:-top-px     after:-bottom-px",
                "bg-dots text-secondary-text"
            )} >
                 <AsciiWelcome interval={4000} />
            </div>
     

            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex md:flex-row flex-col items-center w-full"
            )}>
                <div className="flex md:flex-row flex-col md:items-center w-full">
                    <div className="md:flex flex-col  md:justify-center md:items-center items-start   border-r-[1.5px] border-dark-border md:border-none h-auto p-4 w-1/2 md:w-auto ">
                        <Image src="/images/profile.png" alt="profile" width={150} height={150} className="rounded-full" />
                    </div>
                    <div className="flex flex-col flex-1 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-border">
                        <div className="flex flex-col p-4 border-b-[1.5px] border-dark-border">
                            <h1 className="text-4xl font-semibold text-primary-text leading-tight tracking-tight">
                                Daniel Babalola
                            </h1>
                            <p className="text-nav-link opacity-80 text-lg leading-tight">
                                Design Engineer
                            </p>
                        </div>
                        <div className="flex flex-col p-4">
                            <p className="text-primary-text text-lg leading-tight tracking-wide font-medium ">
                                I&apos;m a design engineer based in Toronto, building products that are both functional and beautiful.
                                Currently, I&apos;m working at Med Melanin as a design engineer, creating user-centered solutions for healthcare.
                                Over the past 3+ years, I&apos;ve built and shipped multiple high-impact projects across healthcare, accessibility, voice AI, and consumer apps—both as an in-house contributor and as a freelance partner to early-stage startups.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-8 py-3",
                "flex flex-row items-center w-full justify-between"
            )}  >
                <div className="flex flex-row items-center gap-2">
                    <div className="h-3 w-3 bg-green-600 border-2 border-green-800 rounded-full  drop-shadow-2xl drop-shadow-[0px 0px 0px #0D3F16] animate-pulse" />

                    <p className="text-secondary-text ">
                        {date}
                    </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <p className="text-secondary-text ">
                        Toronto, ON
                    </p>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
                "flex flex-row items-center w-full justify-between"
            )}>
                <video src="https://vbportfolio.nyc3.cdn.digitaloceanspaces.com/vbreel2025.mp4" autoPlay muted loop className="w-full  object-cover" />
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-secondary-text ">
                        EXPERIENCE
                    </h3>

                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-2xl font-medium text-primary-text leading-tight">
                        Design Engineer - Med Melanin
                    </h3>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <p className="text-secondary-text text-lg leading-tight">
                            May 2024 - Present
                        </p>
                        <p className="text-secondary-text text-lg leading-tight">
                            Toronto, ON
                        </p>
                    </div>
                    <p className="text-primary-text text-lg leading-tight">
                        Designed Med Melanin&apos;s mobile and web apps leading user research and testing to create a design system and clean, functional UI.
                        <br />
                        <br />
                        <span className="text-secondary-text">
                            Key Achievements:
                        </span>
                        <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-lg leading-tight md:leading-relaxed tracking-loose text-primary-text">
                            <li>Spearheaded full-stack design &amp; dev of a 30+ page website (blog, CMS, SEO-optimized), ranking #1 for brand and health keywords.</li>
                            <li>Integrated marketing tools like Mailchimp, Notion, and built custom automation scripts for internal workflows.</li>
                            <li>Designed and maintained the complete web app dashboard, design system, and mobile app experience for patients.</li>
                            <li>Collaborated directly with devs to ensure UI consistency, accessibility, and high implementation fidelity.</li>
                            <li>Designed fundraising pitch decks &amp; visuals used in pitch competitions—contributed to raising over $50K+.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-2xl font-medium text-primary-text leading-tight">
                        Product Designer & Developer - Freelance and Contract
                    </h3>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <p className="text-secondary-text text-lg leading-tight">
                            2022 - Present
                        </p>
                        <p className="text-secondary-text text-lg leading-tight">
                            Remote - Toronto, ON
                        </p>
                    </div>
                    <p className="text-primary-text text-lg leading-tight">
                        Worked as a designer and developer with early-stage founders and lean startup teams.
                        I&apos;ve led the end-to-end design and development of production-grade websites, mobile apps, internal dashboards, and custom CMS platforms. My work spans web performance, SEO optimization, responsive front-end engineering, and co-creating internal design systems that scale.
                        <br />
                        <br />
                        <span className="text-secondary-text">
                            Key Achievements:
                        </span>
                        <ul className="list-disc list-inside  text-primary-text text-lg tracking-wide pl-4 pr-4 leading-tight md:leading-relaxed">
                            <li>Built and designed landing pages and full websites for 10+ early-stage teams.</li>
                            <li>Designed dashboard for a voice AI agent platform, aligning UX with NLP user flows.</li>
                            <li>Led design of a web app &amp; pitch deck for an AI-powered accessibility compliance checker.</li>
                            <li>Created a creator analytics dashboard to help influencers and content teams optimize their social media growth.</li>
                            <li>Designed &amp; built a Flutter mobile e-commerce app tailored for neurodivergent users (cross-platform, inclusive UX).</li>
                            <li>Co-led a 5-person team to design an event discovery platform, owning product UI and front-end architecture.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-secondary-text ">
                        SELECTED WORKS
                    </h3>
                </div>
            </div>
            <div className="w-full max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto grid grid-cols-1 md:grid-cols-3 ">
                <div className="flex flex-col h-full col-span-1">
                    <div className="relative w-full aspect-[4/3] border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                MedMelanin Website
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                30+ page site with CMS, SEO, automations.                            </p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3] border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Inclusivio
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                Accessibility compliance checker with full dashboard UX
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3] border-r-[1.5px]  border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Talo
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                Job search and ATS platform with AI insights
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col h-full col-span-1">
                    <div className="relative w-full aspect-[4/3] border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Sortee
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                Pitch Decks + Brand Design Exploration for a startup
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3] border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                MedMelanin App
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                Health advocacy platform designed for women of colour
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full aspect-[4/3] border-r-[1.5px]  border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Spectraum
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                E-commerce app for neurodivergent users
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col h-full col-span-1">
                    <div className="relative w-full aspect-[4/3]  border-b-[1.5px] border-dark-border overflow-hidden">
                        <Image src="/images/work3.png" alt="work3" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Marathon
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                AI Sales Enablement Platform
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3]  border-b-[1.5px] border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Tally
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                Personal finance tracker with AI insights
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full aspect-[4/3]   border-dark-border overflow-hidden">
                        <Image src="/images/work1.png" alt="work1" fill className="object-cover" />
                        <div className="absolute bottom-0 left-0 right-0 bg-dark-background/80 p-4">
                            <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight">
                                Juniper
                            </h4>
                            <p className="text-secondary-text text-[15px] font-medium leading-tight">
                                Smart apartment search with onboarding & investment tools
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto  ",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col text-left  p-4 md:p-8 border-r-[1.5px] border-dark-border bg-dots">
                    <h5 className="text-lg font-medium text-primary-text ">
                        I&apos;m Daniel. A pixel alchemist, problem solver, and passionate human.
                        I design, build, and learn in public. Imperfectly perfect and always evolving.

                        <br />
                        In my free time, I create posters and visuals just for fun.
                        <br />
                        <br />
                        Beyond the screen, I&apos;m chasing bold ideas and building things that matter.
                        <br />
                        <br />
                        Thanks for being here.

                    </h5>


                </div>
                <div className="flex flex-col h-full  p-4 md:p-8">
                    <div className="flex flex-row items-center gap-2">
                        <Image src="/images/me.png" alt="me" width={240} height={320}  />
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-4 md:p-8",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-secondary-text ">
                        SELECTED WORKS
                    </h3>
                </div>
            </div>
        </div>
    )
}