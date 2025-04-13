"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Jobkey University Celebrates Class of 2024 Graduation Day",
      description: "A momentous celebration as our graduates don their blue and gold regalia, marking their academic achievements and the beginning of their professional journeys.",
      image: "/g1.JPG",
      category: "Events",
      date: "15 March 2024",
    },
    {
      id: 2,
      title: "State-of-the-Art Medical Laboratory Facilities at Jobkey University",
      description: "Our newly equipped medical laboratory provides students with hands-on experience in cutting-edge research and practical medical techniques.",
      image: "/l2.JPG",
      category: "Facilities",
      date: "10 March 2024",
    },
    {
      id: 3,
      title: "Thesis Defense Day: Celebrating Academic Excellence",
      description: "Students showcase their research achievements during the Defense Day, demonstrating their expertise and contributions to their respective fields.",
      image: "/d3.JPG",
      category: "Academic",
      date: "05 March 2024",
    }
  ];

  return (
    <div className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#33d1ff]">Latest News & Events</h2>
          <Link 
            href="/news" 
            className="inline-flex items-center px-6 py-3 bg-[#33d1ff] text-white rounded-full hover:bg-[#33d1ff]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span className="font-semibold">View All News</span>
            <FaArrowRight className="ml-3 text-xl" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#33d1ff] text-white text-sm font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center text-white/90">
                  <FaCalendarAlt className="mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#33d1ff] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <Link 
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-[#33d1ff] font-semibold hover:text-[#33d1ff]/80 transition-colors duration-300"
                >
                  <span>Read More</span>
                  <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
