import React from "react";
import Image from "next/image"; 

export default function page() {
  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen mt-24">
      <header className="text-center mb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff]/10 to-transparent rounded-full blur-3xl -z-10"></div>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#33d1ff] to-[#2b9fd1] mb-6 animate-fade-in">
          Welcome to Jobkey University Admissions
        </h1>
        <p className="text-2xl text-gray-600 mt-2 max-w-3xl mx-auto leading-relaxed">
          Join a world-class institution and shape your future with us.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#33d1ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Why Choose Our University?
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our university offers a vibrant learning environment with
            state-of-the-art facilities, expert faculty, and global partnerships.
            We ensure students receive the highest quality education and a dynamic
            campus experience.
          </p>
        </section>

        <section className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-opacity-90">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
            <span className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-[#33d1ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Admission Requirements
          </h2>
          <ul className="space-y-3">
            {[
              "Completed online application form",
              "High school diploma or equivalent",
              "Official transcripts from previous institutions",
              "Personal statement or essay",
              "Letters of recommendation",
              "English proficiency test (for international students)"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-600 text-lg group">
                <span className="w-6 h-6 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#33d1ff] group-hover:text-white transition-all duration-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mb-12 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-opacity-90">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-[#33d1ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </span>
          Application Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Submit the online application form",
            "Upload required documents",
            "Pay the application fee",
            "Attend an interview (if required)",
            "Receive admission decision",
            "Confirm your enrollment"
          ].map((step, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-[#33d1ff]/5 transition-all duration-300">
              <div className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-[#33d1ff]">{index + 1}</span>
              </div>
              <p className="text-gray-600 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 bg-gradient-to-br from-[#33d1ff] to-[#2b9fd1] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
          <span className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Scholarships & Financial Aid
        </h2>
        <p className="text-white/90 text-lg leading-relaxed">
          We offer various scholarships and financial aid options to support
          students. Merit-based, need-based, and international student
          scholarships are available.
        </p>
      </section>

      <section className="mb-12 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-opacity-90">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
          <span className="w-12 h-12 bg-[#33d1ff]/10 rounded-full flex items-center justify-center mr-4">
            <svg className="w-6 h-6 text-[#33d1ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </span>
          Meet Our Admission Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/Nasri.jpeg"
                  alt={`Admission Officer ${index}`}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">Nasri</h3>
                    <p className="text-white/90">
                      {index === 1 ? "Senior Admission Officer" : 
                       index === 2 ? "International Admissions Specialist" : 
                       "Financial Aid Advisor"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#33d1ff] to-[#2b9fd1] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Admissions Office</h2>
          <p className="text-xl text-white/90 mb-8">
            For any inquiries, please reach out to our admissions team:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a href="mailto:admissions@university.edu" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white text-lg font-medium">admissions@university.edu</span>
                </div>
              </div>
            </a>
            <a href="tel:+1234567890" className="group">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white text-lg font-medium">+123-456-7890</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
