"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaFlask, FaMicroscope, FaHandshake, FaLightbulb } from "react-icons/fa";

export default function Page() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const researchAreas = [
    {
      title: "Innovation & Technology",
      description: "Exploring cutting-edge technological advancements and their applications in various industries and social contexts.",
      icon: <FaLightbulb className="h-10 w-10 text-[#33d1ff]" />,
      count: "12 Projects",
      link: "#innovation"
    },
    {
      title: "Health Sciences",
      description: "Research focused on improving healthcare delivery, disease prevention, and advancing medical treatments for better community health outcomes.",
      icon: <FaMicroscope className="h-10 w-10 text-[#33d1ff]" />,
      count: "15 Projects",
      link: "#health"
    },
    {
      title: "Environmental Studies",
      description: "Investigating sustainable solutions for environmental challenges, climate adaptation, and conservation efforts in our region.",
      icon: <FaFlask className="h-10 w-10 text-[#33d1ff]" />,
      count: "8 Projects",
      link: "#environment"
    },
    {
      title: "Community Development",
      description: "Research initiatives aimed at strengthening local communities through education, economic opportunities, and social innovation.",
      icon: <FaHandshake className="h-10 w-10 text-[#33d1ff]" />,
      count: "10 Projects",
      link: "#community"
    },
  ];

  const featuredResearch = [
    {
      title: "Renewable Energy Solutions for Rural Areas",
      authors: "Dr. Ahmed Hassan, Dr. Sara Ibrahim",
      image: "/research-1.jpg",
      excerpt: "This groundbreaking study explores cost-effective renewable energy implementations tailored for rural communities, with significant implications for sustainable development.",
      year: "2023"
    },
    {
      title: "Digital Literacy and Economic Empowerment",
      authors: "Prof. Amina Mohamed, Dr. Omar Abdi",
      image: "/research-2.jpg",
      excerpt: "Examining the correlation between digital literacy initiatives and economic empowerment among underserved populations in urban centers.",
      year: "2023"
    }
  ];

  return (
    <div className="py-8 px-4 mt-26">
      <div className="container mx-auto max-w-7xl">
         <div className="relative rounded-xl overflow-hidden mb-12 h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff]/90 to-blue-900/80 z-10"></div>
          <div className="absolute inset-0 flex items-center z-20 px-8 md:px-16">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Research & Innovation</h1>
              <p className="text-lg md:text-xl opacity-90 mb-6">
                Advancing knowledge through cutting-edge research and fostering innovation to address global challenges.
              </p>
              <button className="bg-white text-[#33d1ff] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">
                Explore Our Publications
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gray-800 z-0">
            {/* This would be replaced with an actual image when available */}
            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-[#33d1ff]/30"></div>
          </div>
        </div>

      
         <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#33d1ff] mb-4">
              Featured Research
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest and most impactful research projects that are making a difference in our community and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredResearch.map((research, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-[#33d1ff]/20"></div>
                  <div className="absolute bottom-0 right-0 bg-[#33d1ff] text-white px-4 py-1 text-sm font-medium">
                    {research.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{research.title}</h3>
                  <p className="text-sm text-[#33d1ff] mb-4">{research.authors}</p>
                  <p className="text-gray-600 mb-4">{research.excerpt}</p>
                  <Link 
                    href="#"
                    className="inline-flex items-center font-medium text-[#33d1ff] hover:text-[#20b7e5] transition-colors duration-300"
                  >
                    <span>Read Full Paper</span>
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
