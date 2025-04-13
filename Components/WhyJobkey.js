"use client"
import React from "react";
import { FaGlobe, FaDollarSign, FaUsers, FaMicroscope, FaGraduationCap, FaHandshake, FaBook, FaLaptop } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyJobkey() {
  const features = [
    {
      icon: <FaGlobe className="text-4xl" />,
      title: "Global Recognition",
      description: "Our degrees are internationally recognized and accredited by leading educational bodies worldwide."
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Career Success",
      description: "95% of our graduates secure employment or continue their studies within 6 months of graduation."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Industry Partnerships",
      description: "Strong connections with leading companies for internships, placements, and collaborative projects."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ali Ga'al Aseyr",
      role: "Computer Science Graduate",
      image: "/ali.jpg",
      quote: "Jobkey University provided me with the perfect blend of theoretical knowledge and practical skills. The industry connections I made during my studies helped me land my dream job at a leading tech company."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Administration Student",
      image: "/Nasri.jpeg",
      quote: "The diverse student community and experienced faculty have enriched my learning experience. The career services team helped me secure an internship that turned into a full-time position."
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Environmental Science Graduate",
      image: "/Nasri.jpeg",
      quote: "The research opportunities at Jobkey University are exceptional. I was able to work on groundbreaking projects that have real-world impact. The support from faculty was invaluable."
    }
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
    <section className="pt-5 pb-5 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-[#33d1ff]">Jobkey University?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the unique advantages that make Jobkey University the perfect choice for your academic journey
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-[#33d1ff] mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experiences at Jobkey University
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                {testimonial.quote}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
