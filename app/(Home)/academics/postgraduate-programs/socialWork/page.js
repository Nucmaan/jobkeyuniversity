"use client";
import React from 'react';
import Link from 'next/link';

export default function SocialWorkPage() {
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
          <h1 className="text-4xl font-bold mb-4">Master of Social Work</h1>
          <p className="text-xl">Empowering Change and Promoting Social Justice</p>
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
              onClick={() => scrollToSection('fieldwork')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Field Education
            </button>
            <button
              onClick={() => scrollToSection('curriculum')}
              className="bg-[#33d1ff] text-white border border-[#33d1ff] font-medium py-2 px-6 rounded-md mr-2 hover:bg-[#33d1ff] transition-all"
            >
              Curriculum
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
                The Master of Social Work (MSW) at JobKey University prepares students to become skilled, ethical, 
                and culturally responsive practitioners dedicated to advancing social justice and serving diverse 
                populations. Our CSWE-accredited program emphasizes both clinical practice and community-based intervention.
              </p>
              <p className="mb-4">
                Through rigorous coursework and extensive field education, students develop advanced skills in assessment, 
                intervention, advocacy, and policy practice. Our distinguished faculty brings real-world experience in diverse 
                practice settings and engages in innovative research addressing pressing social challenges.
              </p>
              <p className="mb-4">
                Graduates are prepared for licensure and careers across a wide range of settings, including healthcare, 
                mental health, child welfare, schools, and community development organizations.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Program Options</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#5b21b6] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-medium">Traditional MSW</span>
                    <p className="text-sm text-gray-600">60 credits, 2 years full-time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5b21b6] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-medium">Advanced Standing</span>
                    <p className="text-sm text-gray-600">36 credits, 1 year (for BSW graduates)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5b21b6] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-medium">Part-Time Option</span>
                    <p className="text-sm text-gray-600">3-4 years completion time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#5b21b6] mr-2 font-bold">•</span>
                  <div>
                    <span className="font-medium">Online/Hybrid Format</span>
                    <p className="text-sm text-gray-600">Flexible learning options</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="specializations" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">AREAS OF SPECIALIZATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33d1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#33d1ff]">Clinical Social Work</h3>
              <p className="text-sm text-gray-700 mb-4">
                Develop advanced clinical skills for assessment and intervention with individuals, 
                families, and groups. Focus on therapeutic approaches, trauma-informed care, and evidence-based practices.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Therapist, Clinical Social Worker, Behavioral Health Specialist
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33d1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#33d1ff]">Community Practice & Social Development</h3>
              <p className="text-sm text-gray-700 mb-4">
                Prepare for macro-level interventions focused on community organizing, program development, 
                social policy advocacy, and systems change to address structural inequities.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Community Organizer, Policy Advocate, Program Director
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33d1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#33d1ff]">Child, Youth & Family Services</h3>
              <p className="text-sm text-gray-700 mb-4">
                Specialize in working with children, adolescents, and families in various settings including child welfare, 
                schools, and family service agencies with a focus on strengths-based interventions.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Child Welfare Specialist, School Social Worker, Family Therapist
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33d1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#33d1ff]">Health & Mental Health</h3>
              <p className="text-sm text-gray-700 mb-4">
                Prepare for practice in healthcare settings with focus on integrated healthcare, chronic illness, 
                psychiatric services, substance use disorders, and crisis intervention.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Medical Social Worker, Mental Health Clinician, Substance Abuse Counselor
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33d1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#33d1ff]">Global Social Work</h3>
              <p className="text-sm text-gray-700 mb-4">
                Focus on international social work, human rights, global social development, refugee services, 
                and cross-cultural practice for work in international contexts.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: International Aid Worker, Refugee Services Coordinator, Human Rights Advocate
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#33d1ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#33d1ff]">Aging & Gerontology</h3>
              <p className="text-sm text-gray-700 mb-4">
                Develop expertise in working with older adults and their families, focusing on healthcare coordination, 
                long-term care, cognitive impairment, end-of-life care, and elder justice.
              </p>
              <p className="text-xs text-gray-500">
                Career paths: Geriatric Social Worker, Hospice Social Worker, Adult Protective Services
              </p>
            </div>
          </div>
        </section>

        <section id="fieldwork" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">FIELD EDUCATION</h2>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border border-purple-100 mb-8">
            <p className="mb-6">
              Field education is the signature pedagogy of social work education. Our program provides 
              extensive supervised field placements that integrate classroom learning with real-world practice 
              experience. Students complete 900+ hours of field education across diverse settings.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Field Placement Settings</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#5b21b6] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Hospitals & Healthcare Systems</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Mental Health Clinics</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Child Welfare Agencies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Schools & Educational Settings</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Community Organizations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Government Agencies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Correctional Facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                    <div>
                      <p className="font-medium">Aging Services</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-[#33d1ff]">Field Education Structure</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Foundation Year</h4>
                    <p className="text-sm text-gray-600 mb-2">400 hours of generalist practice (16 hours/week)</p>
                    <div className="bg-purple-50 p-3 rounded text-sm">
                      Focus on developing core social work competencies across micro, mezzo, and macro levels of practice
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Advanced Year</h4>
                    <p className="text-sm text-gray-600 mb-2">500 hours in specialized area (20 hours/week)</p>
                    <div className="bg-purple-50 p-3 rounded text-sm">
                      Concentration-specific placement aligned with career goals and specialization track
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">Field Seminar</h4>
                    <p className="text-sm text-gray-600 mb-2">Concurrent weekly seminar course</p>
                    <div className="bg-purple-50 p-3 rounded text-sm">
                      Integration of theory and practice with faculty guidance and peer support
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="curriculum" className="mb-16 scroll-mt-32">
          <h2 className="text-3xl font-bold mb-6 text-[#33d1ff]">CURRICULUM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Foundation Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Human Behavior & Social Environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Social Welfare Policy & Services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Research Methods in Social Work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Generalist Social Work Practice I & II</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Diversity & Social Justice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Foundation Field Practicum & Seminar</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-[#33d1ff]">Advanced Courses</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Advanced Social Work Practice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Advanced Policy Analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Program Evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Specialization-specific courses (3-4)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Electives (2-3)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#33d1ff] mr-2 font-bold">•</span>
                  <span>Advanced Field Practicum & Seminar</span>
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
                <li>Bachelor degree from an accredited institution</li>
                <li>Minimum GPA of 3.0 on a 4.0 scale</li>
                <li>Personal statement addressing motivation and goals</li>
                <li>Resume detailing relevant experience and service</li>
                <li>Three letters of recommendation</li>
                <li>Statistics course prerequisite</li>
                <li>Background in social sciences recommended</li>
              </ul>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-[#33d1ff] mb-2">Advanced Standing Eligibility</h4>
                <p className="text-sm">
                  BSW degree from a CSWE-accredited program within the last 5 years with a minimum 3.3 GPA
                  in social work courses and strong field evaluations.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Details</h3>
              <table className="min-w-full">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Traditional MSW</td>
                    <td className="py-2">60 credits (2 years full-time)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Advanced Standing</td>
                    <td className="py-2">36 credits (1 year full-time)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Tuition (Full Program)</td>
                    <td className="py-2">$38,400 (traditional) / $3,040 (advanced)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Fee</td>
                    <td className="py-2">$60</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Application Deadlines</td>
                    <td className="py-2">January 15 (Priority), March 1 (Final)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Start Date</td>
                    <td className="py-2">Fall semester (August)</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-gray-600">Graduate assistantships, scholarships, and federal financial aid available.</p>
            </div>
          </div>
        </section>

        <div className="bg-[#33d1ff] p-8 rounded-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Begin Your Journey as a Social Work Professional</h3>
          <p className="mb-6">Join our Master of Social Work program to develop the skills needed to empower individuals and communities and create positive social change.</p>
          <Link href="/admissions/apply" className="inline-block bg-white text-[#33d1ff] font-medium py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
