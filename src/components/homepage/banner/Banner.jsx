"use client"
import useFriends from '@/hooks/useFriends';
import React from 'react';

const Banner = () => {
  const { friends } = useFriends();
  const totalFriends = friends.length;

  const onTrack = friends.filter(f => f.status === "on-track").length;

  const needAttention = friends.filter(f => f.status === "overdue").length;

  // example: interactions 
  const interactions = friends.reduce((acc, f) => acc + (f.interactions || 0), 0);
  return (
    <div className='text-center container mx-auto max-w-7xl space-y-3 mt-20 mb-10'>
      <h2 className='font-bold text-5xl text-gray-700'>Friends to keep close in your life</h2>
      <p className='text-gray-400'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
      <button className='btn bg-green-900 text-white font-semibold'>+ Add a Friend</button>

      {/* top section  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* card - 1 */}
        <div className='text-center space-y-2 border border-gray-200 shadow py-6 px-5 rounded-md'>
          <h2 className='font-semibold text-3xl text-green-900'>
            {totalFriends}
          </h2>
          <p className='text-gray-400'>Total Friends</p>
        </div>
        {/* card 2 */}
        <div className='text-center space-y-2 border border-gray-200 shadow py-6 px-5 rounded-md'>
          <h2 className='font-semibold text-3xl text-green-900'>
            {onTrack}
          </h2>
          <p className='text-gray-400'>On Track</p>
        </div>
        {/* card-3  */}
        <div className='text-center space-y-2 border border-gray-200 shadow py-6 px-5 rounded-md'>
          <h2 className='font-semibold text-3xl text-green-900'>
            {needAttention}
          </h2>
          <p className='text-gray-400'>Need Attention</p>
        </div>
        {/* card-4  */}
        <div className='text-center space-y-2 border border-gray-200 shadow py-6 px-5 rounded-md'>
          <h2 className='font-semibold text-3xl text-green-900'>
            {interactions}
          </h2>
          <p className='text-gray-400'>Interactions This Month</p>
        </div>
      </div>
      <div className='border-b border-gray-200 py-4'></div>

    </div>
  );
};

export default Banner;