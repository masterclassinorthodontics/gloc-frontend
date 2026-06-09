import { BiSolidRightArrow } from "react-icons/bi";

export default function CovidGuidelinesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">

        <h3 className="text-2xl md:text-3xl font-semibold text-[#00A1D4] mb-6">
          COVID 19 Guidelines and Safety Measures for Dental Care
        </h3>

        <div className="text-[#36384F] text-lg leading-relaxed text-justify">

          <p>
            Your safety is our first priority! To make our dental units fully
            COVID free, we are maintaining safety guidelines and sanitizing
            our clinic every day. We are also disinfecting our dental
            equipment on a daily basis to ensure overall hygiene.
          </p>

          <br />

          <div className="space-y-4">

  <div className="flex items-start gap-3">
    <BiSolidRightArrow className="text-[#00A1D4] text-xl mt-1 flex-shrink-0" />
    <p>
      UV chambers: UV chambers or UV sanitation boxes are mostly used in the sterilization process. They produce UV light with a wavelength of 254nm, which destroys germs, bacteria and viruses.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <BiSolidRightArrow className="text-[#00A1D4] text-xl mt-1 flex-shrink-0" />
    <p>
      Strict Sterilization Protocols: Autoclaves and Ultrasonic instrument cleaners are used to clean and disinfect instruments after each patient – this rule out cross-contamination. International standards of sterilization protocols make our clinic stand out from the rest.
    </p>
  </div>

  <div className="flex items-start gap-3">
    <BiSolidRightArrow className="text-[#00A1D4] text-xl mt-1 flex-shrink-0" />
    <p>
      
Aerosol suction, Air Purifiers, HEPA-Filters: These machines kills the germs present in the mouth and helps the dentist to work in a germ-free environment.
    </p>
  </div>

</div>

          <br />

          <p>
            Equipped with all sorts of modern amenities like CCTV cameras,
            air conditioners with HEPA-filters, and air purifiers, we ensure
            complete safety and security of our patients. Book an appointment with us, today! – to get the most upgraded{" "}
            <strong>dental treatment in Kolkata.</strong>
          </p>

        </div>

      </div>
    </section>
  );
}