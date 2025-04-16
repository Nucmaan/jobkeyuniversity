"use client";

import { useState } from "react";
import { FaGraduationCap, FaBookReader, FaUsers, FaCalendarAlt, FaChalkboardTeacher, FaIdCard, FaLaptop, FaBriefcase } from "react-icons/fa";
import { BsQuestionCircle, BsJournalCheck, BsBuilding } from "react-icons/bs";
import { GiMedallist } from "react-icons/gi";
import Link from "next/link";

export default function StudentsPage() {
  const [activeTab, setActiveTab] = useState("resources");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-50 min-h-screen mt-20">
       <div className="bg-gradient-to-r from-[#0284c7] to-[#33d1ff] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Student Portal</h1>
          <p className="text-white text-xl max-w-3xl">
            Your gateway to academic resources, campus life, and student services at Jobkey University.
          </p>
        </div>
      </div>

      {/* Navigation tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto py-4 space-x-8">
            <button
              onClick={() => handleTabChange("resources")}
              className={`font-medium pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "resources"
                  ? "border-[#33d1ff] text-[#33d1ff]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Student Resources
            </button>
            <button
              onClick={() => handleTabChange("campus")}
              className={`font-medium pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "campus"
                  ? "border-[#33d1ff] text-[#33d1ff]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Campus Life
            </button>
            <button
              onClick={() => handleTabChange("services")}
              className={`font-medium pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "services"
                  ? "border-[#33d1ff] text-[#33d1ff]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Student Services
            </button>
            <button
              onClick={() => handleTabChange("organizations")}
              className={`font-medium pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === "organizations"
                  ? "border-[#33d1ff] text-[#33d1ff]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              Organizations
            </button>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        {/* Student Resources */}
        {activeTab === "resources" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Student Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                icon={<FaGraduationCap className="h-6 w-6" />}
                title="Academic Calendar"
                description="Access important academic dates, holidays, and exam schedules."
                link="/students"
              />
              <ResourceCard
                icon={<FaIdCard className="h-6 w-6" />}
                title="HEMIS Verification"
                description="Verify your student information and academic records."
                link="/hemis"
              />
              <ResourceCard
                icon={<FaBookReader className="h-6 w-6" />}
                title="Library Resources"
                description="Access digital and physical library collections, research databases, and study materials."
                link="/students"
              />
              <ResourceCard
                icon={<FaLaptop className="h-6 w-6" />}
                title="Online Learning"
                description="Access your virtual classrooms, course materials, and learning resources."
                link="/students"
              />
              <ResourceCard
                icon={<BsJournalCheck className="h-6 w-6" />}
                title="Course Registration"
                description="Register for classes, view your schedule, and manage course enrollments."
                link="/students"
              />
              <ResourceCard
                icon={<BsQuestionCircle className="h-6 w-6" />}
                title="Academic Support"
                description="Access tutoring, writing centers, and academic advising services."
                link="/students"
              />
            </div>
          </div>
        )}

        {/* Campus Life */}
        {activeTab === "campus" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Campus Life</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Residence Life</h3>
                <p className="text-gray-600 mb-4">
                  Our campus housing offers a supportive community environment with modern amenities and a variety of living options for students.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <BsBuilding className="text-[#33d1ff] mr-2" />
                    <span>On-campus dormitories and apartments</span>
                  </li>
                  <li className="flex items-center">
                    <BsBuilding className="text-[#33d1ff] mr-2" />
                    <span>Housing application and room selection process</span>
                  </li>
                  <li className="flex items-center">
                    <BsBuilding className="text-[#33d1ff] mr-2" />
                    <span>Dining plans and campus meal options</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/students" className="text-[#33d1ff] font-medium hover:underline">
                    Learn more about housing options
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Campus Activities</h3>
                <p className="text-gray-600 mb-4">
                  Jobkey University offers a vibrant campus life with numerous opportunities to get involved and make the most of your university experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaCalendarAlt className="text-[#33d1ff] mr-2" />
                    <span>Cultural and recreational events</span>
                  </li>
                  <li className="flex items-center">
                    <FaCalendarAlt className="text-[#33d1ff] mr-2" />
                    <span>Student clubs and organizations</span>
                  </li>
                  <li className="flex items-center">
                    <FaCalendarAlt className="text-[#33d1ff] mr-2" />
                    <span>Volunteer and community service opportunities</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/students" className="text-[#33d1ff] font-medium hover:underline">
                    View upcoming campus events
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Athletics & Recreation</h3>
                <p className="text-gray-600 mb-4">
                  Stay active and engaged with our comprehensive athletics and recreation programs at Jobkey University.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <GiMedallist className="text-[#33d1ff] mr-2" />
                    <span>Varsity sports teams and competitions</span>
                  </li>
                  <li className="flex items-center">
                    <GiMedallist className="text-[#33d1ff] mr-2" />
                    <span>Intramural and club sports</span>
                  </li>
                  <li className="flex items-center">
                    <GiMedallist className="text-[#33d1ff] mr-2" />
                    <span>Fitness facilities and wellness programs</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/students" className="text-[#33d1ff] font-medium hover:underline">
                    Explore athletic opportunities
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Student Life Resources</h3>
                <p className="text-gray-600 mb-4">
                  Access resources designed to enhance your campus experience and support your well-being.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaUsers className="text-[#33d1ff] mr-2" />
                    <span>Student Handbook and Code of Conduct</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-[#33d1ff] mr-2" />
                    <span>Campus safety information</span>
                  </li>
                  <li className="flex items-center">
                    <FaUsers className="text-[#33d1ff] mr-2" />
                    <span>Transportation and parking options</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link href="/students" className="text-[#33d1ff] font-medium hover:underline">
                    Access student life resources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Services */}
        {activeTab === "services" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Student Services</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                    <FaChalkboardTeacher className="text-[#33d1ff] mr-2 h-5 w-5" />
                    Academic Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Academic Advising</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Tutoring Center</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Writing Center</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Disability Services</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Testing Center</Link>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                    <FaBriefcase className="text-[#33d1ff] mr-2 h-5 w-5" />
                    Career Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Career Counseling</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Internship Opportunities</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Job Search Resources</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Resume & Interview Preparation</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Career Fairs & Events</Link>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
                    <FaUsers className="text-[#33d1ff] mr-2 h-5 w-5" />
                    Support Services
                  </h3>
                  <ul className="space-y-3">
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Health Services</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Counseling Center</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Financial Aid & Scholarships</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">International Student Services</Link>
                    </li>
                    <li className="hover:text-[#33d1ff]">
                      <Link href="/students" className="block">Veterans Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mt-8 bg-[#33d1ff]/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Need Assistance?</h3>
              <p className="text-gray-700 mb-4">
                Our Student Services team is here to help you navigate university resources and address any questions or concerns you may have.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">Contact Student Services</p>
                  <p className="text-gray-600">Email: info@jobkey.edu.so</p>
                  <p className="text-gray-600">Phone: 00251616774499</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">Visit Student Center</p>
                  <p className="text-gray-600">Location: Student Center, Building A</p>
                  <p className="text-gray-600">Hours: saturday-Friday 8:00am - 5:00pm</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Organizations */}
        {activeTab === "organizations" && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Student Organizations</h2>
            <p className="text-gray-600 mb-6 max-w-4xl">
              Jobkey University offers numerous student organizations and clubs that provide opportunities for leadership development, community engagement, and pursuing diverse interests. Joining a student organization is a great way to make friends, develop skills, and enhance your university experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <OrganizationCard 
                title="Academic & Professional"
                description="Connect with peers in your field, access professional development opportunities, and build career networks."
                orgs={["Business Student Association", "Engineering Society", "Pre-Health Club", "Education Student Association", "Computer Science Club"]}
              />
              
              <OrganizationCard 
                title="Cultural & International"
                description="Celebrate diversity, share cultural experiences, and build cross-cultural understanding and friendship."
                orgs={["International Student Association", "African Student Union", "Islamic Students Society", "Cultural Diversity Club", "Language Exchange Program"]}
              />
              
              <OrganizationCard 
                title="Arts & Media"
                description="Express your creativity and develop artistic skills through various arts and media organizations."
                orgs={["University Choir", "Drama Club", "Photography Society", "Creative Writing Club", "Digital Media Club"]}
              />
              
              <OrganizationCard 
                title="Service & Volunteering"
                description="Make a positive impact on campus and in the local community through volunteer work and service."
                orgs={["Community Service Club", "Environmental Awareness Group", "Peer Mentoring Program", "Health Education Team", "Campus Beautification Club"]}
              />
              
              <OrganizationCard 
                title="Leadership & Governance"
                description="Develop leadership skills while representing student interests and organizing campus initiatives."
                orgs={["Student Government Association", "Residence Hall Council", "Campus Activities Board", "Student Leadership Forum", "Peer Ambassadors"]}
              />
              
              <OrganizationCard 
                title="Sports & Recreation"
                description="Stay active, build teamwork skills, and enjoy recreational activities with like-minded students."
                orgs={["Intramural Sports Club", "Adventure Outdoors Club", "Fitness & Wellness Group", "Chess Club", "Table Tennis Association"]}
              />
            </div>
            
            {/* Call to Action */}
            <div className="bg-[#33d1ff]/10 p-6 rounded-xl text-center">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Start Your Own Organization</h3>
              <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
                Don not see an organization that matches your interests? Consider starting your own! We provide resources and support for students who want to establish new clubs and organizations.
              </p>
              <Link href="/students" className="inline-block bg-[#33d1ff] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0284c7] transition-colors">
                Learn How to Start a Club
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Resource Card Component
function ResourceCard({ icon, title, description, link }) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md hover:border-[#33d1ff]/30 transition-all h-full">
        <div className="text-[#33d1ff] mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}

// Organization Card Component
function OrganizationCard({ title, description, orgs }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1">
        {orgs.map((org, index) => (
          <li key={index} className="flex items-center">
            <span className="text-[#33d1ff] mr-2">•</span>
            <span>{org}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
