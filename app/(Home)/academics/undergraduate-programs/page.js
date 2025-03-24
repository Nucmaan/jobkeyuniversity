import React from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    id: 1,
    title: "Agriculture & Veterinary Science",
    description:
      "Explore the world of sustainable farming, animal health, and food security.",
    image: "/agriculture.jpg", 
    pathLink : "/academics/undergraduate-programs/agriculture"
  },
  {
    id: 3,
    title: "Medicine & Health Science",
    description:
      "Develop the skills needed to save lives and improve healthcare systems.",
    image: "/medicine.jpg",
    pathLink : "/academics/undergraduate-programs/medicine"
  },
  {
    id: 4,
    title: "Computer Science & Engineering",
    description:
      "Dive into programming, AI, cybersecurity, and software development.",
    image: "/computer-science.jpg",
    pathLink : "/academics/undergraduate-programs/computer-science"

  },
  {
    id: 5,
    title: "Sharia & Law",
    description:
      "Study the principles of Islamic law and legal systems to build a just society.",
    image: "/law.jpg",
    pathLink : "/academics/undergraduate-programs/law"

  },
  {
    id: 2,
    title: "Economics & Management Science",
    description:
      "Gain expertise in finance, business management, and economic policies.",
    image: "/economics.jpg",
    pathLink : "/academics/undergraduate-programs/economics"

  }
];

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-20">
      <h1 className="text-3xl font-bold text-center text-[#33d1ff] mb-10">
        Undergraduate Programs
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
              src={program.image}
              alt={program.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">
                {program.title}
              </h2>
              <p className="text-gray-600 mt-2">{program.description}</p>
              <div className="mt-4 flex space-x-3">
                <Link href={program.pathLink}>
                <button className="px-4 py-2 bg-[#33d1ff] text-white rounded hover:bg-[#7ecce4]">
                  apply now
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
