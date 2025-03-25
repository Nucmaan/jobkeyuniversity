import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CallCenter() {
  return (
    <div className="w-full py-8 md:py-12 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
            <Image 
              src="/call2.jpg" 
              alt="Apply Now" 
              fill
              className="object-fit grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end z-20 text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-[#33d1ff] rounded-sm px-4 py-2">Apply Now for 2025 Intake!</h2>
              <p className="mb-8 max-w-xs">Let's start your journey with Jobkey. For Knowledge. For Humanity.</p>
              <Link href="/admissions/apply">
                <button className="bg-[#33d1ff] hover:bg-[#3392ff] text-white font-bold py-2 px-6 rounded-md uppercase transition-all duration-300">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>

           <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/30 to-purple-600/60 z-10"></div>
            <Image 
              src="/call1.jpg" 
              alt="Scholarships" 
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end z-20 text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-[#33d1ff] rounded-sm px-4 py-2">Scholarships Available</h2>
              <p className="mb-8 max-w-xs">We offer scholarship for diploma and bachelor programmes. Only is applicable for selected programmes.</p>
              <Link href="/admissions/scholarships">
                <button className="bg-[#33d1ff] hover:bg-[#3392ff] text-white font-bold py-2 px-6 rounded-md uppercase transition-all duration-300">
                  Find Out More
                </button>
              </Link>
            </div>
          </div>

           <div className="relative h-[450px] md:h-[500px] overflow-hidden rounded-lg shadow-lg group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
            <Image 
              src="/call2.jpg" 
              alt="Chat With Us" 
              fill
              className="object-fit grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-end z-20 text-white p-6 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-[#33d1ff] rounded-sm px-4 py-2">Chat With Us</h2>
              <p className="mb-8 max-w-xs">We're online 9am - 4pm or WhatsApp us at</p>
              <p className="mb-1 font-semibold">+2516500191 (Somali)</p>
              <p className="mb-8 font-semibold">+2526583843 (International)</p>
              <div className="flex space-x-4">
                <Link href="https://wa.me/601433293375">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-md uppercase transition-all duration-300">
                    WhatsApp
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
