import Image from "next/image";

export default function ContactMainCenterSection() {
  return (
    <section className="py-20 bg-[#36384F]">
      <div className="w-[70vw] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>

          <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div>
            <Image
              src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/contact-img/address_map_big.jpg"
              alt="Great Lakes Dental Clinic"
              width={800}
              height={600}
              className="
                w-full
                h-auto
                transition-all
                duration-200
                hover:shadow-[15px_15px_30px_-12px_rgba(0,0,0,0.5)]
              "
            />
          </div>

          {/* Right Column */}
          <div className="text-white">

            <h3 className="text-[#00A1D4] text-2xl md:text-3xl font-semibold mb-2">
              Main Center
            </h3>

            <h4 className="text-3xl font-bold mb-6">
              Great Lakes Dental Clinic
            </h4>

            <p className="text-lg leading-relaxed mb-6">
              27, Janak Road (Behind Lake Mall)
              <br />
              Kolkata – 700 029
            </p>

            <p className="text-lg mb-4">
              <strong>Mobile :</strong>{" "}
              <a
                href="tel:9330153855"
                target="_blank"
                className="text-[#00A1D4] hover:underline"
              >
                9330153855
              </a>{" "}
              /{" "}
              <a
                href="tel:8337098496"
                target="_blank"
                className="text-[#00A1D4] hover:underline"
              >
                8337098496
              </a>
            </p>

            <p className="text-lg mb-4">
              <strong>Landline :</strong>{" "}
              <a
                href="tel:03335675767"
                target="_blank"
                className="text-[#00A1D4] hover:underline"
              >
                033 35675767
              </a>
            </p>

            <p className="text-lg">
              <strong>E-mail :</strong>{" "}
              <a
                href="mailto:dr.abhisek24@gmail.com"
                className="text-[#00A1D4] hover:underline"
              >
                dr.abhisek24@gmail.com
              </a>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}