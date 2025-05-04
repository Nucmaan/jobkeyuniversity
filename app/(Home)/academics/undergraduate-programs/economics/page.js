"use client";
import React from 'react';
import Link from 'next/link';

export default function EconomicsManagementPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-gradient-to-r from-[#33d1ff] to-[#64b5f6] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Faculty of Economic and Management Sciences</h1>
          <p className="text-xl">Shaping Future Leaders in Economics and Management</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-[#64b5f6] text-white font-medium py-2 px-6 rounded-md mr-2 hover:bg-opacity-90 transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('dean-message')}
              className="bg-white text-[#64b5f6] border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Dean Message
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="bg-white text-[#64b5f6] border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('entry-requirements')}
              className="bg-white text-[#64b5f6] border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Entry Requirements
            </button>
            <button
              onClick={() => scrollToSection('fees')}
              className="bg-white text-[#64b5f6] border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Fees
            </button>
            
            <button
              onClick={() => scrollToSection('activities')}
              className="bg-white text-[#64b5f6] border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Activities
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="about" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">ABOUT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                The Faculty of Economic and Management Sciences is committed to providing a comprehensive education in economics, management, and related disciplines.
                We aim to develop analytical and problem-solving skills in our students, preparing them for successful careers in diverse sectors.
              </p>
              <p className="mb-4">
                Our faculty combines theoretical knowledge with practical applications, offering students opportunities to engage in real-world case studies,
                internships, and research projects. We emphasize ethical leadership and sustainable business practices.
              </p>
              <p className="mb-4">
                We are dedicated to fostering an environment of intellectual curiosity and innovation, encouraging students to think critically and contribute
                to the advancement of economic and management thought.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#64b5f6]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive curriculum covering economics and management</li>
                <li>Experienced faculty with expertise in diverse fields</li>
                <li>Opportunities for industry internships and research</li>
                <li>Focus on analytical and problem-solving skills</li>
                <li>Emphasis on ethical leadership and sustainability</li>
                <li>Strong career counseling and placement services</li>
                <li>Access to modern resources and facilities</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="dean-message" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">DEAN MESSAGE</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Dean Photo</div>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="italic text-gray-600 mb-4">
                Welcome to the Faculty of Economic and Management Sciences. We are dedicated to providing a transformative educational experience that prepares our students
                to excel in the dynamic fields of economics and management.
              </p>
              <p className="mb-4">
                Our faculty is committed to fostering a learning environment that encourages innovation, critical thinking, and ethical leadership. We strive to equip our students
                with the knowledge and skills necessary to address the challenges of today s global economy.
              </p>
              <p className="mb-4">
                We are proud of our strong connections with industry leaders and research institutions, which provide our students with valuable opportunities to apply
                their knowledge and contribute to real-world solutions.
              </p>
              <p className="font-semibold mt-4">Prof. Ismail Hassan, PhD</p>
              <p className="text-sm text-gray-600">Dean, Faculty of Economic and Management Sciences</p>
            </div>
          </div>
        </section>

        <section id="programs" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">PROGRAMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Principles of Economics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Financial Accounting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Business Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Statistical Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Marketing Principles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Organizational Behavior</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Financial Economics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Marketing Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Human Resource Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>International Business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Entrepreneurship and Innovation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Public Administration</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="entry-requirements" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">ENTRY REQUIREMENTS</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Minimum Requirements</h3>
            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li>Should bring secondary school one copy and original </li>
              <li>Should pass the test And Interview </li>
              <li>Should Bring 4 passport size photo</li>
              <li>Should Pay Registration Fee $35 dollar (not refundable ) </li>
              <li>should bring discipline and conduct later </li>
              <li>Any canididate who wants to learn medicine must have a minimum pass mark 80% in his/her secondary school leaving certificate  </li>
              <li>Any canididate who wants to learn Engineering must have a minimum pass mark 75% in his/her secondary school leaving certificate  </li>
            </ul>
          </div>
        </section>

        <section id="fees" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">FEES</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#33d1ff] text-white">
                  <th className="py-3 px-4 text-left">Fee Type</th>
                  <th className="py-3 px-4 text-left">Amount (USD)</th>
                  <th className="py-3 px-4 text-left">Payment Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Registration Fee</td>
                  <td className="py-3 px-4">$35</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Tuition Fee</td>
                  <td className="py-3 px-4">$300</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Laboratory Fee</td>
                  <td className="py-3 px-4">$35</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
               
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Graduation Fee</td>
                  <td className="py-3 px-4">$360</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">Fees are subject to change. Scholarships and financial aid available for eligible students.</p>
        </section>

       

        <section id="activities" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">ACTIVITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Student Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Economics Club</span>
                    <p className="text-sm text-gray-600">Organizes debates, seminars, and workshops on economic issues.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Management Society</span>
                    <p className="text-sm text-gray-600">Conducts leadership workshops and business case competitions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Entrepreneurship Forum</span>
                    <p className="text-sm text-gray-600">Promotes entrepreneurial activities and startup initiatives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Finance Workshops</span>
                    <p className="text-sm text-gray-600">Offers training in financial analysis and investment strategies.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Research Opportunities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Undergraduate Research Program</span>
                    <p className="text-sm text-gray-600">Engage in research projects with faculty mentors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research Seminars</span>
                    <p className="text-sm text-gray-600">Attend seminars by leading researchers in economics and management.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Publication Opportunities</span>
                    <p className="text-sm text-gray-600">Publish research findings in academic journals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research Labs and Centers</span>
                    <p className="text-sm text-gray-600">Access to well-equipped research facilities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#33d1ff] to-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Shape Your Future?</h3>
          <p className="mb-6">Join our Faculty of Economic and Management Sciences and become a leader in the global economy.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#1976d2] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}