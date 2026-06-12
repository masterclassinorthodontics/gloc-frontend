import { BiSolidRightArrow } from "react-icons/bi";

export default function CosmeticDentistryInvolvesSection() {
  const points = [
    "The addition of a dental a material to teeth or gums – bonding, porcelain, veneers ( dental laminates), dental crown (caps), gum grafts.",
    "The removal of tooth structure or gums – enameloplasty, gingivectomy.",
    "Neither adding or removing dental materials, tooth structure or gums – teeth whitening ( teeth bleaching), laser whitening, gum depigmentation.",
    "Straightening of teeth accompanied by improvement in appearance of face – orthodontics.",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 gap-16 items-start">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              What does cosmetic dentistry involve?
            </h3>

            <p className="text-[#36384F] text-lg leading-relaxed mb-6">
              Typically, cosmetic dentistry involves
            </p>

            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <BiSolidRightArrow
                    className="text-[#00A1D4] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-[#36384F] text-lg leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Add image or content here */}
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 mt-12"></div>
    </section>
  );
}