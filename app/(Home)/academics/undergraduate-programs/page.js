import React from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Faculty of Agriculture and Veterinary Sciences",
    description:
      "Explore the world of sustainable farming, animal health, and food security.",
    image: "/agriculture.jpg", 
    pathLink : "/academics/undergraduate-programs/agriculture"
  },
  {
    id: 3,
    title: "Faculty of Medicine and Health Science",
    description:
      "Develop the skills needed to save lives and improve healthcare systems.",
    image: "/medicine.jpg",
    pathLink : "/academics/undergraduate-programs/medicine"
  },
  {
    id: 4,
    title: "Faculty of Computer Science And Engineering",
    description:
      "Dive into programming, AI, cybersecurity, and software development.",
    image: "/computer-science.jpg",
    pathLink : "/academics/undergraduate-programs/computer-science"
  },
  {
    id: 5,
    title: "Faculty of Sharia and Law",
    description:
      "Study the principles of Islamic law and legal systems to build a just society.",
    image: "/law.jpg",
    pathLink : "/academics/undergraduate-programs/law"
  },
  {
    id: 2,
    title: "Faculty of Economic and Management Science",
    description:
      "Gain expertise in finance, business management, and economic policies.",
    image: "/economics.jpg",
    pathLink : "/academics/undergraduate-programs/economics"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full bg-[#33d1ff] overflow-hidden mb-5">
        <div className="absolute inset-0 bg-[#33d1ff]/90"></div>
        
        <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">Undergraduate Programs</h1>
           
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Our Undergraduate Programs</h2>
          <div className="w-24 h-1 bg-[#33d1ff] mx-auto my-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your skills and expertise with our diverse range of master degree programs.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {program.title}
                </h2>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link href={program.pathLink}>
                  <button className="w-full px-6 py-3 bg-[#33d1ff] text-white rounded-lg font-semibold hover:bg-[#7ecce4] transition-colors duration-300">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
