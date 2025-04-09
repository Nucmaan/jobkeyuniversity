"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
 
const programs = [
  {
    id: 13,
    title: "Post-Graduate Diploma in International Trade & Maritime Law",
    description: "Study international trade regulations and maritime law to navigate global commerce and shipping legislation.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 14,
    title: "Post-Graduate Diploma in Civil Law",
    description: "Master civil law principles and practices for a career in legal practice and consultation.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 15,
    title: "Post-Graduate Diploma in Criminal and Legal Studies",
    description: "Explore criminal justice systems and legal frameworks for law enforcement and legal practice.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 16,
    title: "Post-Graduate Diploma in Biology & Chemistry",
    description: "Advance your knowledge in life sciences and chemical studies for research and industry applications.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 17,
    title: "Post-Graduate Diploma in Math",
    description: "Deepen your understanding of advanced mathematical concepts and their practical applications.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 18,
    title: "Post-Graduate Diploma in Environmental Law",
    description: "Specialize in environmental legislation and policy making for sustainable development.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 19,
    title: "Post-Graduate Diploma in Educational Leadership",
    description: "Develop leadership skills for educational administration and institutional management.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 20,
    title: "Post-Graduate Diploma in Digital Marketing & Business DevOps",
    description: "Master modern digital marketing strategies and business development operations.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 21,
    title: "Diploma in Hotel & Food Service",
    description: "Learn hospitality management and food service operations for the hospitality industry.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 22,
    title: "Diploma in Logistics & Supply Chain MGT",
    description: "Master the complexities of modern logistics and supply chain management.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 23,
    title: "Post-Graduate Diploma in Monitoring & Evaluation",
    description: "Learn project monitoring and evaluation techniques for effective program management.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 24,
    title: "Post-Graduate Diploma in Rural Development",
    description: "Study rural development strategies and community empowerment programs.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 25,
    title: "Post-Graduate Diploma in International Development Studies",
    description: "Explore global development challenges and international cooperation frameworks.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 26,
    title: "Post-Graduate Diploma in Operations Management",
    description: "Master business operations and process optimization techniques.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 27,
    title: "Post-Graduate Diploma in Education",
    description: "Develop advanced teaching methodologies and educational practices.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 28,
    title: "Post-Graduate Diploma in Educational Psychology",
    description: "Study psychological principles applied to educational settings.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 29,
    title: "Post-Graduate Diploma in Sustainable Development",
    description: "Learn sustainable development practices and environmental conservation.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 30,
    title: "Post-Graduate Diploma in Peace & Conflict Resolution",
    description: "Study conflict resolution and peace-building strategies.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 31,
    title: "Post-Graduate Diploma in Laboratory Management",
    description: "Master laboratory operations and quality control procedures.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 32,
    title: "Post-Graduate Diploma in Communications and Media",
    description: "Study modern communication strategies and media management.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 33,
    title: "Post-Graduate Diploma in Entrepreneurship Development",
    description: "Develop business creation and management skills for entrepreneurs.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 34,
    title: "Post-Graduate Diploma in NGO Management",
    description: "Learn non-profit organization management and social impact strategies.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 35,
    title: "Post-Graduate Diploma in Information Technology",
    description: "Master modern IT systems and digital transformation strategies.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 36,
    title: "Post-Graduate Diploma in Banking and Finance",
    description: "Study banking operations and financial management principles.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 37,
    title: "Post-Graduate Diploma in Political Science",
    description: "Explore political systems and international relations.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 38,
    title: "Post-Graduate Diploma in Public Administration",
    description: "Study public sector management and governance.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 39,
    title: "Post-Graduate Diploma in International Relations",
    description: "Analyze global politics and international diplomacy.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 40,
    title: "Post-Graduate Diploma in Political Science",
    description: "Study advanced political theory and governance systems.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 41,
    title: "Post-Graduate Diploma in Project Planning and MGT",
    description: "Master project management methodologies and planning techniques.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  },
  {
    id: 42,
    title: "Post-Graduate Diploma in Sharia Waqf Qanun",
    description: "Study Islamic law principles and their modern applications.",
    image: "/mba.jpg",
    pathLink: "/academics/diploma-programs"
  }
];
 
export default function Page() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-[#33d1ff] overflow-hidden mb-5">
        <div className="absolute inset-0 bg-[#33d1ff]/90"></div>
        
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">Diploma Programs</h1>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Our Diploma Programs</h2>
          <div className="w-24 h-1 bg-[#33d1ff] mx-auto my-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your career prospects with our comprehensive range of postgraduate diploma programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link href={program.pathLink}>
                  <button className="w-full px-6 py-3 bg-[#33d1ff] text-white rounded-lg font-semibold hover:bg-[#7ecce4] transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
