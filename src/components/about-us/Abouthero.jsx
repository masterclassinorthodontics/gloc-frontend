import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full">
      <Image
        src="https://lightslategray-lemur-726893.hostingersite.com/cdn-imgs/banner-imgs/RCS-PROMOTION1.png"
        alt="About Us Banner"
        width={1920}
        height={600}
        priority
        className="w-full h-[250px] md:h-[400px] xl:h-[850px] object-contain"
      />
    </section>
  );
}