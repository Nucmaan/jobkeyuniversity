import React from "react";

export default function OurPrograms() {
  const programs = [
    {
      title: "Diploma Programs",
      description:
        "Our diploma programs provide foundational knowledge and practical skills in various fields to prepare students for career advancement.",
    },
    {
      title: "Undergraduate Programs",
      description:
        "Explore our diverse undergraduate programs designed to equip students with in-depth knowledge and critical thinking skills.",
    },
    {
      title: "Postgraduate Programs",
      description:
        "Advance your career with our postgraduate programs, offering specialized education and research opportunities.",
    },
    {
      title: "PhD Programs",
      description:
        "Pursue cutting-edge research and contribute to knowledge in your field with our PhD programs.",
    },
  ];

  return (
    <div className="pb-12 pt-5 px-6">
       <h2 className="text-3xl font-bold text-[#33d1ff] text-center mb-8">
       Academic Programs
      </h2>

       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#33d1ff]"
          >
            <h3 className="text-xl font-semibold">{program.title}</h3>
            <p className="mt-2 text-sm">{program.description}</p>
            <button className="mt-4 bg-[#33d1ff] text-white px-4 py-2 rounded-lg hover:opacity-80 transition-all">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
