import HomeTimeline from '@/components/timeline/HomeTimeline';
import HomeTimelineBottom from '@/components/timeline/HomeTimelineBottom';
import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const TimeLinelayout = ({ children }) => {
  return (<div className='bg-[#F8FAFC]'>
    {/* home  */}




    <HomeTimeline />
    <main>
      {children}
    </main>
    <HomeTimelineBottom />
  </div>
  );
};

export default TimeLinelayout;