"use client"
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const events = [
    {
      id: 1,
      title: "Creative Industries and the Global Digital Economy",
      image: "/news.jpg",
      date: "27 March 2023"
    },
    {
      id: 2,
      title: "Tuberculosis: A Global Healthcare Delivery Challenge",
      image: "/news.jpg",
      date: "27 March 2023"
    },
    {
      id: 3,
      title: "Audio Post-Production Workshop - 6-Day Workshop for Beginners",
      image: "/news.jpg",
      date: "07 April 2023"
    },
    {
      id: 4,
      title: "i5PRME Workshop: Transforming Business Education with Sustainable Impact",
      image: "/news.jpg",
      date: "10 April 2023"
    },
    {
      id: 5,
      title: "Research Symposium: Future of AI in Education",
      image: "/news.jpg",
      date: "15 April 2023"
    }
  ];

  // Number of cards to show at once based on screen size
  const cardsToShow = 3;
  
  // Handle navigation
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      // Loop to the end if at the beginning
      setCurrentIndex(events.length - cardsToShow);
    }
  };

  const handleNext = () => {
    if (currentIndex < events.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Loop to the beginning if at the end
      setCurrentIndex(0);
    }
  };

  // Calculate visible events
  const visibleEvents = events.slice(currentIndex, currentIndex + cardsToShow);
  
  // If we don't have enough events to fill the carousel, add from the beginning
  while (visibleEvents.length < cardsToShow && events.length >= cardsToShow) {
    visibleEvents.push(events[visibleEvents.length % events.length]);
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#010fc0]">Events</h2>
        <Link href="/events" className="px-4 py-2 border border-[#33d1ff] text-[#33d1ff] rounded hover:bg-[#33d1ff] hover:text-white transition-colors">
          View All
        </Link>
      </div>

      <div className="relative">
        {/* Left Navigation Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white transition-colors"
          aria-label="Previous events"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Events Carousel */}
        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-hidden transition-all duration-300"
        >
          {visibleEvents.map((event) => (
            <div 
              key={event.id} 
              className="flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/3 rounded-lg overflow-hidden shadow-md border-l-2 border-[#33d1ff]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-600 flex items-center">
                    <span className="text-[#33d1ff] mr-1">◆</span>
                    {event.date}
                  </span>
                </div>
                <h3 className="font-medium text-lg text-[#010fc0] hover:text-[#33d1ff] transition-colors">{event.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white transition-colors"
          aria-label="Next events"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
