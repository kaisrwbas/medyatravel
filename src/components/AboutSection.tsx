import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-charcoal py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Founder Profile Image */}
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-2 border-gold/30 sm:max-w-md">
            <Image
              src="/images/about-founder.jpg"
              alt="MEDYA TRAVEL founder profile"
              fill
              sizes="(max-width: 1024px) 384px, 448px"
              className="object-cover"
              priority
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-gold sm:mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">
              A New Standard in Syrian Travel
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-light-gray sm:mt-6 sm:text-base">
              MEDYA TRAVEL was founded on a singular belief: that Syria deserves
              to be experienced not as a destination, but as a revelation. We
              design private journeys for travelers who value discretion,
              cultural depth, and uncompromising comfort.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-light-gray sm:text-base">
              Every itinerary is personally composed — from heritage walks
              through Damascus to sunset dinners on the Mediterranean coast —
              with the precision of a luxury maison and the warmth of a trusted
              guide.
            </p>

            {/* Partner Branding */}
            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:gap-8">
              <div className="relative h-14 w-36 sm:h-16 sm:w-40">
                <Image
                  src="/images/partner-logo.png"
                  alt="Syrian partner logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
              <p className="text-xs uppercase tracking-luxury text-light-gray">
                Official Syrian Partner
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}