"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import toast from "react-hot-toast";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineNumbers } from "react-icons/md";
import { GrStatusCriticalSmall } from "react-icons/gr";

export default function AddEmployee() {
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

     const response =  await axios.post(
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
        toast.success(response.data.message);
        router.push("/Admin/Students");

      } else {
        toast.error(response?.data?.message || "Failed to add.");
      }
    } catch (error) {
      console.error("Error adding Student:", error);
      toast.error("Failed to add Student. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => router.push("/Admin/Students")}
              className="p-2 text-gray-600 hover:text-[#33d1ff] hover:bg-[#cceeff] rounded-lg transition-all duration-200"
            >
              <FiArrowLeft className="text-xl" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-[#33d1ff]">Add New Student</h1>
              <p className="text-gray-500 mt-1">Fill in the details to add a new Student</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="space-y-4">

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineNumbers className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={studentID}
                  onChange={(e) => setStudentID(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/20 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder="Enter Student ID"
                  required
                />
              </div> 

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineDriveFileRenameOutline className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="studentName"
                  name="studentName"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/20 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder="Enter Student Name"
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineDriveFileRenameOutline className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/20 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder="Enter Student Faculty"
                  required
                />
              </div>


              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineDriveFileRenameOutline className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="department"
                  name="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/20 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder="Enter Student Department"
                  required
                />
              </div>


              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineNumbers className="h-5 w-5 text-[#33d1ff]" />
                </div>
                <input
                  type="text"
                  id="hemisNo"
                  name="hemisNo"
                  value={hemisNo}
                  onChange={(e) => setHemisNo(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#ff4e00] focus:ring-2 focus:ring-[#ff4e00]/20 transition-all duration-200 text-gray-700 placeholder-gray-400"
                  placeholder="Enter Student hemisNo"
                  required
                />
              </div>


              <div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <GrStatusCriticalSmall className="h-5 w-5 text-[#33d1ff]" />
  </div>
  <select
    id="status"
    name="status"
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#cceeff] focus:ring-2 focus:ring-[#cceeff] transition-all duration-200 text-gray-700"
    required
  >
    <option value="">Select Status</option>
    <option value="Active">Active</option>
    <option value="Inactive">Inactive</option>
    <option value="Completed">Completed</option>
  </select>
</div>
  
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.push("/Admin/Students")}
                className="flex-1 cursor-pointer py-3 px-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-[#0bb4e0] hover:text-white transition-all duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-3 px-4 cursor-pointer bg-[#33d1ff] text-white rounded-xl hover:bg-[#0bb4e0] transition-all duration-200 font-medium disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Adding Student..." : "Add Student"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}