'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;
const MotionButton = motion.button;

export default function Page() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  return (
    <div className="relative bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-40 left-60 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <div className="inline-block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-5">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Admissions
            </span>
          </div>
          <MotionH1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-5"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Begin Your Journey
            </span>
          </MotionH1>
          <div className="mx-auto max-w-2xl">
            <MotionP 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 leading-relaxed"
            >
              Follow our comprehensive application process and take the first step towards a transformative educational experience.
            </MotionP>
          </div>
        </motion.header>
        
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              }
            }
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20"
        >
          {/* Process Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            <div className="p-8 sm:p-10 relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg mr-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Application Process</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  "Register on our secure online portal",
                  "Complete comprehensive application form",
                  "Upload required academic documents",
                  "Submit application fee payment",
                  "Schedule admission interview (if required)",
                  "Receive acceptance decision",
                  "Complete enrollment process"
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 text-blue-600 font-semibold group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg pt-1.5 group-hover/item:text-blue-600 transition-colors duration-300">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Documents Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            <div className="p-8 sm:p-10 relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg mr-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Required Documents</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  "Official academic transcripts",
                  "High school diploma/certificate",
                  "Personal statement/essay",
                  "Letters of recommendation",
                  "Standardized test scores",
                  "Proof of English proficiency",
                  "Valid identification documents"
                ].map((doc, index) => (
                  <div key={index} className="flex items-center space-x-4 group/item">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-lg group-hover/item:text-blue-600 transition-colors duration-300">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Key Dates Card */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
            }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500"></div>
            <div className="p-8 sm:p-10 relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg mr-5">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Important Dates</h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { term: "Fall Semester", date: "Application Deadline: June 15" },
                  { term: "Spring Semester", date: "Application Deadline: November 15" },
                  { term: "Early Decision", date: "Application Deadline: October 1" },
                  { term: "Financial Aid", date: "Priority Deadline: March 1" },
                  { term: "International Students", date: "Apply 3 months before deadline" },
                  { term: "Transfer Students", date: "Rolling admissions available" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group/item">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-lg group-hover/item:text-blue-600 transition-colors duration-300">{item.term}</p>
                      <p className="text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-24 overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20"></div>
          <div className="relative px-6 py-16 md:py-20 md:px-12 lg:px-20 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
            
            <div className="max-w-3xl mx-auto relative z-10">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Academic Journey?</h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  Take the first step towards a transformative educational experience by starting your application today.
                </p>
                
                <Link href="/applicationSubmit">
                  <MotionButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span>Start Your Application</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </MotionButton>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-xl text-gray-600">Find answers to common questions about our application process</p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                question: "What is the application fee?",
                answer: "The application fee is $50 for domestic students and $75 for international students. Fee waivers are available for qualified applicants."
              },
              {
                question: "Can I apply for multiple programs?",
                answer: "Yes, you can apply for up to three programs with a single application. Each additional program requires a small supplemental fee."
              },
              {
                question: "How long does the application review take?",
                answer: "Most application decisions are released within 4-6 weeks after all required documents have been received."
              },
              {
                question: "Are there minimum GPA requirements?",
                answer: "Most programs require a minimum GPA of 3.0 on a 4.0 scale, but requirements vary by program. Some competitive programs may have higher requirements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Need Help with Your Application?</h2>
              <p className="mt-4 text-xl text-gray-600">Our admissions team is here to assist you every step of the way</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                <a href="mailto:info@jobkey.edu.so" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">info@jobkey.edu.so</a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                <a href="tel:+252616774499" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">+252 616 774499</a>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Live Chat</h3>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors duration-300">Available 9AM-5PM</a>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link href="/contact">
                <span className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                  <span>Visit our contact page for more options</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="pt-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Student Success Stories</h2>
            <p className="mt-4 text-xl text-gray-600">Hear from students who have joined our university</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The application process was straightforward and the admissions team was incredibly helpful. I'm now in my second year and loving every moment of my journey.",
                name: "Sarah Johnson",
                program: "Computer Science"
              },
              {
                quote: "As an international student, I was worried about the application process. The step-by-step guide made it easy to understand what was required, and now I'm thriving academically.",
                name: "Mohammed Al-Farsi",
                program: "Business Administration"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <svg className="w-12 h-12 text-blue-500 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-700 text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Add custom style for animation delays */}
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
