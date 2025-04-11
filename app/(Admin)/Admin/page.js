"use client";
import React, { useState, useEffect, useCallback } from "react";
import { FaUserGraduate, FaUserCheck, FaUserTimes, FaUsers } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Page() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    activeStudents: 0,
    inactiveStudents: 0,
    completedStudents: 0,
  });
  const [loading, setLoading] = useState(true);
  const [recentStudents, setRecentStudents] = useState([]);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL;

  const fetchDashboardData = useCallback(async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/v1/hemis/getAllStudents`,
        {
          withCredentials: true,
        }
      );
      const students = response.data;
      
      const activeCount = students.filter(s => s.status === 'Active').length;
      const inactiveCount = students.filter(s => s.status === 'Inactive').length;
      const completedCount = students.filter(s => s.status === 'Completed').length;
      
      setStats({
        totalStudents: students.length,
        activeStudents: activeCount,
        inactiveStudents: inactiveCount,
        completedStudents: completedCount,
      });

      // Sort students by most recent first
      const sortedStudents = students
        .sort((a, b) => {
          const dateA = new Date(a.updatedAt || a.createdAt);
          const dateB = new Date(b.updatedAt || b.createdAt);
          return dateB - dateA;
        })
        .slice(0, 5);
      
      setRecentStudents(sortedStudents);
    } catch (error) {
      console.error('Dashboard data fetch error:', error);
      toast.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const statCards = [
    {
      title: "Total Students",
      value: stats.totalStudents,
      icon: FaUserGraduate,
      color: "bg-blue-500",
      trend: "+12% from last month"
    },
    {
      title: "Active Students",
      value: stats.activeStudents,
      icon: FaUserCheck,
      color: "bg-green-500",
      trend: "+5% from last month"
    },
    {
      title: "Inactive Students",
      value: stats.inactiveStudents,
      icon: FaUserTimes,
      color: "bg-red-500",
      trend: "-2% from last month"
    },
    {
      title: "Completed Students",
      value: stats.completedStudents,
      icon: FaUsers,
      color: "bg-purple-500",
      trend: "+8% from last month"
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#33d1ff]"></div>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</h3>
                <div className="flex items-center mt-2 text-sm text-green-600">
                  <IoTrendingUp className="mr-1" />
                  <span>{stat.trend}</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${stat.color}`}></div>
          </div>
        ))}
      </div>

      {/* Recent Students */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Students</h2>
          <Link 
            href="/Admin/Students" 
            className="text-sm text-[#33d1ff] hover:text-[#33d1ff]/80 font-medium"
          >
            View All Students
          </Link>
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          {recentStudents.map((student) => (
            <div key={student.studentID} className="bg-white rounded-lg shadow-sm mb-4 p-4">
              <div className="mb-3">
                <h3 className="text-sm font-medium text-gray-900">{student.studentName}</h3>
                <p className="text-xs text-gray-500">ID: {student.studentID}</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Faculty:</span>
                  <span className="text-xs text-gray-900">{student.faculty}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Department:</span>
                  <span className="text-xs text-gray-900">{student.department}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Status:</span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-800'
                      : student.status === 'Inactive'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {student.status}
                  </span>
                </div>
                <div className="pt-2 mt-2 border-t border-gray-100">
                  <Link
                    href={`/Admin/Students/${student.studentID}`}
                    className="text-[#33d1ff] hover:text-[#33d1ff]/80 text-sm flex items-center justify-center w-full"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Faculty</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentStudents.map((student) => (
                <tr key={student.studentID} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{student.studentName}</div>
                    <div className="text-sm text-gray-500">ID: {student.studentID}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.faculty}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.department}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      student.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : student.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <Link
                      href={`/Admin/Students/${student.studentID}`}
                      className="text-[#33d1ff] hover:text-[#33d1ff]/80"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
