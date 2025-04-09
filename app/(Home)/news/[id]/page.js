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
      title: "Jobkey University Continues to Rise in the QS World University Rankings",
      description: "Jobkey University has achieved a significant milestone, with Hospitality & Leisure Management being ranked in the 51-100 band globally in the QS World University Rankings by Subject 2025.",
      fullContent: `Jobkey University has achieved a significant milestone in the QS World University Rankings by Subject 2025, with our Hospitality & Leisure Management program being ranked in the 51-100 band globally. This achievement reflects our commitment to academic excellence and our dedication to providing world-class education in the field of hospitality management.

      The QS World University Rankings by Subject is one of the most prestigious and widely recognized university rankings in the world. It evaluates universities based on academic reputation, employer reputation, research citations, and the H-index, which measures both the productivity and impact of published work.

      Our success in these rankings is a testament to the hard work of our faculty, staff, and students, as well as our strong partnerships with industry leaders in the hospitality sector. We are particularly proud of our innovative curriculum, which combines theoretical knowledge with practical experience through internships and industry projects.

      This achievement also highlights our commitment to internationalization, as we continue to attract students and faculty from around the world, creating a diverse and dynamic learning environment. Our graduates are highly sought after by employers in the global hospitality industry, with many going on to successful careers in hotel management, tourism, and related fields.

      As we celebrate this achievement, we remain committed to further enhancing our programs and research capabilities, ensuring that Jobkey University continues to be a leader in hospitality education and research.`,
      image: "/semi1.jpg",
      category: "News",
      date: "12 March 2025"
    },
    {
      id: 2,
      title: "Jobkey University's School of Education Launches the Doctor of Education",
      description: "The School of Education is proud to announce its new Doctor of Education program, designed to prepare educational leaders for the challenges of tomorrow.",
      fullContent: `The School of Education at Jobkey University is proud to announce the launch of our new Doctor of Education (Ed.D.) program, designed to prepare educational leaders for the challenges of tomorrow. This innovative program combines rigorous academic study with practical application, equipping graduates with the skills and knowledge needed to lead educational institutions in an increasingly complex and dynamic environment.

      The Ed.D. program is structured around three core pillars: Leadership, Innovation, and Research. Students will engage in advanced coursework in educational leadership, policy analysis, and organizational change, while also developing expertise in research methods and data analysis. The program culminates in a capstone project that addresses a real-world challenge in education.

      What sets our Ed.D. program apart is its focus on practical application and its flexible delivery model. Students can choose between full-time and part-time study options, with a combination of online and in-person learning experiences. This allows working professionals to pursue their doctoral studies while maintaining their current positions.

      The program is led by a distinguished faculty with extensive experience in educational leadership and research. Our faculty members are committed to mentoring students and supporting their professional development throughout the program.

      Applications for the first cohort are now open, with classes beginning in September 2025. We invite educational professionals who are passionate about making a difference in the field of education to join us in this exciting new chapter.`,
      image: "/news.jpg",
      category: "School of Education",
      date: "07 March 2025"
    },
    {
      id: 3,
      title: "Embracing International Cooperation: Jobkey University Signs MoU with Universitas Sebelas Maret",
      description: "A new partnership has been established to foster academic exchange and collaborative research between our institutions.",
      fullContent: `Jobkey University is proud to announce the signing of a Memorandum of Understanding (MoU) with Universitas Sebelas Maret (UNS) in Indonesia, marking a significant step forward in our international collaboration efforts. This partnership will foster academic exchange, collaborative research, and cultural understanding between our institutions.

      The MoU was signed during a virtual ceremony attended by senior leaders from both universities. The agreement establishes a framework for cooperation in several key areas, including:
      
      - Student and faculty exchange programs
      - Joint research projects
      - Collaborative academic programs
      - Cultural exchange initiatives
      
      This partnership represents an exciting opportunity for both institutions to leverage their respective strengths and create meaningful impact in the global academic community. UNS is one of Indonesia's leading universities, known for its excellence in research and education across various disciplines.

      The collaboration will begin with a pilot student exchange program in the upcoming academic year, followed by joint research projects in areas of mutual interest. Both institutions are committed to creating opportunities for students and faculty to engage in cross-cultural learning and research experiences.

      This partnership aligns with Jobkey University's strategic goal of expanding our global reach and fostering international collaboration. We look forward to a fruitful and long-lasting relationship with UNS.`,
      image: "/news.jpg",
      category: "News",
      date: "04 March 2025"
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
