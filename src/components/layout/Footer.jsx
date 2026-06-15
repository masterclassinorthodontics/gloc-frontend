"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-[#091426] text-white pt-12 pb-2">
      <div className="w-[90vw] mx-auto px-4">

        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1.5fr] gap-10">

          {/* Column 1 */}
          <div>
            <Image
              src="/images/common/transparent-logo.png"
              alt="Great Lakes Dental Clinic"
              width={220}
              height={80}
              className="object-contain"
            />

            <p className="mt-5 text-gray-300 leading-relaxed">
              A Multispeciality Dental Centre of Excellence
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Our Pages
            </h3>

            <ul className="space-y-1 text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#00A1D4] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/cosmetic-dentist-in-kolkata/"
                  className="hover:text-[#00A1D4] transition"
                >
                  Cosmetic Dental Treatment in Kolkata
                </Link>
              </li>

              <li>
                <Link
                  href="/cosmetic-dentistry/"
                  className="hover:text-[#00A1D4] transition"
                >
                  Cosmetic Dentistry
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  className="hover:text-[#00A1D4] transition"
                >
                  Dental Braces
                </Link>
              </li>

              <li>
                <Link
                  href="/invisalign/"
                  className="hover:text-[#00A1D4] transition"
                >
                  Invisalign
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Follow Us
            </h3>

            <ul className="space-y-1 text-gray-300">
              <li>
                <a href="#" className="hover:text-[#00A1D4] transition">
                  Facebook
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#00A1D4] transition">
                  Instagram
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#00A1D4] transition">
                  Youtube
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-[#00A1D4] transition">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Contact Us
            </h3>

            <p className="text-gray-300 leading-relaxed">
              7, Janak Road, Behind Lake Mall, Kalighat, Kolkata, West Bengal
              <br />
              700029
            </p>

            <p className="mt-4 text-gray-300">
              +91 9330153855 / +91 8337098496
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#36528D] flex items-center justify-center hover:scale-110 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#232426] flex items-center justify-center hover:scale-110 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#BA1F20] flex items-center justify-center hover:scale-110 transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            Copyright © 2023 Greatlakesdentalclinics. All rights reserved
          </p>
        </div>

      </div>
    </footer>
  );
}