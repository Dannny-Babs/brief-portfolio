import { cn } from "@/lib/utils";
import { UndoLeftRound } from "@solar-icons/react/ssr";
import Link from "next/link";
import Image from "next/image";

export default function JuniperDetails() {
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
                    Juniper - Apartment Rental & Investment Platform
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

                        Juniper is a mobile app concept designed to simplify the way renters, landlords, and investors interact with apartments.
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/4">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Role
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Product Designer, Developer
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start ">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Links
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-start ">
                        <p className="text-primary-text text-lg hover:underline font-medium leading-tight">
                            <Link href="https://thea11ylabs.com/" target="_blank">Website</Link>
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/3">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Tools
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Figma, UX Research, Competitive Analysis
                    </p>
                </div>

            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <Image src="/images/juniper/juniper.png" alt="Juniper" width={1000} height={1000} />
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    Juniper is a mobile app concept designed to simplify the way renters, landlords, and investors interact with apartments. Whether you&apos;re looking for a place to live, listing your property, or investing in real estate, Juniper aims to centralize that experience through a clean, user-friendly interface.
                </p>
                <Image src="/images/juniper/Juniper-01.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    I started Juniper to explore how I might streamline the fragmented rental and investment process into a single mobile experience. The idea was to give:
                    <ul className="list-disc list-inside my-4 pl-4">
                        <li>Renters a place to find and organize listings</li>
                        <li>Landlords tools to publish and manage listings (planned)</li>
                        <li>Investors a dashboard to track real estate portfolios (planned)</li>
                    </ul>
                    <br />
                    I focused on building:
                    <ul className="list-disc list-inside my-4 pl-4">
                        <li>A smooth onboarding flow</li>
                        <li>Favorites and smart search for apartment comparison</li>
                        <li>Scaffolding for investment tracking and future AI recommendations</li>
                    </ul>

                </p>
                <Image src="/images/juniper/Juniper-02.png" alt="Juniper" width={1000} height={1000} className="my-4" />

                <Image src="/images/juniper/Juniper-03.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <Image src="/images/juniper/Juniper-04.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <Image src="/images/juniper/Juniper-05.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <Image src="/images/juniper/Juniper-06.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <Image src="/images/juniper/Juniper-07.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <Image src="/images/juniper/Juniper-08.png" alt="Juniper" width={1000} height={1000} className="my-4" />
                <Image src="/images/juniper/Juniper-09.png" alt="Juniper" width={1000} height={1000} className="my-4" />
             
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <h2 className="text-primary-text text-xl font-medium leading-tight">
                    Architecture & Implementation
                </h2>

            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    Built with Flutter, I followed a Clean Architecture approach to keep things modular and scalable.
                </p>
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    File Structure:
                </p>

                <ul className="filetree-ul text-primary-text text-lg font-medium leading-tight">
                    <li className="filetree-li">
                        lib/
                        <ul className="filetree-ul pl-4 text-primary-text">
                            <li className="filetree-li">core/ <span className="text-secondary-text"># Constants, themes, shared components</span></li>
                            <li className="filetree-li">
                                features/
                                <ul className="filetree-ul pl-4 text-primary-text">
                                    <li className="filetree-li">
                                        home/
                                        <ul className="filetree-ul pl-4">
                                            <li className="filetree-li">
                                                data/
                                                <ul className="filetree-ul pl-4">
                                                    <li className="filetree-li">datasources/</li>
                                                    <li className="filetree-li">models/</li>
                                                    <li className="filetree-li">repositories/</li>
                                                    <li className="filetree-li"><span className="text-secondary-text">datasource.dart</span></li>
                                                </ul>
                                            </li>
                                            <li className="filetree-li">
                                                domain/
                                                <ul className="filetree-ul pl-4">
                                                    <li className="filetree-li">entities/</li>
                                                    <li className="filetree-li">repositories/</li>
                                                    <li className="filetree-li">usecases/</li>
                                                    <li className="filetree-li"><span className="text-secondary-text">entities.dart</span></li>
                                                </ul>
                                            </li>
                                            <li className="filetree-li">
                                                presentation/
                                                <ul className="filetree-ul pl-4">
                                                    <li className="filetree-li">blocs/</li>
                                                    <li className="filetree-li">pages/</li>
                                                    <li className="filetree-li">widgets/</li>
                                                    <li className="filetree-li"><span className="text-secondary-text">home_page.dart</span></li>
                                                </ul>
                                            </li>
                                            <li className="filetree-li"><span className="text-secondary-text">index.dart</span></li>
                                            <li className="filetree-li"><span className="text-secondary-text">types.dart</span></li>
                                        </ul>
                                    </li>

                                    <li className="filetree-li">onboarding/ <span className="text-secondary-text"># Welcome flow</span></li>
                                    <li className="filetree-li">search/ <span className="text-secondary-text"># Apartment discovery</span></li>
                                    <li className="filetree-li">favorites/ <span className="text-secondary-text"># Saved listings</span></li>
                                    <li className="filetree-li">investment/ <span className="text-secondary-text"># Portfolio tracking (future)</span></li>
                                </ul>
                            </li>
                            <li className="filetree-li">presentation/ <span className="text-secondary-text"># Reusable widgets and screens</span></li>
                        </ul>
                    </li>
                </ul>
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    To ensure platform adaptability, I created custom responsive components using platform checks to dynamically switch between Material and Cupertino elements depending on the OS.
                </p>
            </div >
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <h2 className="text-primary-text text-xl font-medium leading-tight">
                    Challenges & Lessons
                </h2>
            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <p className="text-primary-text text-lg font-medium leading-tight my-4">
                    Initially, I tried to build too much — search, investment, landlord dashboards, and AI. I learned to focus on smaller use cases and solve one problem really well before expanding.

                    <br />
                    <br />

                    <strong className=" text-xl font-medium leading-tight ">Performance Issues</strong>

                    <br />
                    Image-heavy screens were laggy, so I explored:

                    <ul className="list-disc list-inside my-4 pl-4">
                        <li>Image caching</li>
                        <li>Shimmer states for loading</li>
                        <li>Optimizing data queries to reduce network overhead</li>
                        <li> Optimizing data queries to reduce network overhead</li>
                    </ul>


                    <br />
                    <br />

                    <strong className=" text-xl font-medium leading-tight ">

                        iOS Limitations</strong>

                    <br />
                    Not having a Mac made iOS testing a challenge. To account for this, I designed platform-specific UI components that dynamically adapt — ensuring a smooth experience even without real device testing.

                    <br />
                    <br />

                    <strong className=" text-xl font-medium leading-tight ">
                        What I Learned
                    </strong>

                    <ul className="list-disc list-inside my-4 pl-4">
                        <li>How to build large features modularly within a scalable architecture</li>
                        <li>The value of designing for performance, especially with visuals and data-heavy UIs</li>
                        <li>Why scoping matters — keep your MVP lean and learn from it</li>
                        <li>How to think in terms of cross-platform design, even when testing tools are limited</li>
                    </ul>

                    <br />

                    I didn&apos;t finish every feature, but the foundation is strong — and something I&apos;d love to revisit, scale, or rebuild with better tooling in the future.
                </p>
            </div>
        </div >
    )
}