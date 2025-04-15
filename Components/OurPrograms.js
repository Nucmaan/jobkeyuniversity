"use client"
import React from "react";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap, FaCertificate, FaBook, FaChevronRight } from "react-icons/fa";

export default function OurPrograms() {
  const programs = [
    {
      title: "Diploma Programs",
      description:
        "Our diploma programs provide foundational knowledge and practical skills in various fields to prepare students for career advancement.",
      icon: <FaCertificate className="h-8 w-8 text-[#0db2db]" />,
      count: "15+ Programs",
      link: "/academics/diploma-programs",
      color: "text-[#0db2db]",
      borderColor: "border-[#0db2db]"
    },
    {
      title: "Undergraduate Programs",
      description:
        "Explore our diverse undergraduate programs designed to equip students with in-depth knowledge and critical thinking skills.",
      icon: <FaGraduationCap className="h-8 w-8 text-[#0057b8]" />,
      count: "30+ Programs",
      link: "/academics/undergraduate-programs",
      color: "text-[#0057b8]",
      borderColor: "border-[#0057b8]"
    },
    {
      title: "Postgraduate Programs",
      description:
        "Advance your career with our postgraduate programs, offering specialized education and research opportunities.",
      icon: <FaBook className="h-8 w-8 text-[#004080]" />,
      count: "25+ Programs",
      link: "/academics/postgraduate-programs",
      color: "text-[#004080]",
      borderColor: "border-[#004080]"
    },
  ];

  return (
    <div className="w-full py-20 bg-gradient-to-b from-white to-[#f6fbff]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0db2db] mb-6 relative inline-block">
              Our Academic Programs
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-[#0057b8]"></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jobkey University offers a wide range of academic programs designed to prepare students for success in their chosen fields.
            </p>
          </div>
          <Link
            href="/academics"
            className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border-2 border-[#0db2db] text-[#0db2db] rounded-lg hover:bg-[#0db2db] hover:text-white transition-all duration-300 font-medium"
          >
            <span>View All Programs</span>
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border-t-4 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
              style={{ borderTopColor: program.borderColor === 'border-[#0db2db]' ? '#0db2db' : 
                       program.borderColor === 'border-[#0057b8]' ? '#0057b8' : '#004080' }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-12 -translate-y-12 rotate-45 bg-gray-100 z-0"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gray-100 rounded-full p-4">
                    {program.icon}
                  </div>
                  <span className={`${program.color} font-bold text-lg`}>
                    {program.count}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold ${program.color} mb-4`}>
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-8 min-h-[100px]">
                  {program.description}
                </p>

                <div className="border-t border-gray-100 pt-6">
                  <Link href={program.link} className="group/link">
                    <div className={`flex items-center justify-between ${program.color} font-semibold`}>
                      <span>Explore Programs</span>
                      <div className={`${program.borderColor} border-2 rounded-full w-8 h-8 flex items-center justify-center group-hover/link:bg-current group-hover/link:border-current transition-all duration-300`}>
                        <FaChevronRight className={`text-sm group-hover/link:text-white`} />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Features Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-sm rounded-lg p-6 border-l-4 border-[#0db2db]">
            <div className="flex items-center mb-4">
              <div className="bg-[#f6fbff] rounded-full p-2 mr-4">
                <FaGraduationCap className="text-[#0db2db] text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800">Industry-Aligned</h4>
            </div>
            <p className="text-gray-600">Programs designed with input from industry leaders to ensure relevant skills</p>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 border-l-4 border-[#0057b8]">
            <div className="flex items-center mb-4">
              <div className="bg-[#f6fbff] rounded-full p-2 mr-4">
                <FaCertificate className="text-[#0057b8] text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800">Accredited</h4>
            </div>
            <p className="text-gray-600">All programs are fully accredited by relevant national and international bodies</p>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 border-l-4 border-[#004080]">
            <div className="flex items-center mb-4">
              <div className="bg-[#f6fbff] rounded-full p-2 mr-4">
                <FaBook className="text-[#004080] text-xl" />
              </div>
              <h4 className="font-semibold text-gray-800">Flexible Learning</h4>
            </div>
            <p className="text-gray-600">Multiple study options including full-time, part-time and online learning modes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
