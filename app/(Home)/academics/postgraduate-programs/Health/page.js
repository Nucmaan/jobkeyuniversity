"use client";
import React from 'react';
import Link from 'next/link';

export default function HealthServicesPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Master of Health Services Management</h1>
          <p className="text-xl">Leading Healthcare Systems for a Better Tomorrow</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('overview')}
              className="bg-[#0284c7] text-white border border-[#0284c7] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#0ea5e9] transition-all"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="bg-[#0284c7] text-white border border-[#0284c7] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#0ea5e9] transition-all"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection('industry')}
              className="bg-[#0284c7] text-white border border-[#0284c7] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#0ea5e9] transition-all"
            >
              Industry Connections
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="bg-[#0284c7] text-white border border-[#0284c7] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#0ea5e9] transition-all"
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection('admissions')}
              className="bg-[#0284c7] text-white border border-[#0284c7] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#0ea5e9] transition-all"
            >
              Admissions
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="overview" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0284c7]">PROGRAM OVERVIEW</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                The Master of Health Services Management program at JobKey University prepares future healthcare leaders 
                to navigate the complex and evolving healthcare landscape. Our program integrates healthcare policy, 
                management principles, and financial expertise to develop innovative solutions for today healthcare challenges.
              </p>
              <p className="mb-4">
                Students gain comprehensive knowledge of healthcare systems, quality improvement methodologies, health 
                informatics, and strategic leadership skills. Our faculty brings extensive industry experience and academic 
                expertise to provide practical insights into healthcare management and administration.
              </p>
              <p className="mb-4">
                Through a combination of theory-based learning and practical applications, graduates emerge ready to lead 
                healthcare organizations through transformation, optimize operational efficiency, and improve patient outcomes.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#0284c7]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>CAHME-accredited curriculum</li>
                <li>Healthcare executive mentorship program</li>
                <li>Healthcare analytics and informatics training</li>
                <li>Leadership development workshops</li>
                <li>Healthcare system simulation experiences</li>
                <li>Internship opportunities with leading providers</li>
                <li>Global health management perspective</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0284c7]">CURRICULUM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#0284c7]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <span>Healthcare Systems and Policy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <span>Healthcare Financial Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <span>Health Services Operations Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <span>Healthcare Human Resources Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <span>Health Informatics and Digital Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <span>Healthcare Quality and Performance Improvement</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#0284c7]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <div>
                    <span className="font-medium">Hospital Administration</span>
                    <p className="text-sm text-gray-600">Focus on managing acute care facilities and hospital systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <div>
                    <span className="font-medium">Health Policy and Economics</span>
                    <p className="text-sm text-gray-600">Emphasis on policy development and economic analysis</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <div>
                    <span className="font-medium">Digital Health Leadership</span>
                    <p className="text-sm text-gray-600">Managing healthcare technology innovation and implementation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#0284c7] mr-2">•</span>
                  <div>
                    <span className="font-medium">Population Health Management</span>
                    <p className="text-sm text-gray-600">Strategies for improving community and population health outcomes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#0284c7]">Capstone Project</h3>
            <p className="mb-4">
              The program culminates in a capstone project where students work with healthcare organizations to address 
              real-world challenges. This applied learning experience allows students to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Apply theoretical knowledge to solve practical healthcare management problems</li>
              <li>Develop strategic recommendations for healthcare organizations</li>
              <li>Implement quality improvement or operational efficiency initiatives</li>
              <li>Analyze healthcare data to inform evidence-based decision making</li>
              <li>Present findings and recommendations to executive stakeholders</li>
            </ul>
          </div>
        </section>

        <section id="industry" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0284c7]">INDUSTRY CONNECTIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0284c7]">Healthcare Partners</h3>
              <p className="text-sm text-gray-700">
                Our program maintains strong partnerships with leading healthcare organizations, including hospitals, 
                health systems, clinics, and health technology companies that provide internship and employment opportunities.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0284c7]">Executive Speaker Series</h3>
              <p className="text-sm text-gray-700">
                Distinguished healthcare executives regularly visit campus to share insights on industry trends, 
                leadership challenges, and career development, providing valuable networking opportunities.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#0284c7]">Healthcare Innovation Lab</h3>
              <p className="text-sm text-gray-700">
                Students collaborate with industry partners in our innovation lab to develop and test solutions for 
                healthcare challenges, gaining hands-on experience with cutting-edge health technologies.
              </p>
            </div>
          </div>
        </section>

        <section id="careers" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0284c7]">CAREER OPPORTUNITIES</h2>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#0284c7]">Healthcare Provider Settings</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Hospital Administrator</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Clinical Operations Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Quality Improvement Director</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Practice Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Healthcare Facility Director</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#0284c7]">Health Insurance & Finance</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Health Plan Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Healthcare Financial Analyst</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Revenue Cycle Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Provider Network Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Healthcare Consultant</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#0284c7]">Digital Health & Innovation</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Health Informatics Director</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Healthcare IT Project Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Digital Health Strategist</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Healthcare Innovation Manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#0284c7] mr-2">•</span>
                    <span>Telehealth Program Director</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold mb-3 text-[#0284c7]">Career Outcomes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-[#0284c7] mb-2">94%</p>
                  <p className="text-sm">Employment Rate Within 6 Months</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-[#0284c7] mb-2">$85,000</p>
                  <p className="text-sm">Average Starting Salary</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-[#0284c7] mb-2">18%</p>
                  <p className="text-sm">Projected Industry Growth Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="admissions" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#0284c7]">ADMISSIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Bachelor degree from an accredited institution</li>
                <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                <li>Personal statement describing career goals</li>
                <li>Resume/CV with relevant professional experience</li>
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
                    <td className="py-2 font-medium">Program Duration</td>
                    <td className="py-2">2 years (full-time), 3 years (part-time)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Credit Hours</td>
                    <td className="py-2">45 credits</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Total)</td>
                    <td className="py-2">$42,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$75</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Start Dates</td>
                    <td className="py-2">Fall and Spring semesters</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Delivery Format</td>
                    <td className="py-2">On-campus, online, and hybrid options</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Healthcare industry scholarships and employer sponsorship opportunities available.</p>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Lead the Future of Healthcare</h3>
          <p className="mb-6">Join our Master of Health Services Management program to develop the skills needed to transform healthcare delivery.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#0284c7] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
