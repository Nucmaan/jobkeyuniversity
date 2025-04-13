"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaGraduationCap, FaArrowRight, FaPhone, FaClock } from "react-icons/fa";

export default function CallCenter() {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-[#f8fdff]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Apply Now Card */}
          <div className="group bg-gradient-to-br from-[#33d1ff] to-[#00b8e6] rounded-[40px] p-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-[39px] p-8 h-full flex flex-col min-h-[420px] transition-all duration-500 group-hover:bg-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/20 rounded-full p-4">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <FaArrowRight className="text-white text-xl group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Apply Now for 2025 Intake
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed flex-grow">
                Begin your academic journey with Jobkey University. Excellence in education, leadership in innovation.
              </p>
              <Link href="/admissions/apply" className="block mt-auto">
                <button className="w-full cursor-pointer bg-white text-[#33d1ff] font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 text-lg">
                  START APPLICATION
                </button>
              </Link>
            </div>
          </div>

          {/* Scholarships Card */}
          <div className="group bg-gradient-to-br from-[#00b8e6] to-[#009fd6] rounded-[40px] p-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-[39px] p-8 h-full flex flex-col min-h-[420px] transition-all duration-500 group-hover:bg-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/20 rounded-full p-4">
                  <FaGraduationCap className="text-white text-2xl" />
                </div>
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <FaArrowRight className="text-white text-xl group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Scholarship Programs
              </h2>
              <p className="text-white/90 text-lg mb-8 leading-relaxed flex-grow">
                Discover our comprehensive scholarship opportunities for both diploma and bachelor programs.
              </p>
              <Link href="/admissions/scholarships" className="block mt-auto">
                <button className="w-full cursor-pointer bg-white text-[#00b8e6] font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 text-lg">
                  EXPLORE SCHOLARSHIPS
                </button>
              </Link>
            </div>
          </div>

          {/* Chat With Us Card */}
          <div className="group bg-gradient-to-br from-[#009fd6] to-[#0088b3] rounded-[40px] p-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-[39px] p-8 h-full flex flex-col min-h-[420px] transition-all duration-500 group-hover:bg-white/10">
              <div className="flex items-center justify-between mb-8">
                <div className="bg-white/20 rounded-full p-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <FaClock className="text-white text-xl" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <div className="space-y-6 flex-grow">
                <p className="text-white/90 text-lg">
                  Our support team is here to help you with any questions.
                </p>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-white text-lg mb-2">Working Hours</p>
                  <p className="text-white/90">7:00 AM - 6:00 PM</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <p className="text-white text-lg mb-2">Contact Number</p>
                  <p className="text-white/90">+252616774499</p>
                </div>
              </div>
              <Link href="https://wa.me/252616774499" className="block mt-8 ">
                <button className="w-full cursor-pointer bg-white text-[#009fd6] font-bold py-5 px-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-white/20 text-lg flex items-center justify-center gap-3">
                  <FaWhatsapp className="text-2xl " />
                  CHAT ON WHATSAPP
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
