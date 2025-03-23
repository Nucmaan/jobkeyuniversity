import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "Jobkey University Continues to Rise in the QS World University Rankings Across 10 Subject Areas",
      description: "Jobkey University has achieved a significant milestone, with Hospitality & Leisure Management being ranked in the 51-100 band globally in the QS World University Rankings by Subject 2025.",
      image: "/news.jpg",
      category: "News",
      date: "12 March 2025",
      featured: true
    },
    {
      id: 2,
      title: "Jobkey University's School of Education Launches the Doctor of Education",
      image: "/news.jpg",
      category: "School of Education",
      date: "07 March 2025",
      featured: false
    },
    {
      id: 3,
      title: "Embracing International Cooperation: Jobkey University Signs MoU with Universitas Sebelas Maret",
      image: "/news.jpg",
      category: "News",
      date: "04 March 2025",
      featured: false
    },
    {
      id: 4,
      title: "Jobkey University and Jobkey University Multicare Pharmacy Forge Landmark Collaboration in Pharmaceutical Innovation",
      image: "/news.jpg",
      category: "News",
      date: "03 March 2025",
      featured: false
    },
    {
      id: 5,
      title: "Empowering the Desa Mentari Community Through Entrepreneurship",
      image: "/news.jpg",
      category: "News",
      date: "03 March 2025",
      featured: false
    }
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

  return (
    <div className="container mx-auto px-4 pb-12 pt-5 max-w-7xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#33d1ff]">News</h2>
        <Link href="/news" className="px-4 py-2 border border-[#33d1ff] text-[#33d1ff] rounded hover:bg-[#33d1ff] hover:text-white transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <div className="lg:col-span-2">
          {featuredNews.map(item => (
            <div key={item.id} className="relative rounded-lg overflow-hidden shadow-md h-full border-l-4 border-[#33d1ff]">
              <div className="relative h-[400px] w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="contain"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#33d1ff] text-white rounded mr-2">
                    {item.category}
                  </span>
                  <span className="text-xs text-white flex items-center">
                    <span className="text-[#33d1ff] mr-1">◆</span>
                    {item.date}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Regular News - Stacked on the right side */}
        <div className="lg:col-span-1 space-y-4">
          {regularNews.map(item => (
            <div key={item.id} className="flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-md h-[120px] hover:shadow-lg transition-shadow border-l-2 border-[#33d1ff]">
              <div className="relative w-full sm:w-1/3 h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-1">
                <div className="flex items-center mb-1">
                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-[#33d1ff] text-white rounded mr-2">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center">
                    <span className="text-[#33d1ff] mr-1">◆</span>
                    {item.date}
                  </span>
                </div>
                <h3 className="font-medium text-sm text-[#010fc0] hover:text-[#33d1ff] transition-colors line-clamp-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
