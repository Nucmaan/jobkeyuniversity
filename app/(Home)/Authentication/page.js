"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import userAuth from '@/MyStore/Auth';
import axios from 'axios';

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const backendUrl = "https://backendjobkey.onrender.com";
  const login = userAuth((state) => state.login);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(
        `${backendUrl}/api/v1/auth/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include'
        }
      );

      const { data } = response;
      
      if (response.status === 201 && data.user) {
        login(data.user);
        
        toast.success(data.message || 'Successfully logged in!');
        
        if (data.user.role === 'admin') {
          router.push('/Admin');
        } else {
          router.push('/');
        }
      }
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);

      if (error.code === 'ERR_NETWORK') {
        setError('Cannot connect to the server. Please try again later.');
      } else if (!error.response) {
        setError('Network error. Please check your internet connection.');
      } else if (error.response.status === 401) {
        setError('Invalid email or password.');
      } else if (error.response.status === 403) {
        setError('Access forbidden. Please check your credentials.');
      } else if (error.response.status >= 500) {
        setError('Server error. Please try again later.');
      } else {
        setError(error.response?.data?.message || 'An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 transform transition-all hover:scale-[1.02]">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="University Logo"
            width={128}
            height={128}
            className="w-32 h-32 object-contain"
          />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Login Portal</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email or ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-all
              ${isLoading 
                ? 'bg-[#33d1ff]/70 cursor-not-allowed' 
                : 'bg-[#33d1ff] hover:bg-[#33d1ff]/90 focus:outline-none focus:ring-2 focus:ring-[#33d1ff] focus:ring-offset-2'
              }`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                Logging in...
              </div>
            ) : (
              'Log In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
