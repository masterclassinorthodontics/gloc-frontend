export default function CosmeticDentistHeroSection() {
  return (
    <section
      className="
        relative
        h-[25vh]
        bg-cover
        bg-center
        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage:
          "url('https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/cosmetic-dentistry-kolkata/Banner-img.png')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold">
          Cosmetic Dentist in Kolkata
        </h1>

        {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="w-16 h-[2px] bg-white"></span>

            <span className="w-2 h-2 rounded-full border-3 border-white"></span>

            <span className="w-16 h-[2px] bg-white"></span>
          </div>
      </div>
    </section>
  );
}