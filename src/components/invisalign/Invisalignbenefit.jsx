import { BiSolidRightArrow } from "react-icons/bi";

export default function InvisalignBenefitsSection() {
  const points = [
    "Virtually invisible and aesthetically pleasing.",
    "Comfortable to wear with no metal brackets or wires.",
    "Removable while eating, brushing, and flossing.",
    "Customized treatment planning using advanced digital technology.",
    "Fewer clinic visits compared to conventional braces.",
    "Predictable and highly effective treatment outcomes.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Main Sub Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
          Invisalign is the best orthodontic treatment of choice for adults
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#36384F] mb-2">
              Here is why we propose Invisalign
            </h3>

            <ul className="space-y-1 mb-4">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#36384F] text-lg"
                >
                  <BiSolidRightArrow
                    className="text-[#00A1D4] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#36384F] text-lg leading-relaxed">
              Next time you plan to get a perfect smile to flaunt,
              contact us for the{" "}
              <strong>Invisalign treatment in Kolkata</strong>.
            </p>

          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/MiJ-fvP55bo?si=M9DVS5X8qsa6lgxK"
                title="Invisalign Treatment Video"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}