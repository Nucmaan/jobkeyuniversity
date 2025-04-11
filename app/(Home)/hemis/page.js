"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiSearch, FiUser, FiBook, FiHome, FiHash, FiCheckCircle } from "react-icons/fi";

export default function Page() {
  const [hemisId, setHemisId] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    try {
      const response = await axios.get(`${backendUrl}/api/v1/hemis/getStudentById/${hemisId}`);

      if (response.status === 200) {
        setStudentInfo(response.data);
        toast.success("Student found!");
      }
    } catch (error) {
      setStudentInfo(null);
      let errorMessage = "Student not found!";
      
      if (error.code === 'ERR_NETWORK') {
        errorMessage = "Server is not responding. Please try again later.";
      } else if (!error.response) {
        errorMessage = "Unable to connect to the server. Please check your internet connection.";
      } else if (error.response.status >= 500) {
        errorMessage = "Server is currently unavailable. Please try again later.";
      } else if (error.response.status === 404) {
        errorMessage = "No student found with this HEMIS ID.";
      } else {
        errorMessage = error.response?.data?.message || "An error occurred while verifying the student.";
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-25 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-[#33d1ff] rounded-full blur-xl opacity-20"></div>
            <Image
              src="/logo.png"
              alt="University Logo"
              width={128}
              height={128}
              priority
              className="relative rounded-full shadow-lg ring-4 ring-white"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">HEMIS ID Verification</h1>
          <p className="text-gray-600 text-lg">Enter your HEMIS ID to verify your student information</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100"
        >
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiHash className="h-6 w-6 text-[#33d1ff]" />
              </div>
              <input
                type="text"
                id="hemisId"
                className="block w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all duration-200"
                placeholder="Enter your HEMIS ID"
                value={hemisId}
                onChange={(e) => setHemisId(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-[#33d1ff] text-white text-lg font-semibold rounded-xl hover:bg-[#0bb4e0] focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                "Verify Now"
              )}
            </button>
          </form>
        </motion.div>

        {studentInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="p-3 bg-[#33d1ff] rounded-xl text-white">
                <FiUser className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Student Information</h2>
                <p className="text-gray-600">Verified student details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FiHash className="w-5 h-5 text-[#33d1ff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Student ID</p>
                  <p className="text-gray-900 font-semibold text-lg">{studentInfo.studentID}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FiUser className="w-5 h-5 text-[#33d1ff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Full Name</p>
                  <p className="text-gray-900 font-semibold text-lg">{studentInfo.studentName}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FiBook className="w-5 h-5 text-[#33d1ff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Faculty</p>
                  <p className="text-gray-900 font-semibold text-lg">{studentInfo.faculty}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FiHome className="w-5 h-5 text-[#33d1ff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="text-gray-900 font-semibold text-lg">{studentInfo.department}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FiHash className="w-5 h-5 text-[#33d1ff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">HEMIS Number</p>
                  <p className="text-gray-900 font-semibold text-lg">{studentInfo.hemisNo}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-200">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-[#33d1ff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                    ${studentInfo.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      studentInfo.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                      studentInfo.status === 'Completed' ? 'bg-[#cceeff] text-[#33d1ff]' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {studentInfo.status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
