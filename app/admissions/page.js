import React from "react";
import Image from "next/image"; 

export default function AdmissionPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen mt-24">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#33d1ff]">
          Welcome to Jobkey University Admissions
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Join a world-class institution and shape your future with us.
        </p>
      </header>

      <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          Why Choose Our University?
        </h2>
        <p className="mt-2 text-gray-600 leading-relaxed">
          Our university offers a vibrant learning environment with
          state-of-the-art facilities, expert faculty, and global partnerships.
          We ensure students receive the highest quality education and a dynamic
          campus experience.
        </p>
      </section>

      <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          Admission Requirements
        </h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Completed online application form</li>
          <li>High school diploma or equivalent</li>
          <li>Official transcripts from previous institutions</li>
          <li>Personal statement or essay</li>
          <li>Letters of recommendation</li>
          <li>English proficiency test (for international students)</li>
        </ul>
      </section>

      <section className="mb-10 bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-semibold text-gray-800">
          Application Process
        </h2>
        <ol className="list-decimal list-inside mt-2 text-gray-600">
          <li>Submit the online application form</li>
          <li>Upload required documents</li>
          <li>Pay the application fee</li>
          <li>Attend an interview (if required)</li>
          <li>Receive admission decision</li>
          <li>Confirm your enrollment</li>
        </ol>
      </section>

      <section className="mb-10 bg-white p-6 rounded-lg ">
        <h2 className="text-2xl font-semibold text-gray-800">
          Scholarships & Financial Aid
        </h2>
        <p className="mt-2 text-gray-600">
          We offer various scholarships and financial aid options to support
          students. Merit-based, need-based, and international student
          scholarships are available.
        </p>
      </section>

      <section className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          Meet Our Admission Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <div className="text-center">
            <Image
              src="/Nasri.jpeg"
              alt="Admission Officer 1"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full shadow-md"
            />
            <h3 className="mt-3 font-bold text-[#33d1ff]">Nasri</h3>
            <p className="text-sm text-gray-500">Senior Admission Officer</p>
          </div>
          <div className="text-center">
            <Image
              src="/Nasri.jpeg"
              alt="Admission Officer 2"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full shadow-md"
            />
            <h3 className="mt-3 font-bold text-[#33d1ff]">Nasri</h3>
            <p className="text-sm text-gray-500">
              International Admissions Specialist
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/Nasri.jpeg"
              alt="Admission Officer 3"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full shadow-md"
            />
            <h3 className="mt-3 font-bold text-[#33d1ff]">Nasri</h3>
            <p className="text-sm text-gray-500">Financial Aid Advisor</p>
          </div>
        </div>
      </section>

      <section className="bg-[#33d1ff] text-white p-6 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-semibold">Contact Admissions Office</h2>
        <p className="mt-2 text-lg">
          For any inquiries, please reach out to our admissions team:
        </p>
        <p className="text-lg font-bold">Email: admissions@university.edu</p>
        <p className="text-lg font-bold">Phone: +123-456-7890</p>
      </section>
    </div>
  );
}
