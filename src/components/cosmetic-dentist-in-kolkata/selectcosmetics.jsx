import Image from "next/image";

export default function SelectingCosmeticDentistSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Selecting a Cosmetic Dentist
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">
              <p>
                Selecting a cosmetic dentist is crucial. The first step is
                to look at your smile and determine what you want to change.
                Your cosmetic dentist may have other concerns when you visit,
                but it’s best to arrive having your own wish list.
              </p>

              <br />

              <p>
                At your consultation appointment have an honest discussion
                with your doctor about your cosmetic goals to be realistic.
                Then discuss the benefits, risks, downsides and alternatives
                to the recommended procedures. Finally, ask about the
                treatment cost and time frame.
              </p>

              <br />

              <p>
                The mission of a cosmetic dentist is to practice responsible
                aesthetics. That means helping patients maintain their oral
                health, function, and appearance for a lifetime. We believe
                that beauty is more than skin deep, and that cosmetic
                dentistry should complement the overall general and oral
                health of the patients. As such,{" "}
                <strong>cosmetic dental treatment</strong> decisions are
                based on the foundation of evidence based protocols combined
                with sound clinical judgement.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/selectcosmetic.jpg"
              alt="Selecting a Cosmetic Dentist"
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