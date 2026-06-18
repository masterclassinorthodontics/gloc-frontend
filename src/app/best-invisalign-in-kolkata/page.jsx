import BestAboutDoctorSection from "@/components/best-invisalign-in-kolkata/bestaboutdoctor";
import BestInvisalignAffordableSection from "@/components/best-invisalign-in-kolkata/bestinvisalignaffordable";
import BestInvisalignBenefitsSection from "@/components/best-invisalign-in-kolkata/bestinvisalignbenefit";
import BestInvisaligndoctorsection from "@/components/best-invisalign-in-kolkata/bestinvisaligndoctor";
import BestInvisalignSafetyDoctorsSection from "@/components/best-invisalign-in-kolkata/bestinvisalignsafety";
import BestInvisalignWhyChooseUsSection from "@/components/best-invisalign-in-kolkata/bestinvisalignwhychoose";
import Achieveawards from "@/components/home/Achieveawards";
import BannerSection from "@/components/home/BannerSection";
import DentalSpecialistSection from "@/components/home/Dentalspecialist";
import TestimonialSection from "@/components/home/testimonialsection";
import HomeSection2 from "@/components/home/Threesection";
import TreatmentResult from "@/components/home/treatmentresult";
import YtVideoSection from "@/components/home/ytvideosection";
import ContactCTASection from "@/components/invisalign/ContactCTA";
import InvisalignBenefitsSection from "@/components/invisalign/Invisalignbenefit";
import InvisalignCTASection from "@/components/invisalign/InvisalignCTA";
import InvisalignIteroSection from "@/components/invisalign/Invisalignitro";
import InvisalignSafetyDoctorsSection from "@/components/invisalign/Invisalignsafety";
import InvisalignIntroSection from "@/components/invisalign/Invisialignintrosection";


export const metadata = {
  title: "Best Invisalign In Kolkata - Great Lakes Dental Clinics",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function BestinvisalignKolata(){
    return(
        <>
            <BannerSection/>
            <HomeSection2/>
            <Achieveawards/>
            <DentalSpecialistSection/>
            <TreatmentResult/>
            <YtVideoSection/>
            <TestimonialSection/>
            <InvisalignIntroSection/>
            <BestInvisalignBenefitsSection/>
            <BestInvisalignWhyChooseUsSection/>
            <InvisalignIteroSection/>
            <BestInvisalignSafetyDoctorsSection/>
            <BestInvisaligndoctorsection/>
            <BestInvisalignAffordableSection/>
            <BestAboutDoctorSection/>
            <ContactCTASection/>
        </>
    )
}