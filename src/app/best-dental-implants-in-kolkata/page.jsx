import BestDentalimplantsection from "@/components/best-dental-implants-in-kolkata/bestdentalimplant";
import Bestdentaltreatmentimplantsection from "@/components/best-dental-implants-in-kolkata/bestdentalimplanttreatment";
import Bestdentalimplantsuitable from "@/components/best-dental-implants-in-kolkata/bestdentalsuitable";
import Bestdentaltoothreplacesection from "@/components/best-dental-implants-in-kolkata/bestdentaltoothreplace";
import Achieveawards from "@/components/home/Achieveawards";
import BannerSection from "@/components/home/BannerSection";
import DentalSpecialistSection from "@/components/home/Dentalspecialist";
import TestimonialSection from "@/components/home/testimonialsection";
import HomeSection2 from "@/components/home/Threesection";
import TreatmentResult from "@/components/home/treatmentresult";
import YtVideoSection from "@/components/home/ytvideosection";
import ContactCTASection from "@/components/invisalign/ContactCTA";

export const metadata = {
  title: "Best Dental Implants In Kolkata - Great Lakes Dental Clinics",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};


export default function Bestdentalimplantskolkata(){
    return(
        <>
            <BannerSection/>
            <HomeSection2/>
            <Achieveawards/>
            <DentalSpecialistSection/>
            <TreatmentResult/>
            <YtVideoSection/>
            <TestimonialSection/>
            <BestDentalimplantsection/>
            <Bestdentaltreatmentimplantsection/>
            <Bestdentaltoothreplacesection/>
            <Bestdentalimplantsuitable/>
            <ContactCTASection/>
        </>
    )
}