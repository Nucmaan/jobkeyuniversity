import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
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
    <footer className="bg-gradient-to-br from-[#33d1ff] to-[#010fc0] text-white">
       <div className="h-2 bg-gradient-to-r from-[#33d1ff] via-[#0babdb] to-[#33d1ff]"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                <span className="text-white/90 group-hover:text-white transition">+252 61 2345678</span>
              </a>
            </div>
          </div>

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
                <Link href="/admissions" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Admissions</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Academics</span>
                </Link>
              </li>
              <li>
                <Link href="/research" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Research</span>
                </Link>
              </li>
              <li>
                <Link href="/media" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Media</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

           <div>
            <h2 className="text-white text-lg font-semibold mb-4 border-b border-white/20 pb-2">Campus Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/library" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Library</span>
                </Link>
              </li>
              <li>
                <Link href="/career" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Career Center</span>
                </Link>
              </li>
              <li>
                <Link href="/support" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Student Support</span>
                </Link>
              </li>
              <li>
                <Link href="/health" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Health Services</span>
                </Link>
              </li>
              <li>
                <Link href="/housing" className="flex items-center space-x-2 text-white/90 hover:text-white transition">
                  <FaLongArrowAltRight className="text-[10px]" />
                  <span>Housing</span>
                </Link>
              </li>
            </ul>
          </div>

           <div>
            <h2 className="text-white text-lg font-semibold mb-4 border-b border-white/20 pb-2">Connect With Us</h2>
            <p className="text-white/90 text-sm mb-4">
              Follow us on social media to stay updated with the latest news and events.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-white" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
            
           
          </div>
        </div>
      </div>

       <div className="bg-[#010fc0]/30 mt-8 py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-white/80 text-sm mb-3 md:mb-0">
            &copy; {currentYear} Jobkey University. All Rights Reserved.
          </div>
         
        </div>
      </div>
    </footer>
  );
}
