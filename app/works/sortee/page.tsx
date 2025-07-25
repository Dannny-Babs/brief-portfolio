import ResponsiveHeader from "@/components/ResponsiveHeader";
import { cn } from "@/lib/utils";
import { UndoLeftRound } from '@solar-icons/react/ssr';
import Image from "next/image";
import Link from "next/link";


export default function SorteeDetails() {
    return (
        <div className="min-h-screen  font-[family-name:var(--font-darker-grotesque)]">
            <ResponsiveHeader />
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
                    Sortee
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
                <div className="flex flex-col gap-1 items-start justify-start ">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Description
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">

                        Sortee is a platform designed to spark spontaneous connections and help people discover unforgettable experiences in their own city — from indie concerts to pop-up events.
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/4">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Role
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Visual & Product Designer
                    </p>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start ">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Links
                    </p>
                    <div className="flex flex-row gap-2 items-center justify-start ">
                        <p className="text-primary-text text-lg hover:underline font-medium leading-tight">
                            <Link href="https://sorteehub.com" target="_blank">Website</Link>
                        </p>
                    </div>

                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:w-1/3">
                    <p className="text-secondary-text text-lg font-medium leading-tight">
                        Tools
                    </p>
                    <p className="text-primary-text text-lg font-medium leading-tight">
                        Figma, Next.js, Tailwind CSS, Shadcn UI
                    </p>
                </div>

            </div>
            <div className={cn(
                "max-w-5xl border-r-[1.5px] border-l-[1.5px] border-b-[1.5px] border-dark-border mx-auto ",
                "flex  flex-col  w-full gap-2",
                "p-4"
            )}>
                <p className="text-primary-text text-lg font-medium leading-tight my-3">
                    I created a complete brand identity system for Sortee that captures the energy of real-time discovery and connection. The logomark evokes movement and human connection, while the color palette and typography reflect playfulness and immediacy.


                </p>
                <Image src="/images/sortee/sortee-1.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-2.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-3.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <p className="text-primary-text text-lg font-medium leading-tight my-3">
                    Alongside the brand, I designed a bold pitch deck that helped communicate Sortee&apos;s mission to early partners and collaborators. I also led the product design, creating user flows and mobile UI screens that emphasize swiping, curiosity, and local exploration.
                </p>
                <Image src="/images/sortee/sortee-4.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-5.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-6.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-7.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-8.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-9.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-10.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />
                <Image src="/images/sortee/sortee-11.png" alt="Sortee" width={1000} height={1000} className="w-full h-full object-cover" />

            </div>
        </div >
    );
}