"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";

const events = [
  {
    id: "1",
    title: "Creative Industries and the Global Digital Economy",
    image: "/semi1.jpg",
    date: "27 March 2023",
    location: "Main Auditorium",
    type: "Conference",
    description:
      "Join us for an insightful discussion on the future of creative industries and how they impact the global digital economy. This event brings together industry experts, policymakers, and creative professionals to explore emerging trends and challenges in the digital era.",
    speakers: ["Dr. Emily Carter", "Prof. Jonathan Reed", "Alex Mitchell"],
    schedule: [
      { time: "09:00 AM", topic: "Opening Keynote" },
      { time: "10:30 AM", topic: "Panel Discussion: The Future of Creative Industries" },
      { time: "12:00 PM", topic: "Networking & Lunch" },
      { time: "02:00 PM", topic: "Breakout Sessions" },
      { time: "04:00 PM", topic: "Closing Remarks" },
    ],
  },
  {
    id: "2",
    title: "Tuberculosis: A Global Healthcare Delivery Challenge",
    image: "/news.jpg",
    date: "27 March 2023",
    location: "Medical Faculty Building",
    type: "Seminar",
    description:
      "Learn about the global challenge of tuberculosis and the healthcare strategies being implemented worldwide. Medical professionals and researchers will discuss innovative treatments, prevention strategies, and case studies.",
    speakers: ["Dr. Rachel Adams", "Dr. Henry Liu"],
    schedule: [
      { time: "10:00 AM", topic: "Epidemiology of Tuberculosis" },
      { time: "11:30 AM", topic: "Innovations in TB Treatment" },
      { time: "01:00 PM", topic: "Q&A Session" },
    ],
  },
];

export default function EventDetailsPage() {
  const { id } = useParams(); 
  const event = events.find((e) => e.id === id); 

  if (!event) {
    return <div className="text-center py-10 text-red-500">Event not found!</div>;
  }

  return (
    <div className="max-w-7xl mt-24 mx-auto py-10 px-6 lg:px-10">
       <Link
        href="/"
        className="flex items-center text-[#33d1ff] hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" />
        Back to Events
      </Link>

       <div className="relative w-full h-80 rounded-lg overflow-hidden">
        <Image src={event.image} alt={event.title} fill className="object-cover" />
      </div>

       <div className="mt-6">
        <span className="bg-[#33d1ff] text-white px-3 py-1 rounded-full text-xs font-semibold">
          {event.type}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mt-3">{event.title}</h1>
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <FaCalendarAlt className="text-[#33d1ff] mr-2 h-4 w-4" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <FaMapMarkerAlt className="text-[#33d1ff] mr-2 h-4 w-4" />
          <span>{event.location}</span>
        </div>
      </div>

       <p className="mt-6 text-gray-700 leading-relaxed">{event.description}</p>

       {event.speakers && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Speakers</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {event.speakers.map((speaker, index) => (
              <li key={index}>{speaker}</li>
            ))}
          </ul>
        </div>
      )}

       {event.schedule && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900">Schedule</h3>
          <div className="mt-2 border-l-4 border-[#33d1ff] pl-4">
            {event.schedule.map((item, index) => (
              <div key={index} className="text-gray-700 flex items-start mb-2">
                <span className="font-semibold text-[#33d1ff] mr-3">{item.time}</span>
                <span>{item.topic}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
