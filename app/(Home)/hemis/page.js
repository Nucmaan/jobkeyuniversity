"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiSearch, FiUser, FiBook, FiHome, FiHash, FiCheckCircle } from "react-icons/fi";

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
        //toast.success("Student information verified successfully!");
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
      //toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-[40px] bg-[#f8fafc] relative overflow-hidden pt-28 pb-20">
       <div className="absolute inset-0 z-0">
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#33d1ff] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-[#d633ff] rounded-full blur-[150px] opacity-10"></div>
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#00bcd4] rounded-full blur-[150px] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4 py-1.5 px-3 rounded-full bg-gradient-to-r from-[#33d1ff]/10 via-[#8c7cff]/10 to-[#d633ff]/10 border border-[#33d1ff]/20 text-[#1e293b] text-sm">
            <span className="mr-2 inline-block w-2 h-2 rounded-full bg-[#33d1ff] animate-pulse"></span>
            Secure Verification System
          </div>
          
          <h1 className="text-6xl font-black text-[#1e293b] mb-4 tracking-tight">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33d1ff] via-[#8c7cff] to-[#d633ff]">Verification</span> Portal
          </h1>
          
          <p className="text-[#64748b] text-xl max-w-3xl mx-auto leading-relaxed">
            Fast and secure access to student academic records with state-of-the-art verification technology
          </p>
        </motion.div>

         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#33d1ff]/20 overflow-hidden shadow-[0_4px_24px_rgba(51,209,255,0.12)]">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Verify Student</h2>
                <form onSubmit={handleVerify} className="space-y-6">
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#33d1ff] via-[#8c7cff] to-[#d633ff] opacity-30 blur-lg group-hover:opacity-40 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiHash className="h-5 w-5 text-[#64748b] group-hover:text-[#33d1ff] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        id="hemisId"
                        className="block w-full pl-12 pr-4 py-3.5 text-[#1e293b] bg-white border border-[#e2e8f0] backdrop-blur-xl rounded-xl focus:outline-none focus:ring-2 focus:ring-[#33d1ff]/50 focus:border-[#33d1ff] transition-all duration-300"
                        placeholder="Enter HEMIS ID number"
                        value={hemisId}
                        onChange={(e) => setHemisId(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="relative w-full overflow-hidden py-3.5 px-8 rounded-xl font-semibold text-white group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff] via-[#8c7cff] to-[#d633ff] group-hover:opacity-90 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center">
                      {loading ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Verifying...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <FiSearch className="text-lg" />
                          <span>Verify Student</span>
                        </div>
                      )}
                    </span>
                  </button>
                </form>
              </div>

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-8 pb-8"
                >
                  <div className="bg-red-50 backdrop-blur-sm border border-red-200 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-red-100 rounded-lg">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-red-600 text-sm">{errorMessage}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

           <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: studentInfo ? 1 : 0, x: studentInfo ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {studentInfo && (
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-[#33d1ff]/20 overflow-hidden shadow-[0_4px_24px_rgba(51,209,255,0.12)]">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff] via-[#8c7cff] to-[#d633ff] opacity-90"></div>
                  <div className="p-8 relative">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                        <FiUser className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{studentInfo.studentName}</h2>
                        <p className="text-white/70">Student Information</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <InfoCard icon={FiHash} label="Student ID" value={studentInfo.studentID} />
                    <InfoCard icon={FiBook} label="Faculty" value={studentInfo.faculty} />
                    <InfoCard icon={FiHome} label="Department" value={studentInfo.department} />
                    <InfoCard icon={FiHash} label="HEMIS Number" value={studentInfo.hemisNo} />
                    <InfoCard 
                      icon={FiCheckCircle} 
                      label="Status" 
                      value={studentInfo.status}
                      customValue={
                        <StatusBadge status={studentInfo.status} />
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const InfoCard = ({ icon: Icon, label, value, customValue }) => (
  <div className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] p-5 hover:bg-white hover:border-[#33d1ff]/20 hover:shadow-md transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="p-2.5 bg-gradient-to-r from-[#33d1ff]/10 via-[#8c7cff]/10 to-[#d633ff]/10 rounded-lg border border-[#33d1ff]/20">
        <Icon className="w-5 h-5 text-[#33d1ff]" />
      </div>
      <div>
        <p className="text-xs font-medium text-[#64748b] uppercase tracking-wider mb-1">{label}</p>
        {customValue || <p className="text-[#1e293b] font-medium text-lg">{value}</p>}
      </div>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  let bgColor, textColor, borderColor;
  
  switch(status) {
    case 'Active':
      bgColor = 'bg-[#33d1ff]/10';
      textColor = 'text-[#33d1ff]';
      borderColor = 'border-[#33d1ff]/30';
      break;
    case 'Inactive':
      bgColor = 'bg-red-100';
      textColor = 'text-red-600';
      borderColor = 'border-red-200';
      break;
    case 'Completed':
      bgColor = 'bg-[#d633ff]/10';
      textColor = 'text-[#d633ff]';
      borderColor = 'border-[#d633ff]/30';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-600';
      borderColor = 'border-gray-200';
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium ${bgColor} ${textColor} ${borderColor} border`}>
      {status}
    </span>
  );
};
