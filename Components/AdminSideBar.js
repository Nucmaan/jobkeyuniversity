"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  FaHome, 
  FaUsers, 
  FaCog, 
  FaUserCircle, 
  FaGraduationCap, 
  FaChalkboardTeacher,
  FaBook,
  FaCalendarAlt
} from 'react-icons/fa';
import userAuth from "@/MyStore/Auth";

export default function AdminSideBar() {
  const user = userAuth((state) => state.user);
  const pathname = usePathname();

  const menuItems = [
    { icon: FaHome, label: 'Dashboard', href: '/Admin' },
    { icon: FaUsers, label: 'Students', href: '/Admin/Students' },
    { icon: FaCog, label: 'Settings', href: '/Admin/Setting' },
    { icon: FaUserCircle, label: 'Profile', href: '/Admin/Profile' },
  ];

  const isActive = (href) => pathname === href;
  
  return (
    <div className="bg-white border-r border-gray-200 text-gray-800 h-screen w-64 flex flex-col shadow-lg transition-all duration-300 ease-in-out">
       <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="University Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <h1 className="text-lg font-bold text-[#33d1ff]">Jobkey</h1>
            <p className="font-semibold text-gray-500">University</p>
            </div>
        </div>
      </div>
      
       <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${active 
                      ? 'bg-[#33d1ff]/10 text-[#33d1ff]' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#33d1ff]'
                    }`}
                >
                  <Icon className={`text-lg ${active ? 'text-[#33d1ff]' : 'text-gray-400'}`} />
                  <span className="font-medium text-sm">{item.label}</span>
                  {active && (
                    <div className="w-1 h-full bg-[#33d1ff] absolute right-0 rounded-l-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
       <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>© {new Date().getFullYear()} Jobkey University</span>
          <span>v1.0.0</span>
        </div>
      </div>
    </div>
  );
} 