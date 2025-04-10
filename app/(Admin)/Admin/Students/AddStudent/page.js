"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import toast from "react-hot-toast";
import { MdOutlineDriveFileRenameOutline, MdOutlineNumbers, MdOutlineSchool, MdOutlineBusinessCenter } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";

export default function AddStudent() {
  const [loading, setLoading] = useState(false);
  const [studentID, setStudentID] = useState("")
  const [studentName, setStudentName] = useState("")
  const [faculty, setFaculty] = useState("")
  const [department, setDepartment] = useState("")
  const [hemisNo, setHemisNo] = useState("")
  const [status, setStatus] = useState("")

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `${backendUrl}/api/v1/hemis/createStudent`,
        {
          studentID,
          studentName,
          faculty,
          department,
          hemisNo,
          status
        }
      );

      if (response.status === 201) {
        toast.success("Student added successfully");
        router.push("/Admin/Students");
      } else {
        toast.error(response?.data?.message || "Failed to add student.");
      }
    } catch (error) {
      console.error("Error adding Student:", error);
      toast.error(error.response?.data?.message || "Failed to add student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/Admin/Students")}
            className="p-2 text-gray-600 hover:text-[#33d1ff] hover:bg-[#33d1ff]/10 rounded-lg transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Student</h1>
            <p className="mt-1 text-sm text-gray-500">Enter the student details below</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student ID */}
            <div>
              <label htmlFor="studentID" className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineNumbers className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="studentID"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
                  placeholder="Enter student ID"
                  required
                />
              </div>
            </div>

            {/* Student Name */}
            <div>
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                Student Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineDriveFileRenameOutline className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
                  placeholder="Enter student name"
                  required
                />
              </div>
            </div>

            {/* HEMIS No */}
            <div>
              <label htmlFor="hemisNo" className="block text-sm font-medium text-gray-700 mb-2">
                HEMIS Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineNumbers className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="hemisNo"
                  value={hemisNo}
                  onChange={(e) => setHemisNo(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
                  placeholder="Enter HEMIS number"
                  required
                />
              </div>
            </div>

            {/* Faculty */}
            <div>
              <label htmlFor="faculty" className="block text-sm font-medium text-gray-700 mb-2">
                Faculty
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineSchool className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="faculty"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
                  placeholder="Enter faculty"
                  required
                />
              </div>
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                Department
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineBusinessCenter className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
                  placeholder="Enter department"
                  required
                />
              </div>
            </div>

            {/* Status */}
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <GrStatusCriticalSmall className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <select
                  id="status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900 bg-white"
                  required
                >
                  <option value="">Select status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => router.push("/Admin/Students")}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33d1ff]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-[#33d1ff] rounded-lg hover:bg-[#33d1ff]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33d1ff] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding..." : "Add Student"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}