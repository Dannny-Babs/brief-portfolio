import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen py-16 md:py-32 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Name */}
        <h1 className="text-3xl font-semibold text-black mb-4 tracking-tight">
          Daniel Babalola
        </h1>

        {/* Main Bio */}
        <p className="text-base md:text-sm text-gray-600 leading-relaxed">
          I&apos;m a design engineer based in <span className="font-semibold">Toronto</span>, building products that are both functional and beautiful.
          
          <br />
          Currently, I&apos;m working at <span className="font-semibold">Med Melanin</span> as a design engineer, creating user-centered solutions for healthcare.
        </p>

        {/* Experience Section */}
        <div className="space-y-6 mt-12">
          <h2 className="text-lg font-medium text-black">Experience</h2>

          <div className="space-y-6">
            {/* Med Melanin */}
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className=" text-gray-800 font-semibold">Med Melanin</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-neutral-500 font-semibold">Design Engineer</span>
                <div className="h-1 w-1 bg-neutral-500 tracking-tighter rounded-full"></div>
                <span className="text-xs text-neutral-500">2024 to Present</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Designed Med Melanin&apos;s mobile and web apps  leading user research and testing to create a design system and clean, functional UI.
                Worked on  a 30-plus-page, SEO-optimized website that boosted fundraising and user growth.
              </p>
            </div>

            {/* Freelance */}
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className=" text-neutral-700 font-semibold">Freelance and Contract</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-neutral-500 font-medium">Designer & Developer</span>
                <div className="h-1 w-1 bg-neutral-500 tracking-tighter rounded-full"></div>
                <span className="text-xs tracking-tighter  text-neutral-500">2022 to Present</span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Worked as a designer and developer with early-stage founders and lean startup teams. Designed and shipped landing pages, brand sites, and interactive MVPs across industries. Always focused on shipping clean, functional products that people actually use.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Works */}
        <div className="space-y-4 mt-12">
          <h2 className="text-lg font-medium text-black">Selected Works</h2>
          <div className="space-y-3">
            {/* Project 1 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-2">

              <div className="flex-1 min-w-0">
                {/* Thumbnail */}
                <Image src="/melanin.png" alt="Med Melanin" width={100} height={100} className="mb-2" />

                <h3 className="text-sm font-medium text-black truncate">
                  Website & App Design
                </h3>
                <p className="text-sm md:text-xs text-neutral-500 leading-relaxed">
                  Full healthcare website. Designed and built over 20 pages, improved SEO and site structure, shipped a clear design system for consistent UX.
                </p>
              </div>
              {/* Link */}
              <div className="flex-shrink-0">
                <a
                  href="https://medmelanin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-blue-800   
                  hover:underline
                  hover:font-semibold
                  transition-colors flex items-center gap-1"
                >
                  Visit Site
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-2"  >
              <div className="flex-1 min-w-0">
                {/* Thumbnail */}
                <Image src="/inclusivio.png" alt="Inclusivio" width={100} height={100} className="mb-2" />

                <h3 className="text-sm font-medium text-black truncate">
                  Website & App Design
                </h3>
                <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                  AI accessibility compliance site for ADA and WCAG. Designed the landing page, explained features clearly, and set up the structure for lead generation.
                </p>
              </div>

              {/* Link */}
              <div className="flex-shrink-0">
                <a
                  href="https://thea11ylabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-blue-800 
                  hover:underline
                  hover:font-semibold
                  transition-colors flex items-center gap-1"
                >
                  Visit Site
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-2"  >
              {/* Thumbnail */}
              <div className="flex-1 min-w-0">
                <Image src="/sidepro.png" alt="sidepro" width={100} height={100} className="mb-2" />
                <h3 className="text-sm font-medium text-black truncate">
                  Sidepro Website
                </h3>
                <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                  Landing page concept for a serverless cloud platform built for indie devs. Highlights hassle-free deployment, simple push-to-URL workflow, and no-nonsense billing for side projects.
                </p>
              </div>

              {/* Link */}
              <div className="flex-shrink-0">
                <a
                  href="http://bit.ly/3Ty2sPC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-blue-800 
                  hover:underline
                  hover:font-semibold
                  transition-colors flex items-center gap-1"
                >
                  View Prototype
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-2"  >
              {/* Thumbnail */}
              <div className="flex-1 min-w-0">
                <Image src="/stan.png" alt="Stan" width={100} height={100} className="mb-2" />
                <h3 className="text-sm font-medium text-black truncate">
                  Stan Website
                </h3>
                <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                Landing page redesign for Stan, an all-in-one creator platform for monetizing audiences fast. Showcases how creators host courses, products, and bookings under one link.
                </p>
              </div>

              {/* Link */}
              <div className="flex-shrink-0">
                <a
                  href="https://bit.ly/4nHfhox"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-xs text-neutral-400 hover:text-blue-800 
                  hover:underline
                  hover:font-semibold
                  transition-colors flex items-center gap-1"
                >
                  View Prototype
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-2">
              {/* Thumbnail */}


              {/* Content */}
              <div className="flex-1 min-w-0">
                <Image src="/whalesync.png" alt="WhaleSync" width={100} height={100} className="mb-2" />
                <h3 className="text-sm font-medium text-black truncate">
                  WhaleSync Website Redesign
                </h3>
                <p className="text-sm md:text-xs text-gray-600 leading-relaxed">
                  Redesign concept for Whalesync&apos;s landing page. Focused on clear messaging about two-way sync across tools like Airtable, Webflow, HubSpot, and Salesforce.
                </p>
              </div>

              {/* Link */}
              <div className="flex-shrink-0">
                <a
                  href="https://bit.ly/4nyns6q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-blue-800 
                  hover:underline
                  hover:font-semibold
                  transition-colors flex items-center gap-1"
                >
                  View Prototype
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 p-2">
              {/* Thumbnail */}
              <div className="flex-1 min-w-0">
                <Image src="/pairenthesis.png" alt="Pairenthesis" width={120} height={120} className="mb-2 " />
                <h3 className="text-sm font-medium text-black truncate">
                  Pairenthesis Website
                </h3>
                <p className="text-sm md:text-xs text-gray-600 leading-relaxed"  >
                  Reimagined workflow automation for the AI era. Designed a clean landing page that explains how the platform streamlines data handling and verification for businesses.
                </p>
              </div>

              {/* Link */}
              <div className="flex-shrink-0">
                <a
                  href="https://bit.ly/40EXOTK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-neutral-400 hover:text-blue-800 
                  hover:underline
                  hover:font-semibold
                  transition-colors flex items-center gap-1"
                >
                  View Prototype
                </a>
              </div>
            </div>


          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 mt-12">
          <h2 className="text-lg font-medium text-black">Contact</h2>
          <div className="space-y-2 flex flex-col md:flex-row gap-2">
            <div>
              <a
                href="mailto:dbabs297@gmail.com"
                className="text-sm text-gray-400 hover:text-black transition-colors"
              >
                Email
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/dannybabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-black transition-colors"
              >
                Twitter
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Dannny-Babs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-black transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
