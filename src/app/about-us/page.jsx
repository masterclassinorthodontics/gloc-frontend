import AboutContent from "@/components/about-us/Aboutcontent";
import AboutHero from "@/components/about-us/Abouthero";
import ClinicExcellenceSection from "@/components/about-us/ClinicExcellencesection";
import ServicesOverviewSection from "@/components/about-us/Serviceoverviewsection";
import WhyUsSection from "@/components/about-us/Whyusection";
import DentalSpecialistSection from "@/components/home/Dentalspecialist";
import GoogleMapSection from "@/components/home/Googlemapsection";
import TestimonialSection from "@/components/home/testimonialsection";
import TreatmentResult from "@/components/home/treatmentresult";

export default function AboutUsPage() {
  return (
    <>
      <AboutHero/>
      <AboutContent/>
      <ClinicExcellenceSection/>
      <WhyUsSection/>
      <ServicesOverviewSection/>
      <DentalSpecialistSection/>
      <TreatmentResult/>
      <TestimonialSection/>
      <GoogleMapSection/>

      {/* Other sections will come below */}
    </>
  );
}