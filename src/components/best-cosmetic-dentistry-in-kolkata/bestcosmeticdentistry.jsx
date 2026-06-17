export default function Bestcosmeticdentistrysection(){
    return(
        <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Main Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#36384F]">
            Cosmetic Dentistry
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-[#36384F]"></span>

            <span className="w-2 h-2 rounded-full border-3 border-[#36384F]"></span>

            <span className="w-16 h-[2px] bg-[#36384F]"></span>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center mb-12">

          {/* Left Column */}
          <div>

            <h3 className="text-2xl md:text-2xl font-bold text-[#36384F] mb-6">
              Cosmetic Dentistry
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              <p>
                Those celebrities with a killer <strong>smile</strong> – they aren’t always born with that. There is a fair chance that all of them have had <strong>cosmetic dental</strong> work done by the <strong>best dentist in Kolkata</strong>. Many people are unaware that <strong>cosmetic dentistry</strong> has become a frequent fixture for celebrities and influencers alike. After all, your smile is the key to making good impressions.

<strong>Cosmetic Dentistry</strong> is a broad term that refers to a variety of best dental procedures aimed at improving the appearance of misaligned teeth, gums, and bite. It addresses every aspect of your smile’s aesthetics, from the colour to form, and size of your teeth to their alignment, placement, and overall appearance. Cosmetic dentistry is divided into many categories such as <strong>dental crown</strong>, <strong>dental veneer</strong>, <strong>dental composite filling</strong>, <strong>dental implants</strong>, and <strong>teeth whitening</strong>, to name a few.
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/__3CqnkqO6A?si=oi5AYTYTDZjPPQ6S"
                title="Cosmetic Dentistry"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        {/* Bottom Content */}
        <div>
          <p className="text-[#36384F] text-[15px] leading-relaxed text-justify">
            Cosmetic dental procedures are safe, quick, and relatively
            affordable if performed in kolkata's <strong> top dental clinic. </strong>If you want a gorgeous smile just like the celebrities,
            book an appointment with the{" "}
            <strong>best cosmetic dentist in Kolkata,</strong> at Great
            Lakes Dental Clinic and Orthodontic Centre.
          </p>
        </div>

      </div>
      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mt-6"></div>
    </section>
    )
}