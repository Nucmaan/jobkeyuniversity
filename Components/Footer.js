import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTiktok,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaInstagram,
  FaYoutube,
  FaLongArrowAltRight
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1cadda] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* University Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Jobkey University" 
                width={45} 
                height={45} 
                className="bg-white p-1 rounded-full"
              />
              <h2 className="text-white text-xl font-bold">
                Jobkey University
              </h2>
            </div>
            <p className="text-white/90 text-sm mb-6 max-w-xs">
              Empowering students through quality education and innovation since 2015. Building the future leaders of Somalia and beyond.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm group">
                <FaMapMarkerAlt className="text-white/80 group-hover:text-white transition" />
                <span className="text-white/90 group-hover:text-white transition">Mogadishu, Somalia</span>
              </div>
              <a href="mailto:info@jobkey.edu.so" className="flex items-center space-x-3 text-sm group">
                <FaEnvelope className="text-white/80 group-hover:text-white transition" />
                <span className="text-white/90 group-hover:text-white transition underline-offset-4 hover:underline">
                  info@jobkey.edu.so
                </span>
              </a>
              <a href="tel:+25261234567" className="flex items-center space-x-3 text-sm group">
                <FaPhoneAlt className="text-white/80 group-hover:text-white transition" />
                <span className="text-white/90 group-hover:text-white transition">+252 61 677 4499</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 border-b border-white/20 pb-2">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Academics</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/research" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Research</span>
                </Link>
              </li>
              <li>
                <Link href="/students" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Students</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>News</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 border-b border-white/20 pb-2">Academic Programs</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics/diploma-programs" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Diploma Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/academics/undergraduate-programs" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Undergraduate Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/academics/postgraduate-programs" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Postgraduate Programs</span>
                </Link>
              </li>
              <li>
                <Link href="/admissions/scholarships" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Scholarships</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4 border-b border-white/20 pb-2">Connect With Us</h2>
            <p className="text-white/90 text-sm mb-4">
              Follow us on social media to stay updated with the latest news and events.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a 
                href="https://www.facebook.com/JobkeyUniv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://www.tiktok.com/@jobkey_university?_t=ZS-8vV4QQ6G9Ba&_r=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="TikTok"
              >
                <FaTiktok className="text-white" />
              </a>
              <a 
                href="https://wa.me/252616774499" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1cadda] mt-8 py-4 border-t-2 border-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-center items-center text-center md:text-left">
          <div className="text-white text-sm mb-3 md:mb-0">
            &copy; {currentYear} Jobkey University. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
