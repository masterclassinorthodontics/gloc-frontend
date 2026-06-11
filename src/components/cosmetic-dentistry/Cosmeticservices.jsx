export default function CosmeticServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Services
            </h3>

            <div className="text-[#36384F] text-lg leading-relaxed text-justify">
              <p>
                At Great Lakes Dental Clinic and Orthodontic Centre,
                we offer a range of dental services that include
                cosmetic dentistry.

                Our team of highly skilled{" "}
                <strong>cosmetic dentist in Kolkata</strong> have
                years of experience in providing dental treatment.

                On top of it, we use state-of-the-art infrastructure
                power-packed with the latest equipment that adds to
                the quality as well.

                <br />
                <br />

                Whether you are looking for{" "}
                <strong>dental implants in Kolkata</strong> or{" "}
                <strong>dental veneers</strong> or say{" "}
                <strong>dental composite filling,</strong> we have
                all your needs covered.

                Not just we assure an unparalleled experience but
                also exceptional results.
              </p>
            </div>

          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQtYXtaeBb4?si=U8wiuE6T6Z-RgmGF"
                title="Cosmetic Dentistry Services"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
      {/* Divider */}
        <div className="w-full h-px bg-gray-300 mt-12"></div>
    </section>
  );
}