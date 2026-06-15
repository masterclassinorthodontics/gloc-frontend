import Image from "next/image";

export default function CosmeticDentistrySideSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[60vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-16 items-center">

          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#36384F] mb-6">
              Cosmetic Dentistry
            </h3>

            <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
              <p>
                Cosmetic dentistry is aimed at creating a positive change
                to your teeth and to your smile. Most think of{" "}
                <strong>tooth whitening</strong> or{" "}
                <strong>porcelain veneers</strong>, but a cosmetic dentist
                can provide much more. A skilled, experienced cosmetic
                dentist can help improve your appearance, your smile,
                even your self-esteem and confidence. Today, cosmetic
                dentists have evolved to where they can address
                functional and aesthetic concerns of their patients.
              </p>

              <br />

              <p>
                <strong>Cosmetic dentistry in Kolkata</strong> has evolved
                from simply replacing and restoring damaged teeth to
                covering a wide scope of aesthetic procedures. In today’s
                modern times, cosmetic or aesthetic dentistry includes
                treatments like tooth whitening,{" "}
                <strong>tooth bonding</strong>,{" "}
                <strong>tooth coloured restorations</strong> and fillings,
                porcelain veneers, orthodontics, dental implants, and
                more. You may be surprised by how dentistry has evolved
                over the years especially in the field of aesthetic
                dentistry and what can be done by an experienced{" "}
                <strong>cosmetic dentist</strong>.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/cosmetics-dentistry-side-img.png"
              alt="Cosmetic Dentistry"
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