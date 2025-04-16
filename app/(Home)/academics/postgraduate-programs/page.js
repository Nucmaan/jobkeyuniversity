"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion, useAnimation } from 'framer-motion';

const programs = [
 
  {
    id: 6,
    title: "Master of International Relations and Diplomacy",
    description:
      "Study global politics, diplomatic practices, and international cooperation mechanisms.",
    image: "/msInternational.jpg", 
    pathLink: "/academics/postgraduate-programs/international",
    degrees: ["Master of International Relations", "Master of Diplomacy"],
    icon: "🌐",
    bgColor: "from-blue-500 to-blue-700"
  },

  {
    id: 1,
    title: "Master of Business Administration (MBA)",
    description:
      "Develop advanced business leadership skills and strategic management expertise for executive roles.",
    image: "/masterMba.jpg", 
    pathLink: "/academics/postgraduate-programs/MBA",
    degrees: ["MBA in Finance", "MBA in Marketing", "MBA in International Business"],
    icon: "💼",
    bgColor: "from-amber-500 to-orange-600"
  },
 
  {
    id: 3,
    title: "Master of Nutrition and Dietetics",
    description:
      "Become an expert in nutrition science, dietetics practice, and food service management.",
    image: "/masterNutrition.jpg", 
    pathLink: "/academics/postgraduate-programs/Nutrition",
    degrees: ["Master of Nutrition Science", "Master of Clinical Dietetics"],
    icon: "🥗",
    bgColor: "from-green-500 to-emerald-600"
  },
  {
    id: 7,
    title: "Master of Public Administration",
    description:
      "Develop essential skills for public service leadership, policy implementation, and organizational management.",
    image: "/masterOfPublicAdminstration.jpeg", 
    pathLink: "/academics/postgraduate-programs/public",
    degrees: ["Master of Public Administration", "Master of Public Sector Management"],
    icon: "📋",
    bgColor: "from-indigo-500 to-violet-600"
  },
  {
    id: 2,
    title: "Master of Public Policy and Governance",
    description:
      "Gain specialized knowledge in public policy analysis, governance systems, and leadership in public sector.",
    image: "/masterofgovernpolicy.jpg", 
    pathLink: "/academics/postgraduate-programs/governance",
    degrees: ["Master of Public Policy", "Master of Governance and Leadership"],
    icon: "🏛️",
    bgColor: "from-cyan-500 to-blue-600"
  },
  {
    id: 4,
    title: "Master of Education and Teaching Program",
    description:
      "Enhance your teaching skills and educational leadership abilities for advanced roles in education.",
    image: "/masterOfEducation.jpg", 
    pathLink: "/academics/postgraduate-programs/Education",
    degrees: ["Master of Education", "Master of Teaching"],
    icon: "🎓",
    bgColor: "from-rose-500 to-pink-600"
  },
  {
    id: 5,
    title: "Master of Health Services Management",
    description:
      "Learn to manage healthcare systems, lead medical facilities, and implement health policies effectively.",
    image: "/masterOfHealthyMaster.jpg", 
    pathLink: "/academics/postgraduate-programs/Health",
    degrees: ["Master of Health Administration", "Master of Health Services Leadership"],
    icon: "🏥",
    bgColor: "from-red-500 to-rose-600"
  },
 

  {
    id: 8,
    title: "Master of Public Health",
    description:
      "Focus on population health, epidemiology, health promotion, and disease prevention strategies.",
    image: "/masterOfPublicHealth.jpg", 
    pathLink: "/academics/postgraduate-programs/publicHealth",
    degrees: ["Master of Public Health", "Master of Epidemiology"],
    icon: "🔬",
    bgColor: "from-teal-500 to-green-600"
  },
  {
    id: 9,
    title: "Master of Social Work",
    description:
      "Prepare for advanced social work practice, community development, and social policy advocacy.",
    image: "/masterOfSocialWork.png", 
    pathLink: "/academics/postgraduate-programs/socialWork",
    degrees: ["Master of Social Work", "Master of Clinical Social Work"],
    icon: "🤝",
    bgColor: "from-purple-500 to-indigo-600"
  }
];

export default function Page() {
  const [hoveredId, setHoveredId] = useState(null);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-60 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-5">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Advanced Degrees
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">Postgraduate Programs</h1>
          <p className="text-white/80 text-xl md:text-2xl max-w-3xl text-center mx-auto mb-10">
            Take your education to the next level with our comprehensive postgraduate programs designed for tomorrow&apos;s leaders and innovators.
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

      <div className="container max-w-7xl mx-auto px-6 py-12 relative z-10">
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
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">Advanced Degree Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your education to the next level with our comprehensive postgraduate programs designed for tomorrow&apos;s leaders and innovators.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full"
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${program.bgColor} opacity-90 z-10`}></div>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 scale-105 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="absolute top-0 left-0 w-full p-6 z-20">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl mb-2 filter drop-shadow-md">{program.icon}</span>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {program.id}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white mt-8 drop-shadow-md">
                    {program.title}
                  </h2>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 mb-5">{program.description}</p>
                <div className="mb-6 bg-blue-50 rounded-xl p-4">
                  <h3 className="font-semibold text-blue-800 mb-3">Degrees Offered:</h3>
                  <ul className="space-y-1">
                    {program.degrees.map((degree, index) => (
                      <li key={index} className="flex items-center text-blue-700">
                        <span className="mr-2">
                          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </span>
                        {degree}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link href={program.pathLink}>
                    <span className={`inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r ${program.bgColor} text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                      <span>Explore Program</span>
                      <FaArrowRight className={`ml-2 transform transition-transform duration-300 ${hoveredId === program.id ? 'translate-x-1' : ''}`} />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      
        
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gray-50 rounded-3xl p-10 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "96%", label: "Graduate Employment Rate" },
              { number: "80+", label: "Research Publications Annually" },
              { number: "45+", label: "Countries Represented" },
              { number: "25+", label: "Industry Partnerships" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
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
