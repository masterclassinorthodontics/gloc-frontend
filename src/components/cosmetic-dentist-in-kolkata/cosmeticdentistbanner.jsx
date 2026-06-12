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
      </div>
    </section>
  );
}