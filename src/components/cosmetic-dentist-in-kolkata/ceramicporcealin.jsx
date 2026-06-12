import Image from "next/image";

export default function CeramicsPorcelainSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Ceramics or Porcelain
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">
              <p>
                Since the early 1900s, ceramics have been used to create
                dental porcelain. Through the years, the compounds have
                changed and been modified to provide strength, adherence,
                and the most natural look possible.
                Today’s ceramics can even be created in gradient shades to
                match the natural aging of teeth. They have also grown in
                strength and adherence to last a lifetime without any
                problems.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/ceramic-porcealin.jpg"
              alt="Ceramics or Porcelain"
              width={600}
              height={600}
              className="w-full max-w-[400px] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}