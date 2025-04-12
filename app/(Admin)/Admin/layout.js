"use client";
import AdminSideBar from '@/Components/AdminSideBar';
import LoadingReuse from '@/Components/LoadingReuse';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';
import { FaUserCircle, FaCog, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineAccountCircle } from 'react-icons/md';
import toast from "react-hot-toast";
import userAuth from '@/MyStore/Auth';
import axios from 'axios';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const user = userAuth((state) => state.user);
  const logout = userAuth((state) => state.logout);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const backendUrl ="https://backendjobkey.onrender.com";

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
      setIsLoggingOut(true);
      const response = await axios.get(`https://backendjobkey.onrender.com/api/v1/auth/logout`, {
        withCredentials: true
      });
  
      if (response.status === 200) {
        toast.success("Logged out successfully");
        logout();
        router.replace("/");
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error(error.response?.data?.message || "Failed to logout. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  if (!isHydrated) return <LoadingReuse />;
  if (user?.role !== "admin") return null;

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 lg:z-30 bg-white`}>
        <AdminSideBar />
      </div>

      {/* Main Content Wrapper */}
      <div className="lg:pl-64 flex flex-col min-h-screen">
        {/* Fixed Header */}
        <header className="fixed top-0 right-0 left-0 lg:left-64 bg-white shadow-sm border-b border-gray-100 z-40">
          <div className="flex items-center justify-between h-16 px-4 lg:px-6">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100/80 hover:text-gray-700 transition-colors"
            >
              {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Right side profile dropdown */}
            <div className="relative ml-auto" ref={dropdownRef}>
              <button
                className="flex items-center gap-3 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="hidden md:block text-right">
                  <p className="text-sm font-medium text-gray-700">{user?.full_name}</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <div className="h-8 w-8 rounded-full bg-[#33d1ff]/10 flex items-center justify-center">
                  <MdOutlineAccountCircle className="text-[#33d1ff] text-xl" />
                </div>
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-1 w-56 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">{user?.full_name}</p>
                    <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                  </div>

                  <Link 
                    href="/Admin/Profile" 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FaUserCircle className="mr-2 text-[#33d1ff]" size={16} />
                    Profile
                  </Link>

                  <Link 
                    href="/Admin/Setting" 
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FaCog className="mr-2 text-[#33d1ff]" size={16} />
                    Settings
                  </Link>

                  <div className="border-t border-gray-100 mt-1">
                    <button
                      onClick={handleLogout}
                      disabled={isLoggingOut}
                      className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
                    >
                      <FaSignOutAlt className="mr-2" size={16} />
                      {isLoggingOut ? "Logging out..." : "Logout"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-4 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Jobkey University. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}