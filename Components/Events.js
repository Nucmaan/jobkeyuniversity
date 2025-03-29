"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);
  const [cardsToShow, setCardsToShow] = useState(3);
  
   useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    
     handleResize();
    
     window.addEventListener('resize', handleResize);
    
     return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const events = [
    {
      id: 1,
      title: "Creative Industries and the Global Digital Economy",
      image: "/semi1.jpg",
      date: "27 March 2023",
      location: "Main Auditorium",
      type: "Conference"
    },
    {
      id: 2,
      title: "Tuberculosis: A Global Healthcare Delivery Challenge",
      image: "/news.jpg",
      date: "27 March 2023",
      location: "Medical Faculty Building",
      type: "Seminar"
    },
    {
      id: 3,
      title: "Audio Post-Production Workshop - 6-Day Workshop for Beginners",
      image: "/news.jpg",
      date: "07 April 2023",
      location: "Media Lab",
      type: "Workshop"
    },
    {
      id: 4,
      title: "PRME Workshop: Transforming Business Education with Sustainable Impact",
      image: "/news.jpg",
      date: "10 April 2023",
      location: "Business School",
      type: "Workshop"
    },
    {
      id: 5,
      title: "Research Symposium: Future of AI in Education",
      image: "/news.jpg",
      date: "15 April 2023",
      location: "Innovation Center",
      type: "Symposium"
    }
  ];
  
   const handlePrev = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
       setCurrentIndex(events.length - cardsToShow);
    }
    
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleNext = () => {
    if (isLoading) return;
    
    setIsLoading(true);
    if (currentIndex < events.length - cardsToShow) {
      setCurrentIndex(currentIndex + 1);
    } else {
       setCurrentIndex(0);
    }
    
    setTimeout(() => setIsLoading(false), 300);
  };
  
   const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
       handleNext();
    }
    
    if (touchStart - touchEnd < -100) {
       handlePrev();
    }
  };

   const visibleEvents = [];
  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i) % events.length;
    visibleEvents.push(events[index]);
  }

  return (
    <div className=" py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#33d1ff] mb-4 sm:mb-0">
            Upcoming Events
          </h2>
          <Link 
            href="/allEvents" 
            className="px-4 py-2 border  border-[#33d1ff] text-[#33d1ff] rounded-full hover:bg-[#33d1ff] hover:text-white transition-all duration-300 flex items-center space-x-2"
          >
            <span>View All Events</span>
            <FaArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative">
           <div className="sm:hidden flex justify-center mb-4">
            <div className="flex space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsLoading(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsLoading(false), 300);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-[#33d1ff] w-4' 
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to event ${index + 1}`}
                />
              ))}
            </div>
          </div>

           <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-[#33d1ff] hover:text-white hover:border-[#33d1ff] transition-all duration-300 hidden sm:block"
            aria-label="Previous events"
            disabled={isLoading}
          >
            <FaArrowLeft className="h-5 w-5" />
          </button>

           <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {visibleEvents.map((event, idx) => (
              <div 
                key={`${event.id}-${idx}`} 
                className={`flex-none w-full sm:w-1/2 lg:w-1/3 rounded-xl  overflow-hidden shadow-lg border-2 border-[#33d1ff] transform transition-all duration-500 ${
                  isLoading ? 'opacity-50 blur-sm' : 'opacity-100'
                }`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  transition: 'transform 0.5s ease-in-out'
                }}
              >
                <div className="group relative h-48 w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-fit transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4 bg-[#33d1ff] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {event.type}
                  </div>
                </div>
                <div className="p-5 ">
                  <div className="flex flex-col space-y-1 mb-3 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-[#33d1ff] mr-2 h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-[#33d1ff] mr-2 h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-[#33d1ff] hover:text-[#33d1ff] transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <Link 
                    href={`/allEvents/${event.id}`}
                    className="mt-3 text-sm text-[#33d1ff] hover:text-[#33d1ff] font-medium inline-flex items-center"
                  >
                    <span>Learn More</span>
                    <FaArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

           <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-[#33d1ff] hover:text-white hover:border-[#33d1ff] transition-all duration-300 hidden sm:block"
            aria-label="Next events"
            disabled={isLoading}
          >
            <FaArrowRight className="h-5 w-5" />
          </button>
        </div>
        
         <div className="mt-6 flex justify-center space-x-4 sm:hidden">
          <button 
            onClick={handlePrev}
            className="bg-white rounded-full p-3 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white transition-colors"
            aria-label="Previous events"
            disabled={isLoading}
          >
            <FaArrowLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={handleNext}
            className="bg-white rounded-full p-3 shadow-md border border-gray-200 hover:bg-[#33d1ff] hover:text-white transition-colors"
            aria-label="Next events"
            disabled={isLoading}
          >
            <FaArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
