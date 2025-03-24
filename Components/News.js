"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export default function News() {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const newsItems = [
    {
      id: 1,
      title: "jobkey University Continues to Rise in the QS World University Rankings Across 10 Subject Areas",
      description: "jobkey University has achieved a significant milestone, with Hospitality & Leisure Management being ranked in the 51-100 band globally in the QS World University Rankings by Subject 2025.",
      image: "/semi1.jpg",
      category: "News",
      date: "12 March 2025",
      featured: true,
    },
    {
      id: 2,
      title: "Jobkey University's School of Education Launches the Doctor of Education",
      description: "The School of Education is proud to announce its new Doctor of Education program, designed to prepare educational leaders for the challenges of tomorrow.",
      image: "/news.jpg",
      category: "School of Education",
      date: "07 March 2025",
      featured: false,
    },
    {
      id: 3,
      title: "Embracing International Cooperation: Jobkey University Signs MoU with Universitas Sebelas Maret",
      description: "A new partnership has been established to foster academic exchange and collaborative research between our institutions.",
      image: "/news.jpg",
      category: "News",
      date: "04 March 2025",
      featured: false,
    },
    {
      id: 4,
      title: "Jobkey University and Jobkey Multicare Pharmacy Forge Landmark Collaboration in Pharmaceutical Innovation",
      description: "This collaboration aims to advance pharmaceutical research and provide students with hands-on industry experience.",
      image: "/news.jpg",
      category: "News",
      date: "03 March 2025",
      featured: false,
    },
    {
      id: 5,
      title: "Empowering the Desa Mentari Community Through Entrepreneurship",
      description: "Our community outreach program is teaching entrepreneurial skills to local residents, helping them build sustainable businesses.",
      image: "/news.jpg",
      category: "News",
      date: "03 March 2025",
      featured: false,
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="bg-white pt-5 pb-5">
      <div className="container mx-auto px-4 max-w-7xl">
         <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-[#33d1ff]">News</h2>
          <Link 
            href="/news" 
            className="px-4 py-2 border border-[#33d1ff] text-[#33d1ff] rounded hover:bg-[#33d1ff] transition-all duration-300"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="col-span-1">
            {featuredNews.map(item => (
              <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md h-full">
                <Link href={`/news/${item.id}`}>
                  <div className="relative">
                    <div className="absolute top-0 left-0 z-10 bg-[#33d1ff] text-white text-xs font-semibold px-2 py-1">
                      {item.category}
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 bg-[#33d1ff] text-white text-xs font-semibold px-2 py-1 flex items-center">
                      <FaCalendarAlt className="mr-1" /> {item.date}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#33d1ff] mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

           <div className="col-span-1 space-y-4">
            {regularNews.map(item => (
              <div key={item.id} className="flex border-b border-[#33d1ff] pb-4 last:border-b-0">
                <div className="flex-shrink-0 mr-4 relative">
                  <Link href={`/news/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={100}
                      className="rounded"
                    />
                  </Link>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col mb-1">
                    <span className="text-xs flex items-center text-[#33d1ff] mb-1">
                      <FaCalendarAlt className="mr-1" /> {item.date}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-semibold bg-[#33d1ff] text-white rounded mb-1 w-fit">
                      {item.category}
                    </span>
                  </div>
                  <Link href={`/news/${item.id}`} className="hover:text-[#33d1ff]">
                    <h3 className="font-semibold text-sm text-[#33d1ff]">{item.title}</h3>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
