import { BiSolidRightArrow } from "react-icons/bi";

export default function DentalCompositeFillingSection() {
  const fillingPoints = [
    "Decays,",
    "Cracks,",
    "Cavities, and",
    "Fractures.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Dental Composite Filling
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">

              <p>
                A <strong>dental composite filling</strong> is done to
                treat the cavity. This form of filling restores your oral
                health by using a composite resin material.

                A composite resin is a material comprising a variety of
                products, such as plastic and fine glass.

                Unlike traditional amalgam fillings, composite fillings
                are more effective in terms of cavity treatment.

                Since it is a tooth colored material, the substance
                blends in easily with your teeth and treat cavities
                efficiently.

                Rather than simply filling the hole, composite resin
                bonds with the natural structure of your tooth.

                As a result, the dentist won't have to drill away much
                of your tooth's natural structure to place the dental
                filling.
              </p>

              <p className="mt-6 mb-5">
                A composite filling is used to repair:
              </p>

              <ul className="space-y-3 mb-6">
                {fillingPoints.map((point, index) => (
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

              <p>
                The <strong>dental composite filling</strong> has become
                the go-to choice for those who want the most
                unnoticeable and natural finish possible.

                It offers a restoration that is more aesthetically
                pleasing than traditional amalgam fillings.
              </p>

            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">

            {/* Top Video */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/4hVqltKSO_c?si=Mj5HQfUSInOcbf0Q"
                title="Dental Composite Filling Video 1"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>

            {/* Bottom Video */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/3I3_LZde-8Q?si=YfaKodk8krz_QdRV"
                title="Dental Composite Filling Video 2"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>

          </div>

        </div>

        {/* Bottom Single Column Content */}
        <div className="mt-12">
          <p className="text-[#36384F] text-lg leading-relaxed text-justify">
            To improve your dental appearance, we are the right place
            to contact!

            Here at Great Lakes Dental Clinic and Orthodontic Care,
            our <strong>best cosmetic dentist in Kolkata</strong> are
            committed to providing quality dental treatment at
            affordable prices.
          </p>
        </div>

      </div>
    </section>
  );
}