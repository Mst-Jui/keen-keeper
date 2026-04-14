"use client"
import Friend from '@/components/friend/Friend';
import useFriends from '@/hooks/useFriends';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import { BiArchive, BiBellOff, BiMessageSquare, BiPhone, BiVideo } from 'react-icons/bi';
import { BsTrash2 } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';


const FriendDetailsPage = () => {
  const { id } = useParams();
  const { friends, loading } = useFriends();
  const friend = friends?.find((f) => String(f.id) === id);
  // console.log(friend.name);
  if (loading) return <div className='text-center'><span className="loading loading-spinner text-success"></span></div>
  if (!Friend) return <p className='text-2xl'>Friend not found</p>

  return (
    <div className="p-4 md:p-8 bg-[#f9fafb] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* Left Section: Profile & Actions */}
        <div className="lg:col-span-4 space-y-6">
          {/* Main Profile Card */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="relative inline-block">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={80}
                height={80}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gray-50 shadow-inner"
              />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-800">{friend.name}</h2>

            <div className="flex flex-col items-center gap-2 mt-3">
              <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white 
              ${friend.status === 'overdue'
                  ? 'bg-red-500'
                  : (friend.status === "on-track"
                    ? "bg-green-900"
                    : "bg-yellow-400 "
                  )}`}>
                {friend.status}
              </span>
              <div className="flex gap-1 flex-wrap justify-center">
                {friend.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-gray-500 italic text-sm leading-relaxed">
              "{friend.bio}"
            </p>
            <p className="text-[11px] text-gray-400 mt-3 font-semibold">
              Preferred: {friend.email.toLowerCase()}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm">
              <BiBellOff size={18} className="text-gray-500" /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition shadow-sm">
              <BiArchive size={18} className="text-gray-500" /> Archive
            </button>
            <button className="flex items-center justify-center gap-3 py-3.5 bg-white border border-gray-200 rounded-xl text-red-500 font-medium hover:bg-red-50 transition shadow-sm">
              <BsTrash2 size={18} /> Delete
            </button>
          </div>
        </div>

        {/* Right Section: Stats & Check-in */}
        <div className="lg:col-span-8 space-y-6">

          {/* Top 3 Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <span className="text-3xl font-bold text-[#2d4a43]  leading-none">{friend.days_since_contact}</span>
              <p className="text-gray-400 text-[18px] mt-3 font-semibold tracking-wide">Days Since Contact</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <span className="text-3xl font-bold text-[#2d4a43]  leading-none">{friend.goal}</span>
              <p className="text-gray-400 text-[18px] mt-3 font-semibold tracking-wide">Goal (Days)</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
              <span className="text-3xl font-bold text-[#2d4a43] leading-none block mt-2">{friend.next_due_date}</span>
              <p className="text-gray-400 text-[18px] mt-4 font-semibold tracking-wide">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm relative">
            <button className="absolute top-6 right-6 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition flex items-center gap-1">
              <FiEdit2 size={16} className="text-gray-400" />
              <span className='text-gray-400'>Edit</span>
            </button>
            <h3 className="text-lg font-bold text-[#2d4a43]  mb-2">Relationship Goal</h3>
            <p className="text-gray-500 text-base">
              Connect every <span className="font-extrabold text-gray-800">{friend.goal} days</span>
            </p>
          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-[#2d4a43]  mb-8">Quick Check-In</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                className="group flex flex-col items-center justify-center p-8 bg-[#f8fafc] rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300">
                <BiPhone size={28} className="text-slate-700 group-hover:scale-110 transition-transform" />
                <span className="mt-3 text-gray-600 font-semibold">Call</span>
              </button>
              <button
                className="group flex flex-col items-center justify-center p-8 bg-[#f8fafc] rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300">
                <BiMessageSquare size={28} className="text-slate-700 group-hover:scale-110 transition-transform" />
                <span className="mt-3 text-gray-600 font-semibold">Text</span>
              </button>
              <button
                className="group flex flex-col items-center justify-center p-8 bg-[#f8fafc] rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-gray-100 transition-all duration-300">
                <BiVideo size={28} className="text-slate-700 group-hover:scale-110 transition-transform" />
                <span className="mt-3 text-gray-600 font-semibold">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

};

export default FriendDetailsPage;