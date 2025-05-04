"use client";
import React from 'react';
import Link from 'next/link';

export default function page() {
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
          <h1 className="text-4xl font-bold mb-4">Master of Education and Teaching</h1>
          <p className="text-xl">Inspiring Educators, Transforming Lives</p>
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
              onClick={() => scrollToSection('specializations')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Specializations
            </button>
            <button
              onClick={() => scrollToSection('coursework')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#3b82f6] transition-all"
            >
              Coursework
            </button>
            <button
              onClick={() => scrollToSection('practicum')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Practicum
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
                The Master of Education and Teaching program at JobKey University prepares aspiring and current educators 
                to excel in diverse educational environments. Our comprehensive curriculum combines educational theory with 
                practical teaching strategies, emphasizing inclusive practices, innovative pedagogy, and educational leadership.
              </p>
              <p className="mb-4">
                Students engage in research-based coursework, hands-on teaching experiences, and collaborative learning 
                communities. Our program is designed to develop reflective practitioners who can respond effectively to 
                the evolving needs of students and educational systems in the 21st century.
              </p>
              <p className="mb-4">
                Graduates emerge as transformative educators equipped to inspire learning, implement evidence-based 
                teaching methods, and lead positive change in schools and communities.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Nationally accredited teacher preparation program</li>
                <li>Multiple specialization options</li>
                <li>Supervised teaching practicum</li>
                <li>Education technology integration</li>
                <li>Research opportunities in education</li>
                <li>Strong school district partnerships</li>
                <li>Career placement services</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="specializations" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">SPECIALIZATIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#1d4ed8]">Elementary Education</h3>
              <p className="text-sm text-gray-700 mb-4">
                Prepare to teach multiple subjects in elementary school settings with a focus on child development, 
                literacy foundations, and engaging instructional strategies for young learners.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Grades K-6</span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Multiple Subjects</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#1d4ed8]">Secondary Education</h3>
              <p className="text-sm text-gray-700 mb-4">
                Develop expertise in teaching specific subject areas at the middle and high school levels, with 
                emphasis on adolescent development, subject-specific pedagogy, and student engagement.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Grades 7-12</span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Subject-Specific</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#1d4ed8]">Special Education</h3>
              <p className="text-sm text-gray-700 mb-4">
                Gain specialized knowledge to support diverse learners with exceptionalities through inclusive practices, 
                individualized instruction, and collaborative approaches to educational intervention.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">All Grade Levels</span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Inclusive Education</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#1d4ed8]">Educational Leadership</h3>
              <p className="text-sm text-gray-700 mb-4">
                Develop skills for administrative and leadership roles in educational settings, focusing on school management, 
                instructional leadership, education policy, and organizational development.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Administration</span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Leadership</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#1d4ed8]">Curriculum & Instruction</h3>
              <p className="text-sm text-gray-700 mb-4">
                Focus on curriculum design, instructional methods, and assessment practices to enhance student learning 
                outcomes across educational contexts and subject areas.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Curriculum Design</span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Instructional Methods</span>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#1d4ed8]">Educational Technology</h3>
              <p className="text-sm text-gray-700 mb-4">
                Learn to integrate digital tools and technologies to enhance teaching and learning experiences, prepare 
                students for the digital age, and design innovative learning environments.
              </p>
              <div className="text-xs text-gray-500">
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">Digital Learning</span>
                <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 mr-2 mb-2">EdTech Integration</span>
              </div>
            </div>
          </div>
        </section>

        <section id="coursework" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">COURSEWORK</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#1d4ed8]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Foundations of Educational Theory</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Child Development and Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Curriculum Design and Assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Inclusive Education Practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Educational Research Methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Classroom Management Strategies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#1d4ed8]">Elective Areas</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Literacy and Language Acquisition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>STEM Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Social-Emotional Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Multicultural Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Educational Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1d4ed8] mr-2">•</span>
                  <span>Technology in Education</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="practicum" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">TEACHING PRACTICUM</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-6">
              All students in the Master of Education and Teaching program complete a supervised teaching practicum in 
              real classroom settings. This essential component provides hands-on experience applying educational theories 
              and teaching methods in authentic learning environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Practicum Features</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>16 weeks of supervised teaching experience</li>
                  <li>Placement in partner schools aligned with specialization</li>
                  <li>Mentoring from experienced cooperating teachers</li>
                  <li>Regular observation and feedback from university supervisors</li>
                  <li>Gradual assumption of full teaching responsibilities</li>
                  <li>Professional development seminars during practicum</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Practicum Benefits</h3>
                <ul className="list-disc pl-5 space-y-3">
                  <li>Apply theoretical knowledge in real classrooms</li>
                  <li>Develop and refine teaching skills</li>
                  <li>Build professional portfolio of teaching artifacts</li>
                  <li>Establish connections with schools and potential employers</li>
                  <li>Receive mentoring from experienced educators</li>
                  <li>Fulfill requirements for teacher licensure</li>
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
                <li>Statement of teaching philosophy</li>
                <li>Two letters of recommendation</li>
                <li>Resume/CV highlighting relevant experience</li>
                <li>Background check (for teaching practicum)</li>
                <li>Interview (for shortlisted candidates)</li>
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
                    <td className="py-2">36 credits + practicum</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Total)</td>
                    <td className="py-2">$5,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$45</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Start Dates</td>
                    <td className="py-2">Fall and Spring semesters</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Delivery Format</td>
                    <td className="py-2">On-campus, hybrid options</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Teacher education scholarships and financial aid available for qualified applicants.</p>
            </div>
          </div>
        </section>

        <div className="bg-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Become an Inspiring Educator</h3>
          <p className="mb-6">Join our Master of Education and Teaching program to shape the future through exceptional teaching.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
