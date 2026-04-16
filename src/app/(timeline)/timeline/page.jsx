"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext, useState } from 'react';
import { FaVideo } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosCall, IoMdText } from 'react-icons/io';

const TimeLinePage = () => {
  const { checkInAction } = useContext(FriendContext);
  const [searchTerm, setSearchTerm] = useState("");


  const [filter, setFilter] = useState(null);
  const filteredActions = (filter
    ? checkInAction.filter(action => action.type === filter)
    : checkInAction
  ).filter(action =>
    action.friendName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    action.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='overflow-x-hidden'>
      <div className='container mx-auto max-w-5xl space-y-4 my-8 px-4 md:px-6'>
        <div className='flex flex-col md:flex-row md:items-center justify-between gap-4 p-4'>
          <h2 className='font-bold text-3xl md:text-5xl text-gray-700'>Timeline</h2>


          {/* search  */}
          <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
          {/* end search  */}
        </div>



        {/* Dropdown Filter */}
        <details className="dropdown">
          <summary className="btn m-1 text-base md:text-[18px] text-gray-400 bg-transparent border-none shadow-none hover:bg-gray-100 cursor-pointer">
            {filter ? `Showing: ${filter}` : "Filter timeline"} <IoIosArrowDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border border-gray-100">

            <li><a onClick={() => setFilter(null)}>All Activity</a></li>
            <hr className="my-1 border-gray-100" />
            <li><a onClick={() => setFilter('Text')}>Text</a></li>
            <li><a onClick={() => setFilter('Call')}>Call</a></li>
            <li><a onClick={() => setFilter('Video')}>Video</a></li>
          </ul>
        </details>

        {/* Dynamic Card Container */}
        <div className="space-y-4 mt-6">
          {filteredActions.length > 0 ? (
            filteredActions.map((action) => (
              <div
                key={action.id}
                className="flex items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shrink-0">
                  <span className="text-xl md:text-2xl text-emerald-700">
                    {action.type === 'Call' ? <IoIosCall /> : action.type === 'Video' ? <FaVideo /> : <IoMdText />}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <span className="font-bold text-base md:text-lg text-emerald-800">
                      {action.type}
                    </span>
                    <span className="text-slate-500 font-medium text-sm md:text-base truncate">
                      with {action.friendName}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs md:text-sm font-medium block mt-0.5">
                    {action.date}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-400 font-semibold text-xl md:text-2xl">
                No activity found for "{filter}".
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;