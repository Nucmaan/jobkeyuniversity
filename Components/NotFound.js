import Link from 'next/link';
import Image from 'next/image';
import { FaTools } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-4 sm:px-6">
       <Image
        src="/logo.png"
        alt="Jobkey University Logo"
        width={100}
        height={100}
        className="mb-3 sm:mb-4"
      />

       <h2 className="text-xl sm:text-2xl font-semibold text-[#33d1ff] text-center">Jobkey University</h2>

       <FaTools className="text-6xl sm:text-7xl text-[#33d1ff] mt-3 sm:mt-4" />
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center">Page Under Development</h1>
      <p className="text-gray-600 mt-2 sm:mt-3 pb-2 text-center max-w-xs sm:max-w-md">
        Some pages are still under development. We are working on it! Check back soon.
      </p>

       <Link href="/" className="mt-4 sm:mt-6">
        <span className="px-5 sm:px-6 py-2 sm:py-3 bg-[#33d1ff] text-white rounded-lg hover:bg-[#29b3e0] transition cursor-pointer text-sm sm:text-base">
          Back to Home
        </span>
      </Link>
    </div>
  );
}
