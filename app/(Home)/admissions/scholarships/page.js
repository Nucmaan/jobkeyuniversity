"use client"
import React, { useState } from 'react';
import { FaGraduationCap, FaSearch, FaGlobe, FaUsers, FaAward, FaArrowRight, FaBookOpen, FaLaptop, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const scholarshipCategories = [
    { id: 'all', name: 'All Scholarships', icon: <FaAward /> },
    { id: 'merit', name: 'Merit-Based', icon: <FaGraduationCap /> },
    { id: 'need', name: 'Need-Based', icon: <FaUsers /> },
    { id: 'international', name: 'International', icon: <FaGlobe /> },
    { id: 'research', name: 'Research', icon: <FaBookOpen /> },
    { id: 'tech', name: 'Technology', icon: <FaLaptop /> }
  ];
  
  const scholarships = [
    {
      id: 1,
      title: "Academic Excellence Scholarship",
      eligibility: "GPA of 3.5 or higher, SAT score above 1350",
      description: "Awarded to high-achieving students with exceptional academic records and standardized test scores.",
      categories: ["merit"]
    },
    {
      id: 3,
      title: "Financial Need Grant",
      eligibility: "Demonstrated financial need through FAFSA",
      description: "Providing support to students with demonstrated financial need to ensure access to quality education regardless of economic background.",
      categories: ["need"]
    },
    {
      id: 9,
      title: "Community Service Scholarship",
      eligibility: "Minimum of 200 hours of community service",
      description: "Recognizing students who have made significant contributions to their communities through volunteer service.",
      categories: ["merit"]
    }
  ];
  
  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesCategory = activeFilter === 'all' || scholarship.categories.includes(activeFilter);
    const matchesSearch = scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          scholarship.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-[#33d1ff] overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[#33d1ff]/90"></div>
        
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Scholarships & Financial Aid</h1>
          <p className="text-xl max-w-2xl text-center">
            Discover opportunities to fund your education at Jobkey University.
          </p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-[#33d1ff]">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Financial Support Overview</h2>
            <p className="text-gray-600 mb-6">
              At Jobkey University, we believe financial circumstances should not be a barrier to receiving a quality education. 
              We offer a variety of scholarships and financial aid options to help students pursue their academic goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#33d1ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-[#33d1ff] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">$25M+</h3>
                <p className="text-gray-600">Annual scholarship funds awarded</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#33d1ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-[#33d1ff] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">70%</h3>
                <p className="text-gray-600">Students receive some form of aid</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-[#33d1ff]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaGlobe className="text-[#33d1ff] text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">30+</h3>
                <p className="text-gray-600">Dedicated scholarship programs</p>
              </div>
            </div>
          </div>
        </section>
      
        {/* Search and Filter */}
        <section className="mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Find Scholarships</h2>
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search scholarships..."
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-6">
              {scholarshipCategories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                    activeFilter === category.id 
                      ? 'bg-[#33d1ff] text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Scholarships Listing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredScholarships.length > 0 ? (
              filteredScholarships.map(scholarship => (
                <div key={scholarship.id} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#33d1ff] hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{scholarship.title}</h3>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-1">Eligibility:</h4>
                    <p className="text-gray-600">{scholarship.eligibility}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {scholarship.categories.map(category => {
                      const matchedCategory = scholarshipCategories.find(c => c.id === category);
                      return (
                        <span key={category} className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          {matchedCategory?.icon}
                          {matchedCategory?.name.replace(" Scholarships", "")}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 bg-white p-8 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                  <FaSearch className="text-gray-400 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No scholarships found</h3>
                <p className="text-gray-600 mb-4">No scholarships match your current search criteria. Try adjusting your filters or search term.</p>
                <button 
                  onClick={() => {setActiveFilter('all'); setSearchTerm('');}} 
                  className="px-4 py-2 bg-[#33d1ff] text-white font-medium rounded-lg"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Application Process */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">How to Apply</h2>
            <div className="w-20 h-1 bg-[#33d1ff] mx-auto my-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these steps to apply for scholarships at Jobkey University.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Review Eligibility",
                description: "Check the requirements for each scholarship to ensure you qualify before applying."
              },
              {
                step: 2,
                title: "Complete Application",
                description: "Fill out the scholarship application form with all required information and documentation."
              },
              {
                step: 3,
                title: "Submit Materials",
                description: "Upload any additional required documents, such as essays, recommendation letters, or financial information."
              }
            ].map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-[#33d1ff] flex items-center justify-center text-white font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 mt-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/admissions/apply" className="px-6 py-3 bg-[#33d1ff] text-white font-bold rounded-lg hover:bg-[#28a8cc] transition-colors inline-flex items-center">
              Begin Application <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-[#33d1ff] mx-auto my-4"></div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "When should I apply for scholarships?",
                  answer: "You should apply for scholarships as early as possible. Most scholarships have deadlines between January and April for the upcoming academic year."
                },
                {
                  question: "Can international students apply for scholarships?",
                  answer: "Yes, we offer several scholarships specifically for international students, and many of our general scholarships are also available to international applicants."
                },
                {
                  question: "How are scholarship recipients selected?",
                  answer: "Selection criteria vary by scholarship but typically include academic achievement, financial need, leadership qualities, and specific talents or achievements."
                },
                {
                  question: "Can I receive multiple scholarships?",
                  answer: "Yes, students may receive multiple scholarships up to the total cost of attendance. Some scholarships may have restrictions on combining with other awards."
                },
                {
                  question: "Are scholarships renewable?",
                  answer: "Many scholarships are renewable for up to four years, provided that recipients maintain the required GPA and enrollment status."
                },
                {
                  question: "What is the FAFSA and do I need to complete it?",
                  answer: "The Free Application for Federal Student Aid (FAFSA) is required for need-based scholarships and federal financial aid. We recommend all U.S. students complete it."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section>
          <div className="bg-gradient-to-r from-[#33d1ff] to-[#0099cc] rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-8 text-white">
              <div>
                <h2 className="text-2xl font-bold mb-4">Need Assistance?</h2>
                <p className="mb-6">
                  Our financial aid office is here to help you navigate scholarship opportunities and answer any questions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <FaEnvelope className="text-white" />
                    </div>
                    <span>scholarships@jobkeyuniversity.edu</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                      <FaGraduationCap className="text-white" />
                    </div>
                    <span>Financial Aid Office, Student Center, Room 203</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
