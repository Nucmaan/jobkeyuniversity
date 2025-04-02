"use client";

import React, { useState } from "react";
import Image from "next/image"; 
import axios from "axios";
import toast from "react-hot-toast";

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
      toast.error(error.response?.data?.message || "Student not found!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        
        <Image src="/logo.png" alt="University Logo" width={128} height={128} className="w-32 mx-auto mb-6" />

        <h2 className="text-2xl font-semibold text-center mb-4">Hemis ID Verification</h2>

        <form onSubmit={handleVerify} className="mb-6">
          <div className="mb-4">
            <label htmlFor="hemisId" className="block text-sm font-medium text-gray-700">Hemis ID</label>
            <input
              type="text"
              id="hemisId"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#33d1ff]"
              value={hemisId}
              onChange={(e) => setHemisId(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#33d1ff] text-white font-semibold rounded-md hover:bg-[#83d3eb] focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Now"}
          </button>
        </form>

        {studentInfo && (
          <div className="border border-gray-200 p-6 rounded-sm bg-white shadow-sm transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <div className="p-2 bg-blue-50 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Student Profile</h3>
            </div>
        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Student ID</p>
                  <p className="text-gray-900 font-medium">{studentInfo.studentID}</p>
                </div>
              </div>
        
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Full Name</p>
                  <p className="text-gray-900 font-medium">{studentInfo.studentName}</p>
                </div>
              </div>
        
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Faculty</p>
                  <p className="text-gray-900 font-medium">{studentInfo.faculty}</p>
                </div>
              </div>
        
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Department</p>
                  <p className="text-gray-900 font-medium">{studentInfo.department}</p>
                </div>
              </div>
        
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
              </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">HEMIS Number</p>
                  <p className="text-gray-900 font-medium">{studentInfo.hemisNo}</p>
                </div>
              </div>
        
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                  ${studentInfo.status === 'Active' ? 'bg-green-100 text-green-800' : 
                    studentInfo.status === 'Inactive' ? 'bg-red-100 text-red-800' : 
                    studentInfo.status === 'Completed' ? 'bg-blue-100 text-blue-800' : 
                    'bg-gray-100 text-gray-800' 
                  }`}>
                  {studentInfo.status}
                </span>
              </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
