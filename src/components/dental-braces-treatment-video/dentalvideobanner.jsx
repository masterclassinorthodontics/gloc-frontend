export default function Dentalbracesvideobanner() {
  const treatmentVideos = [
    // 12 YouTube embed links
    "https://www.youtube.com/embed/15vzN2YvYcE?si=4Ya2g7uQO4tDgNgS",
    "https://www.youtube.com/embed/dDYjDb4sPE8?si=Pl6GQk3j7waeKkB_",
    "https://www.youtube.com/embed/ZDtEnNbfRHY?si=sbBk9TJGU_xKsKLU",
    "https://www.youtube.com/embed/CGPz_y7-7dk?si=zHxkDN_Qb447egy0",
    "https://www.youtube.com/embed/VsLZu_17bAk?si=Q3yGVRPk2HLDNlZ6",
    "https://www.youtube.com/embed/RSV5u7Ub18g?si=iUj-I9FmI1i0cn4l",
    "https://www.youtube.com/embed/b8keZfI7aH4?si=dSsa8rjBh5yiKPe",
    "https://www.youtube.com/embed/JNjk1UuYvDk?si=aeUs7AdOgx3FLOU9",
    "https://www.youtube.com/embed/9mlE4qRwYTE?si=PgXY4QnxlhN-TwgI",
    "https://www.youtube.com/embed/EFGhXiXA9Ok?si=Vt2JWGuooJwNVjpe",
    "https://www.youtube.com/embed/vvDMIbBYfEw?si=13MuRdYM8oCcBiSE",
    "https://www.youtube.com/embed/B07LOTwLe0M?si=xJcg0G6WLPHsarm3",
  ];

  const cosmeticVideos = [
    // 7 YouTube embed links
    "https://www.youtube.com/embed/__3CqnkqO6A?si=EB3cZgH_NyYrY_n1",
    "https://www.youtube.com/embed/lHwiBS26Rv8?si=6p0gkoWTTZNNV6LM",
    "https://www.youtube.com/embed/SSCI6M1eNPY?si=DiNCBFNLfCq0JCob",
    "https://www.youtube.com/embed/4hVqltKSO_c?si=bIa4XCvyYM-8QGb2",
    "https://www.youtube.com/embed/3I3_LZde-8Q?si=t2yUi63_14sJd2XC",
    "https://www.youtube.com/embed/dQtYXtaeBb4?si=LXvNp8UoO_fxM05M",
    "https://www.youtube.com/embed/ardFtJ3oMhw?si=30mxy4Xd4NH-F0D1",
  ];

  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/dental-braces-treatment-video/bg-banner.jpeg')",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 w-[90vw] mx-auto">

        {/* Treatment & Results */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Treatment and Results
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {treatmentVideos.map((video, index) => (
            <div key={index} className="overflow-hidden shadow-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video}
                  title={`Treatment Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

        {/* Cosmetic Dentistry */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Cosmetic Dentistry
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cosmeticVideos.map((video, index) => (
            <div key={index} className="overflow-hidden shadow-lg">
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video}
                  title={`Cosmetic Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
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