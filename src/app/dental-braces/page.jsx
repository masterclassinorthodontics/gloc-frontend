import DentalBracesTreatmentSection from "@/components/dental-braces/dentalbracessection";
import DentalBracesVideosSection from "@/components/dental-braces/dentalbracesvideosection";
import TypesOfDentalBracesSection from "@/components/dental-braces/typesofdentalbraces";
import WhyChooseUsBracesSection from "@/components/dental-braces/whychoosebraces";
import TreatmentOptionsSection from "@/components/dental-treatment-options/treatmentsection";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import TreatmentResult from "@/components/home/treatmentresult";

export default function DentalBracessection(){
    return(
        <>
            <DentalBracesTreatmentSection/>
            <TypesOfDentalBracesSection/>
            <WhyChooseUsBracesSection/>
            <DentalBracesVideosSection/>
            <TestimonialSection/>
            <GoogleMapSection/>
        </>
    )
}