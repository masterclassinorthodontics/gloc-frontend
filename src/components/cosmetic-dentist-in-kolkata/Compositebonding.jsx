import Image from "next/image";

export default function CompositeBondingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Composite Bonding
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">
              <p>
                <strong>Composite bonding</strong> refers to the repair of
                decayed, damaged or discoloured teeth using material that
                resembles the colour of tooth enamel. The tooth decay is
                drilled out and then composite is applied on the tooth’s
                surface and then sculpts it into the right shape before
                curing it with a high intensity light.
              </p>

              <br />

              <p>
                Composite bonding effectively covers tooth damage while
                restoring the appearance of the original tooth. Often,
                bonding even improves the look of the original tooth.
              </p>

              <br />

              <p>
                Compared to many other cosmetic procedures, bonding is
                inexpensive, making it an economical and effective treatment
                for patients with decay, chipped or cracked teeth or worn
                down tooth edges.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/composite-bonding.jpg"
              alt="Composite Bonding"
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