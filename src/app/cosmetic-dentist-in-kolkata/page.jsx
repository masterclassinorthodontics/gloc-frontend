import CeramicsPorcelainSection from "@/components/cosmetic-dentist-in-kolkata/ceramicporcealin";
import CompositeBondingSection from "@/components/cosmetic-dentist-in-kolkata/Compositebonding";
import CosmeticDentistHeroSection from "@/components/cosmetic-dentist-in-kolkata/cosmeticdentistbanner";
import CosmeticDentistryInvolvesSection from "@/components/cosmetic-dentist-in-kolkata/cosmeticdentistryinvolves";
import CosmeticDentalMaterialsSection from "@/components/cosmetic-dentist-in-kolkata/cosmeticsdentalmaterial";
import CosmeticDentistrySideSection from "@/components/cosmetic-dentist-in-kolkata/cosmeticsdentistrysidesection";
import DentalVeneerscrownSection from "@/components/cosmetic-dentist-in-kolkata/dentalcrownveneer";
import CastGoldToZirconiaSection from "@/components/cosmetic-dentist-in-kolkata/goldzirconia";
import ResinSection from "@/components/cosmetic-dentist-in-kolkata/resinsection";
import SelectingCosmeticDentistSection from "@/components/cosmetic-dentist-in-kolkata/selectcosmetics";
import TeethWhiteningAndDentalImplantsSection from "@/components/cosmetic-dentist-in-kolkata/Teethwhitening";

export const metadata = {
  title: "Cosmetic Dentist in Kolkata - GLOC",
  description:
    "Great Lakes Dental Clinic and Orthodontic Centre offers Invisalign, Dental Braces, Cosmetic Dentistry, Dental Implants and Orthodontic Treatments in Kolkata.",
};


export default function cosmeticdentistkolkata(){
    return(
        <>
           <CosmeticDentistHeroSection/>
           <CosmeticDentistrySideSection/>
           <SelectingCosmeticDentistSection/>
           <CosmeticDentalMaterialsSection/>
           <CeramicsPorcelainSection/>
           <ResinSection/>
           <CastGoldToZirconiaSection/>
           <CosmeticDentistryInvolvesSection/>
           <CompositeBondingSection/>
           <DentalVeneerscrownSection/>
           <TeethWhiteningAndDentalImplantsSection/>
        </>
    )
}