"use client"
import ResponsiveHeader from "@/components/ResponsiveHeader";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { useEffect, useState } from "react";


function LastVisitorLocation() {
    const [location, setLocation] = useState<string>("...");

    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then(res => res.json())
            .then(data => {
                if (data && (data.city || data.country_name)) {
                    setLocation(`${data.city ? data.city + ', ' : ''}${data.country_name || ''}`);
                } else {
                    setLocation("Unknown");
                }
            })
            .catch(() => setLocation("Unknown"));
    }, []);

    return (
        <p className="text-secondary-text text-center text-sm">
            Last visitor from: <span className="text-primary-text font-medium">{location}</span>
        </p>
    );
}   

export default function About() {
    return (
        <div className="min-h-screen px-6 bg-dark-background font-[family-name:var(--font-darker-grotesque)]" >
            <ResponsiveHeader />
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-secondary-text ">
                        ABOUT ME
                    </h3>

                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto px-3 py-3",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <p className="text-primary-text text-xl leading-relaxed tracking-wide">
                        I&apos;m Daniel—designer and developer in Toronto. I care about clear systems, solid code, and layouts that survive a second look.
                        <br />
                        <br />
                        I started with HTML/CSS and XD, then went deep on product UI, Flutter, and SaaS work. Good design, for me, is solving real problems with the user in front. Off-screen: books, music, travel, and turning messy ideas into useful things.
                    </p>
                </div>
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
                        Software Engineer — Rose Rocket
                    </h3>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <p className="text-secondary-text text-lg leading-tight">
                            Oct 2025 - Present
                        </p>
                        <p className="text-secondary-text text-lg leading-tight">
                            Toronto, ON
                        </p>
                    </div>
                    <div className="text-primary-text text-lg leading-tight">
                        <p>
                            Forward-deployed, customer-facing engineer on a transportation management system used by logistics teams. I partner with customers and internal teams to scope, build, and ship production features end to end—from RFCs and UX through implementation and deployment.
                        </p>
                        <div className="h-3" aria-hidden />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="rose-rocket-achievements" className="border-none">
                                <AccordionTrigger className="text-secondary-text text-lg font-medium hover:no-underline py-2">
                                    Key Achievements
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-lg leading-tight md:leading-relaxed tracking-loose text-primary-text">
                                        <li>Operated as a forward-deployed engineer working directly with customers to turn operational needs into shipped product in production.</li>
                                        <li>Owned and delivered 5+ customer-facing features end to end (RFCs through deployment), including bulk document download, barcode generation, custom email configuration, and HubSpot-related integrations.</li>
                                        <li>Built a bulk document download flow using queues, zipping, and time-limited access so customers could retrieve large batches without repeated support intervention.</li>
                                        <li>Shipped configurable barcode generation across many symbologies (e.g. Code 128, Code 39, QR, Data Matrix) with sizing and placement options for document workflows.</li>
                                        <li>Implemented custom email sending via Mailgun so customers could send from their own domains and aliases, with improved reply handling.</li>
                                        <li>Resolved 40+ production and customer-reported issues in live environments, coordinating with Support, Engineering, and GTM to shorten turnaround on requests.</li>
                                        <li>Contributed to test migration and authored new tests for safer releases; delivered customer-specific and paid-tier functionality tied to client implementations.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-2xl font-medium text-primary-text leading-tight">
                        Design Engineer — Med Melanin
                    </h3>
                    <div className="flex flex-row items-center justify-between gap-2">
                        <p className="text-secondary-text text-lg leading-tight">
                            May 2024 - Sep 2025
                        </p>
                        <p className="text-secondary-text text-lg leading-tight">
                            Toronto, ON
                        </p>
                    </div>
                    <div className="text-primary-text text-lg leading-tight">
                        <p>
                            Led design and development for Med Melanin&apos;s mobile and web apps, running user research and testing to build a design system and a clear, functional UI for patients and clinicians.
                        </p>
                        <div className="h-3" aria-hidden />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="med-melanin-achievements" className="border-none">
                                <AccordionTrigger className="text-secondary-text text-lg font-medium hover:no-underline py-2">
                                    Key Achievements
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-lg leading-tight md:leading-relaxed tracking-loose text-primary-text">
                                        <li>Spearheaded full-stack design &amp; dev of a 30+ page website (blog, CMS, SEO-optimized), ranking #1 for brand and health keywords.</li>
                                        <li>Integrated marketing tools like Mailchimp, Notion, and built custom automation scripts for internal workflows.</li>
                                        <li>Designed and maintained the complete web app dashboard, design system, and mobile app experience for patients.</li>
                                        <li>Collaborated directly with devs to ensure UI consistency, accessibility, and high implementation fidelity.</li>
                                        <li>Designed fundraising pitch decks &amp; visuals used in pitch competitions—contributed to raising over $50K+.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
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
                    <div className="text-primary-text text-lg leading-tight">
                        <p>
                            Worked as a designer and developer with early-stage founders and lean startup teams. I&apos;ve led the end-to-end design and development of production-grade websites, mobile apps, internal dashboards, and custom CMS platforms. My work spans web performance, SEO optimization, responsive front-end engineering, and co-creating internal design systems that scale.
                        </p>
                        <div className="h-3" aria-hidden />
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="freelance-achievements" className="border-none">
                                <AccordionTrigger className="text-secondary-text text-lg font-medium hover:no-underline py-2">
                                    Key Achievements
                                </AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc list-inside  text-primary-text text-lg tracking-wide pl-4 pr-4 leading-tight md:leading-relaxed">
                                        <li>Built and designed landing pages and full websites for 10+ early-stage teams.</li>
                                        <li>Designed dashboard for a voice AI agent platform, aligning UX with NLP user flows.</li>
                                        <li>Led design of a web app &amp; pitch deck for an AI-powered accessibility compliance checker.</li>
                                        <li>Created a creator analytics dashboard to help influencers and content teams optimize their social media growth.</li>
                                        <li>Designed &amp; built a Flutter mobile e-commerce app tailored for neurodivergent users (cross-platform, inclusive UX).</li>
                                        <li>Co-led a 5-person team to design an event discovery platform, owning product UI and front-end architecture.</li>
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-secondary-text ">
                        MY JOURNEY
                    </h3>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-col"
            )}>
                {/* 2021 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 md:w-20 w-[33.5px]">
                        <h4 className="md:text-xl font-bold text-primary-text">2021</h4>

                    </div>
                    <div className="flex-1 border-l-2 border-dark-border pl-2 md:pl-6 pb-6 relative">
                        <div className="absolute -left-1.5  w-3 h-3 bg-primary-text rounded-full">

                        </div>
                        <div className="space-y-3 pt-6">
                            <h4 className="text-xl font-medium text-secondary-text">The Foundation</h4>
                            <p className="text-primary-text text-lg leading-tight">
                                Began my journey into web development, learning the fundamentals of HTML, CSS, and JavaScript.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Dabbled in Python and MySQL, building simple projects that laid the groundwork for my development skills.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Designed my first UIs in Adobe XD and Illustrator, experimenting with shapes and colors to build foundational design skills.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2022 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0  md:w-20 w-[33.5px]">
                        <h4 className="md:text-xl font-bold text-primary-text">2022</h4>

                    </div>
                    <div className="flex-1 border-l-2 border-dark-border pl-2 md:pl-6 py-6 relative">
                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary-text rounded-full"></div>
                        <div className="space-y-3">
                            <h4 className="text-xl font-medium text-secondary-text">Discovering Product Design and UX</h4>
                            <p className="text-primary-text text-lg leading-tight">
                                Transitioned to Figma, where I discovered the power of intuitive interface design.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Explored the storytelling aspect of UI/UX, focusing on user flows and the art of crafting seamless experiences.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Designed my first full app as a Product Designer, applying lessons from my software engineering studies to create a user-first experience.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2023 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 md:w-20 w-[33.5px]">
                        <h4 className="md:text-xl font-bold text-primary-text">2023</h4>

                    </div>
                    <div className="flex-1 border-l-2 border-dark-border pl-2 md:pl-6 relative">
                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary-text rounded-full"></div>
                        <div className="space-y-3 py-6">
                            <h4 className="text-xl font-medium text-secondary-text">Diving into Startups and Freelance Work</h4>
                            <p className="text-primary-text text-lg leading-tight">
                                Collaborated with friends on impactful startup concepts, including Talo, a job and HR platform.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Secured freelance clients, delivering creative solutions and polished designs.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Took a significant step into development by building my first mobile app with Flutter and revisiting React.js, bridging the gap between design and code.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2024 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 md:w-20 w-[33.5px]">
                        <h4 className="md:text-xl font-bold text-primary-text">2024</h4>

                    </div>
                    <div className="flex-1 border-l-2 border-dark-border pl-2 md:pl-6 relative">
                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary-text rounded-full"></div>
                        <div className="space-y-3 py-6">
                            <h4 className="text-xl font-medium text-secondary-text">From Imposter to Innovator</h4>
                            <p className="text-primary-text text-lg leading-tight">
                                Delivered work for multiple SaaS startups, tackling branding, deck designs, and pitching at events like Collision Conference.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Focused heavily on development, refining my problem-solving skills and conquering challenges through LeetCode.
                            </p>
                            <p className="text-primary-text text-lg leading-tight">
                                Landed bigger clients and successfully applied my growing skills in both design and development to create impactful solutions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2025 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 md:w-20 w-[33.5px]">
                        <h4 className="md:text-xl font-bold text-primary-text">2025</h4>

                    </div>
                    <div className="flex-1 border-l-2 border-dark-border pl-2 md:pl-6 relative">
                        <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary-text rounded-full"></div>
                        <div className="space-y-3 py-6">
                            <h4 className="text-xl font-medium text-secondary-text">The Future is Unwritten</h4>
                            <p className="text-primary-text text-lg leading-tight">
                                The story isn&apos;t complete yet. 2025 is where dreams turn into reality, and you can be a part of it. Let&apos;s create something extraordinary together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-medium text-secondary-text ">
                        BEYOND THE SCREEN
                    </h3>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-5",
                "flex flex-row items-center w-full justify-between"
            )}>

            </div>
            <div className={cn(
                "max-w-5xl  border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-4 md:p-8  text-secondary-text    ",
                "flex md:flex-row flex-col items-center w-full justify-between"
            )}>
                <div className="flex md:flex-row flex-col gap-2 w-full justify-between items-center  ">
                    <div className="flex flex-row items-center gap-2">
                        <Link href="https://www.linkedin.com/in/dannybabs/" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            LinkedIn
                        </Link>
                        <Link href="https://github.com/Dannny-Babs" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            Github
                        </Link>
                        <Link href="https://x.com/kng_lax" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            Twitter
                        </Link>

                    </div>
                    <LastVisitorLocation />
                </div>
            </div>
        </div>
    )
}