"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaGraduationCap, FaCertificate, FaBook } from "react-icons/fa";

export default function OurPrograms() {
  const programs = [
    {
      title: "Diploma Programs",
      description:
        "Our diploma programs provide foundational knowledge and practical skills in various fields to prepare students for career advancement.",
      icon: <FaCertificate className="h-8 w-8 text-white" />,
      count: "15+ Programs",
      link: "/academics/diploma-programs",
      bgColor: "bg-[#33d1ff]"
    },
    {
      title: "Undergraduate Programs",
      description:
        "Explore our diverse undergraduate programs designed to equip students with in-depth knowledge and critical thinking skills.",
      icon: <FaGraduationCap className="h-8 w-8 text-white" />,
      count: "30+ Programs",
      link: "/academics/undergraduate-programs",
      bgColor: "bg-[#00b8e6]"
    },
    {
      title: "Postgraduate Programs",
      description:
        "Advance your career with our postgraduate programs, offering specialized education and research opportunities.",
      icon: <FaBook className="h-8 w-8 text-white" />,
      count: "25+ Programs",
      link: "/academics/postgraduate-programs",
      bgColor: "bg-[#009fd6]"
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
              className={`${program.bgColor} rounded-[32px] p-8 flex flex-col min-h-[480px] transform transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg`}
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-6 inline-flex items-center gap-3 w-fit">
                {program.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">
                {program.title}
              </h3>
              
              <div className="text-white text-lg mb-4">
                {program.count}
              </div>
              
              <p className="text-white text-lg leading-relaxed mb-8 flex-grow">
                {program.description}
              </p>

              <Link 
                href={program.link}
                className="block w-full"
              >
                <button className="w-full bg-white text-[#33d1ff] font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:bg-opacity-90 text-lg flex items-center justify-center gap-2">
                  Explore Programs
                  <FaArrowRight className="text-lg" />
                </button>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link
            href="/academics"
            className="inline-flex items-center px-10 py-5 bg-[#33d1ff] text-white rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg text-lg font-semibold"
          >
            <span>View All Academic Programs</span>
            <FaArrowRight className="ml-4 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
