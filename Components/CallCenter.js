"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaGraduationCap, FaArrowRight } from "react-icons/fa";

export default function CallCenter() {
  return (
    <div className="w-full py-16 bg-[#f8fdff]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Apply Now Card */}
          <div className="bg-[#33d1ff] rounded-[32px] p-8 flex flex-col min-h-[420px] transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#33d1ff]/50 to-[#33d1ff] -z-1"></div>
            <div className="relative z-10">
              <div className="bg-[#7ce3ff]/30 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-flex items-center gap-3">
                <FaGraduationCap className="text-white text-xl" />
                <h2 className="text-xl font-bold text-white">
                  Apply Now for 2025 Intake!
                </h2>
              </div>
              <p className="text-white text-lg mb-12 leading-relaxed">
                Start your journey with Jobkey. For Knowledge. For Humanity.
              </p>
            </div>
            <div className="mt-auto">
              <Link href="/admissions/apply" className="block">
                <button className="w-full bg-white text-[#33d1ff] font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-opacity-90 text-lg flex items-center justify-center gap-2">
                  APPLY NOW
                  <FaArrowRight className="text-lg" />
                </button>
              </Link>
            </div>
          </div>

          {/* Scholarships Card */}
          <div className="bg-[#00b8e6] rounded-[32px] p-8 flex flex-col min-h-[420px] transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00b8e6]/50 to-[#00b8e6] -z-1"></div>
            <div className="relative z-10">
              <div className="bg-[#66d9ff]/30 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-flex items-center gap-3">
                <FaGraduationCap className="text-white text-xl" />
                <h2 className="text-xl font-bold text-white">
                  Scholarships Available
                </h2>
              </div>
              <p className="text-white text-lg mb-12 leading-relaxed">
                We offer scholarships for diploma and bachelor programs. Available for selected courses.
              </p>
            </div>
            <div className="mt-auto">
              <Link href="/admissions/scholarships" className="block">
                <button className="w-full bg-white text-[#00b8e6] font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-opacity-90 text-lg flex items-center justify-center gap-2">
                  FIND OUT MORE
                  <FaArrowRight className="text-lg" />
                </button>
              </Link>
            </div>
          </div>

          {/* Chat With Us Card */}
          <div className="bg-[#009fd6] rounded-[32px] p-8 flex flex-col min-h-[420px] transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#009fd6]/50 to-[#009fd6] -z-1"></div>
            <div className="relative z-10">
              <div className="bg-[#4dc4ff]/30 backdrop-blur-sm rounded-2xl p-4 mb-6">
                <h2 className="text-xl font-bold text-white text-center">
                  Chat With Us
                </h2>
              </div>
              <div className="bg-[#4dc4ff]/30 backdrop-blur-sm rounded-2xl p-6 mb-12">
                <p className="text-white text-lg mb-4 text-center">
                  We are online 9 AM - 4 PM
                </p>
                <div className="space-y-3">
                  <p className="text-white text-lg text-center">
                    +252616774499 (Somali)
                  </p>
                  <p className="text-white text-lg text-center">
                    +252616774499 (International)
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-auto">
              <Link href="https://wa.me/252616774499" className="block">
                <button className="w-full bg-white text-[#009fd6] font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-opacity-90 text-lg flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  WHATSAPP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
