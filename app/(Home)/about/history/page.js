"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaGraduationCap, FaUsers, FaHandshake } from "react-icons/fa";

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
    <div className="min-h-screen mt-12  bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-[#33d1ff]">History</span>
          </h1>
          <div className="w-24 h-1 bg-[#33d1ff] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Main Content Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaBook className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">The Importance of Education in Somalia</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Education is a fundamental human right and a precondition for restoring peace, prosperity, and justice in Somalia. The collapse of the Somali state in the 1990s and the subsequent civil wars devastated the education sector, leaving an entire generation without access to proper schooling. The restoration of regular schooling and universities is crucial for rebuilding the nation and securing a better future.
            </p>
          </motion.section>

          {/* Education as a Tool Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaGraduationCap className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Education as a Tool for Stability</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Education provides structure and stability for children and adults who have been affected by war. It is the foundation for creating a skilled workforce that can compete in the global economy. Additionally, it fosters intellectual discipline, promotes civic values, and contributes to good governance.
            </p>
          </motion.section>

          {/* Social Development Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaUsers className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">The Role of Education in Social Development</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Reduces gender inequalities and ensures equal opportunities.",
                "Prevents child and adult exploitation through knowledge and awareness.",
                "Decreases the risk of future violence by promoting education and understanding.",
                "Fosters social cohesion and national unity through shared learning experiences."
              ].map((item, index) => (
                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Birth of Jobkey Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaHandshake className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">The Birth of JOBKEY University</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Recognizing the urgent need for education, a group of intellectuals and members of the Somali diaspora initiated the establishment of JOBKEY University. After more than three years of research and consultation, JOBKEY University was officially launched in August 2011, marking a significant step toward restoring higher education in Somalia.
            </p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 italic">
                Our journey began with a vision to rebuild our nation through education, one student at a time.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
