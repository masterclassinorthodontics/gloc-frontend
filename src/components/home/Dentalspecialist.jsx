import Image from "next/image";

export default function DentalSpecialistSection() {
  return (
    <section className="py-20 px-4 w-[99vw] md:px-8 xl:px-12 bg-white text-center">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#36384F]">
          Team of Dental Specialists
        </h2>

        <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="specialist-card relative bg-[#36384F] overflow-visible shadow-lg py-12">

            {/* Top Left Corner */}
            <div className="corner-tl"></div>

            {/* Bottom Right Corner */}
            <div className="corner-br"></div>

          <Image
            src="https://lightslategray-lemur-726893.hostingersite.com/logoimgs/orthodontist.png"
            alt="Specialist 1"
            width={600}
            height={400}
            className="w-full h-[75px] object-contain"
          />

          <div className="p-6 text-[#00A1D4]">
            <h3 className="text-2xl">
              ORTHODONTIST
            </h3>

            <h4 className="text-lg text-white mt-2">
              Dr. Abhisek Ghosh
            </h4>
            <h4 className="text-lg text-white">
              Dr. Bhavna Ghosh 
            </h4>

            <div className="w-16 h-[2px] bg-[#00A1D4] my-4 mx-auto"></div>

            <p className="text-sm leading-relaxed text-white">
              B.D.S, M.D.S (Ortho), MorthRCS (England),<br/>
              MorthRCS (Edinburgh), FFDorthRCS (Ireland),<br/>
              MorthRCPS (Glasgow), D.I.B.O, F.A.G.E.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="specialist-card relative bg-[#36384F] overflow-visible shadow-lg py-12">

            {/* Top Left Corner */}
            <div className="corner-tl"></div>

            {/* Bottom Right Corner */}
            <div className="corner-br"></div>

          <Image
            src="https://lightslategray-lemur-726893.hostingersite.com/logoimgs/oral-and-maxillofacial.png"
            alt="Specialist 2"
            width={600}
            height={400}
            className="w-full h-[75px] object-contain"
          />

          <div className="p-6 text-[#00A1D4]">
            <h3 className="text-2xl">
              ORAL & MAXILLO-FACIAL SURGEONS
            </h3>

            <h4 className="text-lg text-white mt-2">
              Dr.Soumyadip Dey
            </h4>
            <h4 className="text-lg text-white">
              Dr.Avishek De Sarkar
            </h4>
            <h4 className="text-lg text-white">
              Dr.Alangkar Saha
            </h4>

            <div className="w-16 h-[2px] bg-[#00A1D4] my-4 mx-auto"></div>

            <p className="text-sm leading-relaxed text-white">
              B.D.S, M.D.S (OMFS)
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="specialist-card relative bg-[#36384F] overflow-visible shadow-lg py-12">

            {/* Top Left Corner */}
            <div className="corner-tl"></div>

            {/* Bottom Right Corner */}
            <div className="corner-br"></div>

          <Image
            src="https://lightslategray-lemur-726893.hostingersite.com/logoimgs/prosthodontist.png"
            alt="Specialist 3"
            width={600}
            height={400}
            className="w-full h-[75px] object-contain"
          />

          <div className="p-6 text-[#00A1D4]">
            <h3 className="text-2xl">
              PROSTHODONTIST AND IMPLANTOLOGIST
            </h3>

            <h4 className="text-lg text-white mt-2">
              Dr. Soumya Ray
            </h4>
            <h4 className="text-lg text-white">
              Dr. Himadri Sekhar Pal
            </h4>
            <h4 className="text-lg text-white">
              Dr. Gulam Vakil
            </h4>

            <div className="w-16 h-[2px] bg-[#00A1D4] my-4 mx-auto"></div>

            <p className="text-sm leading-relaxed text-white">
              B.D.S, M.D.S (Prostho)
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="specialist-card relative bg-[#36384F] overflow-visible shadow-lg py-12">

            {/* Top Left Corner */}
            <div className="corner-tl"></div>
            {/* Bottom Right Corner */}
            <div className="corner-br"></div>            
          <Image
            src="https://lightslategray-lemur-726893.hostingersite.com/logoimgs/endodontist.png"
            alt="Specialist 4"
            width={600}
            height={400}
            className="w-full h-[75px] object-contain"
          />

          <div className="p-6 text-white">
            <h3 className="text-2xl font-semibold text-[#00A1D4]">
              ENDODONTIST
            </h3>

            <h4 className="text-lg text-white mt-2">
              Dr. Sumit Khatore
            </h4>
            <h4 className="text-lg text-white">
              Dr. Md. Imtiaz
            </h4>
            <h4 className="text-lg text-white">
              Dr. Priya Sinha
            </h4>

            <div className="w-16 h-[2px] bg-[#00A1D4] my-4 mx-auto"></div>

            <p className="text-sm leading-relaxed">
              B.D.S, M.D.S (Endo)
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="specialist-card relative bg-[#36384F] overflow-visible shadow-lg py-12">

            {/* Top Left Corner */}
            <div className="corner-tl"></div>

            {/* Bottom Right Corner */}
            <div className="corner-br"></div>

          <Image
            src="https://lightslategray-lemur-726893.hostingersite.com/logoimgs/paedodontist.png"
            alt="Specialist 5"
            width={600}
            height={400}
            className="w-full h-[75px] object-contain"
          />

          <div className="p-6 text-white">
            <h3 className="text-2xl font-semibold text-[#00A1D4]">
              PEDODONTIST
            </h3>

            <h4 className="text-lg text-white mt-2">
              Dr.Richi Rajpal
            </h4>

            <div className="w-16 h-[2px] bg-[#00A1D4] my-4 mx-auto"></div>

            <p className="text-sm leading-relaxed">
              B.D.S, M.D.S (Pedo)
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="specialist-card relative bg-[#36384F] overflow-visible shadow-lg py-12">

            {/* Top Left Corner */}
            <div className="corner-tl"></div>

            {/* Bottom Right Corner */}
            <div className="corner-br"></div>

          <Image
            src="https://lightslategray-lemur-726893.hostingersite.com/logoimgs/periodontist-implantologist.png"
            alt="Specialist 6"
            width={600}
            height={400}
            className="w-full h-[75px] object-contain"
          />

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#00A1D4]">
              PERIODONTIST
            </h3>

            <h4 className="text-lg text-white mt-2">
              Dr. Vishal Singh
            </h4>
            <h4 className="text-lg text-white">
              Dr. Soham Mullick
            </h4>

            <div className="w-16 h-[2px] bg-[#00A1D4] my-4 mx-auto"></div>

            <p className="text-sm leading-relaxed">
              B.D.S, M.D.S (Perio)
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}