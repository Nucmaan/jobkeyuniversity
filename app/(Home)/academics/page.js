"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaGraduationCap, 
  FaCertificate, 
  FaBook, 
  FaChalkboardTeacher, 
  FaUniversity,
  FaCalendarAlt,
  FaChartLine,
  FaQuoteLeft,
  FaMedal,
  FaUserGraduate,
  FaBuilding
} from "react-icons/fa";

export default function Page() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const programs = [
    {
      title: "Diploma Programs",
      description:
        "Our diploma programs provide foundational knowledge and practical skills in various fields to prepare students for career advancement.",
      icon: <FaCertificate className="h-10 w-10 text-[#33d1ff]" />,
      bgColor: "from-blue-400 to-cyan-500", 
      count: "15+ Programs",
      link: "/academics/diploma-programs",
      highlight: "1-Year Programs"
    },
    {
      title: "Undergraduate Programs",
      description:
        "Explore our diverse undergraduate programs designed to equip students with in-depth knowledge and critical thinking skills.",
      icon: <FaGraduationCap className="h-10 w-10 text-[#33d1ff]" />,
      bgColor: "from-cyan-500 to-blue-600",
      count: "30+ Programs",
      link: "/academics/undergraduate-programs",
      highlight: "4-Year Bachelor Degrees"
    },
    {
      title: "Postgraduate Programs",
      description:
        "Advance your career with our postgraduate programs, offering specialized education and research opportunities.",
      icon: <FaBook className="h-10 w-10 text-[#33d1ff]" />,
      bgColor: "from-blue-600 to-indigo-600",
      count: "25+ Programs",
      link: "/academics/postgraduate-programs",
      highlight: "Masters & PhD Programs"
    },
  ];
 

  const testimonials = [
    {
      quote: "Studying at Jobkey University was a transformative experience that opened doors to international opportunities.",
      name: "Ahmed Hassan",
      title: "Computer Science Graduate, 2022",
      icon: "🎓"
    },
    {
      quote: "The faculty's dedication to excellence and the practical approach to education prepared me well for my career.",
      name: "Fadumo Ali",
      title: "Business Administration Graduate, 2021",
      icon: "👩‍🎓"
    }
  ];

  // Navigate to program page
  const navigateToProgram = (link) => {
    window.location.href = link;
  };

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0a7ea4] to-[#33d1ff] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a7ea4]/90 to-[#33d1ff]/70"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="max-w-3xl mx-auto text-center pt-5">
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Academic <span className="text-yellow-300">Excellence</span> & Innovation
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discover a transformative educational journey at Jobkey University with programs designed to prepare you for global opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/academics/undergraduate-programs" 
                  className="bg-white text-[#0a7ea4] hover:bg-yellow-300 hover:text-[#0a7ea4] font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Explore Programs
                </Link>
                <Link 
                  href="/admissions/apply" 
                  className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-medium px-6 py-3 rounded-md transition-all duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-lg py-10 px-6 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-5 rounded-xl shadow-sm transform transition-transform hover:scale-105 duration-300">
                <div className="text-[#33d1ff] mb-2 flex justify-center">
                  <FaUniversity size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">6</div>
                <div className="text-sm text-gray-500">Faculties</div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm transform transition-transform hover:scale-105 duration-300">
                <div className="text-[#33d1ff] mb-2 flex justify-center">
                  <FaGraduationCap size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">70+</div>
                <div className="text-sm text-gray-500">Programs</div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm transform transition-transform hover:scale-105 duration-300">
                <div className="text-[#33d1ff] mb-2 flex justify-center">
                  <FaChalkboardTeacher size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">210+</div>
                <div className="text-sm text-gray-500">Expert Faculty</div>
              </div>
              
              <div className="bg-white p-5 rounded-xl shadow-sm transform transition-transform hover:scale-105 duration-300">
                <div className="text-[#33d1ff] mb-2 flex justify-center">
                  <FaMedal size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">92%</div>
                <div className="text-sm text-gray-500">Employment Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-50 text-[#0a7ea4] text-sm font-medium rounded-full mb-3">ACADEMIC PROGRAMS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Discover Your <span className="text-[#33d1ff]">Path to Success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jobkey University offers a wide range of academic programs designed to prepare students for success in their chosen fields. Explore our offerings and find the perfect program for your educational journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => navigateToProgram(program.link)}
              >
                <div className={`h-48 relative overflow-hidden bg-gradient-to-r ${program.bgColor}`}>
                  <div className="absolute inset-0 bg-pattern opacity-10"></div>
                  <div className="absolute top-4 right-4 z-20 bg-white text-[#33d1ff] text-xs px-3 py-1 rounded-full font-medium">
                    {program.highlight}
                  </div>
                  <div className="h-full flex items-center justify-center">
                    {React.cloneElement(program.icon, { className: "h-16 w-16 text-white" })}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-4 px-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-white">
                      {program.title}
                    </h3>
                    <div className="text-xs font-medium text-white/80 mt-1">
                      {program.count}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 h-full flex flex-col">
                  <p className="mt-2 text-gray-600 flex-grow">
                    {program.description}
                  </p>
                  
                  <button 
                    className="mt-6 inline-flex items-center justify-between w-full bg-gray-50 text-gray-800 hover:bg-[#33d1ff] hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    <span>Explore Programs</span>
                    <FaArrowRight className={`transition-transform duration-300 ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     

      <style jsx global>{`
        .bg-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
        
        .bg-dots-pattern {
          background-image: radial-gradient(rgba(255, 255, 255, 0.2) 2px, transparent 2px);
          background-size: 30px 30px;
        }
      `}</style>
    </div>
  );
}
