import Image from "next/image";

export default function TreatmentResultsSection() {
  const images = [
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile1.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile2.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile3.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile4.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile5.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile6.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile7.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile8.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile9.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile10.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile11.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile12.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile13.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile14.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile15.jpg",
    "https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/smile15.jpg",
  ];

  return (
    <section className="py-20 bg-[#36384F]">
      <div className="w-[90vw] mx-auto">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Treatment Results
          </h2>

          <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
        </div>

        {/* Description */}
        <div className="max-w-5xl mx-auto mb-14">
          <p className="text-white text-lg leading-relaxed text-center">
            We know the difference orthodontic treatment can make and we
            like to show this to our future patients, giving them
            confidence in our knowledge and expertise. These before and
            after treatment photographs show the work we have done with
            some of our patients to achieve perfect teeth and a beautiful
            smile.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <Image
                src={image}
                alt={`Treatment Result ${index + 1}`}
                width={600}
                height={600}
                className="w-full h-[300px] object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}