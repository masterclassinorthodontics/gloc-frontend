import Image from "next/image";

export default function ClinicalSetupBannerSection() {
  const images = [
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-1.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-2.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-3.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-4.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-5.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-6.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-7.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/clinicalsetup-bannerimgs/clinical-8.jpg",
  ];

  return (
    <section className="bg-[#36384F] py-20">
      <div className="w-[90vw] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Clinical Setup
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>

        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-lg
                shadow-lg
                cursor-pointer
                group
              "
            >
              <Image
                src={image}
                alt={`Clinical Setup ${index + 1}`}
                width={600}
                height={400}
                className="
                  w-full
                  h-[260px]
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}