import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#33d1ff] text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Jobkey University
          </h2>
          <p className="text-white text-sm mb-4">
            Empowering students through quality education and innovation.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm">
              <FaMapMarkerAlt  />
              <span>Mogadishu, Somalia</span>
            </div>
            <div className="flex items-center space-x-2  text-sm">
              <FaEnvelope />
              <span className=" cursor-pointer">
                info@jobkey.edu.so
              </span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <FaPhoneAlt className="" />
              <span>+252 61 2345678</span>
            </div>
          </div>
        </div>

         <div>
          <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3  text-sm">
            <li>
              <Link href="/about" className=" cursor-pointer transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/admissions" className=" cursor-pointer transition">
                Admissions
              </Link>
            </li>
            <li>
              <Link href="/academics" className=" cursor-pointer transition">
                Academics
              </Link>
            </li>
            <li>
              <Link href="/research" className=" cursor-pointer transition">
                Research
              </Link>
            </li>
            <li>
              <Link href="/media" className=" cursor-pointer transition">
                Media
              </Link>
            </li>
          </ul>
        </div>

         <div>
          <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#">
              <FaFacebookF size={20} />
            </a>
            <a href="#" >
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-whit  transition">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

       <div className="border-t border-white mt-8 pt-4 text-center text-white font-bold text-sm">
        &copy; {new Date().getFullYear()} Jobkey University. All Rights Reserved.
      </div>
    </footer>
  );
}
