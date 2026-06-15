export default function ClinicalExcellenceSection() {
  const videos = [
    "https://www.youtube.com/embed/VsLZu_17bAk?si=Uh8AAyW4Qy7UaPq5",
    "https://www.youtube.com/embed/KPfmXIjYs8c?si=P9LL_W5TjpNWdloV",
    "https://www.youtube.com/embed/whHv2PENK54?si=rLg99QsmUPwEVG9S",
    "https://www.youtube.com/embed/IUwxBypzg7M?si=qYwmOZIpVjBJZnTb",
    "https://www.youtube.com/embed/L08Dzl4r-jY?si=7C6F0Us6v7oJmt5f",
    "https://www.youtube.com/embed/TiK2BKQg_4Y?si=4DLp40WCduqGpjHf",
  ];

  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-[95vw] mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            A Center of Clinical Excellence for Every One
          </h2>

        </div>

        {/* 6 Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">

          {videos.map((video, index) => (
            <div key={index}>
              <div className="relative pb-[86.25%] h-0">
                <iframe
                  src={video}
                  title={`Video ${index + 1}`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}