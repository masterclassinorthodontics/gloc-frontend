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
      <div className="bg-[#36384F] px-4 py-3">
        <div className="flex flex-col justify-center md:flex-row md:justify-between  gap-4 items-center">
          {/* Left Side */}

          <div className="flex flex-col justify-between ">
            <h1
              className="
              text-center
              md:text-left
                  text-white *:
                  text-2xl
                  lg:text-2xl
                  font-medium 
                "
            >
              Great Lakes Dental Clinic and Orthodontic Centre
            </h1>

            <h5
              className="
               text-center
              xl:text-right
                  text-white
                    text-sm
                  lg:text-lg
                "
            >
              A Multispeciality Dental Centre of Excellence
            </h5>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap justify-center md:justify-end gap-3 lg:gap-3.75">
            <a
              href="tel:033 35675767"
              className="flex items-center gap-2 text-white text-lg font-bold"
            >
              <span className="bg-white rounded-[5px] px-1 py-1.75">
                <FaPhoneAlt className="text-[#00A1D4] text-sm" />
              </span>
              <span>033 35675767</span>
            </a>

            <a
              href="tel:+919830000002"
              className="flex items-center gap-2 text-white text-lg font-bold"
            >
              <span className="bg-white rounded-[5px] px-1 py-1.75">
                <FaPhoneAlt className="text-[#00A1D4] text-sm" />
              </span>
              <span>+91 9830000002</span>
            </a>

            <a
              href="tel:+919830000003"
              className="flex items-center gap-2 text-white text-lg font-bold"
            >
              <span className="bg-white rounded-[5px] px-1 py-2">
                <FaPhoneAlt className="text-[#00A1D4] text-sm" />
              </span>
              <span>+91 9830000003</span>
            </a>
          </div>
        </div>
      </div>

      {/* Second Row */}
      {isSticky && <div className="" />}

      <div
        className={`
    bg-[#F3F3F3]
    z-50
    transition-all
    duration-300
    ${isSticky ? "fixed top-0 left-0 right-0" : "relative"}
  `}
      >
        <div className="px-4 py-2">
          <div className="flex items-center justify-between h-17.5">
            {/* Logo */}
            <div className="shrink-0 h-17.5 flex items-center justify-start">
              <Link href="/">
                <Image
                  src="https://greatlakesdentalclinics.com/wp-content/uploads/2021/04/643bfc4d-c9de-45a3-9116-cbf6ef82e4c6.jpg"
                  alt="Great Lakes Dental Clinic"
                  width={180}
                  height={40}
                  priority
                  className="object-contain h-17.5"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex items-center font-medium  text-[#36384F]">
                {[
                  { label: "HOME", href: "/" },
                  { label: "ABOUT US", href: "/about-us" },
                  { label: "CLINICAL SETUP", href: "/clinical-setup" },
                  {
                    label: "TREATMENT OPTIONS",
                    href: "/dental-treatment-options",
                  },
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
                        text-[12px]
                  flex
                  items-center 
                  transition-all
                  duration-300
                  ease-in-out
                  hover:bg-[#00A1D4]
                  hover:text-white
                  ${isSticky ? "px-3" : "px-4"}
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
    ${isMenuOpen ? "max-h-150 opacity-100" : "max-h-0 opacity-0"}
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