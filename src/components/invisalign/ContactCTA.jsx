import { IoCallSharp } from "react-icons/io5";

export default function ContactCTASection() {
  return (
    <section className="py-10 bg-[#36384F]">
      <div className="w-[60vw] mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-center gap-2">

          {/* Text */}
          <h2 className="text-white text-base md:text-3xl text-center md:text-left">
            Contact us for more information or book an appointment
          </h2>

          {/* Button */}
          <a
            href="tel:+919330153855"
            className="
             glowing-btn
              inline-flex
              items-center
              gap-3
              bg-[#00A1D4]
              text-white
              px-8
              py-4
              rounded-md
              font-semibold
              text-sm
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Call Now
            <IoCallSharp size={22} />
          </a>

        </div>

      </div>
    </section>
  );
}