"use client"
import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full z-50 top-0">
       <div 
        className={`w-full bg-[#33d1ff] text-white px-6 py-2 transition-all duration-300 ${
          scrolling ? 'transform -translate-y-full' : 'transform translate-y-0'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-sm" />
              <span className="text-sm">info@jobkey.edu.so</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="text-sm" />
              <span className="text-sm">Mogadishu, Somalia</span>
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/alumni" className="font-semibold">Hemis</Link>
            <Link href="/verify" className="font-semibold">Certificate Verification</Link>
            <Link href="/login" className="font-semibold">Student Portal</Link>
          </div>
        </div>
      </div>

       <div 
        className={`w-full bg-white shadow-md text-black py-3 transition-all duration-300 ${
          scrolling ? 'transform -translate-y-0 fixed top-0 left-0' : 'transform translate-y-0'
        }`}
        style={{ top: scrolling ? 0 : 'auto' }}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
           <div className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Jobkey University" 
              width={45} 
              height={45} 
            />
            <div className="flex flex-col">
              <span className="text-[#33d1ff] font-semibold text-lg">Jobkey University</span>
            </div>
          </div>

           <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-6">
              <div className="group relative">
                <Link href="/about" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  About Us <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                    <Link href="/about/history" className="block text-gray-700 hover:text-[#010fc0]">History</Link>
                    <Link href="/about/mission" className="block text-gray-700 hover:text-[#010fc0]">Mission & Vision</Link>
                    <Link href="/about/leadership" className="block text-gray-700 hover:text-[#010fc0]">Leadership</Link>
                    <Link href="/about/leadership" className="block text-gray-700 hover:text-[#010fc0]">Development</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/academics" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  Academics <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                  <Link href="/academics/departments" className="block text-gray-700 hover:text-[#010fc0]">Diploma</Link>
                    <Link href="/academics/programs" className="block text-gray-700 hover:text-[#010fc0]">Undergraduate</Link>
                    <Link href="/academics/faculties" className="block text-gray-700 hover:text-[#010fc0]">Postgraduate</Link>
                    <Link href="/academics/faculties" className="block text-gray-700 hover:text-[#010fc0]">Micro-Credentials</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/admissions" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  Admissions <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                    <Link href="/admissions/apply" className="block text-gray-700 hover:text-[#010fc0]">How to Apply</Link>
                    <Link href="/admissions/scholarships" className="block text-gray-700 hover:text-[#010fc0]">Scholarships</Link>
                    <Link href="/admissions/requirements" className="block text-gray-700 hover:text-[#010fc0]">Requirements</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/research" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  Research <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                    <Link href="/research/projects" className="block text-gray-700 hover:text-[#010fc0]">Projects</Link>
                    <Link href="/research/publications" className="block text-gray-700 hover:text-[#010fc0]">Publications</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/centers" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  Centers <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                    <Link href="/centers/innovation" className="block text-gray-700 hover:text-[#010fc0]">Innovation Center</Link>
                    <Link href="/centers/career" className="block text-gray-700 hover:text-[#010fc0]">Career Center</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/students" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  Students <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                    <Link href="/students/life" className="block text-gray-700 hover:text-[#010fc0]">Student Life</Link>
                    <Link href="/students/clubs" className="block text-gray-700 hover:text-[#010fc0]">Clubs</Link>
                    <Link href="/students/support" className="block text-gray-700 hover:text-[#010fc0]">Support Services</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/media" className="flex items-center text-gray-700 hover:text-[#010fc0] px-2 py-4">
                  Media <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md hidden group-hover:block">
                  <div className="p-4 space-y-2">
                    <Link href="/media/news" className="block text-gray-700 hover:text-[#010fc0]">News</Link>
                    <Link href="/media/events" className="block text-gray-700 hover:text-[#010fc0]">Events</Link>
                  </div>
                </div>
              </div>
              
              <Link href="/apply" className="bg-[#33d1ff] text-white py-2 px-4 rounded hover:bg-[#33d1ff] transition duration-300">
                Apply Now
              </Link>
            </nav>
          </div>

          <div className="lg:hidden">
            <button 
              className="text-gray-600 hover:text-[#010fc0]"
              onClick={() => setNavOpen(!navOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

         <div className={`lg:hidden ${navOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white shadow-md px-6 py-4 space-y-3">
            <Link href="/about" className="block text-gray-700 hover:text-[#010fc0]">About Us</Link>
            <Link href="/academics" className="block text-gray-700 hover:text-[#010fc0]">Academics</Link>
            <Link href="/admissions" className="block text-gray-700 hover:text-[#010fc0]">Admissions</Link>
            <Link href="/research" className="block text-gray-700 hover:text-[#010fc0]">Research</Link>
            <Link href="/centers" className="block text-gray-700 hover:text-[#010fc0]">Centers</Link>
            <Link href="/students" className="block text-gray-700 hover:text-[#010fc0]">Students</Link>
            <Link href="/media" className="block text-gray-700 hover:text-[#010fc0]">Media</Link>
            <Link href="/apply" className="inline-block bg-[#33d1ff] text-white py-2 px-4 rounded hover:bg-[#010fc0] transition duration-300 mt-2">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
