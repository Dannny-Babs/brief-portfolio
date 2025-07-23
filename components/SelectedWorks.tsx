import Image from "next/image";

export default function SelectedWorks() {
    return (
        <div className="w-full max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto grid grid-cols-1 md:grid-cols-3 ">
            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Med Melanin.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        MedMelanin Website
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        30+ page site with CMS, SEO, automations.                            </p>

                </div>
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Inclusivio.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Inclusivio
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Accessibility compliance checker with full dashboard UX
                    </p>


                </div>
                <div className="relative w-full h-fit p-4 border-r-[1.5px]  border-dark-border overflow-hidden">
                    <Image src="/images/Talo.gif" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Talo
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Job search and ATS platform with AI insights
                    </p>

                </div>

            </div>
            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Sortee.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Sortee
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Pitch Decks + Brand Design Exploration for a startup
                    </p>

                </div>
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/MedMelanin.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        MedMelanin App
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Health advocacy platform designed for women of colour
                    </p>

                </div>

                <div className="relative w-full h-fit p-4 border-r-[1.5px]  border-dark-border overflow-hidden">
                    <Image src="/images/Juniper.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Spectraum
                    </h4>
                        <p className="text-secondary-text text-[17px] font-medium leading-tight">
                        E-commerce app for neurodivergent users
                    </p>

                </div>

            </div>
            <div className="flex flex-col h-full col-span-1">
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Marathon.png" alt="work3" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Marathon
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        AI Sales Enablement Platform
                    </p>


                </div>
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Tally.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Tally
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Personal finance tracker with AI insights
                    </p>

                </div>
                <div className="relative w-full h-fit p-4 border-r-[1.5px] border-b-[1.5px] border-dark-border overflow-hidden">
                    <Image src="/images/Juniper.png" alt="work1" height={1200} width={1000} className="object-contain" />
                    <h4 className="text-primary-text tracking-wide text-xl font-medium leading-tight mt-4">
                        Juniper
                    </h4>
                    <p className="text-secondary-text text-[17px] font-medium leading-tight mt-1">
                        Smart apartment search with onboarding & investment tools
                    </p>

                </div>
            </div>
        </div>
    );
} 