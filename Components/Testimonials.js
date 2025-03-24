"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      quote: "Jobkey University provided me with world-class education and the best opportunities. The diverse student community made learning more exciting!",
      name: "Nasri Abdi",
      role: "Graduate - Computer Science",
      image: "/Nasri.jpeg"
    },
    {
      quote: "The professors at Jobkey University are not just educators but mentors who truly care about student success. Their guidance has been instrumental in shaping my career.",
      name: "Fatima Hassan",
      role: "Graduate - Business Administration",
      image: "/Nasri.jpeg" 
    },
    {
      quote: "Coming to Jobkey University was one of the best decisions I've made. The state-of-the-art facilities and innovative teaching methods helped me develop crucial skills for the future.",
      name: "Ahmed Mohamed",
      role: "Student - Engineering",
      image: "/Nasri.jpeg" 
    },
    {
      quote: "The research opportunities at Jobkey University are unparalleled. I was able to work alongside leading experts in my field, which greatly enhanced my academic experience.",
      name: "Amina Ibrahim",
      role: "Graduate - Medical Sciences",
      image: "/Nasri.jpeg" 
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

   useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33d1ff]">
            What Our <span className="text-[#33d1ff]">Students Say</span>
          </h2>
          <div className="w-24 h-1 bg-[#33d1ff] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative">
           <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white hover:border-[#33d1ff] transition-all duration-300 hidden sm:block"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white hover:border-[#33d1ff] transition-all duration-300 hidden sm:block"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <FaChevronRight className="h-5 w-5" />
          </button>

           <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-10 flex flex-col items-center border-t-4 border-[#33d1ff] relative">
                    <div className="absolute pt-10 -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#33d1ff] to-[#33d1ff] rounded-full p-4 shadow-lg">
                      <FaQuoteLeft className="text-white text-xl " />
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p className="text-gray-700 text-base  sm:text-lg italic leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#33d1ff] shadow-md">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-[#33d1ff]">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

           <div className="flex justify-center mt-8 sm:hidden space-x-3">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            
             <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAnimating(true);
                    setCurrentTestimonial(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial 
                      ? 'bg-[#33d1ff] w-5' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
