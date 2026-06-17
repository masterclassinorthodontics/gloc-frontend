import { BiSolidRightArrow } from "react-icons/bi";

export default function BestDentalCrownSection() {
  const crownPoints = [
    "Cracked teeth,",
    "Weakened teeth, and",
    "Severely worn-out teeth.",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#36384F] mb-6">
              Dental Crown
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">

              <p>
                A <strong>dental crown</strong> is usually a cap for a tooth that is damaged. Different types of materials can be used to make <strong>dental crowns</strong>. Metal, porcelain fused to metal, <strong>ceramic</strong>, <strong>zirconia</strong> and composite resin are some of those materials.<br/><br/>
                Dental crowns can be used to correct:<br/><br/>
              </p>


              <ul className="space-y-1">
                {crownPoints.map((point, index) => (
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
                src="https://www.youtube.com/embed/lHwiBS26Rv8?si=bQUvvi24LvckI4Zu"
                title="Dental Crown"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

        {/* Bottom Content */}
        <div className="mt-12">
          <p className="text-[#36384F] text-[15px] leading-relaxed text-justify">
            Crowns are often recommended after a <strong>root canal treatment</strong> since the tooth is more delicate and requires additional protection. The procedure generally depends on the <strong>top dentist in Kolkata</strong>, who assesses the condition of your teeth first and then decides which procedure to opt for. It can be a sameday or a multi-day procedure depending on the doctor’s decision at the <strong>best cosmetic dental clinic in Kolkata</strong>.
          </p>
        </div>

        

      </div>
    </section>
  );
}