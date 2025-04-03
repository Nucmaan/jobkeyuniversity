"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function EventsPage() {
  const events = [
    {
      id: 1,
      title: "Creative Industries and the Global Digital Economy",
      image: "/semi1.jpg",
      date: "27 March 2023",
      location: "Main Auditorium",
      type: "Conference",
    },
    {
      id: 2,
      title: "Tuberculosis: A Global Healthcare Delivery Challenge",
      image: "/news.jpg",
      date: "27 March 2023",
      location: "Medical Faculty Building",
      type: "Seminar",
    },
    {
      id: 3,
      title: "Audio Post-Production Workshop - 6-Day Workshop for Beginners",
      image: "/news.jpg",
      date: "07 April 2023",
      location: "Media Lab",
      type: "Workshop",
    },
    {
      id: 4,
      title: "PRME Workshop: Transforming Business Education with Sustainable Impact",
      image: "/news.jpg",
      date: "10 April 2023",
      location: "Business School",
      type: "Workshop",
    },
    {
      id: 5,
      title: "Research Symposium: Future of AI in Education",
      image: "/news.jpg",
      date: "15 April 2023",
      location: "Innovation Center",
      type: "Symposium",
    },
  ];
  

  return (
    <div className="py-10 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-20">
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
  );
}
