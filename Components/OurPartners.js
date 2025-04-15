"use client"
import React from "react";
import Image from "next/image";

export default function OurPartners() {
  const partners = [
    { 
      id: 1, 
      logo: "/1p.png", 
      alt: "Somali Syrian Specialist Hospital", 
      name: "Somali Syrian Specialist Hospital",
      description: "Clinical training and research collaboration for medical students"
    },
    { 
      id: 2, 
      logo: "/2p.png", 
      alt: "HornStar", 
      name: "HornStar",
      description: "Technology and innovation partnerships for computer science programs"
    },
    { 
      id: 3, 
      logo: "/3p.png", 
      alt: "Insania Foundation", 
      name: "Insania Foundation",
      description: "Community outreach and humanitarian project opportunities"
    },
    { 
      id: 4, 
      logo: "/4p.png", 
      alt: "Adult Commercial Secondary School", 
      name: "Adult Commercial Secondary School",
      description: "Academic pathway and transition programs for continuing education"
    },
  ];

  return (
    <section className="py-16 bg-[#f8fdff]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with academic styled elements */}
        <div className="mb-16 flex flex-col items-center">
          <div className="bg-[#0db2db] h-1 w-20 mb-3"></div>
          <h2 className="text-4xl font-bold text-gray-800 mb-2 relative">
            Academic <span className="text-[#0db2db]">Partnerships</span>
          </h2>
          <p className="text-gray-600 max-w-2xl text-center leading-relaxed">
            Jobkey University cultivates strategic relationships with industry leaders, healthcare institutions, and educational organizations to enhance the academic experience and create valuable opportunities for our students.
          </p>
        </div>

        {/* Partner layout with academic decorations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg flex"
            >
              {/* Left color bar - alternating colors */}
              <div className={`w-2 ${
                index % 4 === 0 ? 'bg-[#0db2db]' : 
                index % 4 === 1 ? 'bg-[#0057b8]' : 
                index % 4 === 2 ? 'bg-[#6c63ff]' : 
                'bg-[#38b2ac]'
              }`}>
              </div>
              
              <div className="p-6 flex flex-1">
                <div className="relative w-20 h-20 mr-6 flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gray-100 opacity-30"></div>
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    fill
                    className="object-contain p-2 relative z-10"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {partner.description}
                  </p>
                  
                  {/* Academic emblem style indicator */}
                  <div className="mt-4 flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#f8fdff] flex items-center justify-center mr-2">
                      <div className={`w-3 h-3 rounded-full ${
                        index % 4 === 0 ? 'bg-[#0db2db]' : 
                        index % 4 === 1 ? 'bg-[#0057b8]' : 
                        index % 4 === 2 ? 'bg-[#6c63ff]' : 
                        'bg-[#38b2ac]'
                      }`}></div>
                    </div>
                    <span className="text-sm text-gray-500">Institutional Partner</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      
        {/* Partnership benefits section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            How Our Partnerships Benefit Students
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0db2db]/10 flex items-center justify-center mb-4">
                <span className="text-[#0db2db] font-bold text-2xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Practical Experience</h4>
              <p className="text-gray-600 text-sm">Internships, fieldwork, and hands-on training opportunities with our partner organizations</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#0057b8]/10 flex items-center justify-center mb-4">
                <span className="text-[#0057b8] font-bold text-2xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Career Pathways</h4>
              <p className="text-gray-600 text-sm">Direct employment channels and professional networking with industry leaders</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#6c63ff]/10 flex items-center justify-center mb-4">
                <span className="text-[#6c63ff] font-bold text-2xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Research Opportunities</h4>
              <p className="text-gray-600 text-sm">Collaborative research projects with real-world applications and industry mentorship</p>
            </div>
          </div>
        </div>
        
        {/* Partnership quote */}
        <div className="mt-12 text-center">
          <blockquote className="italic text-gray-600">
            &quot;Our institutional partnerships form the bridge between academic theory and professional practice, creating a comprehensive educational experience.&quot;
          </blockquote>
          <p className="text-sm text-[#0db2db] mt-2 font-medium">— Office of Institutional Partnerships, Jobkey University</p>
        </div>
      </div>
    </section>
  );
}
