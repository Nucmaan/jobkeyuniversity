"use client";
import React from 'react';
import Link from 'next/link';
import { FaHome, FaUsers, FaCog, FaUserCircle } from 'react-icons/fa';
import userAuth from "@/MyStore/Auth";

export default function AdminSideBar() {
  const user = userAuth((state) => state.user);
  
  return (
    <div className="bg-gray-900 text-white h-screen w-64 flex flex-col">
      <div className="p-5 border-b border-gray-800">
        <h2 className="text-xl font-bold">Admin Dashboard</h2>
      </div>
      
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#33d1ff] rounded-full flex items-center justify-center text-white">
            <FaUserCircle className="text-xl" />
          </div>
          <div>
            <p className="font-medium">{user?.full_name || 'Admin User'}</p>
            <p className="text-xs text-gray-400">{user?.email || 'admin@example.com'}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-5">
        <ul className="space-y-2">
          <li>
            <Link href="/Admin" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaHome className="text-gray-400" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/Admin/Students" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaUsers className="text-gray-400" />
              <span>Students</span>
            </Link>
          </li>
          <li>
            <Link href="/Admin/Setting" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaCog className="text-gray-400" />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link href="/Admin/Profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <FaUserCircle className="text-gray-400" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
} 