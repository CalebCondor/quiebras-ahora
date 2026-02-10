"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=17872490725&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-100 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      {/* Main Icon */}
      <FaWhatsapp className="w-8 h-8" />

      {/* Subtle Glow Effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-0 transition-opacity"></span>

      {/* Hover Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap border border-gray-100">
        ¿Necesitas ayuda? Escríbenos
      </span>
    </a>
  );
}
