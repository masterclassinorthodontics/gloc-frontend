export default function InvisalignIteroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">

          {/* Left Column */}
          <div>

            <h2 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
              Itero 3D Planning Tool
            </h2>

            <p className="text-[#36384F] text-lg leading-relaxed text-justify">
              We plan your Invisalign treatment and cosmetic smile
              designing cases using the most advanced and latest
              Itero 3D Planning scanner.

              All our tools and dentistry assistance equipment are
              ISO 9001:2008 certified.

              Patients have complete clarity well in advance of what
              will be the treatment process and how to deal with it.

              Apart from that, we are also able to predict the
              patient’s future smile after treatment with our latest
              software smile analysis, making us the{" "}
              <strong>best dental braces clinic in Kolkata.</strong>
            </p>

          </div>

          {/* Right Column */}
          <div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/VSQMPgW1vSs?si=W8Z36-EwCEiLCTUJ"
                title="Itero 3D Planning Tool"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}