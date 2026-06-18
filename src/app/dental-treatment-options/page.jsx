import TreatmentOptionsSection from "@/components/dental-treatment-options/treatmentsection";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import TreatmentResult from "@/components/home/treatmentresult";


export const metadata = {
  title: "Dental Treatment Options - GLOC",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function dentaltreatmentoption(){
    return (
        <>
            <TreatmentOptionsSection/>
            <TreatmentResult/>
            <TestimonialSection/>
            <GoogleMapSection/>        
        </>
    )
}