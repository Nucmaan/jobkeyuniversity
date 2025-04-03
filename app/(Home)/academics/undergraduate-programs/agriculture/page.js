"use client";
import React from 'react';
import Link from 'next/link';

export default function AgricultureVeterinaryPage() {
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
          <h1 className="text-4xl font-bold mb-4">Faculty of Agriculture and Veterinary Sciences</h1>
          <p className="text-xl">Cultivating Knowledge, Nurturing Life</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('dean-message')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              Dean Message
            </button>
            <button
              onClick={() => scrollToSection('programs')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection('entry-requirements')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              Entry Requirements
            </button>
            <button
              onClick={() => scrollToSection('fees')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              Fees
            </button>
            <button
              onClick={() => scrollToSection('staff')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              Faculty Members
            </button>
            <button
              onClick={() => scrollToSection('activities')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#87cde2] transition-all"
            >
              Activities
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <section id="about" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">ABOUT</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="mb-4">
                The Faculty of Agriculture and Veterinary Sciences is dedicated to advancing knowledge and practices in agriculture, animal health, and sustainable resource management.
                We strive to equip our students with the skills and expertise needed to address the challenges facing the agricultural and veterinary sectors.
              </p>
              <p className="mb-4">
                Our faculty combines academic rigor with practical experience, providing students with hands-on learning opportunities through field studies, laboratory work,
                and industry collaborations. We are committed to fostering innovation and sustainable solutions for the future of agriculture and veterinary science.
              </p>
              <p className="mb-4">
                Our programs are designed to meet the growing demand for professionals who can contribute to food security, animal welfare, and environmental sustainability.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive curriculum covering agriculture and veterinary sciences</li>
                <li>Experienced faculty with expertise in diverse fields</li>
                <li>State-of-the-art laboratories and field facilities</li>
                <li>Opportunities for research and industry internships</li>
                <li>Focus on sustainable and innovative practices</li>
                <li>Strong emphasis on animal health and welfare</li>
                <li>Dedicated career counseling and placement services</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="dean-message" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">DEAN MESSAGE</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Dean Photo</div>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="italic text-gray-600 mb-4">
                Welcome to the Faculty of Agriculture and Veterinary Sciences. We are committed to providing a transformative educational experience that prepares our students
                to lead and innovate in the fields of agriculture and veterinary science.
              </p>
              <p className="mb-4">
                Our faculty is dedicated to advancing sustainable agricultural practices and ensuring the health and well-being of animals. We strive to create a learning
                environment that fosters critical thinking, problem-solving, and a deep understanding of the interconnectedness of agriculture and veterinary science.
              </p>
              <p className="mb-4">
                We are proud of our strong partnerships with industry leaders and research institutions, which provide our students with valuable opportunities to apply
                their knowledge and contribute to real-world solutions.
              </p>
              <p className="font-semibold mt-4">Prof. Aisha Farah, PhD</p>
              <p className="text-sm text-gray-600">Dean, Faculty of Agriculture and Veterinary Sciences</p>
            </div>
          </div>
        </section>

        <section id="programs" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">PROGRAMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Principles of Crop Production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Animal Physiology and Nutrition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Soil Science and Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Veterinary Anatomy and Pathology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Agricultural Economics and Marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Sustainable Agriculture and Resource Management</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Crop Science and Biotechnology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Animal Health and Production</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Food Science and Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Veterinary Medicine and Surgery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Agribusiness Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Environmental Agriculture</span>
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
              <li>High school diploma or equivalent</li>
              <li>Minimum GPA of 3.0 on a 4.0 scale</li>
              <li>Strong background in biology and chemistry</li>
              <li>Basic computer literacy</li>
              <li>English proficiency (TOEFL score of 80+ or IELTS score of 6.5+)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Application Process</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Complete the online application form</li>
              <li>Submit all required documents (transcripts, ID, etc.)</li>
              <li>Pay the application fee</li>
              <li>Attend an entrance examination (biology, chemistry, and logical reasoning)</li>
              <li>Participate in an interview (for shortlisted candidates)</li>
            </ol>
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
                  <td className="py-3 px-4 font-medium">Application Fee</td>
                  <td className="py-3 px-4">$50</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Tuition Fee</td>
                  <td className="py-3 px-4">$3,000</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Registration Fee</td>
                  <td className="py-3 px-4">$100</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Laboratory Fee</td>
                  <td className="py-3 px-4">$200</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Field Study Fee</td>
                  <td className="py-3 px-4">$150</td>
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
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Prof. Omar Hassan, PhD</h3>
                <p className="text-sm text-gray-600">Department Chair</p>
              </div>
              <p className="text-sm text-center">Specialization in Crop Science and Biotechnology</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Amina Yusuf, PhD</h3>
                <p className="text-sm text-gray-600">Associate Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Animal Health and Production</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Ahmed Ali, PhD</h3>
                <p className="text-sm text-gray-600">Assistant Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Veterinary Medicine and Surgery</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Fatima Mohamed, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Sustainable Agriculture</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Khalid Ibrahim, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Agribusiness Management</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Safia Nur, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Food Science and Technology</p>
            </div>
          </div>
        </section>

        <section id="activities" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">ACTIVITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Student Activities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Agriculture Club</span>
                    <p className="text-sm text-gray-600">Organizes field trips, workshops, and seminars on agricultural practices.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Veterinary Science Society</span>
                    <p className="text-sm text-gray-600">Conducts animal health awareness campaigns and veterinary clinics.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Sustainable Agriculture Forum</span>
                    <p className="text-sm text-gray-600">Promotes sustainable farming practices and environmental conservation.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Food Technology Workshops</span>
                    <p className="text-sm text-gray-600">Offers hands-on training in food processing and preservation.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Research Opportunities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Undergraduate Research Program</span>
                    <p className="text-sm text-gray-600">Engage in research projects with faculty mentors.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research Seminars</span>
                    <p className="text-sm text-gray-600">Attend seminars by leading researchers in agriculture and veterinary science.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Publication Opportunities</span>
                    <p className="text-sm text-gray-600">Publish research findings in academic journals.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research Labs and Field Stations</span>
                    <p className="text-sm text-gray-600">Access to well-equipped research facilities.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#33d1ff] to-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Cultivate Your Future?</h3>
          <p className="mb-6">Join our Faculty of Agriculture and Veterinary Sciences and contribute to a sustainable and thriving world.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}