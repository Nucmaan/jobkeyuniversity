"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaGraduationCap, FaComments } from "react-icons/fa";

export default function CallCenter() {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Apply Now Card */}
          <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="/call2.jpg"
              alt="Apply Now"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 z-20 text-center">
              <div className="bg-[#33d1ff]/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Apply Now for 2025 Intake!
                </h2>
              </div>
              <p className="mb-6 max-w-xs text-gray-200 text-sm md:text-base">
                Start your journey with Jobkey. For Knowledge. For Humanity.
              </p>
              <Link href="/admissions/apply">
                <button className="bg-white text-[#33d1ff] hover:bg-[#33d1ff] hover:text-white font-bold py-3 px-8 rounded-lg uppercase transition-all duration-300 shadow-lg transform hover:scale-105">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

          {/* Scholarships Card */}
          <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="/call1.jpg"
              alt="Scholarships"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 z-20 text-center">
              <div className="bg-[#33d1ff]/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
                  <FaGraduationCap className="text-white" />
                  Scholarships Available
                </h2>
              </div>
              <p className="mb-6 max-w-xs text-gray-200 text-sm md:text-base">
                We offer scholarships for diploma and bachelor programs. Available for selected courses.
              </p>
              <Link href="/admissions/scholarships">
                <button className="bg-white text-[#33d1ff] hover:bg-[#33d1ff] hover:text-white font-bold py-3 px-8 rounded-lg uppercase transition-all duration-300 shadow-lg transform hover:scale-105">
                  Find Out More
                </button>
              </Link>
            </div>
          </div>

          {/* Chat With Us Card */}
          <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="/call2.jpg"
              alt="Chat With Us"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8 z-20 text-center">
              <div className="bg-[#33d1ff]/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg mb-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
                  <FaComments className="text-white" />
                  Chat With Us
                </h2>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 w-full max-w-xs">
                <p className="text-gray-200 text-sm mb-2">We are online 9 AM - 4 PM</p>
                <p className="text-white font-semibold text-base md:text-lg mb-1 flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-green-400" />
                  +2516500191 (Somali)
                </p>
                <p className="text-white font-semibold text-base md:text-lg flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-green-400" />
                  +2516500191 (International)
                </p>
              </div>
              <Link href="https://wa.me/2516500191">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg uppercase transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2">
                  <FaWhatsapp className="text-xl" />
                  WhatsApp
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
