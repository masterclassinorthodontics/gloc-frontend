export default function ReviewVideosSection() {
  const videos = [
    "https://www.youtube.com/embed/RXmDmfWzFNo?si=xq9TeNm4A8FyMXCT",
    "https://www.youtube.com/embed/TOlOeQjSkg0?si=OQouYK_Lmw_4-vpQ",
    "https://www.youtube.com/embed/eeMSJS0S8Yk?si=HhFh_PBRCEgYhamC",
    "https://www.youtube.com/embed/BiHYka6jMeY?si=PLkdAUExqoCKlMhB",
  ];

  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/treatmentimages/bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-[95vw] mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Review Videos
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-xl"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video}
                  title={`Review Video ${index + 1}`}
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