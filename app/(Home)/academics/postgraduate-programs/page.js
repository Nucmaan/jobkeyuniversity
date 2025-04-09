"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const programs = [
 
  {
    id: 6,
    title: "Master of International Relations and Diplomacy",
    description:
      "Study global politics, diplomatic practices, and international cooperation mechanisms.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/international",
    degrees: ["Master of International Relations", "Master of Diplomacy"],
    icon: "🌐"
  },

  {
    id: 1,
    title: "Master of Business Administration (MBA)",
    description:
      "Develop advanced business leadership skills and strategic management expertise for executive roles.",
    image: "/mba.jpg", 
    pathLink: "/academics/postgraduate-programs/MBA",
    degrees: ["MBA in Finance", "MBA in Marketing", "MBA in International Business"],
    icon: "💼"
  },
 
  {
    id: 3,
    title: "Master of Nutrition and Dietetics",
    description:
      "Become an expert in nutrition science, dietetics practice, and food service management.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/Nutrition",
    degrees: ["Master of Nutrition Science", "Master of Clinical Dietetics"],
    icon: "🥗"
  },
  {
    id: 7,
    title: "Master of Public Administration",
    description:
      "Develop essential skills for public service leadership, policy implementation, and organizational management.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/public",
    degrees: ["Master of Public Administration", "Master of Public Sector Management"],
    icon: "📋"
  },
  {
    id: 2,
    title: "Master of Public Policy and Governance",
    description:
      "Gain specialized knowledge in public policy analysis, governance systems, and leadership in public sector.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/governance",
    degrees: ["Master of Public Policy", "Master of Governance and Leadership"],
    icon: "🏛️"
  },
  {
    id: 4,
    title: "Master of Education and Teaching Program",
    description:
      "Enhance your teaching skills and educational leadership abilities for advanced roles in education.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/Education",
    degrees: ["Master of Education", "Master of Teaching"],
    icon: "🎓"
  },
  {
    id: 5,
    title: "Master of Health Services Management",
    description:
      "Learn to manage healthcare systems, lead medical facilities, and implement health policies effectively.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/Health",
    degrees: ["Master of Health Administration", "Master of Health Services Leadership"],
    icon: "🏥"
  },
 

  {
    id: 8,
    title: "Master of Public Health",
    description:
      "Focus on population health, epidemiology, health promotion, and disease prevention strategies.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/publicHealth",
    degrees: ["Master of Public Health", "Master of Epidemiology"],
    icon: "🔬"
  },
  {
    id: 9,
    title: "Master of Social Work",
    description:
      "Prepare for advanced social work practice, community development, and social policy advocacy.",
    image: "/internationalRelation.jpg", 
    pathLink: "/academics/postgraduate-programs/socialWork",
    degrees: ["Master of Social Work", "Master of Clinical Social Work"],
    icon: "🤝"
  }
];

export default function Page() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-[#33d1ff] overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[#33d1ff]/90"></div>
        
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Postgraduate Programs</h1>  
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        {/* Programs Grid */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Our Postgraduate Programs</h2>
            <div className="w-20 h-1 bg-[#33d1ff] mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your skills and expertise with our diverse range of master degree programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full"
                onMouseEnter={() => setHoveredId(program.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-56">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="text-4xl mb-2">{program.icon}</div>
                      <h2 className="text-xl font-bold text-white">
                        {program.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Degrees Offered:</h3>
                      <ul className="text-sm text-gray-600">
                        {program.degrees.map((degree, index) => (
                          <li key={index} className="mb-1">• {degree}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-auto">
                    <Link href={program.pathLink}>
                      <button className="w-full px-4 py-3 bg-[#33d1ff] text-white rounded-lg font-medium hover:bg-[#28a8cc] transition-colors flex items-center justify-center gap-2">
                        Learn More <FaArrowRight className={`transform transition-transform duration-300 ${hoveredId === program.id ? 'translate-x-1' : ''}`} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
