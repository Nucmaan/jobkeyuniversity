"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronRight, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const navRef = useRef(null);

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

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target) && navOpen) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navOpen]);

   useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [navOpen]);

  const toggleMobileMenu = () => {
    setNavOpen(!navOpen);
    setExpandedMenus({});
  };

  const toggleSubmenu = (menu) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="fixed w-full z-50 top-0">
       <div 
        className={`w-full bg-[#33d1ff] text-white px-4 md:px-6 py-2 transition-all duration-300 ${
          scrolling ? 'transform -translate-y-full' : 'transform translate-y-0'
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-1 sm:space-y-0 mb-2 sm:mb-0 items-center">
            <div className="flex items-center space-x-1">
              <FaEnvelope className="text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm">info@jobkey.edu.so</span>
            </div>
            <div className="flex items-center space-x-1">
              <FaMapMarkerAlt className="text-xs sm:text-sm" />
              <span className="text-xs sm:text-sm">Mogadishu, Somalia</span>
            </div>
          </div>
          <div className="flex space-x-3 sm:space-x-6 text-xs sm:text-sm">
            <Link href="/hemis" className="font-semibold hover:text-white/80 transition">Hemis</Link>
            <Link href="/verify" className="font-semibold hover:text-white/80 transition">Certificate Verification</Link>
            <Link href="/login" className="font-semibold hover:text-white/80 transition">Student Portal</Link>
          </div>
        </div>
      </div>

       <div 
        className={`w-full bg-white shadow-md text-black py-3 transition-all duration-300 ${
          scrolling ? 'transform -translate-y-0 fixed top-0 left-0' : 'transform translate-y-0'
        }`}
        style={{ top: scrolling ? 0 : 'auto' }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center space-x-2">
           <Link href="/" className='flex items-center space-x-2'>
           <Image 
           src="/logo.png" 
           alt="Jobkey University" 
           width={45} 
           height={45} 
           className="w-10 h-10 sm:w-[45px] sm:h-[45px]"
         />
         <div className="flex flex-col">
           <span className="text-[#33d1ff]  font-semibold text-base sm:text-lg">Jobkey University</span>
         </div>
         </Link>
          </div>

           <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-6">
              <div className="group relative">
                <Link href="/about" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  About Us <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link href="/about/history" className="block text-gray-700 hover:text-[#33d1ff]">History</Link>
                    <Link href="/about/development" className="block text-gray-700 hover:text-[#33d1ff]">Development</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/academics" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  Academics <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                  <Link href="/academics/departments" className="block text-gray-700 hover:text-[#33d1ff]">Diploma</Link>
                    <Link href="/academics/undergraduate-programs" className="block text-gray-700 hover:text-[#33d1ff]">Undergraduate</Link>
                    <Link href="/academics/faculties" className="block text-gray-700 hover:text-[#33d1ff]">Postgraduate</Link>
                    <Link href="/academics/faculties" className="block text-gray-700 hover:text-[#33d1ff]">Micro-Credentials</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/admissions" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  Admissions <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link href="/admissions/apply" className="block text-gray-700 hover:text-[#33d1ff]">How to Apply</Link>
                    <Link href="/admissions/scholarships" className="block text-gray-700 hover:text-[#33d1ff]">Scholarships</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/research" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  Research <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link href="/research/projects" className="block text-gray-700 hover:text-[#33d1ff]">Projects</Link>
                    <Link href="/research/publications" className="block text-gray-700 hover:text-[#33d1ff]">Publications</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/centers" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  Centers <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link href="/centers/innovation" className="block text-gray-700 hover:text-[#33d1ff]">Innovation Center</Link>
                    <Link href="/centers/career" className="block text-gray-700 hover:text-[#33d1ff]">Career Center</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/students" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  Students <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link href="/students/life" className="block text-gray-700 hover:text-[#33d1ff]">Student Life</Link>
                    <Link href="/students/clubs" className="block text-gray-700 hover:text-[#33d1ff]">Clubs</Link>
                    <Link href="/students/support" className="block text-gray-700 hover:text-[#33d1ff]">Support Services</Link>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <Link href="/" className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4">
                  Media <FaChevronDown className="ml-1 text-xs" />
                </Link>
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 space-y-2">
                    <Link href="/allNews" className="block text-gray-700 hover:text-[#33d1ff]">News</Link>
                    <Link href="/allEvents" className="block text-gray-700 hover:text-[#33d1ff]">Events</Link>
                  </div>
                </div>
              </div>
              
              <Link href="/admissions/apply" className="bg-[#33d1ff] text-white py-2 px-4 rounded hover:bg-[#33d1ff] transition duration-300">
                Apply Now
              </Link>
            </nav>
          </div>

           <div className="lg:hidden">
            <button 
              className="text-gray-600 hover:text-[#010fc0] p-2"
              onClick={toggleMobileMenu}
              aria-label={navOpen ? "Close menu" : "Open menu"}
            >
              {navOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

         <div 
          ref={navRef}
          className={`lg:hidden fixed inset-0 bg-gray-900/50 z-50 transition-opacity duration-300 ${
            navOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className={`bg-white h-screen w-[80%] max-w-sm overflow-y-auto shadow-xl transform transition-transform duration-300 ${
              navOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Image 
                  src="/logo.png" 
                  alt="Jobkey University" 
                  width={40} 
                  height={40}
                />
                <span className="text-[#33d1ff] font-semibold">Jobkey University</span>
              </div>
              <button onClick={toggleMobileMenu} className="text-gray-500">
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="p-4 space-y-2">
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('about')}
                >
                  <span className="font-medium">About Us</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.about ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.about ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/about" className="block py-2 text-gray-600 hover:text-[#33d1ff]">About Us</Link>
                  <Link href="/about/history" className="block py-2 text-gray-600 hover:text-[#33d1ff]">history Mission & Vision</Link>
                  <Link href="/about/development" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Development</Link>
                </div>
              </div>
              
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('academics')}
                >
                  <span className="font-medium">Academics</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.academics ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.academics ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/academics" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Academics</Link>
                  <Link href="/academics/undergraduate-programs" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Undergraduate programs</Link>
                  <Link href="/academics/Postgraduate-programs" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Postgraduate programs</Link>
                  <Link href="/academics/Micro-Credentials" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Micro-Credentials</Link>
                </div>
              </div>
              
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('admissions')}
                >
                  <span className="font-medium">Admissions</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.admissions ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.admissions ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/admissions/apply" className="block py-2 text-gray-600 hover:text-[#33d1ff]">How to Apply</Link>
                  <Link href="/admissions/scholarships" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Scholarships</Link>
                </div>
              </div>
              
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('research')}
                >
                  <span className="font-medium">Research</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.research ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.research ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/research/projects" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Projects</Link>
                  <Link href="/research/publications" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Publications</Link>
                </div>
              </div>
              
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('centers')}
                >
                  <span className="font-medium">Centers</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.centers ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.centers ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/centers/innovation" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Innovation Center</Link>
                  <Link href="/centers/career" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Career Center</Link>
                </div>
              </div>
              
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('students')}
                >
                  <span className="font-medium">Students</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.students ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.students ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/students/life" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Student Life</Link>
                  <Link href="/students/clubs" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Clubs</Link>
                  <Link href="/students/support" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Support Services</Link>
                </div>
              </div>
              
               <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                  onClick={() => toggleSubmenu('media')}
                >
                  <span className="font-medium">Media</span>
                  <span className="transform transition-transform duration-200">
                    {expandedMenus.media ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                </div>
                <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                  expandedMenus.media ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link href="/allNews" className="block py-2 text-gray-600 hover:text-[#33d1ff]">News</Link>
                  <Link href="/allEvents" className="block py-2 text-gray-600 hover:text-[#33d1ff]">Events</Link>
                </div>
              </div>
              
               <div className="pt-4">
                <Link href="/apply" className="block w-full bg-[#33d1ff]  text-white text-center py-3 px-4 rounded hover:bg-[#33d1ff] transition duration-300">
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
