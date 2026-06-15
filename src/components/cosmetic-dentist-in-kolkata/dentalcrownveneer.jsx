import Image from "next/image";

export default function DentalVeneerscrownSection() {
  return (
    <section className="py-10 bg-white">
      <div className="w-[60vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#36384F] mb-6">
              Dental Veneers
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              <p>
                Dental veneers are normally constructed from medical-grade
                ceramic and individually created for each patient to ensure
                that they resemble the patient’s natural teeth and remain
                indistinguishable from each other.
              </p>

              <br />

              <p>
                Additionally, dentists rely on veneers for many cosmetic
                problems, including crooked teeth, damaged or cracked enamel,
                and unsightly gaps between teeth.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/Dental-crown-veneer.jpg"
              alt="Dental Veneers"
              width={600}
              height={600}
              className="w-full max-w-[400px] h-auto object-contain rounded-3xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}