import Link from 'next/link';
import React from 'react';
import { GoHome } from 'react-icons/go';

const HomeTimeline = () => {
  return (
    <div>
      <div className="container max-w-6xl px-4 py-6">
        
        <div className="flex justify-end mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-900 hover:text-green-900 transition-colors"
          >
            <GoHome size={18} />
            <span className="text-sm font-medium">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeTimeline;