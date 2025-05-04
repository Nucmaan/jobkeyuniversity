"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EducationPage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
      <div className="bg-gradient-to-r from-[#33d1ff] to-[#64b5f6] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Faculty of Education</h1>
          <p className="text-xl">Shaping Exceptional Educators for Tomorrow&apos;s World</p>
        </div>
      </div>

      <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button
              onClick={() => scrollToSection('about')}
              className="bg-[#64b5f6] text-white font-medium py-2 px-6 rounded-md mr-2 hover:bg-opacity-90 transition-all"
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
                The Faculty of Education is committed to preparing the next generation of outstanding teachers and educational leaders.
                We focus on developing well-rounded educators who combine theoretical knowledge with practical classroom skills.
              </p>
              <p className="mb-4">
                Our programs blend cutting-edge educational research with hands-on teaching experience, ensuring our graduates are ready
                to inspire and guide students in diverse educational settings. We emphasize inclusive teaching practices and innovative
                pedagogical approaches.
              </p>
              <p className="mb-4">
                We are dedicated to fostering a community of educators who are lifelong learners, critical thinkers, and advocates for
                educational excellence. Our graduates go on to transform lives through education in schools, communities, and beyond.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#64b5f6]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Comprehensive teacher preparation curriculum</li>
                <li>Extensive practical teaching experience</li>
                <li>Specialized tracks for different educational levels</li>
                <li>Focus on inclusive and technology-enhanced learning</li>
                <li>Emphasis on educational research and innovation</li>
                <li>Strong partnerships with local and international schools</li>
                <li>Career mentorship from experienced educators</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="dean-message" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#64b5f6]">DEAN MESSAGE</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src="/deanEducation.jpeg"
                  alt="Dean of Education Faculty"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 192px"
                  priority
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="italic text-gray-600 mb-4">
                Welcome to the Faculty of Education, where we are passionate about shaping the educators who will inspire future generations.
                Education is the foundation of society, and great teachers are the architects of change and progress.
              </p>
              <p className="mb-4">
                Our faculty is dedicated to providing a rich educational experience that combines theoretical understanding with practical skills.
                We believe in education that empowers, transforms, and creates a more just and equitable world.
              </p>
              <p className="mb-4">
                We invite you to join our community of learners and educators, where you will develop the skills, knowledge, and passion
                to make a lasting impact in the lives of students and communities.
              </p>
              <p className="font-semibold mt-4">mohamed haji ali</p>
              <p className="text-sm text-gray-600">Dean, Faculty of Education</p>
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
                  <span>Foundations of Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Educational Psychology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Curriculum Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Classroom Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Assessment and Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Teaching Methodologies</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Early Childhood Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Primary Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Secondary Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Special Education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Educational Technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <span>Educational Leadership</span>
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
              <li>Should bring secondary school one copy and original </li>
              <li>Should pass the test And Interview </li>
              <li>Should Bring 4 passport size photo</li>
              <li>Should Pay Registration Fee $35 dollar (not refundable ) </li>
              <li>should bring discipline and conduct later </li>
              <li>Any canididate who wants to learn medicine must have a minimum pass mark 80% in his/her secondary school leaving certificate  </li>
              <li>Any canididate who wants to learn Engineering must have a minimum pass mark 75% in his/her secondary school leaving certificate  </li>
            </ul>
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
                  <td className="py-3 px-4 font-medium">Registration Fee</td>
                  <td className="py-3 px-4">$35</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Tuition Fee</td>
                  <td className="py-3 px-4">$210</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Laboratory Fee</td>
                  <td className="py-3 px-4">$35</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
               
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Graduation Fee</td>
                  <td className="py-3 px-4">$360</td>
                  <td className="py-3 px-4">One-time payment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600">Fees are subject to change. Scholarships and financial aid available for eligible students.</p>
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
                    <span className="font-medium">Future Teachers Club</span>
                    <p className="text-sm text-gray-600">Provides leadership opportunities and professional development for aspiring teachers.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Educational Innovation Club</span>
                    <p className="text-sm text-gray-600">Explores new teaching methodologies and educational technologies.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Teaching Workshops</span>
                    <p className="text-sm text-gray-600">Regular hands-on sessions to practice and refine teaching skills.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Community Outreach Programs</span>
                    <p className="text-sm text-gray-600">Volunteer opportunities in local schools and educational centers.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#64b5f6]">Professional Development</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Teaching Practicums</span>
                    <p className="text-sm text-gray-600">Supervised teaching experiences in partner schools.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Education Conferences</span>
                    <p className="text-sm text-gray-600">Opportunities to attend and present at local and international education conferences.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Teaching Portfolio Development</span>
                    <p className="text-sm text-gray-600">Guidance on creating professional teaching portfolios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#64b5f6] mr-2">•</span>
                  <div>
                    <span className="font-medium">Certification Preparation</span>
                    <p className="text-sm text-gray-600">Support for national and international teaching certification requirements.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-r from-[#33d1ff] to-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Inspire Future Generations?</h3>
          <p className="mb-6">Join our Faculty of Education and become a transformative educator who makes a difference.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#1976d2] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
