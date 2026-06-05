import BannerSection from "@/components/home/BannerSection";
import HomeSection3 from "@/components/home/HomeSection3";
import HomeSection2 from "@/components/home/Threesection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <BannerSection/>
      <HomeSection2/>
      <HomeSection3/>
    </div>
  );
}
