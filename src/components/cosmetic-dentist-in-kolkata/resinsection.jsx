import Image from "next/image";

export default function ResinSection() {
  return (
    <section className="py-10 bg-white">
      <div className="w-[60vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#36384F] mb-8">
              Resin
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              <p>
                In the 1970s, the idea of bonding was accepted by the dental
                profession. The concept of actually securing a porcelain crown
                directly to a tooth was growing in popularity, but the
                practicality of it did not come to market until the 1980s with
                the introduction of resin cement.
                This bonding method strengthened the porcelain crown while
                attaching it to the unbreakable original tooth structure.
                This was a benefit not only to the strength of crowns, but to
                their aesthetics as well.
                By the 1990s, resin and ceramic had advanced to the point
                where not only could crowns be reliably and safely bonded to
                the original teeth, but <strong>fixed dental bridges</strong>{" "}
                could also be created and bonded to look and function just as
                the natural original teeth were.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/resin-img.jpg"
              alt="Resin"
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