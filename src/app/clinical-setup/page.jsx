import ClinicalSetupBannerSection from "@/components/clinical-setup/Clinicalbannersection";
import ClinicInfrastructureSection from "@/components/clinical-setup/Clinicalinfrasection";
import ClinicalytSection from "@/components/clinical-setup/Clinicalytsection";
import ITeroClinicalSetupSection from "@/components/clinical-setup/Iterclinicsetup";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";

export default function ClinicalSetup() {
  return (
    <>
        <ClinicalSetupBannerSection/>
        <ClinicInfrastructureSection/>
        <ITeroClinicalSetupSection/>
        <ClinicalytSection/>
        <TestimonialSection/>
        <GoogleMapSection/>
    </>
  );
}