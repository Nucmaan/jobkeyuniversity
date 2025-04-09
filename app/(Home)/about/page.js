"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUniversity, FaEye, FaBullseye, FaListUl, FaStar } from "react-icons/fa";

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
    <div className="min-h-screen bg-gradient-to-b mt-12 from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-[#33d1ff]">Jobkey University</span>
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
          {/* Introduction Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaUniversity className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Introduction</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              JOBKEY University is a non-profit educational institute established to serve the entire Somali society and act as a focal point for their development process. Our commitment to excellence in education and community development has made us a leading institution in the region.
            </p>
          </motion.section>

          {/* Vision Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaEye className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Vision</h2>
            </div>
            <p className="text-gray-700 text-lg">
              JOBKEY University aims to be among the nation&apos;s leading universities, recognized for student success, research, cultural enrichment, and economic development. We strive to be a beacon of knowledge and innovation in the region.
            </p>
          </motion.section>

          {/* Mission Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaBullseye className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Mission Statement</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Our mission is to develop individuals and society through the cultivation of intellect, faith, and culture by creating a conducive environment for excellence in teaching, learning, research, public service, and professional practice.
            </p>
          </motion.section>

          {/* Objectives Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaListUl className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Objectives</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Respond to societal needs by providing effective educational opportunities for a well-educated and skilled society.",
                "Offer free training courses to help community members develop their skills and talents.",
                "Promote research and development to keep university members updated on new technologies and business ventures.",
                "Continuously improve and ensure the effectiveness of university programs in preparing students for successful careers."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Core Values Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaStar className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">University Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
