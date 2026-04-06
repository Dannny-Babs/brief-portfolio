
"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import ResponsiveHeader from "@/components/ResponsiveHeader";
import AsciiWelcome from "@/components/ascii-welcome";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import SelectedWorks from "@/components/SelectedWorks";

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
        <p className="text-secondary-text text-center">
            Last visitor from: <span className="text-primary-text font-medium">{location}</span>
        </p>
    );
}

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
                        <Image
                            src="/images/profile.png"
                            alt="Daniel Babalola"
                            width={150}
                            height={150}
                            className="rounded-full ring-1 ring-dark-border/80 ring-offset-2 ring-offset-dark-background"
                        />
                    </div>
                    <div className="flex flex-col flex-1 border-t-[1.5px] md:border-t-0 md:border-l-[1.5px] border-dark-border">
                        <div className="flex flex-col p-4 md:p-6 border-b-[1.5px] border-dark-border">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-text mb-3">
                                Portfolio
                            </p>
                            <h1 className="text-4xl md:text-5xl font-semibold text-primary-text leading-[1.05] tracking-[-0.03em]">
                                Daniel Babalola
                            </h1>
                            <p className="text-nav-link opacity-90 text-base md:text-lg leading-tight mt-2 font-medium tracking-wide">
                                Software engineer · Toronto
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 p-3 md:p-4">
                            <p className="text-primary-text text-lg leading-snug font-medium">
                                I&apos;m a software engineer in Toronto with a strong design and product streak—I like building things that are clear to use and solid under the hood. Right now I&apos;m at Rose Rocket as a forward-deployed engineer: I work with customers and ship production features for logistics teams end to end.
                            </p>
                            <p className="text-primary-text text-lg leading-snug font-medium">
                                Before that I wore a design-engineer hat at places like Med Melanin (healthcare), and over the years I&apos;ve shipped work across accessibility, voice AI, and consumer apps—as staff, as a freelancer, and with early-stage teams. I care about good UX, honest copy, and code that holds up when it meets real users.
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
                <div className="flex flex-col gap-2 px-1">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary-text">
                        Selected works
                    </h3>
                </div>
            </div>
            <SelectedWorks />
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto  ",
                "flex md:flex-row flex-col items-center w-full justify-between"
            )}>
                <div className="flex flex-col text-left  p-4 md:p-8  border-dark-border">
                    <p className="text-xl font-medium text-primary-text leading-relaxed max-w-prose">
                        I design and build in public—posters on the side, serious product work the rest of the time.
                        <br />
                        <br />
                        Glad you stopped by.
                    </p>


                </div>
                <div className="flex flex-col h-full w-full md:w-1/2 items-center justify-center border-t-[1.5px] border-l-[0px] border-dark-border md:border-t-0 md:border-l-[1.5px]  p-4 md:p-8 bg-dots">
                    <div className="flex flex-row items-center gap-2 ">
                        <Image src="/images/me.png" alt="me" width={240} height={320} />
                    </div>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-4 md:p-13",
                "flex flex-row items-center w-full justify-between"
            )}>
                <div className="flex flex-col gap-2 w-full items-center">
                    <h3 className="text-3xl font-semibold tracking-tight text-secondary-text text-center">
                        Let&apos;s Work Together

                        <br />
                        <span className="text-primary-text">
                            <a
                                href="mailto:dbabs297@gmail.com"
                                className="text-primary-text underline underline-offset-4 decoration-2 font-medium"
                            >
                                Get in touch
                            </a>

                        </span>
                    </h3>
                </div>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-8 md:p-8  text-secondary-text    ",
                "flex md:flex-row flex-col items-center w-full justify-between"
            )}>
                <div className="flex md:flex-row flex-col gap-2 w-full justify-between items-center  ">
                    <div className="flex flex-row items-center gap-2">
                        <Link href="https://www.linkedin.com/in/danny-babs/" className="text-secondary-text text-sm rounded-full p-2 bg-dark-background border-[1.5px] border-dark-border hover:bg-primary-text hover:text-dark-background transition-colors duration-200 ease-out focus-visible:outline-offset-4">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="https://github.com/danielbabalola" className="text-secondary-text text-sm rounded-full p-2 bg-dark-background border-[1.5px] border-dark-border hover:bg-primary-text hover:text-dark-background transition-colors duration-200 ease-out focus-visible:outline-offset-4">
                            <Github className="w-4 h-4" />
                        </Link>
                        <Link href="https://twitter.com/danielbabalola" className="text-secondary-text text-sm rounded-full p-2 bg-dark-background border-[1.5px] border-dark-border hover:bg-primary-text hover:text-dark-background transition-colors duration-200 ease-out focus-visible:outline-offset-4">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.instagram.com/dannybabs/" className="text-secondary-text text-sm rounded-full p-2 bg-dark-background border-[1.5px] border-dark-border hover:bg-primary-text hover:text-dark-background transition-colors duration-200 ease-out focus-visible:outline-offset-4">
                            <Instagram className="w-4 h-4" />
                        </Link>

                    </div>
                    <LastVisitorLocation />
                </div>
            </div>
        </div>
    )
}