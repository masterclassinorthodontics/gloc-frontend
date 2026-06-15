import { BiSolidRightArrow } from "react-icons/bi";

export default function DentalVeneerSection() {
  const veneerPoints = [
    "Discolouration of the teeth,",
    "Worn out teeth,",
    "Broken or chipped teeth,",
    "Misaligned, irregularly shaped, or uneven teeth,",
    "To close the gaps in between teeth.",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h3 className="text-2xl md:text-2xl font-bold text-[#36384F] mb-6">
              Dental Veneer
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">

              <p>
                Dental veneers often referred to as dental porcelain
                laminates or porcelain veneers, are tooth-coloured
                wafer-thin, custom-made shells that are designed to
                improve the appearance of your teeth.

                These shells generally cover your teeth’s front
                surface and are bonded by changing their shape,
                size, length, or colour.
              </p>

              <p className="mt-6 mb-5">
                Veneers are generally used to fix different types
                of dental problems like:
              </p>

              <ul className="space-y-1">
                {veneerPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <BiSolidRightArrow
                      className="text-[#00A1D4] mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/SSCI6M1eNPY?si=-16gWKlTzAGCcIOp"
                title="Dental Veneer"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="mt-12">
          <p className="text-[#36384F] text-[15px] leading-relaxed text-justify">
            The cosmetic dentist will reshape the surface of the tooth
            to a thickness that is approximately equal to the thickness
            of the <strong>dental veneer</strong> to be applied.

            Before that, he/she will diagnose the condition of your
            teeth just to make sure if or not{" "}
            <strong>dental veneers</strong> would be right for you.
          </p>
        </div>

        

      </div>
    </section>
  );
}