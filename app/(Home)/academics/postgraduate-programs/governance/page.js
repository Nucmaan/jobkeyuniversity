"use client";
import React from 'react';
import Link from 'next/link';

export default function GovernancePage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-gradient-to-r from-[#0d4b70] to-[#0f766e] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Master of Public Policy and Governance</h1>
          <p className="text-xl">Shaping Leaders for Public Service Excellence</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('overview')}
              className="bg-[#0f766e] text-white border border-[#0f766e] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#14b8a6] transition-all"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="bg-[#0f766e] text-white border border-[#0f766e] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#14b8a6] transition-all"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="bg-[#0f766e] text-white border border-[#0f766e] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#14b8a6] transition-all"
            >
              Career Paths
            </button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-[#0f766e] text-white border border-[#0f766e] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#14b8a6] transition-all"
            >
              Admissions
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="bg-[#0f766e] text-white border border-[#0f766e] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#14b8a6] transition-all"
            >
              Faculty
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="overview" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0f766e]">PROGRAM OVERVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                The Master of Public Policy and Governance program at JobKey University prepares students to address complex policy challenges 
                in an increasingly interconnected world. Our curriculum combines rigorous analytical training with practical 
                governance skills to develop effective public leaders.
              </p>
              <p className="mb-4">
                Students engage with pressing policy issues through case studies, simulations, and field experiences. 
                Our program emphasizes evidence-based policymaking, ethical leadership, and inclusive governance 
                practices that serve diverse communities.
              </p>
              <p className="mb-4">
                Graduates of this program leave equipped to design, implement, and evaluate policies across various sectors 
                including government agencies, non-profit organizations, international institutions, and think tanks.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#0f766e]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Applied policy research opportunities</li>
                <li>Government internship placements</li>
                <li>Global governance perspective</li>
                <li>Public leadership development</li>
                <li>Policy analysis and evaluation skills</li>
                <li>Cross-sector collaboration training</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0f766e]">CURRICULUM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#0f766e]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Public Policy Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Governance and Political Institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Public Finance and Budgeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Research Methods for Policy Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Ethics in Public Administration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Policy Implementation and Evaluation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#0f766e]">Specialization Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>International Development Policy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Environmental Policy and Sustainability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Social Policy and Inequality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Urban Governance and Planning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>National Security and Foreign Policy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Digital Governance and Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="career" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0f766e]">CAREER PATHS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0f766e]">Government</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Policy Advisor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Public Affairs Specialist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Program Analyst</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Legislative Coordinator</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0f766e]">Non-Profit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Program Director</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Advocacy Campaign Manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Research Coordinator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Community Outreach Director</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0f766e]">International</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Development Specialist</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Governance Consultant</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Human Rights Officer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0f766e] mr-2">•</span>
                  <span>Policy Analyst (UN, World Bank)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="admissions" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0f766e]">ADMISSIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Bachelor degree in any discipline</li>
                <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                <li>Statement of purpose</li>
                <li>Resume/CV highlighting relevant experience</li>
                <li>Two letters of recommendation</li>
                <li>English proficiency for international students</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Details</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Full Program Tuition</td>
                    <td className="py-2">$32,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Program Duration</td>
                    <td className="py-2">2 years (full-time)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Credit Hours</td>
                    <td className="py-2">48 credits</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$60</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Start Dates</td>
                    <td className="py-2">Fall & Spring</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Public service scholarships available for eligible students.</p>
            </div>
          </div>
        </section>

        <section id="faculty" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0f766e]">FACULTY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Prof. James Wilson</h3>
                <p className="text-sm text-gray-600">Program Director</p>
              </div>
              <p className="text-sm text-center">Former Policy Advisor to the Ministry of Foreign Affairs</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Elena Moreno</h3>
                <p className="text-sm text-gray-600">Associate Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in International Development Policy</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Kwame Osei</h3>
                <p className="text-sm text-gray-600">Assistant Professor</p>
              </div>
              <p className="text-sm text-center">Expert in Urban Governance and Public Administration</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#0d4b70] to-[#0f766e] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Shape Public Policy for a Better Future</h3>
          <p className="mb-6">Join our Master of Public Policy and Governance program and become an agent of positive change.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#0f766e] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
