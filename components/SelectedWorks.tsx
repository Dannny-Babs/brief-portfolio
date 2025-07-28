import Image from "next/image";
import Link from "next/link";

export default function SelectedWorks() {
    return (
        <div className="w-full max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/inclusivio.png"
                            alt="Inclusivio"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Link href="/works/inclusivio" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className=" text-white border border-white px-3 py-1 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-200">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Inclusivio
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Accessibility compliance checker with full dashboard UX
                    </p>
                </div>

                <div className="relative w-full p-4 border-dark-border group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/Talo.GIF"
                            alt="Talo"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Link href="/works/talo" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className=" text-white border border-white px-3 py-1 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-200">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Talo
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Job search and ATS platform with AI insights
                    </p>
                </div>
            </div>

            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/Sortee.png"
                            alt="Sortee"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Link href="/works/sortee" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className=" text-white border border-white px-3 py-1 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-200">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Sortee
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Pitch Decks + Brand Design Exploration for a startup
                    </p>
                </div>

                <div className="relative w-full p-4 border-r-[1.5px] border-l-[1.5px] border-dark-border group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/Juniper.png"
                            alt="Juniper"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Link href="/works/juniper" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className=" text-white border border-white px-3 py-1 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-200">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Juniper
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Smart apartment search with onboarding & investment tools
                    </p>
                </div>
            </div>

            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/MedMelanin.png"
                            alt="MedMelanin App"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Link href="/works/medmelanin" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className=" text-white border border-white px-3 py-1 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-200">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        MedMelanin App
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Health advocacy platform designed for women of colour
                    </p>
                </div>

                <div className="relative w-full p-4 border-r-[1.5px] border-dark-border group cursor-pointer">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                        <Image
                            src="/images/Tally.png"
                            alt="Tally"
                            fill
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                            <Link href="/works/tally" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button className=" text-white border border-white px-3 py-1 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-200">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Tally
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Personal finance tracker with AI insights
                    </p>
                </div>
            </div>
        </div>
    );
} 