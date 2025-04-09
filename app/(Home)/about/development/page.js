"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaChartLine, FaCogs, FaHandshake } from "react-icons/fa";

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

  const focusAreas = [
    "Governance",
    "Strategy development",
    "Implementation of policy changes",
    "Leadership & management",
    "Centralization versus decentralization",
    "Change management",
    "Executive coaching",
    "Organizational learning",
    "Monitoring and evaluation"
  ];

  const additionalAreas = [
    "Curriculum Development",
    "Partnerships",
    "ICT",
    "Business Development, Training and Consultancy, and Endowment Office"
  ];

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Office of <span className="text-[#33d1ff]">Institutional Development</span>
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
              <FaBuilding className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">About the Office</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              The Office of Institutional Development plays a pivotal role in the overall institutional development of the university. It is responsible for the establishment and advancement of university business enterprises, university companies and university endowment fund; provision of knowledge-based training and consultancy services that generate income for the institute in addition to enhancing university-community partnerships; organizing and coordinating outreach programs that would be delivered for the community freely; and for the development and expansion of university buildings, grounds and infrastructure.
            </p>
          </motion.section>

          {/* Focus Areas Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaChartLine className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Primary Focus Areas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {focusAreas.map((area, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Additional Areas Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaCogs className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Additional Areas of Focus</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalAreas.map((area, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Partnerships Section */}
          <motion.section variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaHandshake className="text-4xl text-[#33d1ff] mr-4" />
              <h2 className="text-2xl font-bold text-gray-800">Partnerships</h2>
            </div>
            <p className="text-gray-700 text-lg mb-4">
              The office has established strong partnerships with international NGOs, local government, and other universities to enhance our development initiatives and expand our impact.
            </p>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700 font-semibold">Prof. Mohamed Hassan Doob</p>
              <p className="text-gray-600">Institutional Development Director</p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}