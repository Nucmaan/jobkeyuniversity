"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CallCenter() {
  return (
    <div className="w-full py-8 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="/call2.jpg"
              alt="Apply Now"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-8 z-20 text-center">
              <h2 className="text-2xl font-semibold mb-4 bg-[#33d1ff] px-4 py-2 rounded-md shadow-lg">
                Apply Now for 2025 Intake!
              </h2>
              <p className="mb-6 max-w-xs text-gray-300">
                Start your journey with Jobkey. For Knowledge. For Humanity.
              </p>
              <Link href="/admissions/apply">
                <button className="bg-[#33d1ff] hover:bg-[#88dbf5] text-white font-bold py-3 px-8 rounded-md uppercase transition-all duration-300 shadow-md">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

           <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-purple-700/80 z-10"></div>
            <Image
              src="/call1.jpg"
              alt="Scholarships"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-8 z-20 text-center">
              <h2 className="text-2xl font-semibold mb-4 bg-[#33d1ff] px-4 py-2 rounded-md shadow-lg">
                Scholarships Available
              </h2>
              <p className="mb-6 max-w-xs text-gray-300">
                We offer scholarships for diploma and bachelor programs. Available for selected courses.
              </p>
              <Link href="/admissions/scholarships">
                <button className="bg-[#33d1ff] hover:bg-[#8ce0fa] text-white font-bold py-3 px-8 rounded-md uppercase transition-all duration-300 shadow-md">
                  Find Out More
                </button>
              </Link>
            </div>
          </div>

           <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-xl shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
            <Image
              src="/call2.jpg"
              alt="Chat With Us"
              fill
              className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end text-white p-8 z-20 text-center">
              <h2 className="text-2xl font-semibold mb-4 bg-[#33d1ff] px-4 py-2 rounded-md shadow-lg">
                Chat With Us
              </h2>
              <p className="mb-4 text-gray-300">We're online 9 AM - 4 PM or WhatsApp us at:</p>
              <p className="font-semibold text-lg mb-1">+2516500191 (Somali)</p>
              <p className="font-semibold text-lg mb-6">+2526583843 (International)</p>
              <Link href="https://wa.me/601433293375">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md uppercase transition-all duration-300 shadow-md">
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
