"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiSearch, FiUser, FiBook, FiHome, FiHash, FiCheckCircle, FiCalendar } from "react-icons/fi";

export default function Page() {
  const [hemisId, setHemisId] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL;

    try {
      const response = await axios.get(`https://backendjobkey.onrender.com/api/v1/hemis/getStudentById/${hemisId}`,{
        withCredentials: true,
      });

      if (response.status === 200) {
        setStudentInfo(response.data);
        toast.success("Student information verified successfully!");
      }
    } catch (error) {
      setStudentInfo(null);
      let message;
      
      if (error.code === 'ERR_NETWORK') {
        message = "Server is not responding. Please try again later.";
      } else if (!error.response) {
        message = "Unable to connect to the server. Please check your internet connection.";
      } else if (error.response.status === 404) {
        message = "We couldn't find any student with this HEMIS ID. Please check the ID and try again.";
      } else if (error.response.status >= 500) {
        message = "Server is currently unavailable. Please try again later.";
      }
      
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-[#f0f9ff] to-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative mb-12"
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#33d1ff] rounded-full blur-[100px] opacity-5"></div>
            <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#33d1ff] rounded-full blur-[100px] opacity-5"></div>
            <div className="absolute top-10 right-1/4 w-72 h-72 bg-[#0088b3] rounded-full blur-[100px] opacity-5"></div>
          </div>
          
          <div className="inline-block p-3 bg-white rounded-3xl shadow-xl mb-8">
            <Image
              src="/logo.png"
              alt="University Logo"
              width={80}
              height={80}
              priority
              className="rounded-2xl"
            />
          </div>
          
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#33d1ff] to-[#0088b3] text-transparent bg-clip-text mb-4">
            Student Verification Portal
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Verify student credentials and access academic information using the HEMIS ID
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiHash className="h-6 w-6 text-[#33d1ff] group-hover:text-[#0088b3] transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  id="hemisId"
                  className="block w-full pl-12 pr-4 py-4 text-lg bg-gray-50 border-2 border-gray-100 rounded-2xl focus:outline-none focus:border-[#33d1ff] focus:ring-2 focus:ring-[#33d1ff]/20 transition-all duration-300"
                  placeholder="Enter HEMIS ID number"
                  value={hemisId}
                  onChange={(e) => setHemisId(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#33d1ff] to-[#0088b3] text-white text-lg font-semibold py-4 px-8 rounded-2xl hover:shadow-lg hover:shadow-[#33d1ff]/20 focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:ring-offset-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Verifying...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <FiSearch className="text-xl" />
                    <span>Verify Student</span>
                  </div>
                )}
              </button>
            </form>
          </div>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 rounded-xl">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-red-700">{errorMessage}</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Student Information */}
        {studentInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-[#33d1ff] to-[#0088b3] p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                  <FiUser className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{studentInfo.studentName}</h2>
                  <p className="text-white/80">Student Information</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard icon={FiHash} label="Student ID" value={studentInfo.studentID} />
                <InfoCard icon={FiBook} label="Faculty" value={studentInfo.faculty} />
                <InfoCard icon={FiHome} label="Department" value={studentInfo.department} />
                <InfoCard icon={FiHash} label="HEMIS Number" value={studentInfo.hemisNo} />
                <InfoCard icon={FiCheckCircle} 
                  label="Status" 
                  value={studentInfo.status}
                  customValue={
                    <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium
                      ${studentInfo.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        studentInfo.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                        studentInfo.status === 'Completed' ? 'bg-[#e6f7ff] text-[#33d1ff]' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {studentInfo.status}
                    </span>
                  }
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const InfoCard = ({ icon: Icon, label, value, customValue }) => (
  <div className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white rounded-xl shadow-sm">
        <Icon className="w-5 h-5 text-[#33d1ff]" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
        {customValue || <p className="text-gray-900 font-semibold text-lg">{value}</p>}
      </div>
    </div>
  </div>
);
