import { cn } from "@/lib/utils";
import Image from "next/image";
import ResponsiveHeader from "@/components/ResponsiveHeader";

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
                "bg-dots"
            )} />


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
                            <p className="text-secondary-text text-lg leading-tight">
                                I&apos;m a design engineer based in Toronto, building products that are both functional and beautiful.
                                Currently, I&apos;m working at Med Melanin as a design engineer, creating user-centered solutions for healthcare.
                                I love building products that are both functional and beautiful.
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
                        Designed Med Melanin&apos;s mobile and web apps leading user research and testing to create a design system and clean, functional UI. Worked on a 30-plus-page, SEO-optimized website that boosted fundraising and user growth.
                        <br />
                        <br />
                        <span className="text-secondary-text">
                            Key Achievements:
                        </span>
                        <ul className="list-disc list-inside text-primary-text text-lg tracking-loose pl-4 pr-4 leading-tight">
                            <li>Designed and implemented a robust design system for the mobile and web apps</li>
                            <li>Designed and built a website with 20+ pages, improving SEO rankings to the #1 spot on Google, significantly increasing platform visibility.</li>
                            <li>Leveraged data from 200+ user stories to analyse pain points and deliver responsive, user-friendly features that improved engagement.</li>
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
                        Worked as a designer and developer with early-stage founders and lean startup teams. Designed and shipped landing pages, brand sites, and interactive MVPs across industries. Always focused on shipping clean, functional products that people actually use.
                        <br />
                        <br />
                        <span className="text-secondary-text">
                            Key Achievements:
                        </span>
                        <ul className="list-disc list-inside  text-primary-text text-lg tracking-loose pl-4 pr-4 leading-tight">
                            <li>Designed and developed various websites and landing pages for clients</li>
                            <li>Led the design and development of an Event Discovery mobile app, managing a cross-functional team of 5 to deliver a fully functional product within deadlines.</li>
                            <li>Designed and built an inclusive E-commerce mobile app for neurodivergent users, leveraging Flutter and Firebase to deliver a seamless, accessible experience across iOS and Android. Focused on intuitive usability and high performance to empower a diverse audience.</li>
                            <li>Designed various dashboards for clients, including a dashboard for an AI agent tool, a dashboard for an event management tool, and a dashboard for a social media management tool.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}