import Image from "next/image";

export default function CastGoldToZirconiaSection() {
  return (
    <section className="py-10 bg-white">
      <div className="w-[60vw] mx-auto">

        {/* Top Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#36384F] mb-6">
              Cast Gold to Zirconia
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              <p>
                In the past, porcelain used in crowns and bridges was brittle
                due to its high concentration of glass particles. To increase
                strength metal as added in applications such as cast gold and
                structures with porcelain facings.
              </p>

              <br />

              <p>
                There are different brands like <strong>E-max</strong>,{" "}
                <strong>Lava</strong>, and other brands that seem to have
                solved a number of problems with the strength of the teeth.
                However, metal decreases the translucency of the porcelain
                making the final effect seem less realistic.
                Selecting the appropriate core material for crowns has become
                a bit of a science and several cores are available today.
                Glass infused ceramic cores are created with pure alumina,
                spinel, or <strong>zirconia</strong> and feature a higher
                proportion of refractory crystalline, which makes them look
                more realistic than in the past.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/Zirconia1.png"
              alt="Cast Gold to Zirconia"
              width={600}
              height={600}
              className="w-full max-w-[400px] h-auto object-contain rounded-3xl"
            />
          </div>

        </div>

        {/* Bottom Single Column */}
        <div className="mt-12 text-[#36384F] text-[15px] leading-relaxed text-justify">
          <p>
            Cosmetic dentistry usually follows along the lines of symmetry
            and harmony. Certainly brightening teeth is something most people
            desire, removing stains (coffee, cigarettes). Everyone would like
            to be proud of their smile and show it off, but most do not
            because of their malaligned teeth, uneven or pigmented gums or
            missing teeth etc. Cosmetic dentistry could be used to fix these
            issues.
          </p>
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mt-12"></div>
    </section>
  );
}