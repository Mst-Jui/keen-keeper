"use client"
import Friend from '@/components/friend/Friend';
import useFriends from '@/hooks/useFriends';
import React from 'react';

const FriendsPage = () => {
  const { friends, loading } = useFriends();


  return (
    <div className='container mx-auto max-w-7xl px-4 mb-20'>


      {loading ? (
        <div className='text-center'>
          <span className="loading loading-spinner text-success"></span>
        </div>
      ) : (
        <div>
          <h3 className='font-semibold text-2xl text-gray-700 my-6 text-center lg:text-left'>Your Friends</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6 justify-items-center'>
            {
              friends.map((friend, index) => {
                return <Friend key={index} friend={friend} />
              })
            }
          </div>
        </div>
      )}




    </div>
  );
};

export default FriendsPage;