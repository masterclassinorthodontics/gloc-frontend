import TreatmentResult from "../home/treatmentresult";

export default function DentalBracesVideosSection() {
  const videos = [
    "https://www.youtube.com/embed/15vzN2YvYcE?si=edFn2riYTO5aICOU",
    "https://www.youtube.com/embed/dDYjDb4sPE8?si=gxYOm8GTtQYr-XmZ",
    "https://www.youtube.com/embed/ZDtEnNbfRHY?si=XzIcYjQjTy9nhbgj",
    "https://www.youtube.com/embed/CGPz_y7-7dk?si=_QQiHOEk1snTkAJa",
    "https://www.youtube.com/embed/VsLZu_17bAk?si=8LY4a8c6uGs53zhe",
    "https://www.youtube.com/embed/RSV5u7Ub18g?si=hNmwWuPL4L5tNBVC",
    "https://www.youtube.com/embed/b8keZfI7aH4?si=tD0lgfON_LDEz07m",
    "https://www.youtube.com/embed/b8keZfI7aH4?si=0-18Yc1x6PtmoQG3",
    "https://www.youtube.com/embed/9mlE4qRwYTE?si=lVluxi8AtNxQQaMk",
    "https://www.youtube.com/embed/EFGhXiXA9Ok?si=Y-K3WSgvGosANfUO",
    "https://www.youtube.com/embed/vvDMIbBYfEw?si=I-SbeebUJL7IEQ9L",
    "https://www.youtube.com/embed/B07LOTwLe0M?si=sTxAz3Fp6TY0eA5a",
  ];

  return (
    <section className="relative bg-fixed bg-center bg-cover py-20"
    style={{
        backgroundImage:"url('https://lightslategray-lemur-726893.hostingersite.com/treatmentimages/bg.jpg')",
    }}
    >
      
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">

      <div className="w-[90vw] mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Dental Braces
          </h2>

          <div className="w-24 h-1 bg-[#00A1D4] mx-auto mt-4"></div>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden shadow-lg"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  src={video}
                  title={`Dental Braces Video ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>

      </div>
      <TreatmentResult removeBackground={true}/>
      </div>
    </section>
  );
}