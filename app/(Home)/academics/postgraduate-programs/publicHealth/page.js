"use client";
import React from 'react';
import Link from 'next/link';

export default function PublicHealthPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-gradient-to-r from-[#047857] to-[#065f46] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Master of Public Health</h1>
          <p className="text-xl">Advancing Health Equity and Population Wellbeing</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('overview')}
              className="bg-[#065f46] text-white border border-[#065f46] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#047857] transition-all"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('concentrations')}
              className="bg-[#065f46] text-white border border-[#065f46] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#047857] transition-all"
            >
              Concentrations
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="bg-[#065f46] text-white border border-[#065f46] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#047857] transition-all"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('practice')}
              className="bg-[#065f46] text-white border border-[#065f46] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#047857] transition-all"
            >
              Applied Practice
            </button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-[#065f46] text-white border border-[#065f46] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#047857] transition-all"
            >
              Admissions
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="overview" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#065f46]">PROGRAM OVERVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                The Master of Public Health (MPH) program at JobKey University prepares students to address complex public 
                health challenges through a multidisciplinary approach that combines theory, research, and practice. Our 
                program emphasizes evidence-based strategies to improve population health and reduce health disparities.
              </p>
              <p className="mb-4">
                With a focus on both local and global health issues, students develop skills in epidemiology, biostatistics, 
                health policy, program planning, and evaluation. Our faculty brings extensive field experience and research 
                expertise to provide students with a comprehensive understanding of contemporary public health challenges.
              </p>
              <p className="mb-4">
                Graduates emerge ready to lead public health initiatives in government agencies, healthcare organizations, 
                nonprofit groups, research institutions, and international health organizations.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#065f46]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>CEPH-accredited curriculum</li>
                <li>Flexible full-time and part-time options</li>
                <li>Hands-on applied practice experience</li>
                <li>Research opportunities with faculty mentors</li>
                <li>Global health fieldwork opportunities</li>
                <li>Strong community and agency partnerships</li>
                <li>Focus on health equity and social determinants</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="concentrations" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#065f46]">AREAS OF CONCENTRATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#065f46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#065f46]">Epidemiology</h3>
              <p className="text-sm text-gray-700 mb-4">
                Focus on the study of disease patterns, causes, and effects in populations. Develop skills 
                in disease surveillance, outbreak investigation, and research design.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Epidemiologist, Disease Investigator, Research Scientist
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#065f46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#065f46]">Global Health</h3>
              <p className="text-sm text-gray-700 mb-4">
                Address health challenges that transcend national boundaries. Explore global health systems, 
                international health policy, and culturally appropriate interventions.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Global Health Officer, International Program Manager, Health Advisor
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#065f46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#065f46]">Health Policy & Management</h3>
              <p className="text-sm text-gray-700 mb-4">
                Develop expertise in health policy development, healthcare systems, and effective management 
                of public health organizations and programs.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Health Policy Analyst, Program Manager, Health Administrator
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#065f46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#065f46]">Community Health</h3>
              <p className="text-sm text-gray-700 mb-4">
                Focus on community-based approaches to health promotion, disease prevention, and addressing social 
                determinants of health in diverse populations.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Community Health Director, Health Educator, Outreach Coordinator
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#065f46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#065f46]">Environmental Health</h3>
              <p className="text-sm text-gray-700 mb-4">
                Study the relationship between environmental factors and human health, including air and water quality, 
                climate change impacts, and environmental risk assessment.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Environmental Health Specialist, Risk Assessor, Occupational Health Manager
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#065f46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#065f46]">Health Informatics</h3>
              <p className="text-sm text-gray-700 mb-4">
                Develop skills in health data management, analysis, and digital health technologies to improve 
                public health surveillance, decision-making, and program evaluation.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Health Data Analyst, Public Health Informatician, Surveillance Specialist
              </p>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#065f46]">CURRICULUM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#065f46]">Core Courses (24 Credits)</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Principles of Epidemiology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Biostatistics for Public Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Environmental Health Sciences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Health Policy and Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Social and Behavioral Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Global Health Challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Public Health Research Methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#065f46] mr-2">•</span>
                  <span>Public Health Program Planning and Evaluation</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#065f46]">Program Structure (45 Credits)</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-[#065f46]">24</span>
                  </div>
                  <div>
                    <p className="font-medium">Core Courses</p>
                    <p className="text-sm text-gray-600">Foundational public health knowledge</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-[#065f46]">12</span>
                  </div>
                  <div>
                    <p className="font-medium">Concentration Courses</p>
                    <p className="text-sm text-gray-600">Specialized area of focus</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-[#065f46]">6</span>
                  </div>
                  <div>
                    <p className="font-medium">Applied Practice Experience</p>
                    <p className="text-sm text-gray-600">Field-based practicum</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold text-[#065f46]">3</span>
                  </div>
                  <div>
                    <p className="font-medium">Integrative Learning Experience</p>
                    <p className="text-sm text-gray-600">Capstone project or thesis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="practice" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#065f46]">APPLIED PRACTICE EXPERIENCE</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="mb-6">
              All MPH students complete an applied practice experience (APE), a supervised field placement that provides 
              hands-on experience in public health practice. This critical component allows students to apply classroom 
              learning to real-world public health challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#065f46]">Practice Settings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#065f46] mr-2 mt-1">•</span>
                    <div>
                      <span className="font-medium">Health Departments</span>
                      <p className="text-sm text-gray-600">Local, state, and federal public health agencies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#065f46] mr-2 mt-1">•</span>
                    <div>
                      <span className="font-medium">Community Organizations</span>
                      <p className="text-sm text-gray-600">Nonprofits addressing health equity, social services</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#065f46] mr-2 mt-1">•</span>
                    <div>
                      <span className="font-medium">Healthcare Systems</span>
                      <p className="text-sm text-gray-600">Hospitals, clinics, health maintenance organizations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#065f46] mr-2 mt-1">•</span>
                    <div>
                      <span className="font-medium">International Organizations</span>
                      <p className="text-sm text-gray-600">WHO, UNICEF, NGOs, global health initiatives</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#065f46]">Recent Practice Projects</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-sm">COVID-19 Vaccination Outreach Strategy</p>
                    <p className="text-xs text-gray-600">County Health Department</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-sm">Food Insecurity Assessment and Intervention</p>
                    <p className="text-xs text-gray-600">Community Food Bank</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-sm">Maternal Health Program Evaluation</p>
                    <p className="text-xs text-gray-600">Global Health NGO</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-medium text-sm">Mental Health Awareness Campaign</p>
                    <p className="text-xs text-gray-600">University Health Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="admissions" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#065f46]">ADMISSIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Bachelor degree from an accredited institution</li>
                <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                <li>Statement of purpose and career goals</li>
                <li>Resume/CV with relevant experience</li>
                <li>Three letters of recommendation</li>
                <li>GRE scores (waivers available for qualified applicants)</li>
                <li>Prerequisites: Statistics, Biology or other health science</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Details</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Program Duration</td>
                    <td className="py-2">2 years (full-time), 3-4 years (part-time)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Credit Hours</td>
                    <td className="py-2">45 credits</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Total)</td>
                    <td className="py-2">$36,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$75</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Deadline</td>
                    <td className="py-2">February 1 (Fall), October 1 (Spring)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Program Formats</td>
                    <td className="py-2">On-campus, online, and hybrid options</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Public health fellowships and assistantships available for qualified students.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#047857] to-[#065f46] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Make an Impact on Population Health</h3>
          <p className="mb-6">Join our Master of Public Health program to develop the skills needed to address critical health challenges and promote wellbeing.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#065f46] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
