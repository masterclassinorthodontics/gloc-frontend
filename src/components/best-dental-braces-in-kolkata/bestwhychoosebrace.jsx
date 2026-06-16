import { BiSolidRightArrow } from "react-icons/bi";

export default function Bestwhychoosebracesection(){
    const points = [
        <>
    20+ Years of experience
    </>,
    <>
    100% client satisfaction
    </>,
    <>
    <strong>Top Orthodontist in Kolkata</strong> – highly qualified and experienced state of art facilities
    </>,
    <>
    State-of-the-art facilities
    </>,
    <>
    High quality customized <strong>braces treatment</strong>
    </>,
    <>
    Approachable <strong>braces dentist</strong> and staff members
    </>,
    <>
    Easy appointments.
    </>
  ];

    return(
        <section className="py-10 bg-white">
              <div className="w-[70vw] mx-auto">
        
                {/* Sub Heading */}
                <h3 className="text-2xl md:text-2xl font-bold text-[#36384F] mb-8">
                  What makes us a clear choice for the best orthodontic treatment in Kolkata?
                </h3>
        
                {/* Two Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-start">
        
                  {/* Left Column */}
                  <div>
        
                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-4">
                      {points.map((point, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-[#36384F] text-[15px]"
                        >
                          <BiSolidRightArrow className="text-[#00A1D4] text-xl mt-1 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
        
                    {/* Content */}
                    <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
                      <p>
                        Gift yourself a perfect smile, with us! Instead of just
                        Google-ing <strong>"best orthodontist in Kolkata"</strong> /
                        <strong> "best braces doctors in Kolkata"</strong> /
                        <strong> "best dental braces near me"</strong> /ortho
                        <strong> "near me"</strong> contact us and book your appointment
                        today.
                        Our team of <strong> best orthodontists </strong> is here to provide you with the 
                        <strong>best braces treatment</strong> and fix the issues that
                        impact your smile and <strong>jaw line </strong> aesthetics.
                        We also have some of the best{" "}
                        <strong>cosmetic dentist in Kolkata</strong> on board to improve
                        your micro-dental appearance beyond just putting <strong>clip in teeth.</strong>
                      </p>
                    </div>
        
                  </div>
        
                  {/* Right Column */}
                  <div>
                    <div className="aspect-video overflow-hidden shadow-lg">
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/BiHYka6jMeY?si=OKsCqlC34Z1FDa6x"
                        title="Dental Braces Treatment"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
        
                </div>
        
                {/* Second Sub Heading */}
                <div className="mt-10">
                  <h3 className="text-2xl md:text-2xl font-bold text-[#36384F] mb-8">
                    Why Great Lakes Dental Clinic and Orthodontic Care?
                  </h3>
        
                  <div className="text-[#36384F] text-[15px] leading-relaxed text-justify">
                    <p>
                      Great Lakes Multispeciality Dental Clinic and Orthodontic Care has
                      the unique distinction of being the only <strong>dental orthodontic clinic</strong> in 
                      <strong> Eastern India </strong>
                      and Kolkata with membership from the Royal College of
                      Surgeons – England, Edinburgh, Ireland and Glasgow.
                    </p>
        
                    <br />
        
                    <p>
                      It is headed by the most qualified <strong> Dentist / Orthodontist </strong> in India-
                      Dr. Abhisek Ghosh. We also have a team of ten specialized
                      post-graduate doctors to take care of all dental problems under
                      one roof.
                    </p>
        
                    <br />
        
                    <p>
                      Located in the heart of South Kolkata, it is the
                      most internationally awarded <strong> dental clinic(orthognathic surgeon) </strong> in Kolkata with awards
                      like <strong>Best Dentist in Kolkata, Best Orthodontist
                      in Kolkata,</strong> <strong>Best Cosmetic Dentist in Kolkata</strong> and
                      <strong> Best Dental Clinic in Kolkata</strong> for the past
                      20 years.
                    </p>
        
                    <br />
        
                    <p>
                      We welcome you all to our multispeciality clinical set-up to get
                      the best of <strong>dentistry in Kolkata</strong>.
                    </p>
                  </div>
                </div>
        
              </div>
            </section>
    )
}