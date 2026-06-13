export default function YtVideoSection() {
  const videos = [
    "https://www.youtube.com/embed/15vzN2YvYcE?si=Zr9JbfpebTQ7j6NG",
    "https://www.youtube.com/embed/dDYjDb4sPE8?si=1vgMwr8PABfr5DjO",
    "https://www.youtube.com/embed/ZDtEnNbfRHY?si=n9b729VYcoZ3o0Px",
    "https://www.youtube.com/embed/CGPz_y7-7dk?si=ZINRJSZ9HCQzeuA7",
  ];

  return (
    <section className="bg-[#36384F] py-20 px-4 md:px-8 xl:px-12">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Treatment Information Videos
        </h2>

        {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>  

      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {videos.map((video, index) => (
          <div
            key={index}
            className="
              overflow-hidden
              rounded-lg
              shadow-lg
              bg-black
            "
          >
            <iframe
              className="w-full aspect-video"
              src={video}
              title={`YouTube Video ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}

      </div>

      {/* Button */}
      <div className="text-center mt-14">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="
            glowing-btn
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            bg-[#00A1D4]
            text-white
            font-semibold
            rounded-md
            transition-all
            duration-300
            hover:bg-[#006F92]
          "
        >
          VIEW MORE VIDEOS
        </a>
      </div>

    </section>
  );
}