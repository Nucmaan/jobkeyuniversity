"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap, FaCertificate, FaBook, FaFlask } from "react-icons/fa";

export default function Page() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const programs = [
    {
      title: "Diploma Programs",
      description:
        "Our diploma programs provide foundational knowledge and practical skills in various fields to prepare students for career advancement.",
      icon: <FaCertificate className="h-10 w-10 text-[#33d1ff]" />,
      bgImage: "/diploma-bg.jpg", 
      count: "15+ Programs",
      link: "/academics/diploma-programs"
    },
    {
      title: "Undergraduate Programs",
      description:
        "Explore our diverse undergraduate programs designed to equip students with in-depth knowledge and critical thinking skills.",
      icon: <FaGraduationCap className="h-10 w-10 text-[#33d1ff]" />,
      bgImage: "/undergrad-bg.jpg",
      count: "30+ Programs",
      link: "/academics/undergraduate-programs"
    },
    {
      title: "Postgraduate Programs",
      description:
        "Advance your career with our postgraduate programs, offering specialized education and research opportunities.",
      icon: <FaBook className="h-10 w-10 text-[#33d1ff]" />,
      bgImage: "/postgrad-bg.jpg",
      count: "25+ Programs",
      link: "/academics/postgraduate-programs"
    },
  ];

  return (
    <div className=" py-8 px-4 mt-26">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#33d1ff] mb-4">
            Our Academic Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jobkey University offers a wide range of academic programs designed to prepare students for success in their chosen fields. Explore our offerings and find the perfect program for your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border-2 border-[#33d1ff] shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#33d1ff]/80 to-[#33d1ff]/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-0"></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className="mb-4">
                  {program.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-[#33d1ff] group-hover:text-white transition-colors duration-300">
                  {program.title}
                </h3>
                
                <div className="text-xs font-semibold text-[#33d1ff] mt-1 mb-3 group-hover:text-white/80 transition-colors duration-300">
                  {program.count}
                </div>
                
                <p className="mt-2 text-sm text-gray-600 flex-grow group-hover:text-white/90 transition-colors duration-300">
                  {program.description}
                </p>
                
                <Link 
                  href={program.link}
                  className={`mt-4 inline-flex items-center font-medium ${
                    hoveredIndex === index 
                      ? 'text-white' 
                      : 'text-[#33d1ff]'
                  } transition-colors duration-300 group-hover:text-white`}
                >
                  <span>Explore Programs</span>
                  <FaArrowRight className={`ml-2 transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-1' : ''
                  }`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
        
        </div>
      </div>
    </div>
  );
}
