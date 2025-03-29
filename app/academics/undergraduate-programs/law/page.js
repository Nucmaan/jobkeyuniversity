"use client";
import React from 'react';
import Link from 'next/link';

export default function ShariaLawPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-gradient-to-r from-[#33d1ff] to-[#33d1ff] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Faculty of Sharia and Law</h1>
          <p className="text-xl">Integrating Islamic Principles with Legal Excellence</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-[#64b5f6] text-white border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#64b5f6] transition-all"
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
              onClick={() => scrollToSection('staff')}
              className="bg-white text-[#64b5f6] border border-[#64b5f6] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Faculty Members
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
                The Faculty of Sharia and Law is dedicated to providing a comprehensive education that integrates Islamic legal principles with modern legal studies.
                We aim to produce graduates who are well-versed in both Sharia and secular law, capable of contributing to justice and ethical practice in society.
              </p>
              <p className="mb-4">
                Our faculty combines traditional Islamic scholarship with contemporary legal analysis, offering students a unique perspective on law and jurisprudence.
                We emphasize critical thinking, ethical reasoning, and a deep understanding of the legal systems that govern our world.
              </p>
              <p className="mb-4">
                We are committed to fostering an environment of intellectual rigor and moral integrity, preparing students to become leaders in legal and religious fields.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#64b5f6]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Integrated curriculum of Sharia and secular law</li>
                <li>Experienced faculty with expertise in Islamic jurisprudence and law</li>
                <li>Opportunities for research and legal practice</li>
                <li>Focus on ethical legal practice and justice</li>
                <li>Emphasis on critical thinking and legal analysis</li>
                <li>Strong career counseling and placement services</li>
                <li>Access to specialized resources and libraries</li>
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
                Welcome to the Faculty of Sharia and Law. We are dedicated to providing a unique educational experience that bridges the gap between Islamic legal principles
                and modern legal practice.
              </p>
              <p className="mb-4">
                Our faculty is committed to fostering a learning environment that promotes ethical legal practice, critical thinking, and a deep understanding of justice.
                We strive to equip our students with the knowledge and skills necessary to serve their communities and uphold the rule of law.
              </p>
              <p className="mb-4">
                We are proud of our strong connections with legal institutions and religious scholars, which provide our students with valuable opportunities to apply
                their knowledge and contribute to legal and religious discourse.
              </p>
              <p className="font-semibold mt-4">Prof. Ibrahim Hassan, PhD</p>
              <p className="text-sm text-gray-600">Dean, Faculty of Sharia and Law</p>
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
                  <span>Principles of Islamic Jurisprudence (Usul al-Fiqh)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Constitutional Law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Islamic Family Law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Criminal Law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Commercial Law in Islamic Perspective</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Civil Law</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Islamic Legal Studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Comparative Law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>International Law and Human Rights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Criminal Justice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Islamic Finance and Law</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9c27b0] mr-2">•</span>
                  <span>Public and Administrative Law</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="entry-requirements" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">ENTRY REQUIREMENTS</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Minimum Requirements</h3>
            <ul className="list-disc pl-5 space-y-3 mb-6">
              <li>High school diploma or equivalent</li>
              <li>Minimum GPA of 3.0 on a 4.0 scale</li>
              <li>Strong background in Arabic language and Islamic studies</li>
              <li>Basic computer literacy</li>
              <li>English proficiency (TOEFL score of 80+ or IELTS score of 6.5+)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Application Process</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Complete the online application form</li>
              <li>Submit all required documents (transcripts, ID, etc.)</li>
              <li>Pay the application fee</li>
              <li>Attend an entrance examination (Arabic, Islamic studies, and logical reasoning)</li>
              <li>Participate in an interview (for shortlisted candidates)</li>
            </ol>
          </div>
        </section>

        <section id="fees" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">FEES</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#64b5f6] text-white">
                  <th className="py-3 px-4 text-left">Fee Type</th>
                  <th className="py-3 px-4 text-left">Amount (USD)</th>
                  <th className="py-3 px-4 text-left">Payment Schedule</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Application Fee</td>
                  <td className="py-3 px-4">$50</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Tuition Fee</td>
                  <td className="py-3 px-4">$3,100</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Registration Fee</td>
                  <td className="py-3 px-4">$100</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Resource Fee</td>
                  <td className="py-3 px-4">$170</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Library Fee</td>
                  <td className="py-3 px-4">$110</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Graduation Fee</td>
                  <td className="py-3 px-4">$300</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">Fees are subject to change. Scholarships and financial aid available for eligible students.</p>
        </section>

        <section id="staff" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Prof. Aisha Ahmed, PhD</h3>
                <p className="text-sm text-gray-600">Department Chair</p>
              </div>
              <p className="text-sm text-center">Specialization in Islamic Legal Studies</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Yusuf Ali, PhD</h3>
                <p className="text-sm text-gray-600">Associate Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Comparative Law</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Safia Mohamed, PhD</h3>
                <p className="text-sm text-gray-600">Assistant Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in International Law</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Khalid Ibrahim, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Islamic Finance Law</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Aisha Farah, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Criminal Justice</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Omar Hassan, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Public and Administrative Law</p>
            </div>
          </div>
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
                    <span className="font-medium">Sharia Law Society</span>
                    <p className="text-sm text-gray-600">Organizes debates, seminars, and workshops on Islamic legal issues.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Legal Aid Clinics</span>
                    <p className="text-sm text-gray-600">Provides legal assistance to community members.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Islamic Jurisprudence Forum</span>
                    <p className="text-sm text-gray-600">Promotes discussion on contemporary issues from an Islamic legal perspective.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Moot Court Competitions</span>
                    <p className="text-sm text-gray-600">Participates in mock trials and legal competitions.</p>
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
                    <p className="text-sm text-gray-600">Attend seminars by leading researchers in Sharia and Law.</p>
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

        <div className="bg-gradient-to-r from-[#64b5f6] to-[#64b5f6] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Integrate Faith and Law?</h3>
          <p className="mb-6">Join our Faculty of Sharia and Law and become a leader in ethical legal practice.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}