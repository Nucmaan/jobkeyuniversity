"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;
const MotionForm = motion.form;
const MotionInput = motion.input;
const MotionButton = motion.button;

export default function Page() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with', { email });
  };

  return (
    <div className="flex mt-20 justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <MotionDiv 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full mx-4 relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff]/5 to-transparent rounded-2xl -z-10"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#33d1ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#33d1ff]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex justify-center mb-8">
            <MotionDiv
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="University Logo"
                width={128}
                height={128}
                className="w-32 h-32 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#33d1ff]/20 to-transparent rounded-full blur-xl -z-10"></div>
            </MotionDiv>
          </div>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#33d1ff] to-[#2b9fd1] mb-2">
              Transcript or Certificate Verification
            </h2>
            <p className="text-gray-600">
              Enter your verification ID to check the authenticity of your document
            </p>
          </MotionDiv>

          <MotionForm 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleLogin}
            className="space-y-6"
          >
            <div className="relative">
              <label 
                htmlFor="email" 
                className={`absolute left-3 transition-all duration-300 ${
                  isFocused || email ? 'text-[#33d1ff] -top-6 text-sm' : 'text-gray-500 top-3'
                }`}
              >
                Transcript or Certificate ID
              </label>
              <MotionInput
                type="email"
                id="email"
                className={`w-full p-4 border-2 rounded-xl bg-gray-50/50 backdrop-blur-sm transition-all duration-300 ${
                  isFocused ? 'border-[#33d1ff] shadow-lg' : 'border-gray-200'
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required
              />
            </div>

            <MotionButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#33d1ff] to-[#2b9fd1] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Verify Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2b9fd1] to-[#33d1ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </MotionButton>
          </MotionForm>

          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            <p>Need help? Contact our support team at <a href="mailto:support@university.edu" className="text-[#33d1ff] hover:underline">support@university.edu</a></p>
          </MotionDiv>
        </div>
      </MotionDiv>
    </div>
  );
}
