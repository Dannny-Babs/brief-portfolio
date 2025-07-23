import Image from "next/image";

export default function SelectedWorks() {
    return (
        <div className="w-full max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto grid grid-cols-1 md:grid-cols-3 ">
            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Med Melanin.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight mt-4">
                        MedMelanin Website
                    </h4>
                    <p className="text-secondary-text text-[15px] font-medium leading-tight mt-2">
                        30+ page site with CMS, SEO, automations.                            </p>

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
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Sortee.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight mt-4">
                        Sortee
                    </h4>
                    <p className="text-secondary-text text-[15px] font-medium leading-tight mt-2">
                        Pitch Decks + Brand Design Exploration for a startup
                    </p>

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
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Marathon.png" alt="work3" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-lg font-medium leading-tight mt-4">
                        Marathon
                    </h4>
                    <p className="text-secondary-text text-[15px] font-medium leading-tight mt-2">
                        AI Sales Enablement Platform
                    </p>


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
    );
} 