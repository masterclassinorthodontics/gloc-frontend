import ContactMainCenterSection from "@/components/contact-us/Contactmain";
import GoogleMapSection from "@/components/home/Googlemapsection";


export const metadata = {
  title: "CONTACT US - Great Lakes Dental Clinic and Orthodontic Care",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};

export default function Contact(){
    return(
        <>
            <ContactMainCenterSection/>
            <GoogleMapSection/>
        </>
    )
}