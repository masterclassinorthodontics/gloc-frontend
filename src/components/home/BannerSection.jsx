"use client";

import { useEffect, useState } from "react";
import { FaStethoscope } from "react-icons/fa";
import Image from "next/image";

export default function BannerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/images/common/bannerimgone.jpg",
    "/images/common/bannerimgtwo.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="flex flex-col xl:flex-row min-h-[900px]">

        {/* Left Column */}
        <div className="relative w-full xl:w-[40%] h-[60vh] md:h-[100vh] xl:min-h-[1000px] bg-white overflow-hidden">

          {images.map((image, index) => (
            <div
              key={index}
              className={`
                absolute inset-0 transition-opacity duration-1000
                ${currentSlide === index ? "opacity-100" : "opacity-0"}
              `}
            >
              <Image
                src={image}
                alt={`Banner ${index + 1}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          ))}

        </div>

        {/* Right Column */}
        <div className="w-full xl:w-[60%] bg-[#36384F] min-h-[400px] md:min-h-[500px] xl:min-h-[1000px]">
          {/* Right content goes here */}

          <div className="flex flex-col justify-start h-full px-6 md:px-10 xl:px-8 py-6 text-white">

  {/* Heading */}
  <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold">
    Dr Abhisek Ghosh
  </h1>
  <div className="w-[150px] h-[3px] bg-white my-4"></div>

  {/* Sub Heading */}
  <div className="space-y-1 mb-12">
    <p className="text-lg md:text-xl font-light">
      B.D.S(Chen), M.D.S(Ortho)(Manipal), MorthRCS(Edinburgh), MorthRCS(England),
    </p>

    <p className="text-lg md:text-xl font-light">
      FFDOrth(Ireland), MorthRCPS(Glasgow), D.I.B.O, F.A.G.E
    </p>

    <p className="text-lg md:text-xl font-light">
      Consultant Orthodontist and Chief Dentist
    </p>
  </div>

  

  {/* List Items */}
  <div className="flex flex-col lg:flex-row gap-8">

  {/* Left Side - List */}
  <div className="flex-1">
    <ul className="space-y-2 text-base md:text-lg">

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Fellow, Royal College of Surgeons, Edinburgh
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Fellow, Royal College of Surgeons, England
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Fellow, Royal College of Surgeons, Ireland
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Fellow, Royal College of Surgeons and Physicians, Glasgow
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Diplomate, Indian Board of Orthodontics
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Observer Fellowship, University of Western Australia
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        International member, American Association of Orthodontist
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Fellow, World Federation of Orthodontist
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Cert. in Aligner Technologies (Invisalign)
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Cert. in Lingual Orthodontics (Incognito)
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Chief Consultant Orthodontist, Apollo Clinics, Kolkata
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        National Panel of Speakers, Indian Orthodontic Society
      </li>

      <li className="flex items-start">
        <span className="mr-3 text-[#00A1D4] text-xl"><FaStethoscope /></span>
        Director, Great Lakes Dental Clinic and Orthodontic Centre
      </li>

    </ul>
  </div>

  {/* Right Side - Buttons */}
  <div className="lg:w-[260px] flex flex-col justify-end items-end gap-5">

    <a
      href="https://www.youtube.com/channel/UC2_6CgGX0r8cUZPiyICThsw"
      target="blank"
      className="
        glowing-btn
        w-4/5
        px-0
        py-2
        rounded-md
        text-white
        font-semibold
        text-center
      "
    >
      KNOW YOUR DOCTOR
    </a>

    <a
      href="https://www.google.com/search?q=great+lakes+dental&rlz=1C1CHBF_enIN956IN956&oq=great+lakes+dental&aqs=chrome.0.69i59l2j69i60l3.3072j0j4&sourceid=chrome&ie=UTF-8#lrd=0x3a0270cb5c1b07c5:0x4788b0b3baf2059e,1,,,"
      target="blank"
      className="
        glowing-btn
        w-full
        px-0
        py-2
        rounded-md
        text-white
        font-semibold
        text-center
      "
    >
      GOLD INVISALIGN PROVIDER
    </a>

  </div>

</div>

  <div className="mt-10 flex justify-center xl:justify-start">
  <Image
    src="/images/common/dig-banner.jpg"
    alt="Dr Abhisek Ghosh"
    width={1200}
    height={120}
    className="object-contain"
  />
</div>

</div>

        </div>

      </div>
    </section>
  );
}