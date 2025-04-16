"use client"
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const programs = [
  {
    id: 1,
    title: "Diploma in International Trade & Maritime Law",
    description: "Study international trade regulations and maritime law to navigate global commerce and shipping legislation.",
    category: "Law"
  },
  {
    id: 2,
    title: "Diploma in Civil Law",
    description: "Master civil law principles and practices for a career in legal practice and consultation.",
    category: "Law"
  },
  {
    id: 3,
    title: "Diploma in Tax and Legal Studies",
    description: "Explore tax systems and legal frameworks for law practice.",
    category: "Law"
  },
  {
    id: 4,
    title: "Diploma in Biology & Chemistry",
    description: "Advance your knowledge in life sciences and chemical studies for research and industry applications.",
    category: "Science"
  },
  {
    id: 5,
    title: "Diploma in Physics & Math",
    description: "Study advanced physics and mathematical concepts and their applications.",
    category: "Science"
  },
  {
    id: 6,
    title: "Diploma in Environmental Law",
    description: "Specialize in environmental legislation and policy making for sustainable development.",
    category: "Law"
  },
  {
    id: 7,
    title: "Diploma in Climate Change",
    description: "Study climate science and environmental impact assessment.",
    category: "Science"
  },
  {
    id: 8,
    title: "Diploma in Environmental Economics",
    description: "Learn about economic aspects of environmental management.",
    category: "Economics"
  },
  {
    id: 9,
    title: "Diploma in Digital Marketing & Business Develop",
    description: "Master digital marketing strategies and business development.",
    category: "Business"
  },
  {
    id: 10,
    title: "Diploma in History & Geography",
    description: "Study historical events and geographical concepts.",
    category: "Humanities"
  },
  {
    id: 11,
    title: "Diploma in Logistics & Supply Chain MGT",
    description: "Master the complexities of modern logistics and supply chain management.",
    category: "Business"
  },
  {
    id: 12,
    title: "Diploma in Monitoring And Evaluation",
    description: "Learn project monitoring and evaluation techniques.",
    category: "Management"
  },
  {
    id: 13,
    title: "Diploma in Rural Development",
    description: "Study rural development strategies and community empowerment.",
    category: "Development"
  },
  {
    id: 14,
    title: "Diploma in Humanitarian & Development Studies",
    description: "Explore humanitarian assistance and development frameworks.",
    category: "Development"
  },
  {
    id: 15,
    title: "Diploma in Operations Management",
    description: "Master business operations and process optimization.",
    category: "Management"
  },
  {
    id: 16,
    title: "Diploma in Education",
    description: "Develop teaching methodologies and educational practices.",
    category: "Education"
  },
  {
    id: 17,
    title: "Diploma in Educational Psychology",
    description: "Study psychological principles in educational settings.",
    category: "Education"
  },
  {
    id: 18,
    title: "Diploma in Sustainable Development",
    description: "Learn sustainable development practices and environmental conservation.",
    category: "Development"
  },
  {
    id: 19,
    title: "Diploma in Peace & Conflict Resolution",
    description: "Study conflict resolution and peace-building strategies.",
    category: "Humanities"
  },
  {
    id: 20,
    title: "Diploma in Laboratory Management",
    description: "Master laboratory operations and quality control procedures.",
    category: "Science"
  },
  {
    id: 21,
    title: "Diploma in Communications and Media",
    description: "Study modern communication strategies and media management.",
    category: "Media"
  },
  {
    id: 22,
    title: "Diploma in Entrepreneurship Development",
    description: "Develop business creation and management skills.",
    category: "Business"
  },
  {
    id: 23,
    title: "Diploma in NGO Management",
    description: "Learn non-profit organization management strategies.",
    category: "Management"
  },
  {
    id: 24,
    title: "Diploma in Multimedia Technology",
    description: "Master modern multimedia tools and technologies.",
    category: "Technology"
  },
  {
    id: 25,
    title: "Diploma in Banking and Finance",
    description: "Study banking operations and financial management.",
    category: "Finance"
  },
  {
    id: 26,
    title: "Diploma in HRM",
    description: "Learn human resource management principles and practices.",
    category: "Management"
  },
  {
    id: 27,
    title: "Diploma in Public Administration",
    description: "Study public sector management and governance.",
    category: "Management"
  },
  {
    id: 28,
    title: "Diploma in International Relations",
    description: "Analyze global politics and international diplomacy.",
    category: "Humanities"
  },
  {
    id: 29,
    title: "Diploma in Political Science",
    description: "Study political systems and governance.",
    category: "Humanities"
  },
  {
    id: 30,
    title: "Diploma in Project Planning and MGT",
    description: "Master project management methodologies.",
    category: "Management"
  },
  {
    id: 31,
    title: "Diploma in Sharia wal Qanuun",
    description: "Study Islamic law principles and applications.",
    category: "Law"
  }
];

// Get all unique categories
const allCategories = ["All", ...Array.from(new Set(programs.map(program => program.category)))];

export default function Page() {
  const controls = useAnimation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  // Filter programs based on category and search term
  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === "All" || program.category === selectedCategory;
    const matchesSearch = program.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         program.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-60 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden mb-5">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-5">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Academics
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">Diploma Programs</h1>
          <p className="text-xl max-w-2xl text-center text-white/90 mb-8">
            Advance your career with industry-focused diploma programs designed for the modern professional
          </p>
        </motion.div>
        
        {/* Wave Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] text-white fill-current">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8 relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">Explore Our Diploma Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our diverse range of accredited programs designed to equip you with industry-relevant skills and knowledge.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <div className="mb-10 bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search programs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setViewMode("grid")} 
                className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button 
                onClick={() => setViewMode("list")} 
                className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600"}`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Category Pills */}
          <div className="overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  } transition-all duration-200`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Program Display */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredPrograms.map((program) => (
              <motion.div
                key={program.id}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {program.category}
                    </span>
                    <span className="text-gray-400 text-sm">1 Year</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 font-semibold">$30/month</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Program</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredPrograms.map((program) => (
                  <motion.tr 
                    key={program.id}
                    whileHover={{ backgroundColor: "#f9fafb" }}
                    className="transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{program.id}</td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{program.title}</div>
                      <div className="text-sm text-gray-500">{program.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {program.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">One Year</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">$30/month</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl overflow-hidden shadow-xl mb-16"
        >
          
        </motion.div>
      </div>
      
      {/* Add custom style for animation */}
      <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
