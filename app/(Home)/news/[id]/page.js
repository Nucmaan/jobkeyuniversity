"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowLeft, FaShareAlt } from 'react-icons/fa';

export default function NewsDetail({ params }) {
  const newsId = parseInt(React.use(params).id);
  
  const newsItems = [
    {
      id: 1,
      title: "Jobkey University Celebrates Class of 2024 Graduation Day",
      description: "A momentous celebration as our graduates don their blue and gold regalia, marking their academic achievements and the beginning of their professional journeys.",
      fullContent: `Jobkey University proudly celebrated the graduation ceremony for the Class of 2024, marking a significant milestone in the academic journey of our students. The ceremony was filled with joy, pride, and anticipation as graduates received their well-earned degrees.

      The graduation ceremony featured students from various faculties, each wearing the distinctive blue and gold regalia that represents our institution's colors. The event was attended by faculty members, university officials, proud parents, and distinguished guests who came to celebrate this momentous occasion.

      During the ceremony, several outstanding graduates were recognized for their exceptional academic achievements and contributions to the university community. The graduates, representing diverse backgrounds and disciplines, demonstrated remarkable resilience and dedication throughout their academic journey.

      The ceremony also included inspiring speeches from university leadership and distinguished alumni, encouraging the graduates to pursue their dreams and make meaningful contributions to society. The atmosphere was electric as graduates celebrated their achievements with their peers, mentors, and loved ones.

      This graduation ceremony not only marks the end of an important chapter in our students' lives but also the beginning of their professional journeys. We are confident that our graduates will continue to uphold the values and standards of Jobkey University as they move forward in their careers.`,
      image: "/g1.JPG",
      category: "Events",
      date: "15 March 2024"
    },
    {
      id: 2,
      title: "Medical Laboratory Facilities at Jobkey University",
      description: "Our newly equipped medical laboratory provides students with hands-on experience in cutting-edge research and practical medical techniques.",
      fullContent: `Jobkey University has unveiled its state-of-the-art medical laboratory facilities, setting a new standard for medical education and research in the region. The new facilities are equipped with the latest technology and equipment, providing students with an optimal learning environment for their practical studies.

      The medical laboratory features advanced research equipment, including high-powered microscopes, modern diagnostic tools, and sophisticated testing apparatus. These facilities enable students to gain hands-on experience with real-world medical procedures and research techniques.

      Our laboratory spaces are designed to accommodate various specialized areas of study, including microbiology, biochemistry, pathology, and molecular biology. Each section is equipped with specific tools and equipment necessary for detailed study and research in these fields.

      The new facilities also include dedicated spaces for student research projects, allowing them to conduct independent studies under the guidance of experienced faculty members. This hands-on approach to learning ensures that our students are well-prepared for their future careers in healthcare and medical research.

      The laboratory's design incorporates modern safety features and follows international standards for medical laboratory operations. Regular training sessions are conducted to ensure proper usage of equipment and adherence to safety protocols.`,
      image: "/l2.JPG",
      category: "Facilities",
      date: "10 March 2024"
    },
    {
      id: 3,
      title: "Thesis Defense Day: Celebrating Academic Excellence",
      description: "Students showcase their research achievements during the Defense Day, demonstrating their expertise and contributions to their respective fields.",
      fullContent: `The Thesis Defense Day at Jobkey University showcased the culmination of years of dedicated research and academic pursuit by our graduating students. This event highlighted the diverse range of innovative research projects undertaken by our students across various disciplines.

      The defense presentations demonstrated the depth and breadth of research conducted at our university. Students presented their findings before panels of expert evaluators, including faculty members and external examiners from renowned institutions. The quality of research and the professional manner in which students defended their work reflected the high academic standards maintained at Jobkey University.

      Topics presented during the defense day covered a wide range of subjects, from innovative medical research to groundbreaking technological solutions. Each presentation was followed by rigorous questioning from the panel, allowing students to demonstrate their comprehensive understanding of their research areas.

      The event also provided an opportunity for junior students to learn from their seniors and understand the expectations and standards required for successful thesis completion. The atmosphere was both challenging and supportive, encouraging scholarly discourse and academic excellence.

      We are proud of our students' achievements and their contributions to their respective fields of study. Their research work not only advances academic knowledge but also has practical applications that can benefit society.`,
      image: "/d2.JPG",
      category: "Academic",
      date: "05 March 2024"
    }
  ];

  const currentNews = newsItems.find(item => item.id === newsId);
  const relatedNews = newsItems.filter(item => item.id !== newsId).slice(0, 2);

  if (!currentNews) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">News Not Found</h1>
          <p className="text-gray-600 mb-8">The news article you are looking for does not exist.</p>
          <Link 
            href="/news"
            className="inline-flex items-center px-6 py-3 bg-[#33d1ff] text-white rounded-full hover:bg-[#33d1ff]/90 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/news"
            className="inline-flex items-center text-[#33d1ff] hover:text-[#33d1ff]/80 mb-8 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to News
          </Link>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={currentNews.image}
                alt={currentNews.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="px-4 py-2 bg-[#33d1ff] text-white text-sm font-semibold rounded-full inline-block mb-4">
                  {currentNews.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {currentNews.title}
                </h1>
                <div className="flex items-center text-white/90">
                  <FaCalendarAlt className="mr-2" />
                  <span className="text-sm">{currentNews.date}</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose max-w-none">
                {currentNews.fullContent.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <button className="flex items-center text-gray-600 hover:text-[#33d1ff] transition-colors duration-300">
                  <FaShareAlt className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          </article>

          {relatedNews.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Related News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedNews.map((item) => (
                  <Link 
                    key={item.id}
                    href={`/news/${item.id}`}
                    className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <span className="px-3 py-1 bg-[#33d1ff] text-white text-sm font-semibold rounded-full inline-block mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#33d1ff] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
