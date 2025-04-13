"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OurPartners() {
  const partners = [
    { id: 1, logo: "/1p.png", alt: "Partner 1", name: "Somali Syrian Specialist Hospital" },
    { id: 2, logo: "/2p.png", alt: "Partner 2", name: "Horn Star" },
    { id: 3, logo: "/3p.png", alt: "Partner 3", name: "Insania Foundation" },
    { id: 4, logo: "/4p.png", alt: "Partner 4", name: "Adult commercial secondary school" },
  ];

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
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#33d1ff]">Partners</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations worldwide to provide exceptional educational opportunities and drive innovation in learning.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-24 mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-700 text-center">
                {partner.name}
              </h3>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#33d1ff] transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            Trusted by leading organizations worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
