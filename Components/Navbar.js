"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope,FaUserGraduate, FaSignInAlt, FaCheckCircle, FaMapMarkerAlt, FaChevronDown, FaChevronRight, FaTimes } from 'react-icons/fa';
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

  const mainNavItems = [
    {
      title: 'About',
      href: '/about',
      submenu: [
        { title: 'History', href: '/about/history' },
        { title: 'Development', href: '/about/development' },
      ]
    },
    {
      title: 'Academics',
      href: '/academics',
      submenu: [
        { title: 'Diploma', href: '/academics/diploma-programs' },
        { title: 'Undergraduate', href: '/academics/undergraduate-programs' },
        { title: 'Postgraduate', href: '/academics/postgraduate-programs' },
      ]
    },
    {
      title: 'Admissions',
      href: '/admissions',
      submenu: [
        { title: 'Admission Process', href: '/admissions' },
        { title: 'How to Apply', href: '/admissions/apply' },
        { title: 'Scholarships', href: '/admissions/scholarships' },
      ]
    },
    {
      title: 'Research',
      href: '/research'
    },
    {
      title: 'Students',
      href: '/students'
    },
    {
      title: 'News',
      href: '/news'
    }
  ];

  return (
    <div className="fixed w-full z-50 top-0">
      {/* Top Bar */}
      <div 
        className={`w-full bg-gradient-to-r from-[#1cadda] to-[#33d1ff] text-white px-4 md:px-6 py-2 transition-all duration-500 ease-in-out ${
          scrolling ? 'transform -translate-y-full' : 'transform translate-y-0'
        }`}
      >
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-1 sm:space-y-0 mb-2 sm:mb-0 items-center">
            <a href="mailto:info@jobkey.edu.so" className="flex items-center space-x-2 hover:text-white/80 transition group">
              <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition">
                <FaEnvelope className="text-xs" />
              </div>
              <span className="text-xs sm:text-sm">info@jobkey.edu.so</span>
            </a>
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <FaMapMarkerAlt className="text-xs" />
              </div>
              <span className="text-xs sm:text-sm">Mogadishu, Somalia</span>
            </div>
          </div>
          <div className="flex space-x-5 sm:space-x-6 text-xs sm:text-sm">
            <Link href="/hemis" className="font-medium hover:text-white/80 transition flex items-center gap-1.5">
              <FaUserGraduate className="text-white/90" />
              <span>Hemis</span>
            </Link>
            <Link href="/login" className="font-medium hover:text-white/80 transition flex items-center gap-1.5">
              <FaSignInAlt className="text-white/90" />
              <span>Student Portal</span>
            </Link>
            <Link href="/verify" className="font-medium hover:text-white/80 transition flex items-center gap-1.5">
              <FaCheckCircle className="text-white/90" />
              <span>Verify Certificate</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div 
        className={`w-full bg-white shadow-md text-black py-3 transition-all duration-300 ${
          scrolling ? 'transform -translate-y-0 fixed top-0 left-0' : 'transform translate-y-0'
        }`}
        style={{ top: scrolling ? 0 : 'auto' }}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <Link href="/" className='flex items-center space-x-2'>
            <Image 
              src="/logo.png" 
              alt="Jobkey University" 
              width={45} 
              height={45} 
              className="w-10 h-10 sm:w-[45px] sm:h-[45px]"
            />
            <div className="flex flex-col">
              <span className="text-[#33d1ff] font-semibold text-base sm:text-lg">Jobkey University</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-6">
              {mainNavItems.map((item) => (
                <div key={item.title} className="group relative">
                  <Link 
                    href={item.href} 
                    className="flex items-center text-gray-700 hover:text-[#33d1ff] px-2 py-4"
                  >
                    {item.title}
                    {item.submenu && <FaChevronDown className="ml-1 text-xs" />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link 
                            key={subItem.title}
                            href={subItem.href} 
                            className="block text-gray-700 hover:text-[#33d1ff]"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/admissions/apply" 
                className="bg-[#33d1ff] text-white py-2 px-4 rounded hover:bg-[#33d1ff]/90 transition duration-300"
              >
                Apply Now
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              className="text-gray-600 hover:text-[#33d1ff] p-2"
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

        {/* Mobile Navigation */}
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
              {mainNavItems.map((item) => (
                <div key={item.title} className="border-b border-gray-100 pb-2">
                  <div 
                    className="flex justify-between items-center py-2 text-gray-700 hover:text-[#33d1ff] cursor-pointer"
                    onClick={() => item.submenu && toggleSubmenu(item.title.toLowerCase())}
                  >
                    <Link 
                      href={item.href}
                      className="font-medium"
                      onClick={(e) => !item.submenu && toggleMobileMenu()}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <span className="transform transition-transform duration-200">
                        {expandedMenus[item.title.toLowerCase()] ? <FaChevronDown /> : <FaChevronRight />}
                      </span>
                    )}
                  </div>
                  {item.submenu && (
                    <div className={`pl-4 space-y-2 mt-1 overflow-hidden transition-all duration-200 ${
                      expandedMenus[item.title.toLowerCase()] ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.title}
                          href={subItem.href} 
                          className="block py-2 text-gray-600 hover:text-[#33d1ff]"
                          onClick={toggleMobileMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4">
                <Link 
                  href="/admissions/apply" 
                  className="block w-full bg-[#33d1ff] text-white text-center py-3 px-4 rounded hover:bg-[#33d1ff]/90 transition duration-300"
                  onClick={toggleMobileMenu}
                >
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
