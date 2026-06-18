"use client";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsSticky(window.scrollY > 100);
  };

  handleScroll(); // Check scroll position immediately on load

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <header>
      {/* Top Row */}
      <div className="bg-[#36384F]">
        <div className="py-2">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            
            {/* Left Side */}
            <div className="flex justify-start">
            <div className="flex flex-col items-center md:items-end">
              <h1
                className="
                  text-white
                  text-left
                  text-[1.8rem]
                  lg:text-[2.2rem]
                  font-medium
                  leading-tight
                "
              >
                Great Lakes Dental Clinic and Orthodontic Centre
              </h1>

              <h5
                className="
                  text-white
                  text-[1rem]
                  lg:text-[1.1rem]
                  font-normal
                "
              >
                A Multispeciality Dental Centre of Excellence
              </h5>
            </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-wrap justify-center md:justify-end gap-[12px] lg:gap-[15px]">
              
              <a
                href="tel:033 35675767"
                className="flex items-center gap-2 text-white"
              >
                <span className="bg-white rounded-[5px] px-[4px] py-[7px]">
                  <FaPhoneAlt className="text-[#00A1D4] text-sm" />
                </span>
                <span>033 35675767</span>
              </a>

              <a
                href="tel:+919830000002"
                className="flex items-center gap-2 text-white"
              >
                <span className="bg-white rounded-[5px] px-[4px] py-[7px]">
                  <FaPhoneAlt className="text-[#00A1D4] text-sm" />
                </span>
                <span>+91 9830000002</span>
              </a>

              <a
                href="tel:+919830000003"
                className="flex items-center gap-2 text-white"
              >
                <span className="bg-white rounded-[5px] px-[4px] py-[7px]">
                  <FaPhoneAlt className="text-[#00A1D4] text-sm" />
                </span>
                <span>+91 9830000003</span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      {isSticky && <div className="h-[70px]" />}

<div className={`
    bg-[#F3F3F3]
    z-50
    transition-all
    duration-300
    ${
      isSticky
        ? "fixed top-0 left-0 right-0"
        : "relative"
    }
  `}>
  <div className="px-4">
    <div className="flex items-center justify-between h-[70px]">

      {/* Logo */}
      <div className="flex-shrink-0 h-[70px] flex items-center justify-start">
        <Link href='/'>
        <Image
          src="/images/common/favicon.jpg"
          alt="Great Lakes Dental Clinic"
          width={180}
          height={40}
          priority
          className="object-contain h-[70px]"
        />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden xl:block">
        <ul className="flex items-center font-medium text-[12px] text-[#36384F]">

          {[
            { label: "HOME", href: "/" },
            { label: "ABOUT US", href: "/about-us" },
            { label: "CLINICAL SETUP", href: "/clinical-setup" },
            { label: "TREATMENT OPTIONS", href: "/dental-treatment-options" },
            { label: "DENTAL BRACES", href: "/dental-braces" },
            { label: "INVISALIGN", href: "/invisalign" },
            { label: "COSMETIC DENTISTRY", href: "/cosmetic-dentistry" },
            { label: "TREATMENT RESULTS", href: "/treatment-results" },
            { label: "CONTACT US", href: "/contact-us" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`
                  flex
                  items-center
                  h-[50px]
                  transition-all
                  duration-300
                  ease-in-out
                  hover:bg-[#00A1D4]
                  hover:text-white
                  ${isSticky ? "px-4" : "px-5"}
                `}
              >
                {item.label}
              </a>
            </li>
          ))}

        </ul>
      </nav>

      {/* Mobile Hamburger */}
      <button
        className="xl:hidden text-[#36384F] text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </div>
  </div>

  {/* Mobile / Tablet Menu */}
  <div
  className={`
    xl:hidden
    bg-[#F3F3F3]
    border-t
    border-gray-300
    overflow-hidden
    transition-all
    duration-300
    ease-in-out
    ${isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <ul className="flex flex-col">

    {[
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Clinical Setup", href: "/clinical-setup" },
      { label: "Treatment Options", href: "/dental-treatment-options" },
      { label: "Dental Braces", href: "/dental-braces" },
      { label: "Invisalign", href: "/invisalign" },
      { label: "Cosmetic Dentistry", href: "/cosmetic-dentistry" },
      { label: "Results", href: "/treatment-results" },
      { label: "Contact Us", href: "/contact-us" },
    ].map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          className="
            block
            px-6
            py-4
            text-[#36384F]
            font-medium
            transition-all
            duration-300
            hover:bg-[#36384F]
            hover:text-white
          "
        >
          {item.label}
        </a>
      </li>
    ))}

  </ul>
</div>
</div>
    </header>
  );
}