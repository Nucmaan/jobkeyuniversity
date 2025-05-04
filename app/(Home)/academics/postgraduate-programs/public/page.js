"use client";
import React from 'react';
import Link from 'next/link';

export default function PublicAdministrationPage() {
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
          <h1 className="text-4xl font-bold mb-4">Master of Public Administration</h1>
          <p className="text-xl">Developing Ethical Leaders for Public Service Excellence</p>
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
              onClick={() => scrollToSection('curriculum')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('sectors')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Career Sectors
            </button>
            <button
              onClick={() => scrollToSection('leadership')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Leadership Development
            </button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Admissions
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
                The Master of Public Administration (MPA) program at JobKey University prepares students for leadership 
                roles in government, nonprofit organizations, and public service. Our curriculum emphasizes evidence-based 
                decision-making, ethical leadership, and effective management of public resources.
              </p>
              <p className="mb-4">
                With a focus on practical applications and real-world challenges, students develop the analytical, 
                managerial, and leadership skills needed to address complex public issues. Our program combines 
                rigorous academic training with hands-on experiences through internships, capstone projects, and 
                engagement with public sector professionals.
              </p>
              <p className="mb-4">
                Graduates emerge as capable public administrators equipped to develop and implement policies, 
                manage organizations effectively, and serve the public interest with integrity and accountability.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>NASPAA-accredited curriculum</li>
                <li>Distinguished faculty with public service experience</li>
                <li>Flexible program formats (full-time, part-time, online)</li>
                <li>Professional development workshops</li>
                <li>Public sector internship opportunities</li>
                <li>Applied research projects with government agencies</li>
                <li>Active alumni network in government service</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">CURRICULUM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Public Administration Theory and Practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Public Financial Management and Budgeting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Public Policy Analysis and Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Human Resource Management in the Public Sector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Organizational Leadership and Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Research Methods and Data Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <span>Ethics in Public Service</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Specialization Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <div>
                    <span className="font-medium">Local Government Management</span>
                    <p className="text-sm text-gray-600">Municipal administration, urban planning, community development</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <div>
                    <span className="font-medium">Nonprofit Management</span>
                    <p className="text-sm text-gray-600">NGO leadership, fundraising, program management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <div>
                    <span className="font-medium">Public Financial Administration</span>
                    <p className="text-sm text-gray-600">Fiscal policy, public budgeting, government accounting</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <div>
                    <span className="font-medium">Health Services Administration</span>
                    <p className="text-sm text-gray-600">Healthcare policy, public health management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1e3a8a] mr-2">•</span>
                  <div>
                    <span className="font-medium">Emergency Management</span>
                    <p className="text-sm text-gray-600">Crisis response, disaster preparedness, risk management</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Capstone Experience</h3>
            <p className="mb-4">
              All MPA students complete a capstone project that integrates knowledge from across the curriculum to address 
              a real-world public administration challenge. Options include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2 text-[#33d1ff]">Applied Research Project</h4>
                <p className="text-sm text-gray-700">
                  Collaborate with a government agency or nonprofit to analyze a specific administrative challenge 
                  and develop evidence-based recommendations.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2 text-[#33d1ff]">Policy Analysis</h4>
                <p className="text-sm text-gray-700">
                  Conduct a comprehensive analysis of a public policy issue, including stakeholder analysis, 
                  implementation considerations, and evaluation metrics.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-medium mb-2 text-[#33d1ff]">Management Analysis</h4>
                <p className="text-sm text-gray-700">
                  Evaluate an organization management practices and develop strategies to enhance efficiency, 
                  effectiveness, and organizational performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">CAREER SECTORS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#33d1ff]">Government</h3>
              </div>
              <ul className="space-y-2 ml-2">
                <li className="text-sm">Federal Agencies</li>
                <li className="text-sm">State Government</li>
                <li className="text-sm">Local Municipalities</li>
                <li className="text-sm">Legislative Offices</li>
                <li className="text-sm">Regulatory Bodies</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Sample roles: City Manager, Program Administrator, Policy Analyst, Budget Analyst</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#33d1ff]">Nonprofit</h3>
              </div>
              <ul className="space-y-2 ml-2">
                <li className="text-sm">Social Service Organizations</li>
                <li className="text-sm">Educational Institutions</li>
                <li className="text-sm">Healthcare Nonprofits</li>
                <li className="text-sm">Foundations & Philanthropies</li>
                <li className="text-sm">International NGOs</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Sample roles: Executive Director, Program Manager, Development Officer, Grants Administrator</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e3a8a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#33d1ff]">Private Sector</h3>
              </div>
              <ul className="space-y-2 ml-2">
                <li className="text-sm">Government Relations</li>
                <li className="text-sm">Consulting Firms</li>
                <li className="text-sm">Research Institutions</li>
                <li className="text-sm">Healthcare Systems</li>
                <li className="text-sm">Public-Private Partnerships</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">Sample roles: Government Affairs Manager, Public Sector Consultant, Compliance Officer</p>
              </div>
            </div>
          </div>
          
         
        </section>

        <section id="leadership" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">LEADERSHIP DEVELOPMENT</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="mb-6">
              Beyond classroom learning, our MPA program provides comprehensive leadership development opportunities 
              to prepare students for public service leadership roles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Professional Immersion</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Public Service Internships:</span> Gain hands-on experience in government 
                    agencies, nonprofit organizations, and public-private partnerships.
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Job Shadowing Program:</span> Observe public administrators in action 
                    and learn about their daily responsibilities and challenges.
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Government Agency Tours:</span> Visit local, state, and federal 
                    government offices to understand their operations and functions.
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Professional Conferences:</span> Attend public administration 
                    conferences to network with professionals and learn about current trends.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Skill Development</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Leadership Workshop Series:</span> Develop essential leadership 
                    skills through interactive workshops led by experienced public servants.
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Public Speaking Training:</span> Build confidence and effectiveness 
                    in public presentations and communications.
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Crisis Management Simulations:</span> Practice decision-making and 
                    leadership in simulated public sector crisis scenarios.
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Mentorship Program:</span> Connect with experienced professionals 
                    who provide guidance and career advice.
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Distinguished Speaker Series</h3>
              <p className="text-sm mb-4">
                Throughout the academic year, our program hosts distinguished public administrators, elected officials, and 
                policy experts who share their experiences and insights with students. Recent speakers include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-[#1e3a8a]">Former Mayor of Chicago</p>
                  <p className="text-xs text-gray-700">Urban Governance in the 21st Century</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-[#1e3a8a]">United Nations Administration Director</p>
                  <p className="text-xs text-gray-700">Global Administrative Challenges</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-[#1e3a8a]">State Budget Director</p>
                  <p className="text-xs text-gray-700">Fiscal Management in Times of Crisis</p>
                </div>
              </div>
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
                <li>Statement of purpose describing public service goals</li>
                <li>Resume highlighting professional experience</li>
                <li>Two letters of recommendation</li>
                <li>GRE scores (waivers available for qualified applicants)</li>
                <li>Interview (for shortlisted candidates)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Details</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Program Formats</td>
                    <td className="py-2">Full-time (2 years), Part-time (3 years), Online</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Credit Hours</td>
                    <td className="py-2">42 credits</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Full Program)</td>
                    <td className="py-2">$4,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$65</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Deadlines</td>
                    <td className="py-2">Fall: March 1, Spring: October 1</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Start Dates</td>
                    <td className="py-2">Fall and Spring semesters</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Public service scholarships and federal financial aid available for eligible students.</p>
            </div>
          </div>
        </section>

        <div className="bg-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Advance Your Public Service Career</h3>
          <p className="mb-6">Join our Master of Public Administration program to develop the skills needed to lead and make a difference in the public sector.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
