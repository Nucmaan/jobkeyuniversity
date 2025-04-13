"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaSearch, FaFilter } from 'react-icons/fa';

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
      title: "Medical Laboratory Facilities at Jobkey University",
      description: "Our newly equipped medical laboratory provides students with hands-on experience in cutting-edge research and practical medical techniques.",
      image: "/l2.JPG",
      category: "Facilities",
      date: "10 March 2024",
    },
    {
      id: 3,
      title: "Thesis Defense Day: Celebrating Academic Excellence",
      description: "Students showcase their research achievements during the Defense Day, demonstrating their expertise and contributions to their respective fields.",
      image: "/d2.JPG",
      category: "Academic",
      date: "05 March 2024",
    }
  ];

  const categories = ['all', 'Events', 'Facilities', 'Academic'];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNews.length / postsPerPage);
  const currentPosts = filteredNews.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="min-h-screen mt-12 bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#33d1ff] mb-4">News & Events</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay updated with the latest news, events, and announcements from Jobkey University.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-gray-200 focus:border-[#33d1ff] focus:ring-2 focus:ring-[#33d1ff]/20 transition-all duration-300"
            />
            <FaSearch className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-64 px-6 py-3 rounded-full border border-gray-200 focus:border-[#33d1ff] focus:ring-2 focus:ring-[#33d1ff]/20 appearance-none bg-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <FaFilter className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                  <FaCalendarAlt className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === page
                    ? 'bg-[#33d1ff] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } transition-colors duration-300`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
