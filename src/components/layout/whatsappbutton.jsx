"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://web.whatsapp.com/send?phone=919330153855&text="
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-lg
        hover:scale-110
        transition-all
        duration-300
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}