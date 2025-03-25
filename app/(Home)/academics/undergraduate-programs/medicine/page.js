"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ComputerSciencePage() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white py-8 mt-20">
       <div className="bg-gradient-to-r from-[#3ac4ee] to-[#33d1ff] py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Faculty of Medicine and Health Science</h1>
          <p className="text-xl">Training the next generation of healthcare leaders</p>
        </div>
      </div>

       <div className="sticky top-[72px] z-10 bg-white shadow-md">
        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="flex whitespace-nowrap py-2 px-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className="bg-[#33d1ff] text-white font-medium py-2 px-6 rounded-md mr-2 hover:bg-opacity-90 transition-all"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('dean-message')} 
              className="bg-white text-[#33d1ff] border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Dean Message
            </button>
            <button 
              onClick={() => scrollToSection('programs')} 
              className="bg-white text-[#33d1ff] border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('entry-requirements')} 
              className="bg-white text-[#33d1ff] border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Entry Requirements
            </button>
            <button 
              onClick={() => scrollToSection('fees')} 
              className="bg-white text-[#33d1ff] border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Fees
            </button>
            <button 
              onClick={() => scrollToSection('staff')} 
              className="bg-white text-[#33d1ff] border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
            >
              Faculty Members
            </button>
            <button 
              onClick={() => scrollToSection('activities')} 
              className="bg-white text-[#33d1ff] border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-gray-50 transition-all"
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
            Established in 1995, the Faculty of Medicine and Health Science has been at the forefront of medical 
            education and research. Our faculty combines rigorous academic training with hands-on clinical 
            experience to prepare students for diverse careers in healthcare.
          </p>
          <p className="mb-4">
            With state-of-the-art simulation labs, teaching hospitals partnerships, and a curriculum that 
            emphasizes both clinical excellence and compassionate care, we train physicians and healthcare 
            professionals who make a difference in communities worldwide.
          </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
              <li>5-year MBBS program</li>
              <li>Clinical rotations from year 3</li>
              <li>Integrated problem-based learning</li>
              <li>Advanced simulation training</li>
              <li>Global health opportunities</li>
              <li>Research-focused curriculum</li>
              <li>Residency preparation programs</li>
              </ul>
            </div>
          </div>
        </section>

         <section id="dean-message" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">DEAN'S MESSAGE</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gray-200">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400">Dean Photo</div>
              </div>
            </div>
            <div className="md:w-3/4">
            <p className="italic text-gray-600 mb-4">
            "Welcome to our renowned Faculty of Medicine and Health Science. In an era of rapid medical 
            advancements, we remain committed to training physicians who combine scientific excellence 
            with humanistic care."
          </p>
          <p className="mb-4">
          Our curriculum integrates basic sciences with clinical skills from the first year, using 
          cutting-edge simulation technology and early patient contact. We emphasize evidence-based 
          practice while maintaining focus on the art of healing.
        </p>
              <p className="mb-4">
                Our distinguished faculty brings a wealth of expertise from diverse areas of computer science, and our state-of-the-art 
                facilities provide an ideal environment for learning and research. We maintain strong partnerships with industry leaders, 
                offering our students valuable internship opportunities and ensuring our curriculum remains relevant to market demands.
              </p>
              <p className="font-semibold mt-4">Prof. Emily Watson, MD, PhD</p>
              <p className="text-sm text-gray-600">Dean, Faculty of Medicine and Health Science</p>
            </div>
          </div>
        </section>

         <section id="programs" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">PROGRAMS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Core Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>MBBS (Bachelor of Medicine, Bachelor of Surgery)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>BSc in Nursing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Doctor of Pharmacy (PharmD)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Master of Public Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>BSc in Biomedical Sciences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Doctor of Physical Therapy</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Specialization Tracks</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Cardiology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Cybersecurity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Pediatrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Oncology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Neurology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Orthopedic Surgery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <span>Emergency Medicine</span>
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
              <li>Strong background in mathematics (especially algebra and calculus)</li>
              <li>Basic computer literacy</li>
              <li>English proficiency (TOEFL score of 80+ or IELTS score of 6.5+)</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-4">Application Process</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>Complete the online application form</li>
              <li>Submit all required documents (transcripts, ID, etc.)</li>
              <li>Pay the application fee</li>
              <li>Attend an entrance examination (mathematics and logical reasoning)</li>
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
                  <td className="py-3 px-4">$3,500</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Registration Fee</td>
                  <td className="py-3 px-4">$100</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-3 px-4 font-medium">Laboratory Fee</td>
                  <td className="py-3 px-4">$250</td>
                  <td className="py-3 px-4">Per semester</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Library Fee</td>
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
          <p className="mt-4 text-sm text-gray-600"> Fees are subject to change. Scholarships and financial aid available for eligible students.</p>
        </section>

         <section id="staff" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">Faculty Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Prof. Sarah Johnson, PhD</h3>
                <p className="text-sm text-gray-600">Department Chair</p>
              </div>
              <p className="text-sm text-center">Specialization in Artificial Intelligence and Machine Learning</p>
            </div>
            
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Ahmed Hassan, PhD</h3>
                <p className="text-sm text-gray-600">Associate Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Cybersecurity and Network Systems</p>
            </div>
            
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Fatima Ali, PhD</h3>
                <p className="text-sm text-gray-600">Assistant Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Software Engineering and Database Systems</p>
            </div>
            
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. David Chen, PhD</h3>
                <p className="text-sm text-gray-600">Assistant Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Data Science and Big Data Analytics</p>
            </div>
            
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. Aisha Mohamed, PhD</h3>
                <p className="text-sm text-gray-600">Assistant Professor</p>
              </div>
              <p className="text-sm text-center">Specialization in Human-Computer Interaction and UX Design</p>
            </div>
            
             <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 mb-4"></div>
                <h3 className="text-lg font-semibold">Dr. John Smith, PhD</h3>
                <p className="text-sm text-gray-600">Lecturer</p>
              </div>
              <p className="text-sm text-center">Specialization in Web and Mobile Application Development</p>
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
                    <span className="font-medium">Computer Science Club</span>
                    <p className="text-sm text-gray-600">Weekly meetups for coding challenges, tech talks, and workshops</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Hackathons</span>
                    <p className="text-sm text-gray-600">Annual coding competitions with industry partners</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Tech Conferences</span>
                    <p className="text-sm text-gray-600">Opportunity to attend and present at local and international conferences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Industry Field Trips</span>
                    <p className="text-sm text-gray-600">Visits to tech companies and research centers</p>
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
                    <p className="text-sm text-gray-600">Work with faculty on cutting-edge research projects</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research Seminars</span>
                    <p className="text-sm text-gray-600">Weekly seminars featuring faculty and guest speakers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Publication Opportunities</span>
                    <p className="text-sm text-gray-600">Support for students to publish their research work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research Labs</span>
                    <p className="text-sm text-gray-600">Access to specialized research laboratories</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

         <div className="bg-gradient-to-r from-[#010fc0] to-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start Your Medical Journey</h3>
          <p className="mb-6">Join our prestigious medical programs and make a difference in healthcare</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
