"use client"
import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaChevronRight } from 'react-icons/fa';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Jobkey University Celebrates Class of 2024 Graduation Day",
      description: "A momentous celebration as our graduates don their blue and gold regalia, marking their academic achievements and the beginning of their professional journeys.",
      image: "/g1.JPG",
      category: "Events",
      date: "15 March 2024"
    },
    {
      id: 2,
      title: "State-of-the-Art Medical Laboratory Facilities at Jobkey University",
      description: "Our newly equipped medical laboratory provides students with hands-on experience in cutting-edge research and practical medical techniques.",
      image: "/l2.JPG",
      category: "Facilities",
      date: "10 March 2024"
    },
    {
      id: 3,
      title: "Thesis Defense Day: Celebrating Academic Excellence",
      description: "Students showcase their research achievements during the Defense Day, demonstrating their expertise and contributions to their respective fields.",
      image: "/d3.JPG",
      category: "Academic",
      date: "05 March 2024"
    }
  ];

  return (
    <div className="w-full py-20 bg-[#f0f7ff]">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header with unique style */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 border-b border-dashed border-[#0db2db] pb-6">
          <div className="mb-4 md:mb-0">
            <span className="block text-[#0db2db] uppercase tracking-wider text-sm font-semibold mb-2">Latest Updates</span>
            <h2 className="text-4xl font-bold text-gray-800">
              Campus <span className="italic font-light">News & Events</span>
            </h2>
          </div>
          <Link href="/news" className="group">
            <div className="flex items-center gap-2 text-gray-600 hover:text-[#0db2db] transition-all">
              <span className="font-medium">View all news</span>
              <div className="w-8 h-8 rounded-full border-2 border-gray-300 group-hover:border-[#0db2db] group-hover:bg-[#0db2db] flex items-center justify-center transition-all">
                <FaChevronRight className="text-xs text-gray-500 group-hover:text-white transition-all" />
              </div>
            </div>
          </Link>
        </div>
        
        {/* News Grid with Asymmetrical Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-7 rounded-xl overflow-hidden shadow-lg relative group hover:shadow-xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0db2db]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div 
              className="h-[400px] relative" 
              style={{ backgroundImage: `url(${newsItems[0].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="inline-block px-3 py-1 bg-white text-[#0db2db] text-sm font-medium rounded-lg mb-3">
                  {newsItems[0].category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 transition-transform group-hover:translate-x-2 duration-300">
                  {newsItems[0].title}
                </h3>
                <div className="flex items-center text-white/90 mb-4">
                  <FaCalendarAlt className="mr-2 text-sm" />
                  <span className="text-sm">{newsItems[0].date}</span>
                </div>
                <Link 
                  href={`/news/${newsItems[0].id}`}
                  className="inline-block text-white border-b-2 border-[#0db2db] pb-1 hover:pb-2 transition-all"
                >
                  Read full story
                </Link>
              </div>
            </div>
          </div>
          
          {/* Secondary Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* First Secondary Story */}
            <div className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div 
                className="w-1/3 relative" 
                style={{ backgroundImage: `url(${newsItems[1].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[#0db2db]/20"></div>
              </div>
              <div className="w-2/3 p-5">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="text-[#0db2db] font-medium mr-3">{newsItems[1].category}</span>
                  <FaCalendarAlt className="mr-1 text-xs" />
                  <span>{newsItems[1].date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {newsItems[1].title}
                </h3>
                <Link 
                  href={`/news/${newsItems[1].id}`}
                  className="text-[#0db2db] text-sm font-medium flex items-center hover:underline"
                >
                  Continue reading
                  <FaArrowRight className="ml-1 text-xs" />
                </Link>
              </div>
            </div>
            
            {/* Second Secondary Story */}
            <div className="flex bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div 
                className="w-1/3 relative" 
                style={{ backgroundImage: `url(${newsItems[2].image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[#0db2db]/20"></div>
              </div>
              <div className="w-2/3 p-5">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="text-[#0db2db] font-medium mr-3">{newsItems[2].category}</span>
                  <FaCalendarAlt className="mr-1 text-xs" />
                  <span>{newsItems[2].date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {newsItems[2].title}
                </h3>
                <Link 
                  href={`/news/${newsItems[2].id}`}
                  className="text-[#0db2db] text-sm font-medium flex items-center hover:underline"
                >
                  Continue reading
                  <FaArrowRight className="ml-1 text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
