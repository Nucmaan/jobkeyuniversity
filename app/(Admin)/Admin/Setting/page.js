"use client";

import userAuth from "@/MyStore/Auth";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const user = userAuth((state) => state.user);
  const updateUser = userAuth((state) => state.updateUser);

  const [formData, setFormData] = useState({
    full_name: user?.full_name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const dataToSubmit = { ...formData };
    if (!dataToSubmit.password) {
      delete dataToSubmit.password;
    }

    try {
      const response = await axios.put(
        `http://localhost:5000/api/v1/auth/avatar/${user.id}`,
        dataToSubmit
      );

      if (response.data) {
        updateUser(response.data.user);
        toast.success("Profile updated successfully!");
        setFormData(prev => ({ ...prev, password: "" }));
        // Refresh the page
        router.refresh();
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error(error.response?.data?.message || "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
          <p className="mt-1 text-sm text-gray-500">
            Update your personal information
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="full_name"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <FaUser className="w-4 h-4 mr-2 text-[#33d1ff]" />
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <FaEnvelope className="w-4 h-4 mr-2 text-[#33d1ff]" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
              required
            />
          </div>

          {/* Mobile */}
          <div className="space-y-2">
            <label
              htmlFor="mobile"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <FaPhone className="w-4 h-4 mr-2 text-[#33d1ff]" />
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900"
              required
            />
          </div>

          {/* Password */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="flex items-center text-sm font-medium text-gray-700"
            >
              <FaLock className="w-4 h-4 mr-2 text-[#33d1ff]" />
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#33d1ff] focus:border-[#33d1ff] text-gray-900 pr-10"
                placeholder="Leave blank to keep current password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-4 h-4" />
                ) : (
                  <FaEye className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Only fill this if you want to change your password
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 text-white bg-[#33d1ff] hover:bg-[#33d1ff]/90 rounded-md font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 text-sm text-gray-500 rounded-b-lg">
          Only fill in the information you want to update
        </div>
      </div>
    </div>
  );
}
