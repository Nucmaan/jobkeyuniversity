"use client";
import React from 'react';
import Link from 'next/link';

export default function InternationalRelationsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Master of International Relations and Diplomacy</h1>
          <p className="text-xl">Shaping Global Leaders for a Complex World</p>
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
              onClick={() => scrollToSection('global')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Global Experience
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Careers
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
                The Master of International Relations and Diplomacy program at JobKey University prepares students to 
                analyze and address complex global challenges. Our interdisciplinary approach combines political science, 
                economics, history, and law to develop a comprehensive understanding of international affairs.
              </p>
              <p className="mb-4">
                Students engage with pressing global issues including conflict resolution, international security, 
                sustainable development, human rights, and global governance. Our faculty of distinguished scholars 
                and former diplomats brings theoretical knowledge and practical experience to the classroom.
              </p>
              <p className="mb-4">
                Through rigorous coursework, simulation exercises, international experiences, and professional development, 
                graduates emerge prepared for careers in diplomacy, international organizations, global business, and advocacy.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Distinguished faculty of scholars and practitioners</li>
                <li>United Nations study tour</li>
                <li>Diplomatic simulation exercises</li>
                <li>Foreign language proficiency development</li>
                <li>International exchange opportunities</li>
                <li>Professional networking events with diplomats</li>
                <li>Internship placement assistance</li>
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
                  <span className="text-[#4338ca] mr-2">•</span>
                  <span>Theories of International Relations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <span>Diplomatic Practice and Negotiation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <span>International Law and Organizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <span>Global Political Economy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <span>Foreign Policy Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <span>Research Methods in International Studies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <div>
                    <span className="font-medium">Diplomacy and Conflict Resolution</span>
                    <p className="text-sm text-gray-600">Mediation, negotiation, and peacebuilding</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <div>
                    <span className="font-medium">Global Security Studies</span>
                    <p className="text-sm text-gray-600">Terrorism, cybersecurity, and strategic studies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <div>
                    <span className="font-medium">International Development</span>
                    <p className="text-sm text-gray-600">Sustainable development and humanitarian assistance</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4338ca] mr-2">•</span>
                  <div>
                    <span className="font-medium">International Organizations</span>
                    <p className="text-sm text-gray-600">Global governance and multilateral institutions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Capstone Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Master Thesis</h4>
                <p className="text-sm text-gray-700">
                  Conduct original research on a topic of your choice under faculty guidance, 
                  developing advanced research skills and contributing to the field.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Policy Memorandum</h4>
                <p className="text-sm text-gray-700">
                  Develop a comprehensive policy recommendation addressing a real-world international 
                  challenge, demonstrating analytical and practical skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="global" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">GLOBAL EXPERIENCE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Study Abroad</h3>
              <p className="text-sm text-gray-700">
                Expand your perspective through semester exchanges with our partner universities in Geneva, 
                Brussels, Tokyo, Singapore, and other global centers of diplomacy and international relations.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Diplomatic Simulations</h3>
              <p className="text-sm text-gray-700">
                Participate in Model UN, crisis simulations, and diplomatic negotiation exercises that replicate real-world 
                challenges and develop practical skills in diplomacy, public speaking, and consensus-building.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Field Studies</h3>
              <p className="text-sm text-gray-700">
                Join faculty-led trips to international organizations, embassies, and global conferences, including 
                annual study tours to the United Nations, European Union, and other key institutions.
              </p>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Language Requirements</h3>
              <p className="mb-4 text-sm text-gray-700">
                Proficiency in a second language is essential for international careers. Our program requires:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Demonstrated proficiency in a UN language (Arabic, Chinese, English, French, Russian, Spanish)</li>
                <li>Language assessment upon admission</li>
                <li>Language courses available through university language institute</li>
                <li>Language immersion opportunities through exchange programs</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Professional Development</h3>
              <p className="mb-4 text-sm text-gray-700">
                Beyond academics, we provide extensive professional preparation:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>Career coaching from international affairs specialists</li>
                <li>Diplomatic protocol and etiquette training</li>
                <li>Networking events with alumni in foreign service</li>
                <li>International organizations recruitment sessions</li>
                <li>Public speaking and negotiation workshops</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="careers" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">CAREER PATHWAYS</h2>
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#33d1ff]">Diplomatic Service</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Foreign Service Officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Political Attaché</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Consular Officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Cultural Affairs Officer</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#33d1ff]">International Organizations</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Program Officer (UN, World Bank)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Policy Analyst</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Human Rights Officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Humanitarian Affairs Coordinator</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-[#33d1ff]">Private Sector</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Global Affairs Consultant</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Political Risk Analyst</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>Corporate Diplomacy Advisor</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4338ca] mr-2">•</span>
                    <span>International Business Development</span>
                  </li>
                </ul>
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
                <li>Statement of purpose outlining career goals</li>
                <li>Two letters of recommendation</li>
                <li>Resume/CV highlighting relevant experience</li>
                <li>International experience preferred but not required</li>
                <li>Evidence of second language proficiency or study plan</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Details</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Program Duration</td>
                    <td className="py-2">2 years (full-time)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Credit Hours</td>
                    <td className="py-2">42 credits</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Total)</td>
                    <td className="py-2">$38,000</td>
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
                    <td className="py-2 font-medium">Financial Aid</td>
                    <td className="py-2">Merit scholarships, fellowships available</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Fulbright scholarships and international student funding options available.</p>
            </div>
          </div>
        </section>

        <div className="bg-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Leader in Global Affairs</h3>
          <p className="mb-6">Join our Master of International Relations and Diplomacy program to develop the expertise needed in today complex world.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
