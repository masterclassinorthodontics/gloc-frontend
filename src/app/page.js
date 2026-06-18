import BannerSection from "@/components/home/BannerSection";
import HomeSection2 from "@/components/home/Threesection";
import Image from "next/image";
import TreatmentResult from "@/components/home/treatmentresult";
import Achieveawards from "@/components/home/Achieveawards";
import DentalSpecialistSection from "@/components/home/Dentalspecialist";
import YtVideoSection from "@/components/home/ytvideosection";
import TestimonialSection from "@/components/home/testimonialsection";
import GoogleMapSection from "@/components/home/Googlemapsection";

export const metadata = {
  title: "GLOC - Best Dentist in Kolkata | Dental Clinic in Kolkata",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function Home() {
  return (
    <div>
      <BannerSection/>
      <HomeSection2/>
      <Achieveawards/>
      <DentalSpecialistSection/>
      <TreatmentResult/>
      <YtVideoSection/>
      <TestimonialSection/>
      <GoogleMapSection/>
    </div>
  );
}
