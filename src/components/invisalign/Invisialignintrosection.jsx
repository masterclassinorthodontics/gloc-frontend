import Image from "next/image";

export default function InvisalignIntroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#36384F]">
            Invisalign
          </h2>

          <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">

                <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
                    Invisalign: Indifferent Yet Impactful
                </h3>
              <p>
                Are there alignment issues in your teeth? Do you often
                hesitate to laugh out loud to cover your teeth? Are you shy
                to wear dental braces? Well, you do not need to bother about
                it anymore.

                Great Lakes <strong>Invisalign</strong> and{" "}
                <strong>Clear Aligner</strong> Centre is here with the most
                promising solution to your complex orthodontic issues.

                No more fixed dental braces for a year or more to get back
                your beautiful smile when you opt for the{" "}
                <strong>Invisalign treatment in Kolkata.</strong>

                But treatment of Invisalign requires a high level of
                clinical skills and understanding of digital technology.

                Dr. Abhisek Ghosh and his team of experts are experienced
                Invisalign orthodontists who bring this highly advanced form
                of treatment to your doorstep.

                Dr. Abhisek Ghosh has over a decade of experience in
                cosmetic dentistry and <strong>dental braces</strong> with
                10,000+ happy dental braces patients.

                He always looks forward to introducing updated treatments at
                the Great Lakes Dental Clinic in Kolkata for the ease and
                convenience of residents.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 items-center justify-center">

            {/* Top Image */}
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/Invisialign-imgs/invisalign-img.jpg"
              alt="Invisalign Treatment"
              width={600}
              height={350}
              className="w-full h-[250px] object-contain rounded-lg"
            />

            {/* Bottom Image */}
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/Invisialign-imgs/invisalign-next.png"
              alt="Clear Aligner Treatment"
              width={600}
              height={350}
              className="w-full h-[250px] object-contain rounded-lg"
            />

          </div>

        </div>

      </div>
    </section>
  );
}