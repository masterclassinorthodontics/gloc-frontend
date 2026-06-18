import AboutDoctorSection from "@/components/invisalign/Aboutdoctor";
import ContactCTASection from "@/components/invisalign/ContactCTA";
import InvisalignAffordableSection from "@/components/invisalign/Invisalignaffordable";
import InvisalignBenefitsSection from "@/components/invisalign/Invisalignbenefit";
import InvisalignCTASection from "@/components/invisalign/InvisalignCTA";
import InvisalignDoctorsSection from "@/components/invisalign/Invisaligndoctor";
import InvisalignIteroSection from "@/components/invisalign/Invisalignitro";
import InvisalignSafetyDoctorsSection from "@/components/invisalign/Invisalignsafety";
import InvisalignWhyChooseUsSection from "@/components/invisalign/Invisalignwhysection";
import InvisalignIntroSection from "@/components/invisalign/Invisialignintrosection";


export const metadata = {
  title: "Invisalign Gold Provider | Best Invisalign Treatment in Kolkata - GLOC",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function Invisialign(){
    return(
        <>
            <InvisalignIntroSection/>
            <InvisalignBenefitsSection/>
            <InvisalignWhyChooseUsSection/>
            <InvisalignIteroSection/>
            <InvisalignSafetyDoctorsSection/>
            <InvisalignDoctorsSection/>
            <InvisalignAffordableSection/>
            <AboutDoctorSection/>
            <InvisalignCTASection/>
            <ContactCTASection/>
        </>
    )
}