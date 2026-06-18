import BestDentalBracesSection from "@/components/best-dental-braces-in-kolkata/bestdentalbracesection";
import Besttypesdentalbracesection from "@/components/best-dental-braces-in-kolkata/besttypesofdentalbrace";
import Bestwhychoosebracesection from "@/components/best-dental-braces-in-kolkata/bestwhychoosebrace";
import DentalBracesVideosSection from "@/components/dental-braces/dentalbracesvideosection";
import Achieveawards from "@/components/home/Achieveawards";
import BannerSection from "@/components/home/BannerSection";
import DentalSpecialistSection from "@/components/home/Dentalspecialist";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import HomeSection2 from "@/components/home/Threesection";
import TreatmentResult from "@/components/home/treatmentresult";
import YtVideoSection from "@/components/home/ytvideosection";


export const metadata = {
  title: "Best Dental Braces In Kolkata - Great Lakes Dental Clinics",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function bestdentalbracekolkata(){
    return(
        <>
            <BannerSection/>
            <HomeSection2/>
            <Achieveawards/>
            <DentalSpecialistSection/>
            <TreatmentResult/>
            <YtVideoSection/>
            <TestimonialSection/>
            <BestDentalBracesSection/>
            <Besttypesdentalbracesection/>
            <Bestwhychoosebracesection/>
            <DentalBracesVideosSection/>
            <TestimonialSection/>
            <GoogleMapSection/>
        </>
    )
}