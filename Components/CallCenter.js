"use client";

import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaArrowRight, FaPhone, FaClock, FaUniversity, FaScroll, FaHeadset } from "react-icons/fa";

export default function CallCenter() {
  return (
    <div className="w-full py-20 bg-[#f8fbff]">
      <div className="container mx-auto px-4 md:px-8">
       
        {/* Interactive Service Panel */}
        <div className="relative overflow-hidden">
          {/* Blue lines decoration */}
          <div className="absolute inset-0 w-full h-full z-0">
            <svg className="w-full h-full absolute top-0 left-0" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,200 C100,100 200,300 300,200 S400,100 500,200 S600,300 700,200 S800,100 900,200 S1000,300 1100,200 S1200,100 1300,200" fill="none" stroke="#0055FF" strokeWidth="2" strokeOpacity="0.4" />
              <path d="M100,0 C200,100 100,200 200,300 S300,400 200,500 S100,600 200,700 S300,800 200,900" fill="none" stroke="#0055FF" strokeWidth="2" strokeOpacity="0.4" />
              <path d="M1100,0 C1000,100 1100,200 1000,300 S900,400 1000,500 S1100,600 1000,700 S900,800 1000,900" fill="none" stroke="#0055FF" strokeWidth="2" strokeOpacity="0.4" />
            </svg>
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* Section 1: Admissions */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0057b8] rounded-full p-3 mr-3">
                    <FaUniversity className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0057b8]">2025 Admissions</h3>
                </div>
                <p className="text-gray-700 mb-5">Begin your academic journey with Jobkey University. Excellence in education, leadership in innovation.</p>
                <Link href="/admissions/apply" className="inline-flex items-center group">
                  <span className="text-[#0057b8] font-medium group-hover:underline">Apply Now</span>
                  <FaArrowRight className="text-[#0057b8] ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <Link href="/admissions/apply" className="w-full mt-auto">
                <button className="w-full bg-[#0db2db] text-white font-bold py-4 px-6 rounded-lg group hover:bg-[#004494] transition-colors flex items-center justify-center">
                  START APPLICATION 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            {/* Section 2: Scholarships */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-xl p-6 shadow-md mb-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#00b8e6] rounded-full p-3 mr-3">
                    <FaScroll className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#00b8e6]">Scholarship Programs</h3>
                </div>
                <p className="text-gray-700 mb-5">Discover our comprehensive scholarship opportunities for both diploma and bachelor programs.</p>
                <Link href="/admissions/scholarships" className="inline-flex items-center group">
                  <span className="text-[#00b8e6] font-medium group-hover:underline">Learn More</span>
                  <FaArrowRight className="text-[#00b8e6] ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <Link href="/admissions/scholarships" className="w-full mt-auto">
                <button className="w-full bg-[#00b8e6] text-white font-bold py-4 px-6 rounded-lg group hover:bg-[#009ec7] transition-colors flex items-center justify-center">
                  EXPLORE SCHOLARSHIPS
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
            
            {/* Section 3: Contact */}
            <div className="flex flex-col h-full">
              <div className="bg-white rounded-xl p-6 shadow-md flex-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-[#0088b3] rounded-full p-3 mr-3">
                    <FaHeadset className="text-white text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0088b3]">Support Hours</h3>
                </div>
                
                <div className="flex items-center mb-3 bg-[#f5f9ff] p-3 rounded-lg">
                  <FaClock className="text-[#0088b3] mr-3" />
                  <div>
                    <p className="text-gray-700 text-sm font-medium">Working Hours</p>
                    <p className="text-gray-600 text-sm">7:00 AM - 6:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-[#f5f9ff] p-3 rounded-lg">
                  <FaPhone className="text-[#0088b3] mr-3" />
                  <div>
                    <p className="text-gray-700 text-sm font-medium">Contact Number</p>
                    <p className="text-gray-600 text-sm">+252616774499</p>
                  </div>
                </div>
              </div>
              
              <Link href="https://wa.me/252616774499" className="w-full mt-6">
                <button className="w-full bg-[#25D366] text-white font-bold py-4 px-6 rounded-lg hover:bg-[#1fae53] transition-colors flex items-center justify-center">
                  <FaWhatsapp className="mr-2 text-xl" />
                  CHAT ON WHATSAPP
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Service indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center">
            <div className="w-3 h-3 bg-[#00b8e6] rounded-full mr-3 animate-pulse"></div>
            <p className="text-gray-700 font-medium">24/7 Student Support</p>
          </div>
          
          <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center">
            <div className="w-3 h-3 bg-[#0057b8] rounded-full mr-3 animate-pulse"></div>
            <p className="text-gray-700 font-medium">Fast Response Team</p>
          </div>
          
          <div className="bg-white rounded-full shadow-sm px-6 py-3 flex items-center">
            <div className="w-3 h-3 bg-[#25D366] rounded-full mr-3 animate-pulse"></div>
            <p className="text-gray-700 font-medium">WhatsApp Assistance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
