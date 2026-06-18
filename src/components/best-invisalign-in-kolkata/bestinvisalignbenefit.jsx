import { BiSolidRightArrow } from "react-icons/bi";

export default function BestInvisalignBenefitsSection() {
  const points = [
    <>
    It helps you straighten the teeth with lesser pain and higher comfort.
    </>,
    <>
    These <strong>invisible removable braces</strong> allow you to get the remedy without compromising with your social life and smile.
    </>,
    <>
    It has no dietary restrictions like – <strong>conventional dental braces.</strong>
    </>,
    <>
    It gives you the result faster than regular braces.
    </>,
    <>
    Invisalign is made up of SmartTrack material, making it easier to put on and off.
    </>,
    <>
    Moreover, you can avail yourself of all these benefits at the most affordable rates among all <strong>Invisalign cost in Kolkata.</strong>
    </>,
    <>
    Next time you plan to get a perfect smile to flaunt, contact us for the <strong>Invisalign treatment in Kolkata.</strong>
    </>,
  ];

  return (
    <section className="py-2 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Main Sub Heading */}
        <h2 className="text-2xl md:text-2xl font-semibold text-[#36384F] mb-6">
          Invisalign is the best orthodontic treatment of choice for adults
        </h2>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h3 className="text-xl md:text-[14px] font-normal text-[#36384F] mb-2">
              Here is why we propose Invisalign
            </h3>

            <ul className="space-y-1 mb-4">
              {points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#36384F] text-[15px]"
                >
                  <BiSolidRightArrow
                    className="text-[#00A1D4] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* <p className="text-[#36384F] text-[14px] leading-relaxed">
              Next time you plan to get a perfect smile to flaunt,
              contact us for the{" "}
              <strong>Invisalign treatment in Kolkata</strong>.
            </p> */}

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