import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import ReviewVideosSection from "@/components/treatment-results/reviewvideo";
import TreatmentResultsSection from "@/components/treatment-results/treatmentresult";


export const metadata = {
  title: "TREATMENT RESULTS - Great Lakes Dental Clinic and Orthodontic Centre ",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

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