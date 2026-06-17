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

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-[#36384F]"></span>

            <span className="w-2 h-2 rounded-full border-3 border-[#36384F]"></span>

            <span className="w-16 h-[2px] bg-[#36384F]"></span>
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-12 items-start">

          {/* Left Column */}
          <div>

            <div className="text-[#36384F] text-lg leading-8 text-justify">

                <h3 className="text-2xl md:text-3xl font-semibold text-[#36384F] mb-6">
                    Invisalign: Indifferent Yet Impactful
                </h3>
              <p className="text-[14px]">
                Are there alignment issues in your teeth? Do you often hesitate to laugh out loud to cover your teeth? Are you shy to wear dental braces or are compromising <strong>without braces</strong>? Well, you do not need to bother about it anymore. <strong>Great Lakes Invisalign</strong> and<strong> Clear Aligner</strong> Centre – is here with the most promising dental <strong>invisible aligners</strong> solution for your complex orthodontic issues. No more fixed dental braces for a year or more to get back your beautiful smile; when you opt for the <strong>best Invisalign treatment in Kolkata</strong>. But treatment of <strong>Invisalign</strong> requires a high level of clinical skills and
understanding of digital technology which you will receive here from the <strong>top Invisalign</strong> provider in
Eastern India. Dr.Abhisek Ghosh and his team of experts are experienced <strong>Invisalign orthodontists</strong> who brings this highly advanced form of treatment at your doorstep. He has over a decade of experience in cosmetic dentistry and transparent orthodontic braces and 10,000+ happy dental braces patients. He always looks forward to introducing these updated treatments at the Great Lakes Dental Clinic in Kolkata for residents’ ease.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2 items-center justify-center">

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