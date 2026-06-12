import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import ReviewVideosSection from "@/components/treatment-results/reviewvideo";
import TreatmentResultsSection from "@/components/treatment-results/treatmentresult";

export default function Treatmentresult(){
    return(
        <>
            <TreatmentResultsSection/>
            <ReviewVideosSection/>
            <TestimonialSection/>
            <GoogleMapSection/>
        </>
    )
}