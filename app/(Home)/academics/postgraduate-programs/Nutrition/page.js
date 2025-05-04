"use client";
import React from 'react';
import Link from 'next/link';

export default function NutritionPage() {
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
          <h1 className="text-4xl font-bold mb-4">Master of Nutrition and Dietetics</h1>
          <p className="text-xl">Transforming Health Through Nutrition Science</p>
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
              onClick={() => scrollToSection('facilities')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Facilities
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
                The Master of Nutrition and Dietetics program at JobKey University prepares graduates to become leaders in 
                nutrition science and dietetic practice. Our program combines advanced scientific knowledge with practical 
                clinical skills to address contemporary health challenges through evidence-based nutrition interventions.
              </p>
              <p className="mb-4">
                Students gain expertise in nutritional assessment, medical nutrition therapy, public health nutrition, 
                and food service management. Our curriculum emphasizes critical thinking, research methodology, and 
                effective communication to prepare graduates for diverse career paths in healthcare, community settings, 
                food industry, and research.
              </p>
              <p className="mb-4">
                Upon completion, graduates are eligible to apply for credentialing as Registered Dietitian Nutritionists, 
                positioning them for impactful careers promoting health and preventing disease through nutrition.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Highlights</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Accredited by the Accreditation Council for Education in Nutrition and Dietetics</li>
                <li>1200+ supervised practice hours in diverse settings</li>
                <li>State-of-the-art nutrition assessment lab</li>
                <li>Community nutrition outreach programs</li>
                <li>Research opportunities with faculty mentors</li>
                <li>International nutrition study options</li>
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
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Advanced Nutritional Biochemistry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Medical Nutrition Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Nutrition Assessment Techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Public Health Nutrition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Food Service Systems Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Research Methods in Nutrition</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Practicum Rotations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Clinical Dietetics (Acute Care)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Long-term Care Nutrition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Community and Public Health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Food Service Administration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Specialty Practice (Pediatrics, Oncology, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <span>Research or Entrepreneurship</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="facilities" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">FACILITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Nutrition Assessment Lab</h3>
              <p className="text-sm text-gray-700">
                Our state-of-the-art lab features advanced body composition analysis equipment, metabolic testing devices, 
                and dietary analysis software for comprehensive nutritional assessment training.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Food Science Kitchen</h3>
              <p className="text-sm text-gray-700">
                A professional teaching kitchen equipped for food modification, therapeutic meal preparation, and 
                food science experiments to develop practical culinary skills for medical nutrition therapy.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold mb-4 text-[#33d1ff]">Simulation Center</h3>
              <p className="text-sm text-gray-700">
                Clinical simulation facilities allow students to practice patient counseling, medical team interactions, 
                and nutrition intervention planning in realistic healthcare scenarios before entering clinical rotations.
              </p>
            </div>
          </div>
        </section>

        <section id="careers" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">CAREER OPPORTUNITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Clinical Nutrition</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Clinical Dietitian</span>
                    <p className="text-sm text-gray-600">Hospitals, outpatient clinics, long-term care facilities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Specialist Dietitian</span>
                    <p className="text-sm text-gray-600">Diabetes, oncology, pediatrics, renal, sports nutrition</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Nutrition Support Dietitian</span>
                    <p className="text-sm text-gray-600">Critical care, enteral and parenteral nutrition</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Non-Clinical Careers</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Public Health Nutritionist</span>
                    <p className="text-sm text-gray-600">Government agencies, community programs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Food Industry Professional</span>
                    <p className="text-sm text-gray-600">Product development, regulatory affairs, marketing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Private Practice/Consultant</span>
                    <p className="text-sm text-gray-600">Individual counseling, corporate wellness</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#059669] mr-2">•</span>
                  <div>
                    <span className="font-medium">Research & Academia</span>
                    <p className="text-sm text-gray-600">Universities, research institutes, industry research</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="admissions" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">ADMISSIONS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Requirements</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>Bachelor degree in Nutrition, Dietetics, or related field</li>
                <li>Prerequisite coursework: Anatomy & Physiology, Biochemistry, Microbiology, Nutrition Science</li>
                <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                <li>Personal statement outlining career goals</li>
                <li>Two letters of recommendation</li>
                <li>Resume/CV with relevant experience</li>
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
                    <td className="py-2">60 credits + 1200 practicum hours</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Total)</td>
                    <td className="py-2">$6,000</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$70</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Start Date</td>
                    <td className="py-2">Fall Semester</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Deadline</td>
                    <td className="py-2">February 1</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Graduate assistantships and scholarships available for qualified applicants.</p>
            </div>
          </div>
        </section>

        <div className="bg-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Become a Leader in Nutrition and Health</h3>
          <p className="mb-6">Join our Master of Nutrition and Dietetics program to transform lives through the power of nutrition.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
