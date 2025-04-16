'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const programs = [
  {
    id: 1,
    title: "Faculty of Agriculture and Veterinary Sciences",
    description:
      "Explore the world of sustainable farming, animal health, and food security.",
    image: "/agriculture.jpg", 
    pathLink : "/academics/undergraduate-programs/agriculture",
    color: "from-green-500 to-emerald-400"
  },
  {
    id: 2,
    title: "Faculty of Economic and Management Science",
    description:
      "Gain expertise in finance, business management, and economic policies.",
    image: "/economics.jpg",
    pathLink : "/academics/undergraduate-programs/economics",
    color: "from-blue-500 to-indigo-700"
  },
  {
    id: 3,
    title: "Faculty of Medicine and Health Science",
    description:
      "Develop the skills needed to save lives and improve healthcare systems.",
    image: "/medicine.jpg",
    pathLink : "/academics/undergraduate-programs/medicine",
    color: "from-red-500 to-rose-700"
  },
  {
    id: 4,
    title: "Faculty of Computer Science And Engineering",
    description:
      "Dive into programming, AI, cybersecurity, and software development.",
    image: "/computer-science.jpg",
    pathLink : "/academics/undergraduate-programs/computer-science",
    color: "from-violet-500 to-purple-700"
  },
  {
    id: 5,
    title: "Faculty of Sharia and Law",
    description:
      "Study the principles of Islamic law and legal systems to build a just society.",
    image: "/law.jpg",
    pathLink : "/academics/undergraduate-programs/law",
    color: "from-amber-500 to-yellow-700"
  },
  {
    id: 6,
    title: "Faculty of Education",
    description:
      "Prepare to be a teacher and educator in the future.",
    image: "/Education.png",
    pathLink : "/academics/undergraduate-programs/education",
    color: "from-cyan-500 to-teal-700"
  }
];

export default function Page() {
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
            Academics
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">Undergraduate Programs</h1>
          <p className="text-xl max-w-2xl text-center text-white/90 mb-8">
            Begin your journey toward excellence with our world-class undergraduate degree programs
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">Our Academic Faculties</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of prestigious undergraduate programs designed to prepare you for future success in your chosen field.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-90 z-10`}></div>
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
                <div className="absolute top-4 right-4 z-20">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white">
                    {program.id}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">{program.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{program.description}</p>
                <Link href={program.pathLink} className="mt-auto">
                  <span className="inline-flex w-full items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1">
                    <span>Explore Faculty</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
       
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
