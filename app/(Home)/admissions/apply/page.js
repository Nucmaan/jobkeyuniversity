'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionButton = motion.button;

export default function Page() {
  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen mt-24">
      <header className="text-center mb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        <MotionH1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#33d1ff] to-[#2b9fd1] mb-6"
        >
          How to Apply
        </MotionH1>
        <MotionP 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl text-gray-600 mt-2 max-w-3xl mx-auto leading-relaxed"
        >
          Follow our step-by-step guide to successfully apply to our university.
        </MotionP>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <MotionDiv 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-opacity-90"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#33d1ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </span>
            Application Process
          </h2>
          <div className="space-y-4">
            {[
              "Create an account on our online portal",
              "Fill out the application form with accurate details",
              "Upload the required documents",
              "Pay the application fee securely online",
              "Schedule an interview (if required)",
              "Receive an admission decision",
              "Confirm your enrollment and begin your journey"
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-8 h-8 bg-[#33d1ff]/10 rounded-full flex-shrink-0 flex items-center justify-center mt-1 group-hover:bg-[#33d1ff] group-hover:text-white transition-all duration-300">
                  <span className="text-[#33d1ff] group-hover:text-white font-semibold">{index + 1}</span>
                </div>
                <p className="text-gray-600 text-lg group-hover:text-[#33d1ff] transition-colors duration-300">{step}</p>
              </div>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-opacity-90"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#33d1ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Required Documents
          </h2>
          <div className="space-y-4">
            {[
              "Completed application form",
              "High school diploma or equivalent",
              "Official transcripts",
              "Personal statement",
              "Letters of recommendation",
              "Proof of English proficiency (if applicable)"
            ].map((doc, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="w-6 h-6 bg-[#33d1ff]/10 rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-[#33d1ff] group-hover:text-white transition-all duration-300">
                  <svg className="w-3 h-3 text-[#33d1ff] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-600 text-lg group-hover:text-[#33d1ff] transition-colors duration-300">{doc}</p>
              </div>
            ))}
          </div>
        </MotionDiv>
      </div>
      
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-12 bg-gradient-to-br from-[#33d1ff] to-[#2b9fd1] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl text-white/90 mb-8">Click the button below to start your application process.</p>
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-[#33d1ff] text-xl font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Start Application
          </MotionButton>
        </div>
      </MotionDiv>
      
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-gradient-to-r from-[#33d1ff] to-[#2b9fd1] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Need Help?</h2>
          <p className="text-xl text-white/90 mb-8">Our admissions team is here to assist you with any questions.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="mailto:apply@university.edu" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-lg font-medium">info@jobkey.edu.so</span>
                </div>
              </div>
            </a>
            <a href="tel:+1234567890" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-lg font-medium">+252616774499</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}
