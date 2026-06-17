import { BiSolidRightArrow } from "react-icons/bi";

export default function BestAboutDoctorSection() {
  const leftPoints = [
    "Fellow, Royal College of Surgeons, England",
    "Fellow, Royal College of Surgeons, Ireland",
    "Fellow, Royal College of Surgeons and Physicians, Glasgow",
    "Diplomate, Indian Board of Orthodontics",
    "Observer Fellowship, University of Western Australia",
    "Observer Fellowship, Chulagokorn University, Thailand",
    "International member, American Association of Orthodontist",
  ];

  const rightPoints = [
    "Fellow, World Federation of Orthodontist",
    "Cert. in Aligner Technologies (Invisalign)",
    "Cert .in Lingual Orthodontics (Incognito)",
    "Chief Consultant Orthodontist, Apollo Clinics, Kolkata",
    "National Panel of Speakers, Indian Orthodontic Society",
    "Director, Great Lakes Dental Clinic and Orthodontic Centre",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="w-[70vw] mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-2xl font-semibold text-[#36384F] mb-6">
          About The Doctor
        </h2>

        {/* Intro Text */}
        <p className="text-[#36384F] text-[15px] leading-relaxed text-justify mb-10">
          <a
            href="https://greatlakesdentalclinics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-[#00A1D4] transition"
          >
            Dr. Abhisek Ghosh
          </a>{" "}
          – M.D.S in Orthodontics has multiple degrees, achievement
          awards, and unmatched experience. He is undoubtedly the best
          one to guide you on your Invisalign and Clear Aligner
          treatment.
        </p>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">

          {/* Left Column */}
          <div>
            <ul className="space-y-1">
              {leftPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#36384F] text-[15px]"
                >
                  <BiSolidRightArrow
                    className="text-[#00A1D4] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <ul className="space-y-1">
              {rightPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[#36384F] text-[15px]"
                >
                  <BiSolidRightArrow
                    className="text-[#00A1D4] mt-1 flex-shrink-0"
                    size={20}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Text */}
        <p className="text-[#36384F] text-[15px] leading-relaxed text-justify">
          Apart from his career journey, the experience of his patients
          has been equally pleasurable – which is easily visible in the
          patient feedback section – when you type –{" "}
          <a
            href="https://g.page/glocdent?share"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#00A1D4] transition"
          >
            <strong>best orthodontist in Kolkata near me</strong>
          </a>.
        </p>

        <p className="text-[#36384F] text-[15px] leading-relaxed text-justify mt-6">
            <strong>What is your problem?</strong> Crooked teeth, improper jaw, cross-bites, open-bites, deep-bites, overbites, malocclusion, or any other issue, we are here to assist for the same. Call us now to get redefined services of dentistry in Kolkata with invisible, beautiful, affordable, result-oriented with <strong>Invisalign </strong><strong>transparent aligners or teeth straightener.</strong>
        </p>

      </div>
    </section>
  );
}