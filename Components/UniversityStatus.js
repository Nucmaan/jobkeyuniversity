import React from "react";
import { FaUserGraduate, FaUsers, FaChalkboardTeacher, FaBook, FaUniversity, FaLayerGroup } from "react-icons/fa";

export default function UniversityStats() {
  const stats = [
    { icon: <FaUserGraduate className="text-4xl text-[#33d1ff]" />, number: "9,021", label: "Enrolled Learners" },
    { icon: <FaUsers className="text-4xl text-[#33d1ff]" />, number: "13,802", label: "Graduated Scholars" },
    { icon: <FaChalkboardTeacher className="text-4xl text-[#33d1ff]" />, number: "379", label: "Teaching Staff" },
    { icon: <FaLayerGroup className="text-4xl text-[#33d1ff]" />, number: "78", label: "Educational Tracks" },
    { icon: <FaBook className="text-4xl text-[#33d1ff]" />, number: "125,324", label: "Library Collection" },
    { icon: <FaUniversity className="text-4xl text-[#33d1ff]" />, number: "4", label: "Campuses" },
  ];

  return (
    <div className="container mx-auto max-w-4xl p-6 mb-10">
      <h2 className="text-4xl font-bold mb-10 text-[#33d1ff] text-center ">University Insights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-3">{stat.icon}</div>
            <p className="text-3xl font-bold text-gray-900">{stat.number}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
