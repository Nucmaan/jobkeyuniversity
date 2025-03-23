import React from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section className=" text-[#33d1ff] py-2 px-6">
      <div className=" p-5 rounded-sm container mx-auto max-w-4xl text-center">
         <h2 className="text-4xl font-bold mb-8">
         What Our & <span className="">Students Say</span>
        </h2>

         <div className="bg-white/20 p-6 border border-[#33d1ff] rounded-lg shadow-md flex flex-col items-center">
          <FaQuoteLeft className="text-white text-4xl mb-4" />
          <p className="text-lg italic">
            "Jobkey University provided me with world-class education and the best opportunities. The diverse
            student community made learning more exciting!"
          </p>

           <div className="mt-6 flex items-center space-x-4">
            <Image
              src="/Nasri.jpeg"
              alt="Student Testimonial"
              width={60}
              height={60}
              className="rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-lg font-semibold">Nasri Abdi</h3>
              <p className="text-sm opacity-80">Graduate - Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
