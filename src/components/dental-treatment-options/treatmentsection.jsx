import Image from "next/image";

export default function TreatmentOptionsSection() {
  const treatments = [
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/orthodontics.jpg",
      title: "Root Canal Treatment",
      description:
        "Advanced root canal procedures performed with modern equipment to save natural teeth and eliminate pain.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/Prosthodontics.jpg",
      title: "Dental Implants",
      description:
        "Permanent and natural-looking replacement solutions for missing teeth with long-lasting results.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/oral-surgery.jpg",
      title: "Dental Braces",
      description:
        "Comprehensive orthodontic treatments including metal, ceramic and self-ligating braces.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/endodontics.jpg",
      title: "Invisalign",
      description:
        "Clear aligner treatment designed to straighten teeth comfortably and discreetly.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/periodontics-implantation.jpg",
      title: "Cosmetic Dentistry",
      description:
        "Smile designing and cosmetic dental procedures to improve the appearance of your teeth and smile.",
    },
    {
      image:
        "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-treatment-options-imgs/endodontics.jpg",
      title: "Teeth Whitening",
      description:
        "Professional whitening treatments to achieve a brighter and more confident smile.",
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

          <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
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
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#00A1D4] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#36384F] leading-relaxed">
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