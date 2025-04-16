"use client"
import React from "react";
import { FaGlobe, FaGraduationCap, FaHandshake, FaQuoteLeft, FaChevronRight, FaCheck, FaStar, FaUniversity, FaAward } from "react-icons/fa";

export default function WhyJobkey() {
  const pillars = [
    {
      icon: <FaUniversity className="text-white text-xl" />,
      title: "Academic Excellence",
      description: "Our academic programs are recognized globally for their rigor, innovation, and real-world relevance.",
      color: "from-[#4776E6] to-[#8E54E9]"
    },
    {
      icon: <FaGraduationCap className="text-white text-xl" />,
      title: "Career Readiness",
      description: "95% of our graduates secure employment or continue to advanced studies within 6 months of graduation.",
      color: "from-[#0db2db] to-[#007994]"
    },
    {
      icon: <FaHandshake className="text-white text-xl" />,
      title: "Industry Connections",
      description: "Strong partnerships with leading organizations provide our students with real-world experience and opportunities.",
      color: "from-[#11998e] to-[#38ef7d]"
    },
    {
      icon: <FaAward className="text-white text-xl" />,
      title: "Innovative Research",
      description: "Our faculty and students are engaged in cutting-edge research that addresses real-world challenges.",
      color: "from-[#FF8008] to-[#FFC837]"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nadira Mohamoud Mohamed",
      role: "Computer Science Graduate",
      quote: "Jobkey University provided me with the perfect blend of theoretical knowledge and practical skills. The industry connections I made during my studies helped me land my dream job at a leading tech company."
    },
    {
      id: 2,
      name: "Adam Hassan Barrow",
      role: "Business Administration Student",
      quote: "The diverse student community and experienced faculty have enriched my learning experience. The career services team helped me secure an internship that turned into a full-time position."
    },
    {
      id: 3,
      name: "Ibrahim Abdirahman Adan",
      role: "Environmental Science Graduate",
      quote: "The research opportunities at Jobkey University are exceptional. I was able to work on groundbreaking projects that have real-world impact. The support from faculty was invaluable."
    }
  ];

  const achievements = [
    { number: "35+", label: "Years of Excellence" },
    { number: "95%", label: "Graduate Employment" },
    { number: "120+", label: "International Partners" },
    { number: "50+", label: "Academic Programs" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#f8fdff] to-white">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <div className="h-[2px] w-12 bg-[#0db2db]"></div>
            <div className="px-4 text-[#0db2db] font-semibold">DISCOVER</div>
            <div className="h-[2px] w-12 bg-[#0db2db]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            The Jobkey <span className="text-[#0db2db]">Advantage</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            What sets us apart and makes Jobkey University the ideal choice for your educational journey
          </p>
        </div>
        
         <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-8 relative border-l-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ borderLeftColor: index === 0 ? '#4776E6' : 
                                         index === 1 ? '#0db2db' : 
                                         index === 2 ? '#11998e' : '#FF8008' }}
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${pillar.color} transform -translate-y-1 mr-5 flex-shrink-0`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 -mt-2 -mr-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-r from-[#0db2db] to-[#0077be]">
                    <FaStar className="text-white text-xs" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Key Facts/Stats - Horizontal Strip */}
        <div className="mb-24 rounded-xl overflow-hidden shadow-md">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {achievements.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 ${
                  index === 0 ? 'bg-[#4776E6] text-white' : 
                  index === 1 ? 'bg-[#0db2db] text-white' : 
                  index === 2 ? 'bg-[#11998e] text-white' : 
                  'bg-[#FF8008] text-white'
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">{item.number}</div>
                <div className="text-sm md:text-base font-medium opacity-90">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Core Values - Iconless List */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <div className="w-24 h-1 bg-[#0db2db] mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Excellence', 'Innovation', 'Integrity', 'Diversity', 'Collaboration', 'Global Perspective'].map((value, index) => (
              <div key={index} className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow hover:border-[#0db2db] transition-all duration-300">
                <span className="font-medium text-gray-700">{value}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials - Simple Cards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Student Voices</h3>
            <div className="w-24 h-1 bg-[#0db2db] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-md border-t-4 border-[#0db2db]">
                <FaQuoteLeft className="text-[#0db2db] opacity-30 text-3xl mb-4" />
                <p className="text-gray-600 mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-[#0db2db]">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
