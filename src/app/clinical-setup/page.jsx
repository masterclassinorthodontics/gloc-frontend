import BiolaseLaserSystemSection from "@/components/clinical-setup/Biolasesection";
import ClinicalSetupBannerSection from "@/components/clinical-setup/Clinicalbannersection";
import ClinicInfrastructureSection from "@/components/clinical-setup/Clinicalinfrasection";
import ClinicalytSection from "@/components/clinical-setup/Clinicalytsection";
import CovidGuidelinesSection from "@/components/clinical-setup/Covidguidelinesection";
import ITeroClinicalSetupSection from "@/components/clinical-setup/Iterclinicsetup";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";


export const metadata = {
  title: "CLINICAL SETUP - Great Lakes Dental Clinic and Orthodontic Centre",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function ClinicalSetup() {
  return (
    <>
        <ClinicalSetupBannerSection/>
        <ClinicInfrastructureSection/>
        <ITeroClinicalSetupSection/>
        <ClinicalytSection/>
        <BiolaseLaserSystemSection/>
        <CovidGuidelinesSection/>
        <TestimonialSection/>
        <GoogleMapSection/>
    </>
  );
}