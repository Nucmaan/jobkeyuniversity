// app/admin/not-found.js
"use client";

import { usePathname } from 'next/navigation';
import { FaTools } from 'react-icons/fa';
import Link from 'next/link';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800">
      <FaTools className="text-6xl text-[#33d1ff] mb-4" />
      <h1 className="text-4xl font-bold">This Page is Under Development</h1>
      <p className="text-gray-600 mt-2 text-center max-w-md">
        Some sections of our website are still being worked on. We're working hard to bring you the best experience. Stay tuned!
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-[#33d1ff] text-white rounded-lg hover:bg-[#29b3e0] transition"
      >
        Back to Admin Home
      </Link>
    </div>
  );
}
