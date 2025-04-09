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
      <div className="bg-gradient-to-r from-[#2563eb] to-[#4f46e5] py-16 px-4 sm:px-6 lg:px-8 text-white">
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
              className="bg-[#4f46e5] text-white border border-[#4f46e5] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#6366f1] transition-all"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="bg-[#4f46e5] text-white border border-[#4f46e5] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#6366f1] transition-all"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-[#4f46e5] text-white border border-[#4f46e5] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#6366f1] transition-all"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="bg-[#4f46e5] text-white border border-[#4f46e5] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#6366f1] transition-all"
            >
              Faculty
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="overview" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#4f46e5]">PROGRAM OVERVIEW</h2>
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
              <h3 className="text-xl font-semibold mb-4 text-[#4f46e5]">Program Highlights</h3>
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
          <h2 className="text-3xl font-bold mb-6 text-[#4f46e5]">PROGRAM STRUCTURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#4f46e5]">Core Courses</h3>
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
              <h3 className="text-xl font-semibold mb-3 text-[#4f46e5]">Specialization Tracks</h3>
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
          <h2 className="text-3xl font-bold mb-6 text-[#4f46e5]">ADMISSIONS</h2>
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
                    <td className="py-2">$35,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Cost Per Credit Hour</td>
                    <td className="py-2">$750</td>
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

        <section id="faculty" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#4f46e5]">FACULTY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Program Director</p>
              </div>
              <p className="text-sm text-center">Ph.D. in Business Administration, Harvard University</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Prof. Michael Lee</h3>
                <p className="text-sm text-gray-600">Professor of Finance</p>
              </div>
              <p className="text-sm text-center">Former Investment Banker with 15+ years industry experience</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Amina Rahman</h3>
                <p className="text-sm text-gray-600">Associate Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in International Business Strategy</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#2563eb] to-[#4f46e5] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Advance Your Career?</h3>
          <p className="mb-6">Join our MBA program and take the next step toward leadership excellence.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#4f46e5] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
