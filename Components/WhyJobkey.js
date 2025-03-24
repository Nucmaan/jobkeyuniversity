import React from "react";
import { FaGlobe, FaDollarSign, FaUsers, FaMicroscope } from "react-icons/fa";

export default function WhyJobkey() {
  return (
    <section className="text-white pb-8 px-6">
      <div className="container mx-auto max-w-4xl text-center">
         <h2 className="text-4xl font-bold mb-8 text-[#33d1ff]">
          Why Choose <span className="">Jobkey University?</span>
        </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="flex items-center space-x-4 p-4 bg-[#33d1ff] rounded-lg shadow-md">
            <FaGlobe className="text-white text-3xl" />
            <span className="text-lg font-medium">Internationally recognized degrees</span>
          </div>

           <div className="flex items-center space-x-4 p-4 bg-[#33d1ff] rounded-lg shadow-md">
            <FaDollarSign className="text-white text-3xl" />
            <span className="text-lg font-medium">Affordable tuition fees</span>
          </div>

           <div className="flex items-center space-x-4 p-4 bg-[#33d1ff] rounded-lg shadow-md">
            <FaUsers className="text-white text-3xl" />
            <span className="text-lg font-medium">Diverse student community</span>
          </div>

           <div className="flex items-center space-x-4 p-4 bg-[#33d1ff] rounded-lg shadow-md">
            <FaMicroscope className="text-white text-3xl" />
            <span className="text-lg font-medium">Cutting-edge research opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
