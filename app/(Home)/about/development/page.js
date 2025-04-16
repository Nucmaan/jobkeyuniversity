"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaChartLine, FaCogs, FaHandshake, FaLightbulb, FaGlobe, FaUniversity, FaUserTie, FaChevronRight, FaBook, FaLaptop, FaBriefcase, FaEnvelope, FaStar } from "react-icons/fa";

export default function Page() {
  const [hoveredCard, setHoveredCard] = useState(null);

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

  const focusAreas = [
    {
      title: "Governance",
      icon: <FaUniversity />,
      description: "Establishing effective governance structures and policies."
    },
    {
      title: "Strategy Development",
      icon: <FaChartLine />,
      description: "Formulating long-term strategies for institutional growth."
    },
    {
      title: "Policy Implementation",
      icon: <FaCogs />,
      description: "Implementing policy changes to enhance university operations."
    },
    {
      title: "Leadership & Management",
      icon: <FaUserTie />,
      description: "Developing strong leadership at all institutional levels."
    },
    {
      title: "Centralization vs Decentralization",
      icon: <FaGlobe />,
      description: "Balancing centralized and decentralized operational models."
    },
    {
      title: "Change Management",
      icon: <FaLightbulb />,
      description: "Facilitating successful institutional transformations."
    },
    {
      title: "Executive Coaching",
      icon: <FaHandshake />,
      description: "Providing mentorship to university leadership."
    },
    {
      title: "Organizational Learning",
      icon: <FaBuilding />,
      description: "Fostering a culture of continuous learning and improvement."
    },
    {
      title: "Monitoring and Evaluation",
      icon: <FaChartLine />,
      description: "Assessing program effectiveness and institutional outcomes."
    }
  ];

  const additionalAreas = [
    {
      title: "Curriculum Development",
      icon: <FaBook className="text-xl" />,
      description: "Creating and updating academic programs to meet modern educational standards and employment market needs."
    },
    {
      title: "Strategic Partnerships",
      icon: <FaHandshake className="text-xl" />,
      description: "Building relationships with other institutions, industry partners, and community organizations to enhance university offerings."
    },
    {
      title: "Information & Communication Technology",
      icon: <FaLaptop className="text-xl" />,
      description: "Implementing cutting-edge technology solutions for both administrative functions and educational delivery."
    },
    {
      title: "Business Development",
      icon: <FaBriefcase className="text-xl" />,
      description: "Creating revenue streams through training, consultancy services, and establishing the university endowment office."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-60 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-gradient-to-r from-blue-600 to-cyan-500 overflow-hidden">
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
            <FaBuilding className="text-3xl text-white" />
          </motion.div>
          
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm mb-5">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Institutional Growth
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-center">Office of Institutional Development</h1>
          <p className="text-xl max-w-2xl text-center text-white/90 mb-8">
            Driving innovation, growth, and excellence across all university functions
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
            <span className="text-white font-medium">Institutional Development</span>
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
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-16"
        >
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/3 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <FaBuilding className="text-4xl text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 text-center">About the Office</h2>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The Office of Institutional Development plays a pivotal role in the overall growth and advancement of Jobkey University. It serves as the central hub for strategic initiatives that drive the university forward in multiple dimensions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                This office is responsible for establishing and advancing university business enterprises, creating university companies, and managing the university endowment fund. It provides knowledge-based training and consultancy services that generate income while enhancing university-community partnerships. Additionally, it organizes outreach programs delivered freely to the community and oversees the development and expansion of university buildings, grounds, and infrastructure.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Focus Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4">Primary Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our office concentrates on strategic initiatives that drive institutional excellence across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 mb-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>
          
          <div className="relative z-10">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-5">
                <FaCogs className="text-2xl text-white" />
              </div>
              <h2 className="text-2xl font-bold">Additional Areas of Focus</h2>
            </div>
            
            <p className="text-lg text-white/90 mb-8 max-w-3xl">
              Beyond our primary focus areas, we also drive innovation and development in these critical domains that enhance our university&apos;s capabilities and community impact.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {additionalAreas.map((area, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-white/80">{area.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Partnerships Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Partnerships</h2>
              <p className="text-gray-600 mb-6">
                The office has established strong partnerships with international NGOs, local government agencies, industry leaders, and other universities to enhance our development initiatives and expand our impact.
              </p>
              <div className="bg-blue-50 rounded-xl p-5 border-l-4 border-blue-600">
                <p className="text-blue-800 font-semibold">Prof. Mohamed Hassan Doob</p>
                <p className="text-blue-700">Institutional Development Director</p>
                <div className="flex items-center mt-2 text-blue-600 text-sm">
                  <FaEnvelope className="mr-2" />
                  info@jobkey.edu.so
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaStar className="text-blue-600 mr-3" /> 
                Key Achievements
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Infrastructure Expansion",
                    description: "Led the development of three new campus buildings, increasing classroom capacity by 40%."
                  },
                  {
                    title: "Endowment Growth",
                    description: "Established the university endowment fund which has grown to support 25 annual scholarships."
                  },
                  {
                    title: "Community Partnerships",
                    description: "Formalized agreements with 15+ local and international organizations to enhance student opportunities."
                  },
                  {
                    title: "Business Development",
                    description: "Created three revenue-generating enterprises that support university operations and research initiatives."
                  }
                ].map((achievement, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-medium">{index + 1}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-800">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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