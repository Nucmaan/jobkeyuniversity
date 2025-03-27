"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email });
  };

  return (
    <div className="flex justify-center items-center mt-16 min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
        <img src="/logo.png" alt="University Logo" className="w-32 mx-auto mb-6" />

        <h2 className="text-2xl font-semibold text-center mb-4">Transcript or Certificate Verification</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Transcript or Certificate ID</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#33d1ff]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#33d1ff] text-white font-semibold rounded-md hover:bg-[#83d3eb] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Verify Now
          </button>
        </form>
      </div>
    </div>
  );
}
