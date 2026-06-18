import ClinicalExcellenceSection from "@/components/cosmetic-dentistry/Clinicalexcellence";
import CosmeticDentistrySection from "@/components/cosmetic-dentistry/cosmeticdentistry";
import CosmeticServicesSection from "@/components/cosmetic-dentistry/Cosmeticservices";
import DentalCompositeFillingSection from "@/components/cosmetic-dentistry/Dentalcomposite";
import DentalCrownSection from "@/components/cosmetic-dentistry/Dentalcrown";
import DentalVeneerSection from "@/components/cosmetic-dentistry/Dentalvener";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";

export const metadata = {
  title: "COSMETIC DENTISTRY - Great Lakes Dental Clinic and Orthodontic Care",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};


export default function cosmeticdentistry(){
    return(
        <>
            <CosmeticDentistrySection/>
            <CosmeticServicesSection/>
            <DentalVeneerSection/>
            <DentalCrownSection/>
            <DentalCompositeFillingSection/>
            <ClinicalExcellenceSection/>
            <TestimonialSection/>
            <GoogleMapSection/>
        </>
    )
}