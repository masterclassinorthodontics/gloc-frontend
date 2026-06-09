import Image from "next/image";

export default function BiolaseLaserSystemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
          Biolase – Laser System
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-40 items-center">

          {/* Left Column */}
          <div className="flex justify-center">
            <div className="text-[#36384F] text-lg leading-relaxed text-justify">

              <p>
                We have the <strong>best dentist in Kolkata</strong> who use
                state-of-the-art equipment like Biolase to provide quality
                services to our patients.
                An extremely versatile dental equipment, Biolase – Laser System
                is used to expedite or perform various procedures including
                removal of caries, cavity preparation, gum lifting or reshaping,
                dentin and enamel procedures, soft tissue procedures, cosmetic
                smile designing and decay removal.
                The ISO certified dental laser system is completely safe for
                use on both children and adults.
                Justifiably, we have been awarded the{" "}
                <strong>
                  <em>best dental clinic in Kolkata</em>
                </strong>{" "}
                multiple times – for having the most upgraded dental equipment
                setup in Eastern India.
              </p>

            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-imgs/Images-Biolase.png"
              alt="Biolase Laser System"
              width={600}
              height={600}
              className="w-[350px] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}