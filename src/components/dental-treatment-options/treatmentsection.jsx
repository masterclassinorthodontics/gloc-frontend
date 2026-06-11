import Image from "next/image";

export default function TreatmentOptionsSection() {
  const treatments = [
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/orthodontics.jpg",
      title: "ORTHODONTICS",
      description:
        "TREATMENT WITH BRACES & ALINGERS – Correction of Irregular teeth, forwardly placed teeth, gaps in teeth, problems in jaws and cleft lip/palate.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/Prosthodontics.jpg",
      title: "PROSTHODONTICS",
      description:
        "TREATMENT OF MISSING TEETH- Correction of bite and missing teeth, fixed partial denture, removable partial denture, complete dentures, crowns and implants.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/oral-surgery.jpg",
      title: "ORAL SURGERY",
      description:
        "EXTRACTION OF TEETH / SURGERY – Surgical extraction of third molars and other teeth, removal of cyst, tumours, cancer surgery and surgery of the jaws.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/endodontics.jpg",
      title: "ENDODONTICS",
      description:
        "TREATMENT OF DECAYED TEETH/PAIN- Root Canal Treatment, fillings, crowns, surgical endodontics.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/periodontics-implantation.jpg",
      title: "PERIODONTICS / IMPLANTOLOGY",
      description:
        "TREATMENT OF GUMS – Scaling, root planing, flap Surgery, dental Implants.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/endodontics.jpg",
      title: "PEDODONTICS",
      description:
        "General dental treatment of kids, pulpectomy, pulpotomy and dental treatment of special child.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-[70vw] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#36384F]">
            Treatment Options
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-black"></span>

            <span className="w-2 h-2 rounded-full border-3 border-black"></span>

            <span className="w-16 h-[2px] bg-black"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                shadow-lg
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2
                flex
                flex-col
                h-full
              "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-[250px] object-cover"
              />

              {/* Content */}
              <div className="flex flex-col flex-1 justify-center items-center p-6 bg-[#36384F]">
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {item.title}
                </h3>

                <p className="text-white leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}