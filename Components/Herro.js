"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Herro() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const totalSlides = 4; 

   const slides = [
    { id: 1, imageSrc: "/job1.png" },
    { id: 2, imageSrc: "/job2.png" },
    { id: 3, imageSrc: "/job1.png" },
    { id: 4, imageSrc: "/job1.png" },
  ];

   useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(play, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[720px] overflow-hidden ">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <Image
              src={slide.imageSrc}
              alt="Slide"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        ))}
      </div>

       <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-white text-2xl" />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 p-2 rounded-full"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <FaChevronRight className="text-white text-2xl" />
      </button>

       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-[#33d1ff]' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
