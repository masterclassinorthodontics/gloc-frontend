import ClinicExcellenceSection from "@/components/about-us/ClinicExcellencesection";
import Bestcosmeticdentistrysection from "@/components/best-cosmetic-dentistry-in-kolkata/bestcosmeticdentistry";
import Bestcosmeticservices from "@/components/best-cosmetic-dentistry-in-kolkata/bestcosmeticservices";
import Bestdentalcompositesection from "@/components/best-cosmetic-dentistry-in-kolkata/bestdentalcomposite";
import BestDentalCrownSection from "@/components/best-cosmetic-dentistry-in-kolkata/bestdentalcrown";
import BestDentalVeneerSection from "@/components/best-cosmetic-dentistry-in-kolkata/bestdentalvenner";
import ClinicalExcellenceSection from "@/components/cosmetic-dentistry/Clinicalexcellence";
import Achieveawards from "@/components/home/Achieveawards";
import BannerSection from "@/components/home/BannerSection";
import DentalSpecialistSection from "@/components/home/Dentalspecialist";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import HomeSection2 from "@/components/home/Threesection";
import TreatmentResult from "@/components/home/treatmentresult";
import YtVideoSection from "@/components/home/ytvideosection";

export default function Bestcosmeticdentistry(){
    return(
        <>
            <BannerSection/>
            <HomeSection2/>
            <Achieveawards/>
            <DentalSpecialistSection/>
            <TreatmentResult/>
            <YtVideoSection/>
            <TestimonialSection/>
            <Bestcosmeticdentistrysection/>
            <Bestcosmeticservices/>
            <BestDentalVeneerSection/>
            <BestDentalCrownSection/>
            <Bestdentalcompositesection/>
            <ClinicalExcellenceSection/>
        </>
    )
}