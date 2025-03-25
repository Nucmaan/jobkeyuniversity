import React from 'react';

export default function Page() {
  return (
    <div className="p-6 max-w-7xl mx-auto  min-h-screen mt-24">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-[#33d1ff]">How to Apply</h1>
        <p className="text-lg text-gray-600 mt-2">Follow our step-by-step guide to successfully apply to our university.</p>
      </header>
      
      <section className="mb-10 bg-white p-6">
        <h2 className="text-2xl font-semibold text-gray-800">Application Process</h2>
        <ol className="list-decimal list-inside mt-2 text-gray-600">
          <li>Create an account on our online portal</li>
          <li>Fill out the application form with accurate details</li>
          <li>Upload the required documents</li>
          <li>Pay the application fee securely online</li>
          <li>Schedule an interview (if required)</li>
          <li>Receive an admission decision</li>
          <li>Confirm your enrollment and begin your journey</li>
        </ol>
      </section>
      
      <section className="mb-10 bg-white p-6 ">
        <h2 className="text-2xl font-semibold text-gray-800">Required Documents</h2>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Completed application form</li>
          <li>High school diploma or equivalent</li>
          <li>Official transcripts</li>
          <li>Personal statement</li>
          <li>Letters of recommendation</li>
          <li>Proof of English proficiency (if applicable)</li>
        </ul>
      </section>
      
      <section className="mb-10 bg-white p-6  text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Apply Now</h2>
        <p className="text-gray-600 mt-2">Click the button below to start your application process.</p>
        <button className="mt-4 px-6 py-3 bg-[#33d1ff] text-white text-lg font-bold rounded-lg shadow-lg hover:bg-blue-800">
          Start Application
        </button>
      </section>
      
      <section className="bg-[#33d1ff] text-white p-6  text-center">
        <h2 className="text-2xl font-semibold">Need Help?</h2>
        <p className="mt-2 text-lg">Our admissions team is here to assist you with any questions.</p>
        <p className="text-lg font-bold">Email: apply@university.edu</p>
        <p className="text-lg font-bold">Phone: +123-456-7890</p>
      </section>
    </div>
  );
}
