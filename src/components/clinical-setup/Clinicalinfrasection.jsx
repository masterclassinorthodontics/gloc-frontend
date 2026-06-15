import Image from "next/image";

export default function ClinicInfrastructureSection() {
  return (
    <section className="py-10 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Main Heading */}
        <div className="mb-4">
          <h2 className="text-4xl md:text-4xl font-bold text-[#36384F] text-center">
            Clinic Infrastructure and Guidelines:
          </h2>

          {/* <div className="w-24 h-1 bg-[#00A1D4] mt-4"></div> */}
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-40 items-center">

          {/* Left Column */}
          <div className="flex justify-center">
            <div className="w-[80vw]">
            <h3 className="text-2xl md:text-2xl font-semibold text-[#36384F] mb-4">
              ISO Certified Clinic
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              <p>
                Being one of the <strong>best cosmetic dental clinic in Kolkata,</strong>{" "}
                we take pride in delivering quality dental treatment to our
                patients.

                To provide globally benchmarked services, our clinic has earned
                international certifications that maintain and establish our
                management systems.
                We have in-house latest dental and orthodontic instrumentations
                and equipment such as <strong>dental X-ray</strong> and
                in-house <strong>dental implant</strong> systems for{" "}
                <strong>cosmetic smile designing</strong>.
              </p>
            </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-imgs/iso-img.png"
              alt="ISO Certified Dental Clinic"
              width={400}
              height={450}
              className="
                w-[180px]
                h-auto
                rounded-lg
                object-contain
              "
            />
          </div>

        </div>

      </div>
    </section>
  );
}