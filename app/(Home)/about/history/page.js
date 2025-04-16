"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBook, FaGraduationCap, FaUsers, FaHandshake, FaHistory, FaCalendarAlt, FaUniversity, FaLightbulb, FaQuoteLeft, FaChevronRight, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function Page() {
  const [activeTab, setActiveTab] = useState("timeline");
  
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
      <div className="relative h-[450px] w-full bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6"
          >
            <FaHistory className="text-3xl text-white" />
          </motion.div>
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-5">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Our Journey
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">Our History</h1>
          <p className="text-xl max-w-2xl text-center text-white/90 mb-8">
            Tracing our path from humble beginnings to becoming a leading educational institution
          </p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex space-x-1"
          >
            <span className="text-white/60">Home</span>
            <FaChevronRight className="text-white/60 mt-1.5 mx-2" size={10} />
            <span className="text-white/60">About</span>
            <FaChevronRight className="text-white/60 mt-1.5 mx-2" size={10} />
            <span className="text-white font-medium">History</span>
          </motion.div>
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
        {/* Introduction Section with Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-16"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaBook className="text-4xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">The Importance of Education</h2>
              <div className="mt-6 flex items-center justify-center">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-2/3 relative">
              <FaQuoteLeft className="text-gray-200 text-6xl absolute -top-2 -left-2" />
              <div className="pl-5 pt-4">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Education is a fundamental human right and a precondition for restoring peace, prosperity, and justice in Somalia. The collapse of the Somali state in the 1990s and the subsequent civil wars devastated the education sector, leaving an entire generation without access to proper schooling.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The restoration of regular schooling and universities is crucial for rebuilding the nation and securing a better future. JOBKEY University was born from this urgent need to restore higher education opportunities in the region.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-md p-2 flex flex-wrap justify-center">
            {[
              { id: "timeline", label: "Historical Timeline", icon: <FaHistory /> },
              { id: "impact", label: "Education Impact", icon: <FaGraduationCap /> },
              { id: "legacy", label: "Our Legacy", icon: <FaLightbulb /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-5 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        {activeTab === "timeline" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            variants={containerVariants}
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">Our Historical Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Tracing the path of JOBKEY University from concept to reality
              </p>
            </div>
            
            <div className="space-y-8 relative">
              <div className="absolute left-[15px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 to-cyan-500"></div>
              
              {/* Timeline Item 1 */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row md:items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block"></div>
                <div className="flex items-center z-10 relative md:absolute md:left-1/2 md:-ml-5">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="text-blue-600 text-xs" />
                    </div>
                  </div>
                  <div className="ml-6 md:hidden">
                    <div className="font-semibold text-blue-600">2008</div>
                    <div className="text-sm text-gray-500">Early Research</div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:pl-12 relative">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="hidden md:block mb-2">
                      <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">2008</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Recognition of the Education Crisis</h3>
                    <p className="text-gray-600">
                      A group of intellectuals and members of the Somali diaspora recognized the critical need for restoring education in Somalia after years of civil conflict had devastated the educational infrastructure.
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Somalia</span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Timeline Items 2-3 remain the same */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row md:items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="hidden md:block mb-2 text-right">
                      <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">2008-2011</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Planning & Consultation</h3>
                    <p className="text-gray-600">
                      After more than three years of extensive research, consultation with education experts, and community outreach, the founding team developed a comprehensive plan for establishing a university that would address Somalia&apos;s unique educational challenges.
                    </p>
                    <div className="mt-4 flex items-center text-blue-600 text-sm justify-end">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Various Locations</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center z-10 relative md:absolute md:left-1/2 md:-ml-5">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <FaLightbulb className="text-blue-600 text-xs" />
                    </div>
                  </div>
                  <div className="ml-6 md:hidden">
                    <div className="font-semibold text-blue-600">2008-2011</div>
                    <div className="text-sm text-gray-500">Planning Phase</div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:pl-12 hidden md:block"></div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col md:flex-row md:items-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block"></div>
                <div className="flex items-center z-10 relative md:absolute md:left-1/2 md:-ml-5">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <FaUniversity className="text-blue-600 text-xs" />
                    </div>
                  </div>
                  <div className="ml-6 md:hidden">
                    <div className="font-semibold text-blue-600">August 2011</div>
                    <div className="text-sm text-gray-500">Official Launch</div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 pl-12 md:pl-12 relative">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="hidden md:block mb-2">
                      <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">August 2011</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">JOBKEY University Launches</h3>
                    <p className="text-gray-600 mb-4">
                      JOBKEY University was officially launched, marking a significant milestone in the restoration of higher education in Somalia. The university opened its doors with a mission to provide quality education and rebuild the nation&apos;s intellectual capacity.
                    </p>
                    <div className="p-4 bg-blue-50 rounded-lg text-blue-700 italic">
                      &quot;Our journey began with a vision to rebuild our nation through education, one student at a time.&quot;
                    </div>
                    <div className="mt-4 flex items-center text-blue-600 text-sm">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>Mogadishu, Somalia</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Education's Role Section */}
        {activeTab === "impact" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 mb-16 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-5">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold">The Role of Education in Social Development</h2>
              </div>
              
              <p className="text-lg text-white/90 mb-8 max-w-3xl">
                Education provides structure and stability for children and adults who have been affected by war. It is the foundation for creating a skilled workforce that can compete in the global economy while fostering intellectual discipline and civic values.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: <FaUsers className="text-xl" />,
                    title: "Equal Opportunities",
                    text: "Reduces gender inequalities and ensures equal access to education"
                  },
                  {
                    icon: <FaHandshake className="text-xl" />,
                    title: "Protection",
                    text: "Prevents child and adult exploitation through knowledge and awareness"
                  },
                  {
                    icon: <FaBook className="text-xl" />,
                    title: "Peace Building",
                    text: "Decreases the risk of future violence by promoting education"
                  },
                  {
                    icon: <FaUniversity className="text-xl" />,
                    title: "Social Cohesion",
                    text: "Fosters national unity through shared learning experiences"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5"
                    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Continuing Impact */}
        {activeTab === "legacy" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <FaLightbulb className="text-xl text-blue-600" />
              </div>
              Continuing Our Legacy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Since our founding, JOBKEY University has grown to become a beacon of hope and progress in Somalia&apos;s educational landscape. We remain committed to our founding principles of accessible education, academic excellence, and community service as we continue to expand our programs and facilities.
            </p>
            <div className="p-5 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <p className="text-blue-800 font-medium">
                &quot;As we look to the future, we are guided by our past—a testament to the power of perseverance, vision, and the unwavering belief in education as the key to rebuilding our nation.&quot;
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
                <div className="text-gray-600">Alumni</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                <div className="text-gray-600">Programs</div>
              </div>
            </div>
          </motion.div>
        )}
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
