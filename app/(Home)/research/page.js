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
        {/* Hero Section */}
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

        {/* Research Areas */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#33d1ff] mb-4">
              Our Research Areas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jobkey University conducts research across various disciplines, focusing on addressing real-world challenges and contributing to the advancement of knowledge and society.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl border-2 border-[#33d1ff] shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#33d1ff]/80 to-[#33d1ff]/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-0"></div>
                
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="mb-4">
                    {area.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#33d1ff] group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>
                  
                  <div className="text-xs font-semibold text-[#33d1ff] mt-1 mb-3 group-hover:text-white/80 transition-colors duration-300">
                    {area.count}
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-600 flex-grow group-hover:text-white/90 transition-colors duration-300">
                    {area.description}
                  </p>
                  
                  <Link 
                    href={area.link}
                    className={`mt-4 inline-flex items-center font-medium ${
                      hoveredIndex === index 
                        ? 'text-white' 
                        : 'text-[#33d1ff]'
                    } transition-colors duration-300 group-hover:text-white`}
                  >
                    <span>Learn More</span>
                    <FaArrowRight className={`ml-2 transition-transform duration-300 ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Research */}
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

        {/* Research Partners Section */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#33d1ff] mb-4">
              Our Research Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading institutions and organizations to expand the scope and impact of our research initiatives.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-40 h-20 bg-white rounded-lg shadow flex items-center justify-center">
                <div className="text-gray-400 font-medium">Partner Logo</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#33d1ff] to-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Research Opportunities?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join our research community as a student, faculty member, or partner organization. Explore opportunities to collaborate on cutting-edge research initiatives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-[#33d1ff] px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition">
              Student Research Programs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition">
              Contact Research Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
