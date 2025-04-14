"use client"
import React from "react";
 
const programs = [
  {
    id: 1,
    title: "Diploma in International Trade & Maritime Law",
    description: "Study international trade regulations and maritime law to navigate global commerce and shipping legislation."
  },
  {
    id: 2,
    title: "Diploma in Civil Law",
    description: "Master civil law principles and practices for a career in legal practice and consultation."
  },
  {
    id: 3,
    title: "Diploma in Tax and Legal Studies",
    description: "Explore tax systems and legal frameworks for law practice."
  },
  {
    id: 4,
    title: "Diploma in Biology & Chemistry",
    description: "Advance your knowledge in life sciences and chemical studies for research and industry applications."
  },
  {
    id: 5,
    title: "Diploma in Physics & Math",
    description: "Study advanced physics and mathematical concepts and their applications."
  },
  {
    id: 6,
    title: "Diploma in Environmental Law",
    description: "Specialize in environmental legislation and policy making for sustainable development."
  },
  {
    id: 7,
    title: "Diploma in Climate Change",
    description: "Study climate science and environmental impact assessment."
  },
  {
    id: 8,
    title: "Diploma in Environmental Economics",
    description: "Learn about economic aspects of environmental management."
  },
  {
    id: 9,
    title: "Diploma in Digital Marketing & Business Develop",
    description: "Master digital marketing strategies and business development."
  },
  {
    id: 10,
    title: "Diploma in History & Geography",
    description: "Study historical events and geographical concepts."
  },
  {
    id: 11,
    title: "Diploma in Logistics & Supply Chain MGT",
    description: "Master the complexities of modern logistics and supply chain management."
  },
  {
    id: 12,
    title: "Diploma in Monitoring And Evaluation",
    description: "Learn project monitoring and evaluation techniques."
  },
  {
    id: 13,
    title: "Diploma in Rural Development",
    description: "Study rural development strategies and community empowerment."
  },
  {
    id: 14,
    title: "Diploma in Humanitarian & Development Studies",
    description: "Explore humanitarian assistance and development frameworks."
  },
  {
    id: 15,
    title: "Diploma in Operations Management",
    description: "Master business operations and process optimization."
  },
  {
    id: 16,
    title: "Diploma in Education",
    description: "Develop teaching methodologies and educational practices."
  },
  {
    id: 17,
    title: "Diploma in Educational Psychology",
    description: "Study psychological principles in educational settings."
  },
  {
    id: 18,
    title: "Diploma in Sustainable Development",
    description: "Learn sustainable development practices and environmental conservation."
  },
  {
    id: 19,
    title: "Diploma in Peace & Conflict Resolution",
    description: "Study conflict resolution and peace-building strategies."
  },
  {
    id: 20,
    title: "Diploma in Laboratory Management",
    description: "Master laboratory operations and quality control procedures."
  },
  {
    id: 21,
    title: "Diploma in Communications and Media",
    description: "Study modern communication strategies and media management."
  },
  {
    id: 22,
    title: "Diploma in Entrepreneurship Development",
    description: "Develop business creation and management skills."
  },
  {
    id: 23,
    title: "Diploma in NGO Management",
    description: "Learn non-profit organization management strategies."
  },
  {
    id: 24,
    title: "Diploma in Multimedia Technology",
    description: "Master modern multimedia tools and technologies."
  },
  {
    id: 25,
    title: "Diploma in Banking and Finance",
    description: "Study banking operations and financial management."
  },
  {
    id: 26,
    title: "Diploma in HRM",
    description: "Learn human resource management principles and practices."
  },
  {
    id: 27,
    title: "Diploma in Public Administration",
    description: "Study public sector management and governance."
  },
  {
    id: 28,
    title: "Diploma in International Relations",
    description: "Analyze global politics and international diplomacy."
  },
  {
    id: 29,
    title: "Diploma in Political Science",
    description: "Study political systems and governance."
  },
  {
    id: 30,
    title: "Diploma in Project Planning and MGT",
    description: "Master project management methodologies."
  },
  {
    id: 31,
    title: "Diploma in Sharia wal Qanuun",
    description: "Study Islamic law principles and applications."
  }
];
 
export default function Page() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-[#33d1ff] overflow-hidden mb-5">
        <div className="absolute inset-0 bg-[#33d1ff]/90"></div>
        
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">Diploma Programs</h1>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Our Diploma Programs</h2>
          <div className="w-24 h-1 bg-[#33d1ff] mx-auto my-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enhance your career prospects with our comprehensive range of diploma programs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monthly</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {programs.map((program) => (
                <tr key={program.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{program.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{program.title}</div>
                    <div className="text-sm text-gray-500">{program.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">One Year</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">$30</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
