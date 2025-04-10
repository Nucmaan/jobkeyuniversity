"use client";

import userAuth from "@/MyStore/Auth";
import React from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone, FaUserCog } from "react-icons/fa";

export default function Page() {
  const user = userAuth((state) => state.user);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
              <p className="mt-1 text-sm text-gray-500">View and manage your profile details</p>
            </div>
            <Link
              href="/Admin/Setting"
              className="inline-flex items-center px-4 py-2 bg-[#33d1ff] hover:bg-[#33d1ff]/90 text-white rounded-md text-sm font-medium transition-colors"
            >
              <FaUserCog className="mr-2" />
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Profile Information */}
        <div className="p-6 space-y-6">
          {/* Full Name */}
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-[#33d1ff]/10 rounded-lg">
              <FaUser className="w-5 h-5 text-[#33d1ff]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Full Name</p>
              <p className="mt-1 text-base font-medium text-gray-900">{user?.full_name || 'N/A'}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-[#33d1ff]/10 rounded-lg">
              <FaEnvelope className="w-5 h-5 text-[#33d1ff]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email Address</p>
              <p className="mt-1 text-base font-medium text-gray-900">{user?.email || 'N/A'}</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-[#33d1ff]/10 rounded-lg">
              <FaPhone className="w-5 h-5 text-[#33d1ff]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Mobile Number</p>
              <p className="mt-1 text-base font-medium text-gray-900">{user?.mobile || 'N/A'}</p>
            </div>
          </div>

          {/* Role */}
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-[#33d1ff]/10 rounded-lg">
              <FaUserCog className="w-5 h-5 text-[#33d1ff]" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Role</p>
              <p className="mt-1 text-base font-medium text-gray-900 capitalize">{user?.role || 'N/A'}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500 rounded-b-lg">
          Last updated: {user?.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : 'N/A'}
        </div>
      </div>
    </div>
  );
}
