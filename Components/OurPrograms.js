"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap, FaCertificate, FaBook } from "react-icons/fa";

export default function OurPrograms() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const programs = [
    {
      title: "Diploma Programs",
      description:
        "Our diploma programs provide foundational knowledge and practical skills in various fields to prepare students for career advancement.",
      icon: <FaCertificate className="h-12 w-12 text-white" />,
      bgImage: "/under.jpg", 
      count: "15+ Programs",
      link: "/academics/diploma-programs"
    },
    {
      title: "Undergraduate Programs",
      description:
        "Explore our diverse undergraduate programs designed to equip students with in-depth knowledge and critical thinking skills.",
      icon: <FaGraduationCap className="h-12 w-12 text-white" />,
      bgImage: "/postGratuate.jpg",
      count: "30+ Programs",
      link: "/academics/undergraduate-programs"
    },
    {
      title: "Postgraduate Programs",
      description:
        "Advance your career with our postgraduate programs, offering specialized education and research opportunities.",
      icon: <FaBook className="h-12 w-12 text-white" />,
      bgImage: "/postGratuate.jpg",
      count: "25+ Programs",
      link: "/academics/postgraduate-programs"
    },
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#33d1ff] mb-6">
            Our Academic Programs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Jobkey University offers a wide range of academic programs designed to prepare students for success in their chosen fields. Explore our offerings and find the perfect program for your educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0">
                <Image
                  src={program.bgImage}
                  alt={program.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
              </div>

              <div className="relative z-10 p-8 h-[400px] flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 bg-[#33d1ff] rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500">
                    {program.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {program.title}
                  </h3>
                  
                  <div className="text-white/80 font-medium mb-4">
                    {program.count}
                  </div>
                  
                  <p className="text-white/90 text-lg leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <Link 
                  href={program.link}
                  className="inline-flex items-center text-white font-semibold text-lg group-hover:text-[#33d1ff] transition-colors duration-300"
                >
                  <span>Explore Programs</span>
                  <FaArrowRight className={`ml-3 transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-x-2' : ''
                  }`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link
            href="/academics"
            className="inline-flex items-center px-10 py-5 bg-[#33d1ff] text-white rounded-full hover:bg-[#33d1ff]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg font-semibold"
          >
            <span>View All Academic Programs</span>
            <FaArrowRight className="ml-4 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
