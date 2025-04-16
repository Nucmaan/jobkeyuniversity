"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity, FaEye, FaBullseye, FaListUl, FaStar, FaGraduationCap, FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";

export default function Page() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

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
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">About Jobkey University</h1>
          <p className="text-xl max-w-2xl text-center text-white/90 mb-8">
            Shaping futures through excellence in education and research since our founding
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

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Introduction section - replacing image with visual elements */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-medium">
              <FaUniversity className="inline-block mr-2" /> Our Institution
            </div>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Transforming Society Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Education and Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              JOBKEY University is a non-profit educational institute established to serve the entire Somali society and act as a focal point for their development process. Our commitment to excellence in education and community development has made us a leading institution in the region, dedicated to cultivating intellect, faith, and culture.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="bg-white shadow-md rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">30+</div>
                <div className="text-gray-600">Academic Programs</div>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">2000+</div>
                <div className="text-gray-600">Graduates</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 h-full"
          >
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl h-full p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
              <div className="relative z-10 flex flex-col h-full justify-center">
                <FaGraduationCap className="text-6xl mb-6 text-white/90" />
                <h3 className="text-2xl font-bold mb-4">Educational Excellence</h3>
                <p className="text-white/80 mb-6">
                  Our university delivers high-quality education through innovative teaching methods and a commitment to academic rigor, preparing graduates who excel in their chosen fields.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-xl font-bold mb-1">15+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                    <div className="text-xl font-bold mb-1">100%</div>
                    <div className="text-sm">Dedicated Faculty</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision, Mission & Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* Vision Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaEye className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Vision</h3>
              <p className="text-gray-600">
                JOBKEY University aims to be among the nation&apos;s leading universities, recognized for student success, research, cultural enrichment, and economic development. We strive to be a beacon of knowledge and innovation in the region.
              </p>
            </div>
          </motion.div>
          
          {/* Mission Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaBullseye className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to develop individuals and society through the cultivation of intellect, faith, and culture by creating a conducive environment for excellence in teaching, learning, research, public service, and professional practice.
            </p>
          </motion.div>
          
          {/* Core Values Card */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <FaStar className="text-2xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Quality Assurance & Control
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Integrity & Professionalism
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Research & Innovation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                Community Impact
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Objectives Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 mb-20 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-5">
                <FaListUl className="text-2xl text-white" />
              </div>
              <h2 className="text-3xl font-bold">Strategic Objectives</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <FaGraduationCap className="text-xl" />,
                  text: "Respond to societal needs by providing effective educational opportunities for a well-educated and skilled society."
                },
                {
                  icon: <FaUsers className="text-xl" />,
                  text: "Offer free training courses to help community members develop their skills and talents."
                },
                {
                  icon: <FaLightbulb className="text-xl" />,
                  text: "Promote research and development to keep university members updated on new technologies and business ventures."
                },
                {
                  icon: <FaGlobe className="text-xl" />,
                  text: "Continuously improve and ensure the effectiveness of university programs in preparing students for successful careers."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-1 mr-4">
                    {item.icon}
                  </div>
                  <p className="text-lg text-white/90">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Core Values Expanded */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">University Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values define who we are and guide how we operate. They are the foundation of our university culture.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              "Quality Assurance & Control",
              "Empowering Students",
              "Knowledge Accessibility",
              "Allegiance to the Institution",
              "Integrity",
              "Customer Sensitivity",
              "Professionalism",
              "Openness to Diversity",
              "Research & Development",
              "Social Contribution"
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-5 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-lg font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-800 font-medium">{value}</p>
              </motion.div>
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
