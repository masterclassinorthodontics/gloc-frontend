import TreatmentOptionsSection from "@/components/dental-treatment-options/treatmentsection";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import TreatmentResult from "@/components/home/treatmentresult";

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