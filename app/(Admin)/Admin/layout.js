"use client";
import AdminSideBar from '@/Components/AdminSideBar';
import LoadingReuse from '@/Components/LoadingReuse';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import { FaBell, FaSearch, FaUser, FaUserCircle, FaCog, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import toast from "react-hot-toast";
import userAuth from '@/MyStore/Auth';
import axios from 'axios';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const user = userAuth((state) => state.user);
  const logoutUser = userAuth((state) => state.logoutUser);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


  useEffect(() => {
    if (user) {
      setIsHydrated(true);

      if (user?.role !== "admin") {
        router.push("/");
      }
    }
  }, [user, router]);

   useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/auth/logout`, {
        withCredentials: true,
      });
  
      if (response.status === 200) {
        toast.success(response.data.message);
        logoutUser();
        router.replace("/");
        return; 
      }
    } catch (error) {
      const message = error.response?.data?.error || "Server error";
      toast.error(message);
    }
  };
  

  if (!isHydrated) {
    return <LoadingReuse />;
  }

  if (user?.role !== "admin") {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-10 md:pl-[260px] md:ml-[262px]">
        <div className="flex items-center justify-end h-16 px-4">
           
          <div className="flex items-center space-x-4">
            <div className="relative" ref={dropdownRef}>
              <div 
                className="flex items-center cursor-pointer" 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="hidden md:block mr-2 text-sm font-medium text-gray-700">
                  {user?.full_name || 'Admin'}
                </span>
                <div className="w-8 h-8 rounded-full bg-[#33d1ff] flex items-center justify-center text-white">
                  {user?.profilePic ? (
                    <Image
                      src={user.profilePic}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <FaUser size={14} />
                  )}
                </div>
                <FaChevronDown className={`ml-1 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={12} />
              </div>
              
               {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-[#cceeff]">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">{user?.full_name || 'Admin'}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email || 'admin@example.com'}</p>
                  </div>
                  
                  <Link href="/Admin/Profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#cceeff]">
                    <FaUserCircle className="mr-3 text-[#33d1ff]" size={16} />
                    Profile
                  </Link>
                  
                  <Link href="/Admin/Setting" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#cceeff]">
                    <FaCog className="mr-3 text-[#33d1ff]" size={16} />
                    Settings
                  </Link>
                  
                  <div className="border-t border-gray-100 my-1"></div>
                  
                  <button 
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#cceeff]"
                  >
                    <FaSignOutAlt className="mr-3 text-[#33d1ff]" size={16} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>


      <div className="flex flex-grow pt-16">
         <div className="fixed left-0 top-0 h-full w-[260px] flex-shrink-0 z-30">
          <AdminSideBar />
        </div>

         <main className="flex-grow p-4 md:p-6 overflow-y-auto md:ml-[260px]">
          <div className="container mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>

      <footer className="bg-white py-4 border-t border-gray-200 text-center text-sm text-gray-600 md:ml-[260px]">
        <p>© {new Date().getFullYear()} Jobkey University . All rights reserved.</p>
      </footer>
    </div>
  );
}