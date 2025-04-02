"use client"
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Events() {
    
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
    }
  ];
  
   
    
     
  
 

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
             <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
              <span className="absolute top-4 left-4 bg-[#33d1ff] text-white text-xs font-semibold px-3 py-1 rounded-full">
                {event.type}
              </span>
            </div>

             <div className="p-5">
               <div className="text-sm text-gray-600 space-y-2 mb-3">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-[#33d1ff] mr-2 h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#33d1ff] mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>

               <h3 className="text-lg font-semibold text-gray-800 hover:text-[#33d1ff] transition-colors line-clamp-2">
                {event.title}
              </h3>

               <Link
                href={`/allEvents/${event.id}`}
                className="mt-3 text-sm text-[#33d1ff] font-medium inline-flex items-center transition hover:underline"
              >
                <span>Learn More</span>
                <FaArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

       
      </div>
    </div>
  );
}
