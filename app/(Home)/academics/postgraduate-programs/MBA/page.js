"use client";
import React from 'react';
import Link from 'next/link';

export default function MBAPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-[#33d1ff] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Master of Business Administration</h1>
          <p className="text-xl">Developing Tomorrow Business Leaders</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('overview')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Faculty
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="overview" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">PROGRAM OVERVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                The Master of Business Administration program at JobKey University is designed to equip students with the advanced 
                knowledge and skills needed to excel in today competitive business environment. Our program combines 
                theoretical understanding with practical applications, preparing graduates for leadership roles.
              </p>
              <p className="mb-4">
                With a focus on innovation, ethics, and global perspectives, our MBA program offers a comprehensive 
                curriculum taught by experienced faculty and industry professionals. Students benefit from small class 
                sizes, personalized attention, and networking opportunities with alumni and business leaders.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Flexible format with evening and weekend classes</li>
                <li>International business study tours</li>
                <li>Industry-relevant curriculum</li>
                <li>Networking opportunities with business leaders</li>
                <li>Career development services</li>
                <li>State-of-the-art business simulation lab</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="programs" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">PROGRAM STRUCTURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Strategic Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Financial Accounting & Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Marketing Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Operations Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Organizational Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Business Ethics & Corporate Responsibility</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Finance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>International Business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Entrepreneurship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Healthcare Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4f46e5] mr-2">•</span>
                  <span>Technology Management</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="admissions" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">ADMISSIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Bachelor degree from an accredited institution</li>
                <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                <li>GMAT/GRE scores (waivers available)</li>
                <li>2+ years of professional experience (preferred)</li>
                <li>English proficiency for international students</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Tuition & Fees</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Full Program Tuition</td>
                    <td className="py-2">$8,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Cost Per Credit Hour</td>
                    <td className="py-2">$50</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$75</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Program Duration</td>
                    <td className="py-2">16-24 months</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Scholarships and financial aid available for eligible students.</p>
            </div>
          </div>
        </section>

       

        <div className="bg-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h3>
          <p className="mb-6">Join our MBA program and take the next step toward leadership excellence.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
