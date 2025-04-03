"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
  };

  return (
    <div className="flex justify-center items-center mt-21 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Image
                 src="/logo.png"
                 alt="University Logo"
                 width={128} 
                 height={128} 
                 className="w-32 mx-auto mb-6"
               />

        <h2 className="text-2xl font-semibold text-center mb-4">Student Portal Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email or ID</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#33d1ff]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#33d1ff]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#33d1ff] text-white font-semibold rounded-md hover:bg-[#83d3eb] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>

        <Link href="/forgot-password" className="block text-center mt-4 text-sm text-[#33d1ff] hover:underline">
          <span>Forgot Password?</span>
        </Link>
      </div>
    </div>
  );
}
