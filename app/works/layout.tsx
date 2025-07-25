"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import ResponsiveHeader from "@/components/ResponsiveHeader";

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


export default function WorksLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center px-4 md:px-6 bg-[var(--dark-background)]">
             <ResponsiveHeader />
            {children}

            <div className={cn(
                "max-w-5xl  border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto p-4 md:p-8  text-secondary-text    ",
                "flex md:flex-row flex-col items-center w-full justify-between"
            )}>
                <div className="flex md:flex-row flex-col gap-2 w-full justify-between items-center  ">
                    <div className="flex flex-row items-center gap-2">
                        <Link href="https://www.linkedin.com/in/danny-babs/" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            LinkedIn
                        </Link>
                        <Link href="https://github.com/danielbabalola" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            Github
                        </Link>
                        <Link href="https://twitter.com/danielbabalola" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            Twitter
                        </Link>
                        <Link href="https://www.instagram.com/dannybabs/" className="text-secondary-text text-sm  p-2 bg-dark-background hover:text-primary-text  transition-all duration-300">
                            Instagram
                        </Link>

                    </div>
                    <LastVisitorLocation />
                </div>
            </div>
        </div>
    )
}