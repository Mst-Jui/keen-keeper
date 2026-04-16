import React from 'react';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 font-sans">
      <div className="text-center">
        {/* Large 404 Header */}
        <h1 className="text-8xl font-black text-[#2D4F43] mb-2">
          404
        </h1>

        {/* Subheading */}
        <h2 className="text-2xl font-bold text-black mb-6">
          Page Not Found
        </h2>

        {/* Description Text */}
        <p className="text-gray-500 max-w-sm mx-auto mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#2D4F43] hover:bg-[#233d34] text-white font-medium py-3 px-8 rounded-md transition-colors duration-200"
        >
          
          <GoHome />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;