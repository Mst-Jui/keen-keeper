"use client"
import { FriendContext } from '@/context/FriendContext';
import React, { useContext } from 'react';
import { FaVideo } from 'react-icons/fa6';
import { IoIosArrowDown, IoIosCall, IoMdText } from 'react-icons/io';

const TimeLinePage = () => {
  const { checkInAction } = useContext(FriendContext);

  return (

    <div className='overflow-x-hidden'>
      <div className='container mx-auto max-w-5xl space-y-4 my-8 px-4 md:px-6'>

        {/* Timeline Header - Responsive Font Size */}
        <h2 className='font-bold text-3xl md:text-5xl text-gray-700'>Timeline</h2>

        {/* Dropdown Filter */}
        <details className="dropdown">
          <summary className="btn m-1 text-base md:text-[18px] text-gray-400 bg-transparent border-none shadow-none hover:bg-gray-100">
            Filter timeline <IoIosArrowDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm border border-gray-100">
            <li><a>Text</a></li>
            <li><a>Call</a></li>
            <li><a>Video</a></li>
          </ul>
        </details>

        {/* Dynamic Card Container */}
        <div className="space-y-4 mt-6">
          {checkInAction.length > 0 ? (
            checkInAction.map((action) => (
              <div
                key={action.id}

                className="flex items-center gap-3 md:gap-4 bg-white p-4 md:p-5 rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
              >
                {/* Icon Container - Responsive Size */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shrink-0">
                  <span className="text-xl md:text-2xl text-emerald-700">
                    {action.type === 'Call' ? <IoIosCall /> : action.type === 'Video' ? <FaVideo /> : <IoMdText />}
                  </span>
                </div>

                {/* Text Content */}
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
                No timeline activities yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;